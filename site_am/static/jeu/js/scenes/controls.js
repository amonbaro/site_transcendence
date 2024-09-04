export function setupControls(key, type, ...paddles) {
    // Si type est 2 et qu'il y a 4 paires dans key, on change l'ordre
    let keyOrder = key;
    if (type === 2 && key.length === 4) {
        keyOrder = [key[0], key[2], key[1], key[3]];
    }

    document.addEventListener("keydown", (evt) => {
        paddles.forEach((paddle, index) => {
            if (index < keyOrder.length) {
                const [upKey, downKey] = keyOrder[index];
                switch (evt.key) {
                    case upKey:
                        paddle.up = true;
                        break;
                    case downKey:
                        paddle.down = true;
                        break;
                }
            }
        });
    });

    document.addEventListener("keyup", (evt) => {
        paddles.forEach((paddle, index) => {
            if (index < keyOrder.length) {
                const [upKey, downKey] = keyOrder[index];
                switch (evt.key) {
                    case upKey:
                        paddle.up = false;
                        break;
                    case downKey:
                        paddle.down = false;
                        break;
                }
            }
        });
    });
}





