const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login_form')


const validateinput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return; // o return pula para o final da função;
    }
    /*else {
       button.setAttribute('disabled', '');
    }*/
    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location ='/pages/game.html';
}

input.addEventListener('input', validateinput);
form.addEventListener('submit', handleSubmit);

