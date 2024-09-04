export function loadFont() {
    return new Promise((resolve, reject) => {
        // Simuler le chargement de la police au cas ou faudrait vraiment unee police
        setTimeout(() => {
            console.log('Font loaded');
            resolve({ family: 'Courier New' });
        }, 1000);
    });
}

export function waitForKeyPress(callback) {
    function onKeyPress(event) {
        document.removeEventListener('keydown', onKeyPress);
        callback(event.key);
    }
    document.addEventListener('keydown', onKeyPress);
}


