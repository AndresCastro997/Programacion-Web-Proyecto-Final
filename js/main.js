(function() {
    "use strict";

    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function() {



        console.log("Listo");
        //Campos datos usuario:
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        //Campos pases:
        var pase_dia = document.getElementById('pase_dia');
        var pase_dos_dias = document.getElementById('pase_dos_dias');
        var pase_completo = document.getElementById('pase_completo');

        //botones y divs:
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_proudctos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        //extras:
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');


        if (document.getElementById('calcular')) {
            calcular.addEventListener('click', calcularMontos);

            pase_dia.addEventListener('blur', mostrarDias);
            pase_dos_dias.addEventListener('blur', mostrarDias);
            pase_completo.addEventListener('blur', mostrarDias);

            pase_dia.addEventListener('blur', esconderDias);
            pase_dos_dias.addEventListener('blur', esconderDias);
            pase_completo.addEventListener('blur', esconderDias);

            nombre.addEventListener('blur', validarCampos);
            apellido.addEventListener('blur', validarCampos);
            email.addEventListener('blur', validarCampos);
            email.addEventListener('blur', validarEmail);

            function calcularMontos(event) {
                event.preventDefault();
                console.log("has hecho clic en calcular");
                console.log(regalo.value);
                if (regalo.value === '') {
                    alert("debes elegir un regalo");
                    regalo.focus();
                } else {
                    console.log("ya elegiste regalo");
                    console.log(pase_dia.value);
                    console.log(pase_dos_dias.value);
                    console.log(pase_completo.value);

                    var boletosDia = parseInt(pase_dia.value, 10) || 0,
                        boletos2Dias = parseInt(pase_dos_dias.value, 10) || 0,
                        boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                        cantEtiquetas = parseInt(etiquetas.value, 10) || 0,
                        cantCamisas = parseInt(camisas.value, 10) || 0;


                    console.log("Boletos dia: " + boletosDia);
                    console.log("Boletos 2 dias: " + boletos2Dias);
                    console.log("Boletos Completos: " + boletoCompleto);

                    var totalPagar =
                        (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);

                    console.log("Total a pagar: " + totalPagar);

                    var listadoProductos = [];
                    if (boletosDia >= 1) {
                        listadoProductos.push(boletosDia + ' Pases por dia');
                    }

                    if (boletos2Dias >= 1) {
                        listadoProductos.push(boletos2Dias + ' Pases por 2 dias');
                    }

                    if (boletoCompleto >= 1) {
                        listadoProductos.push(boletoCompleto + ' Pases Completos');
                    }

                    if (cantCamisas >= 1) {
                        listadoProductos.push(cantCamisas + ' Camisas');
                    }

                    if (cantEtiquetas >= 1) {
                        listadoProductos.push(cantEtiquetas + ' paquetes de 10 etiquetas');
                    }
                    //se va mostrar el css hasta que llegue a esta parte del codigo
                    lista_proudctos.style.display = "block";

                    lista_proudctos.innerHTML = '';
                    for (var i = 0; i < listadoProductos.length; i++) {
                        lista_proudctos.innerHTML += listadoProductos[i] + '<br/>';
                    }

                    suma.innerHTML = "$ " + totalPagar.toFixed(2);




                    console.log(listadoProductos);

                }

            }

            function mostrarDias() {
                console.log(pase_dia.value);
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_dos_dias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0;

                var diasElegidos = [];

                if (boletosDia > 0) {
                    diasElegidos.push('viernes');
                }
                if (boletos2Dias > 0) {
                    diasElegidos.push('viernes', 'sabado');

                }
                if (boletoCompleto > 0) {
                    diasElegidos.push('viernes', 'sabado', 'domingo');
                }

                for (var i = 0; i < diasElegidos.length; i++) {
                    document.getElementById(diasElegidos[i]).style.display = 'block';
                }
            }

            function esconderDias() {
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_dos_dias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0;

                if (boletosDia === 0 && boletoCompleto === 0 && boletos2Dias === 0) {
                    document.getElementById('viernes').style.display = 'none';
                    document.getElementById('sabado').style.display = 'none';
                    document.getElementById('domingo').style.display = 'none';

                }
                if (boletosDia > 0 && boletoCompleto === 0 && boletos2Dias === 0) {

                    document.getElementById('sabado').style.display = 'none';
                    document.getElementById('domingo').style.display = 'none';

                }
                if (boletosDia === 0 && boletoCompleto === 0 && boletos2Dias > 0) {


                    document.getElementById('domingo').style.display = 'none';

                }











            }

            function validarCampos() {
                if (this.value == '') {
                    errorDiv.style.display = 'block';
                    errorDiv.innerHTML = 'Este campo es obligatorio';
                    this.style.border = '1px solid red';
                    errorDiv.style.border = '1px solid red';
                } else {
                    errorDiv.style.display = 'none';
                    this.style.border = '1px solid #cccccc';
                }
            }

            function validarEmail() {
                //busca un arroba
                if (this.value.indexOf("@") > -1) {
                    errorDiv.style.display = 'none';
                    this.style.border = '1px solid #cccccc';

                } else {
                    errorDiv.style.display = 'block';
                    errorDiv.innerHTML = 'correo no valido';
                    this.style.border = '1px solid red';
                    errorDiv.style.border = '1px solid red';

                }
            }
        }
    }); //DOM Contetn Loaded
})();