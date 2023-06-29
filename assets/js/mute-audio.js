document.addEventListener('mousedown', function(event) {
  if (event.button === 0) {
    // Find all audio elements on the page
    var audioElements = document.getElementsByTagName('audio');

    // Mute each audio element
    for (var i = 0; i < audioElements.length; i++) {
      audioElements[i].muted = true;
    }
  }
});
