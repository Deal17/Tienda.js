
   function BienvenidoaBaambaam() {
    let nombre = prompt ("Hola,¿Cómo te llamas?");
    let mensaje = `Bienvenido/a ${nombre} a BaamBaam, estampados con la mejor durabilidad`;
    alert(mensaje);
    let respuesta = prompt("Escribe el logo o marca de tu camiseta que deseas comprar: Markit, Quicksilver, Calavera, Nike, Lv y dnb");

   const precioMarkit = 55000;
   const precioQuicksilver = 48000;
   const precioCalavera = 46000;
   const precioNike = 50000;
   const precioLv = 46000;
   const preciodnb = 50000;

   const descuento4 = x=> x * 0.96;
   const descuento8 = x=> x * 0.92;

   respuesta.toLowerCase();

   while ( respuesta != "fin") {
     switch (respuesta.toLowerCase()){
        case "markit": 
            alert(`El ${respuesta} tiene un valor de ${precioMarkit} Pesos`);
            let cantidadMarkit = parseInt(prompt(`¿Cuántas camisetas Markit quieres? Desde 4 unidades, 4% dcto. Desde 7 unidades 8% dcto`));
            if(cantidadMarkit <=3){
                alert(`el valor de camiseta/s ${cantidadMarkit} Markit es de $ ${(cantidadMarkit*precioMarkit)} Pesos`);
            }else if(cantidadMarkit >= 4 && cantidadMarkit <= 8){
                alert(`El valor de camiseta/s ${cantidadMarkit} Markit es de $ ${cantidadMarkit*(descuento4(precioMarkit))} Pesos`);
            }else if(cantidadMarkit >= 7){
                alert(`el valor de camiseta/s ${cantidadMarkit} Markit es de $ ${cantidadMarkit*(descuento8(precioMarkit))} Pesos`);
            }
        break;

        case "quicksilver": 
            alert(`El ${respuesta} tiene un valor de ${precioQuicksilver} Pesos`);
            let cantidadQuicksilver = parseInt(prompt(`¿Cuántas camisetas Quicksilver quieres? Desde 4 unidades, 4% dcto. Desde 7 unidades 8% dcto`));
            if(cantidadQuicksilver <=3){
                alert(`el valor de camiseta/s ${cantidadQuicksilver} Quicksilver es de $ ${(cantidadQuicksilver*precioQuicksilver)} Pesos`);
            }else if(cantidadQuicksilver >= 4 && cantidadQuicksilver <= 8){
                alert(`El valor de camiseta/s ${cantidadQuicksilver} Quicksilveres de $ ${cantidadQuicksilver*(descuento4(precioQuicksilver))} Pesos`);
            }else if(cantidadQuicksilver >= 7){
                alert(`el valor de camiseta/s ${cantidadQuicksilver} Quicksilver es de $ ${cantidadQuicksilver*(descuento8(precioQuicksilver))} Pesos`);
            }
        break;

        case "calavera": 
            alert(`El ${respuesta} tiene un valor de ${precioCalavera} Pesos`);
            let cantidadCalavera = parseInt(prompt(`¿Cuántas camisetas Calavera quieres? Desde 4 unidades, 4% dcto. Desde 7 unidades 8% dcto`));
            if(cantidadCalavera <=3){
                alert(`el valor de camiseta/s ${cantidadCalavera} Calavera es de $ ${(cantidadCalavera*precioCalavera)} Pesos`);
            }else if(cantidadCalavera >= 4 && cantidadCalavera <= 8){
                alert(`El valor de camiseta/s ${cantidadCalavera} Calavera es de $ ${cantidadCalavera*(descuento4(precioCalavera))} Pesos`);
            }else if(cantidadCalavera >= 7){
                alert(`el valor de camiseta/s ${cantidadCalavera} Calavera es de $ ${cantidadCalavera*(descuento8(precioCalavera))} Pesos`);
            }
        break;

        case "nike": 
            alert(`El ${respuesta} tiene un valor de ${precioNike} Pesos`);
            let cantidadNike = parseInt(prompt(`¿Cuántas camisetas Nike quieres? Desde 4 unidades, 4% dcto. Desde 7 unidades 8% dcto`));
            if(cantidadNike <=3){
                alert(`el valor de camiseta/s ${cantidadNike} Nike es de $ ${(cantidadNike*precioNike)} Pesos`);
            }else if(cantidadNike >= 4 && cantidadNike <= 8){
                alert(`El valor de camiseta/s ${cantidadNike} Nike es de $ ${cantidadNike*(descuento4(precioNike))} Pesos`);
            }else if(cantidadNike >= 7){
                alert(`el valor de camiseta/s ${cantidadNike} Nike es de $ ${cantidadNike*(descuento8(precioNike))} Pesos`);
            }
        break;

        case "lv": 
            alert(`El ${respuesta} tiene un valor de ${precioLv} Pesos`);
            let cantidadLv = parseInt(prompt(`¿Cuántas camisetas Lv quieres? Desde 4 unidades, 4% dcto. Desde 7 unidades 8% dcto`));
            if(cantidadLv <=3){
                alert(`el valor de camiseta/s ${cantidadLv} Lv es de $ ${(cantidadLv*precioLv)} Pesos`);
            }else if(cantidadLv >= 4 && cantidadLv <= 8){
                alert(`El valor de camiseta/s ${cantidadLv} Lv es de $ ${cantidadLv*(descuento4(precioLv))} Pesos`);
            }else if(cantidadLv >= 7){
                alert(`el valor de camiseta/s ${cantidadLv} Lv es de $ ${cantidadLv*(descuento8(precioLv))} Pesos`);
            }
        break;
        case "dnb": 
            alert(`El ${respuesta} tiene un valor de ${preciodnb} Pesos`);
            let cantidaddnb = parseInt(prompt(`¿Cuántas camisetas dnb quieres? Desde 4 unidades, 4% dcto. Desde 7 unidades 8% dcto`));
            if(cantidaddnb <=3){
                alert(`el valor de camiseta/s ${cantidaddnb} dnb es de $ ${(cantidaddnb*preciodnb)} Pesos`);
            }else if(cantidaddnb >= 4 && cantidaddnb <= 8){
                alert(`El valor de camiseta/s ${cantidaddnb} dnb es de $ ${cantidaddnb*(descuento4(preciodnb))} Pesos`);
            }else if(cantidaddnb >= 7){
                alert(`el valor de camiseta/s ${cantidaddnb} dnb es de $ ${cantidaddnb*(descuento8(preciodnb))} Pesos`);
            }
        break;

        default:
            alert (`El ${respuesta} no esta disponible`);
            break;
        }
        respuesta = prompt("Cotiza el valor unitario de cada camiseta: Markit, Quicksilver, calavera. ingresa FIN para salir");  
  }

  function final(){

    let despedida = (prompt("Por ultimo,¿Quieres recibir información?; "));
        if( despedida.toLocaleLowerCase() =="si"){
            alert(`Ya que tu respuesta es ${despedida}, te llegara un correo. vuelve pronto, gracia`);
        }else if(despedida.toLocaleLowerCase() == "no"){
            alert(`Ya que tu respuesta es ${despedida}, no llegara un correo.vuelve pronto, gracias`);
        }else{
            alert("respuesta mal ingresada")
        }
        }
fin();
   }