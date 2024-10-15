let selected = 0;

let buttons = document.querySelectorAll('button');
let submit = document.querySelector('.submit');


for(let btn = 0; btn < buttons.length; btn++){
    buttons[btn].addEventListener('click', function(){
        let btnInnerHTML = this.innerHTML;
        
        switch (btnInnerHTML) {
            case '1':
                bgRemove(buttons);
                selected = btnInnerHTML;
                this.style.backgroundColor = "var(--White)";
                break;
            case '2':
                bgRemove(buttons);
                selected = btnInnerHTML;
                this.style.backgroundColor = "var(--White)";
                break;
            case '3':
                bgRemove(buttons);
                selected = btnInnerHTML;
                this.style.backgroundColor = "var(--White)";
                break;
            case '4':
                bgRemove(buttons);
                selected = btnInnerHTML;
                this.style.backgroundColor = "var(--White)";
                break;
            case '5':
                bgRemove(buttons);
                selected = btnInnerHTML;
                this.style.backgroundColor = "var(--White)";
                break;
            default:
                alert('WRONG BUTTON CLICKED');
                break;
        }
    });

}

let getStartState = document.querySelector(".start-state");
let getThankYouState = document.querySelector(".thank-you-state");

submit.addEventListener('click', function(){
    getStartState.style.display = "none"
    getThankYouState.style.display = "flex";
    document.querySelector("#value_selected").textContent = selected;
});




//REMOVING ANOTHER BUTTON BG WHITE

function bgRemove(state_buttons) {
    for(let i = 0; i < state_buttons.length; i++){
        state_buttons[i].style.backgroundColor = "var(--Lighter-Blue+-)"
    }
    
}