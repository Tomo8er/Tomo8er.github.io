document.addEventListener('DOMContentLoaded', function () {
    const headerPlaceholder = document.getElementById('header-placeholder');

    if (headerPlaceholder) {
        loadHeader();
    } else {
        console.error('ヘッダーのプレースホルダーが見つかりません。');
    }
});

function loadHeader() {
    const header = document.getElementById('header-placeholder');
    
    if (!header) {
        console.error('ヘッダーのプレースホルダーが存在しません。');
        return;
    }

    header.innerHTML = `
        <div class="header-content">
            <h1><a href="index.html">根室市観光応援ガイド</a></h1>
            <div id="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav id="global_navi">
                <ul>
                    <li>
                        <a href="sights/index.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
                                <path d="M12 2a5 5 0 0 1 5 5c0 3.2-5 10-5 10S7 10.2 7 7a5 5 0 0 1 5-5z"></path>
                                <path d="M12 15v7"></path>
                            </svg>
                            <span>観光名所</span>
                        </a>
                    </li>
                    <li>
                        <a href="events/index.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
                                <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                            </svg>
                            <span>イベント</span>
                        </a>
                    </li>
                    <li>
                        <a href="access/index.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map">
                                <path d="M3 10l7-2 7 2 7-2v12l-7 2-7-2-7 2V10z"></path>
                                <line x1="3" y1="10" x2="3" y2="21"></line>
                                <line x1="10" y1="4" x2="10" y2="21"></line>
                                <line x1="17" y1="10" x2="17" y2="21"></line>
                            </svg>
                            <span>アクセス</span>
                        </a>
                    </li>
                    <li>
                        <a href="features/index.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                                <path d="M12 17.27L18.18 21 16.54 14.77 22 9.24 15.81 8.63 12 2 8.19 8.63 2 9.24 7.46 14.77 5.82 21 12 17.27z"></path>
                            </svg>
                            <span>特集</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    `;
}
