$(document).ready(()=>{
    const myCarouselElement = document.querySelector('#carouselExampleCaptions');
    const carousel = new bootstrap.Carousel(myCarouselElement,{interval:5000,touch: false
    })

    $(() => {
        $('[data-bs-toggle="tooltip"]').tooltip();
    });

    $(() => {
        $('[data-bs-toggle="popover"]').popover();
    });

    let contador = 0;
    setInterval(()=>{
        if(contador < 100){
            contador = contador + 1;
        } else {
            contador = 0;
        }
        const barra = document.querySelector('#progressbar-example');
        barra.style.width = contador + '%';
        barra.innerHTML = contador + '%';
    },200);
});
