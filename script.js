const birthday = new Date("August 20, 2026 00:00:00").getTime();

setInterval(function () {

    let now = new Date().getTime();
    let distance = birthday - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "🎉 Happy 1st Birthday, Cianne Vinnes! 🎂";
        return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}, 1000);