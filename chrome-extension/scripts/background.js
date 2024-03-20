chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'savePosition') {
      const { position } = message;
      chrome.storage.local.set({ 'audiobookPosition': position });
    }
  });
  