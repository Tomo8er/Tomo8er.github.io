    const startTime = performance.now(); // ページの読み込みが開始された時間を取得

    window.onload = function() {
        const endTime = performance.now();  // ページの読み込みが完了した時間を取得
        const loadTime = endTime - startTime; // 読み込み時間を計算

        if (loadTime > 1000) { // 1000ms（1秒）を超えた場合、警告を出す
            console.warn(`Error: The website loading is slow. Load time is ${loadTime.toFixed(2)} ms and needs optimization.`);
        } else { // 1000ms以下の場合、正常に読み込まれたことを表示
            console.log(`The website has loaded successfully. Load time: ${loadTime.toFixed(2)} ms`);
        }
    };
