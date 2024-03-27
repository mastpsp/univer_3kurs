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



var uglDivanTovar = document.getElementById('ugl-divan')

uglDivanTovar.addEventListener('click', function() {
    // Показываем модальное окно
    document.getElementById('ugl-divan-price').style.display = 'block';
  });

// Закрываем модальное окно при нажатии на кнопку закрытия
document.querySelector('#ugl-divan-price .close').addEventListener('click', function() {
   document.getElementById('ugl-divan-price').style.display = 'none';
});
  
  // Закрываем модальное окно при клике вне его области
window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('ugl-divan-price')) {
     document.getElementById('ugl-divan-price').style.display = 'none';
  }
});


var kresloTovar = document.getElementById('kreslo')

kresloTovar.addEventListener('click', function() {
    // Показываем модальное окно
    document.getElementById('kreslo-price').style.display = 'block';
  });

// Закрываем модальное окно при нажатии на кнопку закрытия
document.querySelector('#kreslo-price .close').addEventListener('click', function() {
   document.getElementById('kreslo-price').style.display = 'none';
});
  
  // Закрываем модальное окно при клике вне его области
window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('kreslo-price')) {
     document.getElementById('kreslo-price').style.display = 'none';
  }
});


var stolTovar = document.getElementById('stol')

stolTovar.addEventListener('click', function() {
    // Показываем модальное окно
    document.getElementById('stol-price').style.display = 'block';
  });

// Закрываем модальное окно при нажатии на кнопку закрытия
document.querySelector('#stol-price .close').addEventListener('click', function() {
   document.getElementById('stol-price').style.display = 'none';
});
  
  // Закрываем модальное окно при клике вне его области
window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('stol-price')) {
     document.getElementById('stol-price').style.display = 'none';
  }
});


var shkafTovar = document.getElementById('shkaf')

shkafTovar.addEventListener('click', function() {
    // Показываем модальное окно
    document.getElementById('shkaf-price').style.display = 'block';
  });

// Закрываем модальное окно при нажатии на кнопку закрытия
document.querySelector('#shkaf-price .close').addEventListener('click', function() {
   document.getElementById('shkaf-price').style.display = 'none';
});
  
  // Закрываем модальное окно при клике вне его области
window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('shkaf-price')) {
     document.getElementById('shkaf-price').style.display = 'none';
  }
});



var obedGroupTovar = document.getElementById('obed-group')

obedGroupTovar.addEventListener('click', function() {
    // Показываем модальное окно
    document.getElementById('obed-group-price').style.display = 'block';
  });

// Закрываем модальное окно при нажатии на кнопку закрытия
document.querySelector('#obed-group-price .close').addEventListener('click', function() {
   document.getElementById('obed-group-price').style.display = 'none';
});
  
  // Закрываем модальное окно при клике вне его области
window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('obed-group-price')) {
     document.getElementById('obed-group-price').style.display = 'none';
  }
});


var obuvnicaTovar = document.getElementById('obuvnica')

obuvnicaTovar.addEventListener('click', function() {
    // Показываем модальное окно
    document.getElementById('obuvnica-price').style.display = 'block';
  });

// Закрываем модальное окно при нажатии на кнопку закрытия
document.querySelector('#obuvnica-price .close').addEventListener('click', function() {
   document.getElementById('obuvnica-price').style.display = 'none';
});
  
  // Закрываем модальное окно при клике вне его области
window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('obuvnica-price')) {
     document.getElementById('obuvnica-price').style.display = 'none';
  }
});