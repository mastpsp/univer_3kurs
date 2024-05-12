// Получаем поле ввода номера телефона
let phoneInput = document.getElementById('contactPhone');

// Создаем маску для номера телефона
let phoneMask = IMask(phoneInput, {
    mask: '+{7}(000)000-00-00'  // Задаем маску для номера телефона
});


// Функция для отображения/скрытия пароля
function show_hide_password(target){
	let input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view'); // Добавляем класс для изменения вида кнопки
		input.setAttribute('type', 'text'); // Изменяем тип поля ввода на текст, чтобы отобразить пароль
	} else {
		target.classList.remove('view'); // Удаляем класс для изменения вида кнопки
		input.setAttribute('type', 'password'); // Возвращаем тип поля ввода к паролю для скрытия его значения
	}
	return false; // Предотвращаем стандартное поведение ссылки
}


// Обработчик события отправки формы
document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    alert('Форма успешно отправлена!'); // Выводим сообщение об успешной отправке формы
});