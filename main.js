const saludar = () => {

    alert('BIENVENIDO A BARTENDER WORLD !!')
    let nombre = prompt ('INGRESE SU NOMBRE').toUpperCase();
    let edad = Number(prompt('INGRESE SU EDAD'));
    
    if (edad >= 18) {
        alert('BIENVENIDO '+nombre+' PODES INGRESAR')
    } else{
        alert('LO SIENTO, SOS MENOR DE EDAD')
    }
}
saludar();

const comprarProducto = () => {
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let totalCompra = 0;
    let seguirComprando = false;

    do {
        producto = prompt('¿QUE COCTELERA QUERES? BOSTON, BAHIA O COBBLER').toLowerCase()
        cantidad = parseInt(prompt('¿CUANTAS QUERES?'))

        let cantidadValidada = validarCantidad(cantidad);

        switch (producto) {
            case 'boston':
                precio = 2000;
                break;
                
            case 'bahia':
                precio = 1500;
                break;
                
            case 'cobbler':
                precio = 3000;
                break;
        
            default:
                alert('DATOS INGRESADOS INCORRECTOS, POR FAVOR SELECCIONE UN PRODUCTO')
                break;
        }
        totalCompra += precio * cantidadValidada;        

        alert('TOTAL A ABONAR: $'+precio * cantidadValidada);
        seguirComprando = confirm('¿QUERES AGREGAR OTRA COCTELERA?');

    } while (seguirComprando);
    
};


const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0){
            alert('DEBE AGREGAR UN NUMERO.')
        } else {
            alert('DEBE AGREGAR UN NUMERO ENTERO')
        }
        cantidad = parseInt(prompt('¿CUANTOS QUERES COMPRAR?'))
    }
    return cantidad;
}
comprarProducto();