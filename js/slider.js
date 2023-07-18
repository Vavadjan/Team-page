var currentSlide = 0;
var sliderItems = document.querySelectorAll('.slider-item');

function showSlide(index) {
	if (index >= 0 && index < sliderItems.length) {
		sliderItems[currentSlide].classList.remove('active');
		sliderItems[index].classList.add('active');
		currentSlide = index;
	}
}

function changeSlide(index) {
	showSlide(index);

	// Открывает новую страницу при нажатии на слайд
	if (index === 0) {
		window.location.href = 'page1.html';
	} else if (index === 1) {
		window.location.href = 'page2.html';
	} else if (index === 2) {
		window.location.href = 'page3.html';
	}
	// Добавьте остальные переходы на страницы здесь
}

showSlide(0);