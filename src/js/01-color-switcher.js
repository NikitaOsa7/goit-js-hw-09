function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

const onStartButtonClick = () => {
    timerId = setInterval(() => {
        const currentColor = getRandomColor();
        document.body.style.backgroundColor = currentColor;
    }, 1000);

    startBtn.removeEventListener('click', onStartButtonClick);
    stopBtn.addEventListener('click', onStopButtonClick);
    startBtn.disabled = true;
};

const onStopButtonClick = () => {
    clearInterval(timerId);
    startBtn.addEventListener('click', onStartButtonClick);
    stopBtn.removeEventListener('click', onStopButtonClick);
    startBtn.disabled = false;
};

startBtn.addEventListener('click', onStartButtonClick);
