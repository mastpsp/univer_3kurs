// Получаем поле ввода номера телефона
var phoneInput = document.getElementById('contactPhone');

// Создаем маску для номера телефона
var phoneMask = IMask(phoneInput, {
    mask: '+{7}(000)000-00-00'  // Задаем маску для номера телефона
});


function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}


document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    alert('Форма успешно отправлена!');
});