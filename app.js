const getRemainTime = deadline => {
    let now = new Date(),
    remainTme = (new Date(deadline) - now + 1000)/1000,
    remainSeconds = ('0' + Math.floor(remainTme % 60)).slice(-2);
    remainMinutes = ('0' + Math.floor(remainTme / 60 % 60)).slice(-2);
    remainHours = ('0' + Math.floor(remainTme / 3600 % 24)).slice(-2);
    remainDays = Math.floor(remainTme / (3600 * 24));

    return{
        remainTme,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};
const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timerUpdate = setInterval ( () => {
        let t = getRemainTime(deadline);
        el.innerHTML = `${t.remainDays} ${t.remainHours} ${t.remainMinutes} ${t.remainSeconds}`;
        if (t.remainTme <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }
    }, 1000)
};

countdown('Dec 09 2023 15:00:00 GMT-0600', 'clock')

var sound = new Audio();
sound.src = "./te esperaba.mp3";