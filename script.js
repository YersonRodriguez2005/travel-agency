// Slider automático
const sliderImages = document.querySelectorAll('.slider img');
let currentSlide = 0;
const totalSlides = sliderImages.length;

function showSlide(index) {
    sliderImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Inicia el slider automático
setInterval(nextSlide, 5000);

// Muestra la primera imagen al cargar
showSlide(currentSlide);


// Información por ciudad
const cityInfo = {
    cali: {
        title: "Información sobre Cali",
        info: "Cali, conocida como la 'Sucursal del Cielo', es una ciudad vibrante en el suroeste de Colombia, famosa por su salsa y cultura."
    },
    cartagena: {
        title: "Información sobre Cartagena",
        info: "Cartagena, la joya del Caribe, es una ciudad colonial llena de historia y encanto, rodeada por las murallas construidas en el siglo XVI."
    },
    santa_marta: {
        title: "Información sobre Santa Marta",
        info: "Santa Marta es un destino paradisíaco en la costa caribeña de Colombia, conocida por sus playas hermosas y el Parque Nacional Tayrona."
    }
};

// Selección de los elementos del DOM
const modal = document.getElementById('info-modal');
const modalTitle = document.getElementById('modal-title');
const modalInfo = document.getElementById('modal-info');
const closeBtn = document.querySelector('.close-btn');
const infoButtons = document.querySelectorAll('.info-btn');
const container = document.querySelector('.container');

// Función para abrir el modal con la información correspondiente
infoButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const city = event.target.getAttribute('data-city');
        modalTitle.textContent = cityInfo[city].title;
        modalInfo.textContent = cityInfo[city].info;
        modal.style.display = 'flex';
        container.classList.add('show-modal'); // Desenfocar el fondo
    });
});

// Función para cerrar el modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    container.classList.remove('show-modal');
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        container.classList.remove('show-modal');
    }
});
