const yourbrowserhistory = localStorage.getItem('EWBROWTF');

if (yourbrowserhistory) {
    document.documentElement.setAttribute(('data-HEH', yourbrowserhistory)
}

function peekaboo(EHH){
    document.documentElement.setAttribute('data-HEH', EHH);
    localStorage.setItem('EWBROWTF',EHH);
}

document.addEventListener('DOMContentLoaded', () => {
    const nomnom = document.getElementById('gear');
    const nomnomnom = document.getElementById('themesfromtemu');
    if (nomnom && nomnomnom) {
        nomnom.addEventListener('click',() => {
            nomnomnom.classList.toggle('icast');
        });
        document.addEventListener('click',(event) => {
            if(!nomnom.contains(event.target) && !nomnomnom.contains(event.target)){
                nomnomnom.classList.remove('icast');
            }
        });
    }

});