// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. 
// Каждое занятие имеет название, время проведения, максимальное количество участников и 
// текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения 
// занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно 
// отображаться на странице с указанием его названия, времени проведения, максимального 
// количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если 
// максимальное количество участников уже достигнуто, кнопка "Записаться" становится 
// неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных 
// участников и состояние кнопки "Записаться".

// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку 
// "Отменить запись". После отмены записи, обновите количество записанных участников и 
// состояние кнопки.

// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в 
// реальном времени на странице.

// 7. При разработке используйте Bootstrap для стилизации элементов.

const data = [
    {
        name: "Футбол",
        time: "1ч 30мин",
        maxpeople: 20,
        nowpeople: 0 
    },
    {
        name: "Баскетболл",
        time: "30мин",
        maxpeople: 10,
        nowpeople: 0 
    }
]

const el = JSON.parse(localStorage.getItem('data'));

const classEl = document.querySelector('.class');

el.forEach(element => {
    console.log(element);

    const liEl = document.createElement('li');
    liEl.classList.add('d-flex');
    liEl.classList.add('justify-content-between');
    liEl.classList.add('gap-4');
    liEl.classList.add('p-5');
    liEl.classList.add('align-items-center');
    liEl.classList.add('border-bottom');

    const nameEl = document.createElement('p');
    nameEl.textContent = element.name;
    const timeEl = document.createElement('p');
    timeEl.textContent = element.time;
    const nowPeopleEl = document.createElement('p');
    nowPeopleEl.textContent = `${element.nowpeople} / ${element.maxpeople}`;

    const readyButton = document.createElement('button');
    readyButton.textContent = "Записаться";
    readyButton.classList.add('text-white');
    readyButton.classList.add('border-0');
    readyButton.classList.add('bg-success');
    readyButton.classList.add('p-2');
    readyButton.classList.add('rounded-5');

    const delButton = document.createElement('button');
    delButton.textContent = "Отменить запись";
    delButton.classList.add('text-white');
    delButton.classList.add('border-0');
    delButton.classList.add('bg-danger');
    delButton.classList.add('p-2');
    delButton.classList.add('rounded-5');

    liEl.appendChild(nameEl); 
    liEl.appendChild(timeEl);
    liEl.appendChild(nowPeopleEl);
    liEl.appendChild(readyButton);
    liEl.appendChild(delButton);
    classEl.appendChild(liEl);

    readyButton.addEventListener('click', function (e) {
        if (element.nowpeople === element.maxpeople) {
            alert("Максимальное количество людей, записаться нельзя.")
            e.preventDefault;
        } else {
            nowPeopleEl.textContent = `${++element.nowpeople} / ${element.maxpeople}`;
            localStorage.setItem('data', JSON.stringify(el));
        }
    });

    delButton.addEventListener('click', function () {
        if (element.nowpeople !== 0) {
            nowPeopleEl.textContent = `${--element.nowpeople} / ${element.maxpeople}`;
            localStorage.setItem('data', JSON.stringify(el));
        } 
    });
    
});

localStorage.setItem('data', JSON.stringify(el));