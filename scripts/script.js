const button = document.getElementById("changeTheme");

const headerClass = document.getElementsByClassName('header')[0];
const navBarClass = document.getElementsByClassName('navbar')[0];

let option = 0;

//Cambia los colores de la clase header y navbar al hacer click en el botón 'Tema'
button.addEventListener("click", function() {

    switch (option){
        case 0: headerClass.style.backgroundColor = 'rgb(' + 0 + ',' + 200 + ',' + 0 + ',' + 0.15 + ')';
                navBarClass.style.backgroundColor = 'rgb(' + 0 + ',' + 100 + ',' + 0 + ',' + 0.50 + ')';
            break;
        case 1: headerClass.style.backgroundColor = 'rgb(' + 100 + ',' + 100 + ',' + 50 + ',' + 0.15 + ')';
                navBarClass.style.backgroundColor = 'rgb(' + 100 + ',' + 100 + ',' + 50 + ',' + 0.50 + ')';
            break;
        case 2: headerClass.style.backgroundColor = 'transparent';
                navBarClass.style.backgroundColor = 'rgb(' + 59 + ',' + 59 + ',' + 100 + ',' + 0.75 + ')'; 
                option = 0; return;
                
    }
    option++;
});
