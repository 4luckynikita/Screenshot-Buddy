scriptInjected = true;
console.log("Script injected? :" + scriptInjected);

document.getElementById("screenshotbutton").addEventListener("click", function () {
    // increment counter
    chrome.runtime.sendMessage({ type: "incrementCounter" });
});

