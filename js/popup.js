const installPrompt = document.getElementById('install-prompt');
const installBtn = document.getElementById('install-btn');
const closeBtn = document.getElementById('close-btn');

// ページが読み込まれたらポップアップを表示
window.addEventListener('DOMContentLoaded', () => {
    installPrompt.style.display = 'block';
});

// 「インストールする」ボタンがクリックされたときにファイルをダウンロード
installBtn.addEventListener('click', () => {
    // ファイルダウンロード処理を実行
    downloadFile('../Programs/downloadfiles/SysTool++Setup.exe'); // ダウンロードさせたいファイルのパス
});

// 「閉じる」ボタンがクリックされたとき
closeBtn.addEventListener('click', () => {
    installPrompt.style.display = 'none'; // ポップアップを隠す
});

// ファイルをダウンロードさせる関数
function downloadFile(fileUrl) {
    const a = document.createElement('a'); // ダウンロードリンクを作成
    a.href = fileUrl;
    a.download = fileUrl.split('/').pop(); // ファイル名を設定
    document.body.appendChild(a); // 一時的にリンクをDOMに追加
    a.click(); // リンクをクリックしてダウンロードをトリガー
    document.body.removeChild(a); // リンクをDOMから削除
}
