
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
  var carrito=[]

  /*AGREGAR ITEMS AL LISTADO DEL CARRITO Y CALCULAR PRECIO*/ 
  $(".boton-agregar").click(function(){

    $(this).text("Agregado").attr('disabled', true);
    var nombreItem = $(this).parents('.card').children('.card-body').children('h4').text();
    var precioItem = parseFloat($(this).parents('.card').children('.card-body').children('h5').text().substring(1));
    
    var item =[nombreItem,precioItem]
    carrito.push(item);
    
    //carrito.filter((item, index)=> carrito.indexOf(item)==index)

    console.log(carrito);

    renderizar(carrito);
  });

  /*RENDERIZAR LISTADO DE ITEMS AGREGADOS*/ 
  function renderizar (listado){

    $('#carrito').empty();

    for (const [nombre,precio] of listado){

      $('#carrito').append(`<li>1 x <span class="nombre">${nombre}</span> <span class="precio">${precio}</span> 
      <button type="button" class="btn btn-outline-danger boton-eliminar">X</button></li>`);
    }

    /*CALCULAR PRECIO*/ 
    precioTotal=0;
    for(i=0;i<listado.length;i++){
      precioTotal+=listado[i][1];
      console.log(precioTotal);
    }
    $('.precio-total').text(precioTotal.toFixed(2));


    /*ELIMINAR ITEMS DEL LISTADO Y MODIFICAR PRECIO*/ 
    $(".boton-eliminar").click(function(){

      precioTotal-=$(this).parent().children(".precio").text();
      console.log(precioTotal);
      $('.precio-total').text(precioTotal.toFixed(2));
     
      $(".boton-agregar").attr('disabled', false);

      var nombreEliminado = $(this).parent().children(".nombre").text();
  
      for(i=0;i<carrito.length;i++){
        if (nombreEliminado==carrito[i][0])
        {console.log("Hola");
        carrito.splice(i,1);
        console.log(carrito);
        }
      }

      $(this).parent().empty();

    })
  }
  
  /*VACIAR EL CARRITO*/ 
  $("#boton-vaciar").click(function(){
    $("#carrito").empty();
    precioTotal=0;
    $('.precio-total').text(precioTotal.toFixed(2)); 
    carrito=[];
    console.log(carrito)
  });
  

  /*COMPRAR CUANDO EL PRECIO ES MAYOR A 0*/ 
  $("#boton-comprar").click(function(){
    if(precioTotal>0){
      $("#modal").toggle();
    }
  })
};


