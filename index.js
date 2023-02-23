const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer")

const productos = [
    {
        id:1,
        nombre: "Teclado", 
        precio: 50,
        img:
            "../img/teclado.jpg",
    },
    {
        id:2,
        nombre: "Computadora", 
        precio: 500,
        img:
            "../img/pc.webp",
    },
    {
        id:3,
        nombre: "Mouse", 
        precio: 30,
        img:
            "../img/mouse.webp",
    },
    {
        id:4,
        nombre: "Audifonos", 
        precio: 60,
        img:
            "../img/audifonos.jpg",
    },
];

let carrito = [];

productos.forEach((product) => {
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
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio:product.precio,
        });
    });
    
    console.log(carrito);
});

verCarrito.addEventListener("click", () =>{
    modalContainer.innerHTML="";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML= `
        <h1 class="modal-header-tittle">Carrito.</h1>
    `;

    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () =>{
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton)



    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img class="card-img" src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio}</p>
        `;

        modalContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalPrecio = document.createElement("div")
    totalPrecio.className = "total-content"
    totalPrecio.innerHTML = `total a pagar : ${total} $`;
    modalContainer.append(totalPrecio)

    let pagar = document.createElement("button")
    pagar.innerText = "Pagar";
    pagar.className = "pagar";

    totalPrecio.append(pagar)
});