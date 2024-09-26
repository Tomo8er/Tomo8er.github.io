const installPrompt = document.getElementById('install-prompt');
const installBtn = document.getElementById('install-btn');
const closeBtn = document.getElementById('close-btn');

window.addEventListener('DOMContentLoaded', () => {
    if (isWindowsPC()) {
        installPrompt.style.display = 'block';
    }
});

installBtn.addEventListener('click', () => {
    downloadFile(''); //ファイルのパス
});

closeBtn.addEventListener('click', () => {
    installPrompt.style.display = 'none';
});

function downloadFile(fileUrl) {
    const a = document.createElement('a')
    a.href = fileUrl;
    a.download = fileUrl.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function isWindowsPC() {
    const userAgent = navigator.userAgent;
    const isWindows = /Windows NT/i.test(userAgent);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent); // モバイルデバイスかどうか
    return isWindows && !isMobile;
}
