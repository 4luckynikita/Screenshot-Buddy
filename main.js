console.log("Screenshot Buddy is running. Starting injection");

let keysPressed = [];

var scriptInjected = false;
scriptInjected = false;
let counter = 0;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "incrementCounter") {
        counter++;
        console.log("Counter is now:", counter);
    }
});
window.onload = function () {
    document.getElementById("screenshot-button").addEventListener("click", function () {
        // Call chrome.tabs.captureVisibleTab method
        /*chrome.tabs.captureVisibleTab(null, {}, function (dataUrl) {
            chrome.windows.getCurrent(function (currentWindow) {
                var img = document.createElement("img");
                img.src = dataUrl;
                img.style.width = "400px";
                img.style.height = "300px";
                document.body.appendChild(img);
            });


        });*/
        chrome.tabs.captureVisibleTab(null, { format: "png" }, function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            img.onload = function () {
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = document.body.scrollHeight;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, img.width, img.height);
                chrome.tabs.executeScript(null, { code: "window.scrollTo(0, document.body.scrollHeight)" }, function () {
                    setTimeout(function () {
                        chrome.tabs.captureVisibleTab(null, { format: "png" }, function (dataUrl) {
                            var img2 = new Image();
                            img2.src = dataUrl;
                            img2.onload = function () {
                                ctx.drawImage(img2, 0, img.height, img2.width, img2.height);
                                var finalDataUrl = canvas.toDataURL("image/png");
                                // Use finalDataUrl as needed
                                document.body.appendChild(img);
                            }
                        });
                    }, 500);
                });
            }
            
        });
    });
}