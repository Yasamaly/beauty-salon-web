
// Функция для изменения содержимого
function changeContent(newContent) {
    document.getElementById('content').innerHTML = newContent;
}

// Получаем все элементы .grid-item
const gridItems = document.querySelectorAll('.grid-item');

// Обрабатываем каждый .grid-item
gridItems.forEach(item => {
    // Добавляем слушатель события клика
    item.addEventListener('click', function() {
        // Прокручиваем страницу вниз на 500 пикселей при клике на изображение
        window.scrollBy({
            top: 10000, // Расстояние прокрутки вниз
            behavior: 'smooth' // Плавная анимация прокрутки
        });
        // Удаляем класс selected у всех элементов
        gridItems.forEach(gridItem => {
            gridItem.classList.remove('selected');
        });
        // Добавляем класс selected только к текущему элементу
        this.classList.add('selected');
    });
});


// Функция для отображения формы регистрации
function showRegistrationForm() {
    const contentDiv = document.getElementById('content');
    const formHTML = `
        <form id="registrationForm">
        <div class="schedule">
            <div class="day">
                <div class="date">21 ноября Вт</div>
                <button class="time-slot available" data-time="9:00">9:00</button>
                <button class="time-slot available" data-time="10:00">10:00</button>
                <button class="time-slot available" data-time="10:00">11:00</button>
                <button class="time-slot available" data-time="10:00">12:00</button>
                <button class="time-slot available" data-time="10:00">13:00</button>
                <button class="time-slot available" data-time="10:00">14:00</button>
                <button class="time-slot available" data-time="10:00">15:00</button>
                <button class="time-slot available" data-time="10:00">16:00</button>
                <button class="time-slot available" data-time="10:00">17:00</button>
                <button class="time-slot available" data-time="10:00">18:00</button>
                <button class="time-slot available" data-time="10:00">19:00</button>
                <button class="time-slot available" data-time="10:00">20:00</button>
                <!-- ... Другие временные слоты ... -->
            </div>
            <!-- ... Другие дни ... -->
            <div class="day">
                <div class="date">22 ноября Ср</div>
                <button class="time-slot available" data-time="9:00">9:00</button>
                <button class="time-slot available" data-time="10:00">10:00</button>
                <button class="time-slot available" data-time="10:00">11:00</button>
                <button class="time-slot available" data-time="10:00">12:00</button>
                <button class="time-slot available" data-time="10:00">13:00</button>
                <button class="time-slot available" data-time="10:00">14:00</button>
                <button class="time-slot available" data-time="10:00">15:00</button>
                <button class="time-slot available" data-time="10:00">16:00</button>
                <button class="time-slot available" data-time="10:00">17:00</button>
                <button class="time-slot available" data-time="10:00">18:00</button>
                <button class="time-slot available" data-time="10:00">19:00</button>
                <button class="time-slot available" data-time="10:00">20:00</button>
                <!-- ... Другие временные слоты ... -->
            </div>
            <div class="day">
                <div class="date">23 ноября Чт</div>
                <button class="time-slot available" data-time="9:00">9:00</button>
                <button class="time-slot available" data-time="10:00">10:00</button>
                <button class="time-slot available" data-time="10:00">11:00</button>
                <button class="time-slot available" data-time="10:00">12:00</button>
                <button class="time-slot available" data-time="10:00">13:00</button>
                <button class="time-slot available" data-time="10:00">14:00</button>
                <button class="time-slot available" data-time="10:00">15:00</button>
                <button class="time-slot available" data-time="10:00">16:00</button>
                <button class="time-slot available" data-time="10:00">17:00</button>
                <button class="time-slot available" data-time="10:00">18:00</button>
                <button class="time-slot available" data-time="10:00">19:00</button>
                <button class="time-slot available" data-time="10:00">20:00</button>
                <!-- ... Другие временные слоты ... -->
            </div>
            <div class="day">
                <div class="date">24 ноября Пт</div>
                <button class="time-slot available" data-time="9:00">9:00</button>
                <button class="time-slot available" data-time="10:00">10:00</button>
                <button class="time-slot available" data-time="10:00">11:00</button>
                <button class="time-slot available" data-time="10:00">12:00</button>
                <button class="time-slot available" data-time="10:00">13:00</button>
                <button class="time-slot available" data-time="10:00">14:00</button>
                <button class="time-slot available" data-time="10:00">15:00</button>
                <button class="time-slot available" data-time="10:00">16:00</button>
                <button class="time-slot available" data-time="10:00">17:00</button>
                <button class="time-slot available" data-time="10:00">18:00</button>
                <button class="time-slot available" data-time="10:00">19:00</button>
                <button class="time-slot available" data-time="10:00">20:00</button>
                <!-- ... Другие временные слоты ... -->
            </div>
            <input type="submit" class="input_button" value="Записаться">
        </form>
    `;
    contentDiv.innerHTML = formHTML;

    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы для примера
        // Дополнительные действия при отправке формы, например, обработка данных
        // Для этого примера данные просто выводятся в консоль
        const formData = new FormData(registrationForm);
        for (const pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }
    });

    // Прокрутка страницы к форме регистрации
    contentDiv.scrollIntoView({ behavior: 'smooth' });

    // Добавляем обработчик клика на динамически созданные временные слоты
    contentDiv.addEventListener('click', function(event) {
        const clickedElement = event.target;
        if (clickedElement.classList.contains('time-slot') && !clickedElement.classList.contains('booked')) {
            const selectedTimeSlots = document.querySelectorAll('.time-slot.selected');
            selectedTimeSlots.forEach(slot => slot.classList.remove('selected'));
            clickedElement.classList.add('selected');
        }
    });
}

// Можно удалить, это для 3 вкладки, что бы работало
// Получаем все элементы временных слотов
const timeSlots = document.querySelectorAll('.time-slot');

// Добавляем обработчик клика на каждый временной слот
timeSlots.forEach(slot => {
    slot.addEventListener('click', function() {
        if (!this.classList.contains('booked')) {
            if (!this.classList.contains('selected')) {
                // Сначала удаляем класс 'selected' у всех временных слотов
                timeSlots.forEach(slot => {
                    slot.classList.remove('selected');
                });
                // Затем добавляем класс 'selected' только к выбранному временному слоту
                this.classList.add('selected');
            }
        }
    });
});


