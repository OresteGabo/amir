const eventDate = new Date('2024-05-23T10:00:00'); // Event start date and time

function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
        document.querySelector('#countdown').innerText = "Event is now!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector('#countdown').innerText =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
}

// Update countdown every second
setInterval(updateCountdown, 1000);