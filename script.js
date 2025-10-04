document.querySelectorAll('.key').forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;
        const inputs = document.querySelectorAll('.code-input');
        
        // Если нажата кнопка "Стереть"
        if (value === 'Стереть' || e.target.id === 'clear') {
            for (let i = inputs.length - 1; i >= 0; i--) {
                if (inputs[i].value !== "") {
                    inputs[i].value = "";
                    break;
                }
            }
        } else if (value === 'Сканировать' || e.target.id === 'scan') {
            alert("Функция сканирования активирована!");
        } else if (value === 'Отправить') {
            const code = Array.from(document.querySelectorAll('.code-input')).map(input => input.value).join('');
            alert("Отправлен код: " + code);
        } else {
            // Вставляем цифры в ячейки
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].value === "") {
                    inputs[i].value = value;
                    break;
                }
            }
        }
    });
});
