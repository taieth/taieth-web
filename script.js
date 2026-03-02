// находим все ссылки, которые ведут к якорям (начинаются с #)
document.querySelectorAll('a[href^="#"').forEach(anchor => {
// вешаем на каждый "слушатель" событие клика
anchor.addEventListener('click', function (e) {
    e.preventDefault(); // отменяем стандартный резкий переход

    // плавно скроллим к элементу, на который ведет ссыдка
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});

window.addEventListener('scroll', function() {
    const header = this.document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled')
    }
});