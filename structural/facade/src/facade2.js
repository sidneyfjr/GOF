/*
Um exemplo bem conhecido de uso do padrão Facade no dia a dia usando JavaScript é o 
uso de bibliotecas ou frameworks que fornecem uma interface simplificada para realizar 
tarefas complexas.

Vamos considerar o exemplo do jQuery, uma biblioteca JavaScript popular. 
O jQuery oferece uma abordagem simplificada para manipular o DOM, lidar com eventos, 
fazer requisições AJAX e realizar animações. Ele atua como uma fachada que oculta muitos 
dos detalhes complexos de manipulação do JavaScript nativo e do DOM dos navegadores.

No exemplo acima, o jQuery fornece uma interface simplificada para selecionar elementos, 
manipular estilos, lidar com eventos e fazer requisições AJAX. Ele oculta grande parte 
da complexidade do JavaScript nativo e oferece uma maneira mais intuitiva 
de realizar essas tarefas.
*/

// Usando JavaScript nativo sem jQuery
const elemento = document.getElementById("meuElemento");
elemento.style.color = "red";
elemento.addEventListener("click", () => {
    console.log("Clicado");
});
fetch("https://api.exemplo.com/dados")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

// Usando jQuery
$("#meuElemento").css("color", "red")
    .on("click", () => {
        console.log("Clicado");
    });
$.get("https://api.exemplo.com/dados", data => {
    console.log(data);
});
