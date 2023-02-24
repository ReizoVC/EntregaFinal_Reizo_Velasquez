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
    {
        id:5,
        nombre: "pan",
        precio: 2,
        img:
            "data:image/jpeg;base64,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"
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