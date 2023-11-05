// The ID of the extension we want to talk to.
var ExtensionId = "jnkehcgpmjanaaigkjmgegnkfgomhhlg";


console.log("test");
chrome.runtime.sendMessage(ExtensionId, {greeting: "hello"}, (response) => {
  // 3. Got an asynchronous response with the data from the service worker
  console.log('received user data', response);
});


  
