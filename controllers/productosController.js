import { clientServices } from "../services/clientService.js";
import { MostrarProductos } from "./mostrarProductoController.js";

//Capturando la seccion para mostrar los productos
const productosAdmin = document.querySelector("[data-productos-admin]");

//Recorrer los datos traidos del JSON
clientServices.listaProductos().then(data => {
    data.forEach(({ nombre, precio, descripcion, imagen, id, categoria }) => {
        //Imprimir datos en el index
        const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
        productosAdmin.appendChild(nuevoProducto);
    });
}).catch(error => alert("Ocurrió un error"));