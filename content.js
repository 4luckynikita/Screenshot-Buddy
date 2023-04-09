scriptInjected = true;
console.log("Script injected? :" + scriptInjected);
document.addEventListener('keydown', function (event) {
    chrome.runtime.sendMessage({ key: event.key });
});
