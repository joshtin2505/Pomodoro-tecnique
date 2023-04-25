const start_btn = document.querySelector('.start');

start_btn.addEventListener('click', () => {
    start_btn.style.display = 'none';
});

const pause_btn = document.querySelector('.pause');

pause_btn.addEventListener('click', () => {
    start_btn.style.display = 'inline-block';
});

const stop_btn = document.querySelector('.stop');

stop_btn.addEventListener('click', () => {
    start_btn.style.display = 'inline-block';
});