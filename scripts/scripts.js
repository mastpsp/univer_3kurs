// Получаем элемент <li>, для которого нужно открывать модальное окно
var specialMenuItem = document.getElementById('special-menu-item');

// Добавляем обработчик событий на элемент <li>
specialMenuItem.addEventListener('click', function() {
  // Показываем модальное окно
  document.getElementById('modal').style.display = 'block';
});

// Закрываем модальное окно при нажатии на кнопку закрытия
document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

// Закрываем модальное окно при клике вне его области
window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
});

document.getElementById('zakazat').addEventListener('click', function() {
  window.location.href = 'form_zakaz.html';
});
