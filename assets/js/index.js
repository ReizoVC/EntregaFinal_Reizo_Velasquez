
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer")
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProductos =  async () => {
    const response = await fetch("../../data.json");
    const data = await response.json();
    console.log(data)

    data.forEach((product) => {
        let content = document.createElement("div");
        content.className = "card"
        content.innerHTML = `
            <img class="card-img" src="${product.img}">
            <h3>${product.nombre}</h3>
            <p class="price">${product.precio} $</p>
        `;
    
        shopContent.append(content);
    
        let comprar = document.createElement("button")
        comprar.innerText = "comprar";
        comprar.className = "cardbtn";
    
        content.append(comprar)
    
        comprar.addEventListener("click", () =>{
    
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
            
            if (repeat) {
                carrito.map((prod) =>{
                    if(prod.id === product.id){
                        prod.cantidad++;
                    }
                });
            }else{
                carrito.push({
                    id: product.id,
                    img: product.img,
                    nombre: product.nombre,
                    precio:product.precio,
                    cantidad: product.cantidad,
                });
    
            }
            console.log(carrito);
            carritoCounter();
            saveLocal();
        });
    });
};

getProductos();



const saveLocal = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

