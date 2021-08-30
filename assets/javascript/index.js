$(".carousel-inner").hide()


$(document).ready(function(){

// Menú DropDown ao passar o mouse-------------------------------------------
    $("#navbarDropdown").mouseenter(function(){
        $("#opcao_menu").dropdown("show")
    })
    $("#opcao_menu").mouseleave(function(){
        $("#opcao_menu").dropdown("hide")
    })


    $(".carousel-inner").fadeIn(2000);

//Criando Botão de ScrollTop-------------------------------------------

    //Ao clicar nos href com classe scroll
    $("#scroll").click(function (event) {
      event.preventDefault();

      $("html, body").animate({scrollTop: 0}, 2300);
    });


//Dando Foco maior nas imagens mais vendidas ao passar o mouse.----------------------
    $("#mais_vendida1").mouseover(function(){
        $("#mais_vendida1").attr("src", "./imagens/mais_vendida1_2.jpeg")

    })
    $("#mais_vendida1").mouseout(function(){
        $("#mais_vendida1").attr("src", "./imagens/prata_mais_vendida1.jpeg")
    })
    

    $("#mais_vendida2").mouseover(function(){
        $("#mais_vendida2").attr("src", "./imagens/mais_vendida2_2.jpeg")
        
    })
    $("#mais_vendida2").mouseout(function(){
        $("#mais_vendida2").attr("src", "./imagens/prata_mais_vendida2.jpeg")
    })



    $("#mais_vendida3").mouseover(function(){
        $("#mais_vendida3").attr("src", "./imagens//prata_mais_vendida_3_2.jpeg")
        
    })
    $("#mais_vendida3").mouseout(function(){
        $("#mais_vendida3").attr("src", "./imagens/prata_mais_vendida3.jpeg")

    })
 
    // $("#click-link").click(document).ready(function(){
    //     $('#entregas, #entrega').addClass('active')
    //     $('#q_somos, #quem_somos').removeClass('active')
    //  })

});

console.log("yay")