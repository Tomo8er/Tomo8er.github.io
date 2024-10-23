const startTime = performance.now(); //

window.onload = function() {
    const endTime = performance.now(); 
    const loadTime = endTime - startTime;

    if (loadTime > 1000) {
        console.warn("Error: The website loading is slow. Load time is ${loadTime.toFixed(2)} ms and needs optimization.");
    } else {
        console.log("The website has loaded successfully. Load time: ${loadTime.toFixed(2)} ms");
    }
};