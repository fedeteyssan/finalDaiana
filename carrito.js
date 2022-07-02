
$(document).ready(function(){     
  PlayCarrito();
  });

  function PlayCarrito (){
  /*FOR RECORRE ARRAY PRODUCTOS.JS Y RENDERIZA/MUESTRA CADA PRODUCTO*/ 

  for(var i=0; i < productos.length; i++){
     $('#catalogo').append (`<div class="col-lg-4 col-md-6 mb-5">\n
     <div class="card h-100">\n
     <img class="card-img-top" src="${productos[i].imagen} " alt="">\n
     <div class="card-body">\n
     <h4 class="card-title text-center">${productos[i].nombre}</h4>\n
     <p class="card-text">${productos[i].descripcion}</p>\n
     <h5>\$${productos[i].precio}</h5>\n
     <h6 style="display:none">${productos[i].id}</h5>\n
     <button type="button" class="btn btn-outline-danger boton-agregar">Añadir</button>\n
     </div>\n
     </div>\n
     </div>`);
  }   
  

  var precioTotal = 0;  

  /*AGREGAR ITEMS AL LISTADO DEL CARRITO Y CALCULAR PRECIO*/ 
  $(".boton-agregar").click(function(){

    var nombreItem = $(this).text('Agregado').parents('.card').children('.card-body').children('h4').text();
    var precioItem = $(this).text('Agregado').parents('.card').children('.card-body').children('h5').text();  
    var idItem = $(this).text('Agregado').parents('.card').children('.card-body').children('h6').text();  
    
    $('#carrito').append(`<li>1 x ${nombreItem} <span>${precioItem}</span> <button type="button" id="boton-eliminar${idItem}" 
    class="btn btn-outline-danger">X</button></li>`);
       
    precioTotal += parseFloat(precioItem.substring(1));
    console.log(precioTotal)
    
    $('.precio-total').text(precioTotal.toFixed(2));   

    
    /*BOTONES PARA ELIMINAR CADA ITEM DEL LISTADO DEL CARRITO Y CALCULAR PRECIO*/ 

    $("#boton-eliminar0").click(function(){
      
      $('.precio-total').text(precioTotal.toFixed(2));  
      $(this).parent().empty();
    });

  });   

  
  /*VACIAR EL CARRITO*/ 
  $("#boton-vaciar").click(function(){
    $("#carrito").empty();
    precioTotal=0;
    $('.precio-total').text(precioTotal.toFixed(2)); 
  });

  /*COMPRAR CUANDO EL PRECIO ES MAYOR A 0*/ 
  $("#boton-comprar").click(function(){
    if(precioTotal>0){
      $("#modal").toggle();
    }
  })
};


