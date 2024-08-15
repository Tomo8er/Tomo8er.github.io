/*document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  searchButton.addEventListener('click', function() {
    const query = searchInput.value.toLowerCase();
    const articles = document.querySelectorAll('.article li');

    searchResults.innerHTML = ''; // 検索結果をクリア

    articles.forEach(article => {
      const title = article.querySelector('h3').textContent.toLowerCase();
      const content = article.querySelector('p').textContent.toLowerCase();

      if (title.includes(query) || content.includes(query)) {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `<h3>${article.querySelector('h3').innerHTML}</h3><p>${article.querySelector('p').textContent}</p>`;
        searchResults.appendChild(resultItem);
      }
    });

    if (searchResults.innerHTML === '') {
      searchResults.innerHTML = '<p class="no-results">該当する結果が見つかりませんでした。</p>';
    }
  });

});*/

document.getElementById('current-year').textContent = new Date().getFullYear();