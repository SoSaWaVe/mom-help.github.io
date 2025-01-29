let tg = window.Telegram.WebApp;
tg.expand();

document.getElementById("addNote").addEventListener("click", function() {
    let note = prompt("Введите текст заметки:");
    if (note) {
        sendDataToBot({ action: "add_note", text: note });
    }
});

function sendDataToBot(data) {
    tg.sendData(JSON.stringify(data));
    tg.close();
}

// Загружаем заметки (имитация)
async function loadNotes() {
    let notesList = document.getElementById("notesList");
    notesList.innerHTML = '<li class="text-center text-gray-500">Загрузка...</li>';

    setTimeout(() => {
        notesList.innerHTML = `
            <li class="bg-white dark:bg-gray-800 p-3 rounded-lg shadow flex justify-between">
                <span>Пример заметки</span>
                <button class="text-green-500">✔️</button>
            </li>
        `;
    }, 1000);
}

loadNotes();
