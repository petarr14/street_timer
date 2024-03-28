function startTimer(duration, display) {
    var prepare = true;
    var timer = 5, minutes, seconds;
    var blip = new Audio("blip.wav");
    var blip2 = new Audio("blip2.wav");
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            blip2.play();
            if (prepare) {
                timer = duration;
                prepare = false;
            } else {
                timer = 0;
                stopTimer(duration);
            }
        }
        if (timer < 5) {
            blip.play();
        }
    }, 1000);
}
function stopTimer(duration) {
    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);

    for (let i = 1; i < interval_id; i++) {
        window.clearInterval(i);
    } 
    var timer = duration, minutes, seconds;
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    state = "start";
    start_stop.textContent = "Start"
}

start_stop = document.querySelector(".button button");
state = "start"
display = document.querySelector('.timer p');

start_stop.addEventListener("click", function () {
    time = parseInt(document.querySelector(".timer input").value); // your time in seconds here
    if (state == "start") {
        startTimer(time, display);
        state = "stop";
        start_stop.textContent = "Stop"
    } else if (state == "stop") {
        stopTimer(time);
        state = "start"
        start_stop.textContent = "Start"
    }
});