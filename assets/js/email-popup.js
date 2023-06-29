function fadeOutPopup() {
            var popup = document.getElementById('popup-email');
            popup.style.opacity = '0';
            popup.style.top = '-100%';
        }

        // Trigger fade out after 6 seconds
        setTimeout(fadeOutPopup, 6000);