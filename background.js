var appWindow;

chrome.app.runtime.onLaunched.addListener(function(launchData) {
  if (appWindow && !appWindow.closed) {
    if (launchData && launchData.intent) {
//      appWindow.handleIntent(launchData.intent);
      intent.postResult(launchData.intent.data);
      console.log('Posting result of intent', intent);
    }
  } else {
    chrome.app.window.create('window.html', {
      width: 800,
      height: 700,
      top: 64,
      left: 32
    }, function(w) {
      appWindow = w.contentWindow;
      appWindow.launchData = launchData;
    });
  }
});
