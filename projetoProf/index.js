document.addEventListener(
    //Garante que carrega todo o HTML antes de executar o js
    "DOMContentLoaded",
    function () {
        //Seleciona o elemento <menu> dp HTML pelo nome do elemento
        const menu = document.querySelector("menu");
        //Obtem a distancia em pixels enrre o topo da pagina e o menu
        const topo = menu.offsetTop

        setTimeout(  window.addEventListener("scroll", function () {
            const posicaoScroll = document.documentElement.scrollTop || document.body.scrollTop;
           
            //criando uma condicional
            //Se a posição do scroll for maior ou igual ao topo da página
            if (posicaoScroll >= topo) {
                //fixo meu menu
                menu.classList.add('fixed');
            }
            //senão
            else {
                menu.classList.remove('fixed')
            }
        }), 0)
  
    }
)

