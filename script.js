document.getElementById("myButton").addEventListener("click", function() {
    const spanElement = document.getElementById("mySpan");
    spanElement.textContent = spanElement.textContent === "Текст в span" ? "Другой текст" : "Текст в span";
});

document.getElementById("changeTagButton").addEventListener("click", function() {
    const spanElement = document.getElementById("mySpan");

    const boldElement = document.createElement("b");
    boldElement.id = "mySpan"; 
    boldElement.textContent = spanElement.textContent;

    spanElement.replaceWith(boldElement);
});

document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length - 1; i++) {
        paragraphs[i].textContent = `Абзац номер ${i + 1}`;
    }

    const zzzParagraphs = document.getElementsByClassName("zzz");
    for (let i = 0; i < zzzParagraphs.length; i++) {
        zzzParagraphs[i].textContent = `Абзац с классом ${i + 1}`;
    }
});

document.getElementById("addParagraphButton").addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value;
    const newParagraph = document.createElement("p");
    newParagraph.textContent = userInput || "Новый абзац добавлен!";
    document.body.appendChild(newParagraph);
    document.getElementById("userInput").value = ''; // Очищаем поле ввода
});

document.getElementById("resetButton").addEventListener("click", function() {
    const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].textContent = `Абзац номер ${i + 1}`;
    }

    const zzzParagraphs = document.getElementsByClassName("zzz");
    for (let i = 0; i < zzzParagraphs.length; i++) {
        zzzParagraphs[i].textContent = `Абзац с классом ${i + 1}`;
    }

    const spanElement = document.getElementById("mySpan");
    spanElement.textContent = "Текст в span";
});

document.getElementById("removeLastButton").addEventListener("click", function() {
    const paragraphs = document.getElementsByTagName("p");
    if (paragraphs.length > 0) {
        document.getElementById("confirmModal").style.display = "flex"; // Показываем модальное окно
    }
});

document.getElementById("confirmDeleteButton").addEventListener("click", function() {
    const paragraphs = document.getElementsByTagName("p");
    paragraphs[paragraphs.length - 1].remove(); // Удаляем последний абзац
    document.getElementById("confirmModal").style.display = "none"; // Скрываем модальное окно
});

document.getElementById("cancelDeleteButton").addEventListener("click", function() {
    document.getElementById("confirmModal").style.display = "none"; // Скрываем модальное окно
});

document.getElementById("changeColorButton").addEventListener("click", function() {
    const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = paragraphs[i].style.color === "red" ? "black" : "red"; // Меняем цвет на красный или обратно
    }
});
