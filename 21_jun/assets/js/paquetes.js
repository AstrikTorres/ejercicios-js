/* Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. Suele hacer venta por correo y la empresa de logística les cobra por peso de cada paquete así que deben calcular el peso de los payasos y muñecas que saldrán en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 g. Escribir un programa que lea el número de payasos y muñecas vendidos en el último pedido y calcule el peso total del paquete que será enviado. */

var muñecas = 0.075;
var payaso = .112;

var cantidad_muñecas = parseInt(prompt('Ingrese la cantidad de muñecas que desea'));
var cantidad_payasos = parseInt(prompt('Ingrese la cantidad de payasos que desea'));

function peso_total (){
    var pt_muñecas = muñecas*cantidad_muñecas;
    var pt_payasos = payaso*cantidad_payasos;
    var pt = pt_muñecas + pt_payasos
    if (pt > 1) {
        console.log(`El peso del paquete es ${pt}`);
        console.log(`se le enviaran ${Math.trunc(pt/1)+1} paquetes`)
    
    }
    else {
        console.log(`El peso del paquete es ${pt}`);
        console.log('Su pedido se enviara en un solo paquete')
    }   
}
peso_total();