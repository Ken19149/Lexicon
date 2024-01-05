// This is an event listener that runs when the extension is installed or updated
chrome.runtime.onInstalled.addListener(function () {
    // Register a context menu item
    chrome.contextMenus.create({
      title: "Highlight Word",
      contexts: ["selection"],
      onclick: function (info, tab) {
        // Get the selected text
        var selectedText = info.selectionText;
  
        // Highlight the selected word
        highlightWord(selectedText);
      },
    });
  });
  

  
// This is a function to highlight a word in the webpage
function highlightWord(word) {
    // Create a RegExp to match the selected word globally
    var regex = new RegExp(word, "gi");
  
    // Replace the word with a span having a yellow background
    document.body.innerHTML = document.body.innerHTML.replace(
      regex,
      '<span style="background-color: yellow;">$&</span>'
    );
  }
  