// The ID of the extension we want to talk to.
var ExtensionId = "jnkehcgpmjanaaigkjmgegnkfgomhhlg";




function direct(){
  console.log("Sending directly from browser");
  fetch("http://10.0.0.43:6200", {
          method: 'POST',
          body: "<DETAIL><TRAN_TYPE>CCR1<TRAN_TYPE></DETAIL>"
        })
        .then(response => response.text())
        .then(data => {
          // do something with the data
          console.log("direct response " + data);
        })
        .catch(error => {
          // handle the error
        });
}

function viaExtension(){
  console.log("Sending to extension");
  chrome.runtime.sendMessage(ExtensionId, {greeting: "hello"}, (response) => {
  // 3. Got an asynchronous response with the data from the service worker
    console.log('response from extension ', response);
  });
}
  
