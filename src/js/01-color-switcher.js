function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');

const stopBtn = document.querySelector('button[data-stop]');

const handleClickStart = () => {
    timerId = setInterval(() => {
        const currentColor = getRandomColor();
        document.body.style.backgroundColor = currentColor;
    }, 1000);
    startBtn.removeEventListener('click', handleClickStart);
    stopBtn.addEventListener('click', handleClickStop);
    startBtn.disabled = true;
};

const handleClickStop = () => {
    clearInterval(timerId);
    stopBtn.removeEventListener('click', handleClickStop);
    startBtn.addEventListener('click', handleClickStart);
    startBtn.disabled = false;
};

startBtn.addEventListener('click', handleClickStart);