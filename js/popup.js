export function setupPopup(elements) {
    const {
        resultPopup,
        resultTitle,
        resultMessage,
        resultWord
    } = elements;

    function showPopup(title, message, word) {
        resultTitle.textContent = title;
        resultMessage.textContent = message;
        resultWord.textContent = `Hidden word: ${word}`;

        resultPopup.hidden = false;
    }

    function hidePopup() {
        resultPopup.hidden = true;
    }

    return {
        showPopup,
        hidePopup
    };
}