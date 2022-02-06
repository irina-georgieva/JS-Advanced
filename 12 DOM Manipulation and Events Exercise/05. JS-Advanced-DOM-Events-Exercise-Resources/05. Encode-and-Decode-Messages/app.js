function encodeAndDecodeMessages() {
    let [inputField, outputField] = document.querySelectorAll('#main textarea');

    let [encodeButton, decodeButton] = document.querySelectorAll('#main button');

    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);

    function encode() {
        let inputText = inputField.value;
        let result = '';

        for (let i = 0; i < inputText.length; i++) {
            let currentChar = inputText[i].charCodeAt(0) + 1;
            let nextChar = String.fromCharCode(currentChar);

            result += nextChar;
        }

        inputField.value = '';
        outputField.value = result;
    }

    function decode() {
        let outputText = outputField.value;
        let result = '';

        for (let i = 0; i < outputText.length; i++) {
            let currentChar = outputText[i].charCodeAt(0) - 1;
            let nextChar = String.fromCharCode(currentChar);

            result += nextChar;
        }

        outputField.value = result;
    }
}