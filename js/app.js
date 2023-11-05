//              FUNCION MOV TEXTO

const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value ==""){
        parent.classList.remove("focus");
    }


}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});



//              BOTON DE CONTACTO1

var targetElm = document.querySelector('.form__container'),  // reference to scroll target
    button = document.querySelector('.contact__btnFunc');        // button that triggers the scroll
  
// bind "click" event to a button 
button.addEventListener('click', function(){
   targetElm.scrollIntoView()
})

//              BOTON DE CONTACTO2

var targetElm = document.querySelector('.form__container'),  // reference to scroll target
    button = document.querySelector('.contact__btn');        // button that triggers the scroll
  
button.addEventListener('click', function(){
   targetElm.scrollIntoView()
})

//              BOTON DE ACERCA DE

var about_targetElm = document.querySelector('.knowledge__texts'),  // reference to scroll target
    about_button = document.querySelector('.about__btn');        // button that triggers the scroll
  
about_button.addEventListener('click', function(){
    about_targetElm.scrollIntoView()
})

const form = document.getElementById('my_form');

window.onload = function() {
    document.getElementById('my_form').value = '';
    }