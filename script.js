// The ID of the extension we want to talk to.
var ExtensionId = "jnkehcgpmjanaaigkjmgegnkfgomhhlg";


(async () => {
  console.log("test");
    const response = await chrome.runtime.sendMessage(ExtensionId, {greeting: "hello"});
    // do something with response here, not outside the function
    console.log(response);
  })();