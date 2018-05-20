chrome.runtime.onInstalled.addListenter(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('the color is whatever');
  });
});