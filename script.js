alert("Hello, welcome to the Dlone!");

let userName = prompt("What is your name?")

alert(`Hello ${userName}`);


// Получаем кнопку и элемент для отображения результата
const button = document.getElementById('generate-btn');
const result = document.getElementById('result');

// Обработчик события для генерации случайного числа
button.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1; // Число от 1 до 5
    result.textContent = (`${randomNumber}`);
});
