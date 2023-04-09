console.log("GPTHelper is running. Starting injection");

let keysPressed = [];

var scriptInjected = false;
scriptInjected = false;
/*document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (""+scriptInjected = ""+false) {
            chrome.tabs.executeScript({
                code: `var scriptInjected = ${JSON.stringify(scriptInjected)};`
            });
            chrome.tabs.executeScript(tabs[0].id, { file: "content.js" });
        }
    });
*/
    /*chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            keysPressed.push(request.key);
            console.log(keysPressed);
        });
*/window.onload = function () {
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
  /*  document.getElementById("clear-array").addEventListener("click", function () {
        keysPressed = [];
    });
*/

    /*const printButton = document.getElementById("print-keys");
    printButton.addEventListener("click", function () {
        let keysPressedDiv = document.getElementById("keysPressed");
        keysPressedDiv.innerHTML = "";
        keysPressed.forEach(function (key) {
            console.log(key);
            keysPressedDiv.innerHTML += key + "<br>";
        });
    });
});

*/
/*
let keysPressed = [];

/*document.addEventListener('keydown', function (event) {
    keysPressed.push(event.key);
    console.log(keysPressed);
});




//*****
chrome.webNavigation.onCommitted.addListener(function (details) {
    if (details.frameId === 0) {
        chrome.tabs.executeScript(details.tabId, { file: "content.js" });
    }
});
/*
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, { file: 'content.js' });
});


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        keysPressed.push(request.key);
        console.log(keysPressed);
    });
//*****

const printButton = document.getElementById("print-keys");
printButton.addEventListener("click", function () {
    let keysPressedDiv = document.getElementById("keysPressed");
    keysPressedDiv.innerHTML = "";
    keysPressed.forEach(function (key) {
        console.log(key);
        keysPressedDiv.innerHTML += key + "<br>";
    });
});
*/