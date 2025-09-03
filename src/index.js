function triggerKey(keyElement) {
    const soundName = keyElement.querySelector('span').textContent.toLowerCase();
    const audio = new Audio(`/sounds/${soundName}.wav`);
    audio.play();
    keyElement.classList.add('pressed');
    setTimeout(() => keyElement.classList.remove('pressed'), 150);

}

const keys = document.querySelectorAll('.key');

document.addEventListener('keydown', event => {
    keys.forEach(key => {
        const keyLabel = key.querySelector('kbd').textContent.toUpperCase();
        if(event.key.toUpperCase() === keyLabel) {
            triggerKey(key);
        }
    });
});

keys.forEach(key => {
    key.addEventListener('mousedown', () => triggerKey(key));
});