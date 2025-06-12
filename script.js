// Love Reveal Function
function revealLove() {
    let message = document.getElementById('loveMessage');
    message.style.display = "block";
    message.style.opacity = "1";
}

// Love Counter Function
const startDate = new Date("2023-06-01"); // Change to your love anniversary date
function updateLoveTime() {
    const now = new Date();
    const diffInSeconds = Math.floor((now - startDate) / 1000);
    document.getElementById('loveTime').innerText = diffInSeconds;
}

setInterval(updateLoveTime, 1000);

// Love Poem Reveal
function revealPoem() {
    let poem = document.getElementById('lovePoem');
    poem.style.display = "block";
    poem.style.opacity = "1";
}
