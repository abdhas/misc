function calculateResult() {
    const expression = document.getElementById('expression').value;
    const resultField = document.getElementById('result');

    try {
        const result = eval(expression);
        resultField.value = result;
    } catch (e) {
        resultField.value = 'Invalid expression';
    }
}

document.getElementById('expression').addEventListener('input', calculateResult);

