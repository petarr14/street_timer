function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
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
            timer = 0;
            stopTimer(duration);
            set_count_up();
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
    start_stop.textContent = "Start";
    start_stop.style.backgroundColor = "chartreuse";
}

function start_stop_timer() {
    time = parseInt(restTime); 
    if (state == "start") {
        startTimer(time, display);
        state = "stop";
        start_stop.textContent = "Stop"
        start_stop.style.backgroundColor = "red";
    } else if (state == "stop") {
        stopTimer(time);
        state = "start";
        start_stop.textContent = "Start";
        start_stop.style.backgroundColor = "chartreuse";
    }
}

function set_count_up() {
    current = document.querySelector(".current");
    current.textContent = parseInt(current.textContent)+1;
}

start_stop = document.querySelector("button.start");
state = "start"
display = document.querySelector('.timer p');
ukupno_serija = document.querySelector(".ukupno_serija");

start_stop.addEventListener("click", function () {
    start_stop_timer();
});

// CHOOSING PART
choice = document.querySelector(".choice");
timer_div = document.querySelector(".timer");


broj_serija = document.querySelector(".choice .set");
rest = document.querySelector(".choice .rest");
submit = document.querySelector(".choice .submit");

submit.addEventListener("click", function () {
    restTime = parseInt(rest.value);
    ukupno_serija.textContent = broj_serija.value;

    var timer = restTime, minutes, seconds;
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    choice.style.display = "none";
    timer_div.style.display = "flex";

});