document.getElementById('start').addEventListener('click', function() {
    const phrases = [
        "こんにちは",
        "おはようございます",
        "こんばんは",
        "技術の力で未来を切り開こう"
    ];
    const target = document.getElementById('target');
    const inputArea = document.getElementById('input-area');
    let currentPhrase = "";
    let charIndex = 0;

    function loadNewPhrase() {
        const phraseIndex = Math.floor(Math.random() * phrases.length);
        currentPhrase = phrases[phraseIndex];
        target.textContent = currentPhrase;
        charIndex = 0;
        inputArea.value = "";
        inputArea.focus();
    }

    inputArea.addEventListener('input', function() {
        const currentInput = inputArea.value;
        const nextChar = currentPhrase.charAt(charIndex);
        if (currentInput.charAt(currentInput.length - 1) === nextChar) {
            charIndex++;
            if (charIndex === currentPhrase.length) {
                loadNewPhrase();
            }
        } else {
            inputArea.value = currentInput.slice(0, -1); // remove the last character
        }
    });

    loadNewPhrase();
});
