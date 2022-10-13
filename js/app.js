// ------------------------------Animación_Menu------------------------------------

addEventListener('DOMContentLoaded', () =>{
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click' , () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})

// ------------------------------Esonder_Menu------------------------------------

let ubicacionPrincipal = window.scrollY;
window.onscroll = function(){
    let Desplazamiento_Actual = window.scrollY;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('navbar').style.top = '0';
    }
    else {
        document.getElementById('navbar').style.top = '-100px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}



