
function playSound(spanText) {
    const sound = new Audio(`/sounds/${spanText.toLowerCase()}.wav`);
    sound.play();
}

const keys = document.querySelectorAll('.key');


document.addEventListener('keydown', keyPressed => {
    keys.forEach(key => {
        const keyLetter = key.querySelector('kbd').textContent.toLowerCase();
        if(keyPressed.key === keyLetter) {
            playSound(key.querySelector('span').textContent);
            key.classList.add('pressed');
            document.addEventListener('keyup', () => key.classList.remove('pressed'));
        }
    });

});