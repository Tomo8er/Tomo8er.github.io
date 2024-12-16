document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  searchButton.addEventListener('click', function() {
    const query = searchInput.value.trim().toLowerCase(); // 空白を削除してから小文字に変換
    const articles = document.querySelectorAll('.article'); // .articleの直接の子要素を選択
  
    searchResults.innerHTML = ''; // 検索結果をクリア
  
    if (query === '') {
      searchResults.innerHTML = '<p class="no-results">検索クエリを入力してください。</p>';
      return;
    }
  
    let resultsFound = false;
  
    articles.forEach(article => {
      const title = article.querySelector('h2') ? article.querySelector('h2').textContent.toLowerCase() : '';
      const content = article.querySelector('p') ? article.querySelector('p').textContent.toLowerCase() : '';
  
      if (title.includes(query) || content.includes(query)) {
        resultsFound = true;
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `<h2>${article.querySelector('h2').innerHTML}</h2><p>${article.querySelector('p').textContent}</p>`;
        searchResults.appendChild(resultItem);
      }
    });
  
    if (!resultsFound) {
      searchResults.innerHTML = '<p class="no-results">該当する結果が見つかりませんでした。</p>';
    }
  });  

  // 現在の年を設定
  document.getElementById('current-year').textContent = new Date().getFullYear();
});

        // Cookieを設定する関数
        function setCookie(name, value, days) {
          var expires = "";
          if (days) {
              var date = new Date();
              date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
              expires = "; expires=" + date.toUTCString();
          }
          document.cookie = name + "=" + (value || "") + expires + "; path=/";
      }

      // Cookieを取得する関数
      function getCookie(name) {
          var nameEQ = name + "=";
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == ' ') c = c.substring(1, c.length);
              if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
          }
          return null;
      }

      // 初めての訪問者かどうかを判定してダイアログを表示する
      function checkFirstVisit() {
          var visited = getCookie("visited");
          if (!visited) {
              alert("To our first time visitors, don't come here.")
              setCookie("visited", "true", 365);  // 1年間有効なCookieを設定
          }
      }