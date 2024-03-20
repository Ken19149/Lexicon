document.getElementById('play').addEventListener('click', () => {
    // Play logic
  });
  
  document.getElementById('pause').addEventListener('click', () => {
    // Pause logic
  });
  
  document.getElementById('skip').addEventListener('click', () => {
    // Skip 10 seconds logic
  });
  
  document.getElementById('save').addEventListener('click', () => {
    // Save current position to storage
    const currentPosition = 123; // Get actual position
    chrome.storage.local.set({ 'audiobookPosition': currentPosition });
  });
  