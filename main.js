console.log("GPTHelper is running. Starting injection");

let keysPressed = [];

var scriptInjected = false;
scriptInjected = false;
window.onload = function () {
    document.getElementById("screenshot-button").addEventListener("click", function () {
        // Call chrome.tabs.captureVisibleTab method
        chrome.tabs.captureVisibleTab(null, {}, function (dataUrl) {
            chrome.windows.getCurrent(function (currentWindow) {
                var img = document.createElement("img");
                img.src = dataUrl;
                img.style.width = "400px";
                img.style.height = "300px";
                document.body.appendChild(img);
            });


        });
    });
}