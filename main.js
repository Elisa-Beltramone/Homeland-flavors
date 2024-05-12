let shop = document.getElementById("shop");

let shopItemsData = [{
    id: "producto1",
    name: "Playadito",
    price: 21,
    desc: "Yerba 1 kg",
    img: "imagenes/playadito.jpeg"
},
{
    id: "producto2",
    name: "Taragui",
    price: 19,
    desc: "Yerba 1 kg",
    img: "imagenes/taragui.jpg"
},
{
    id: "producto3",
    name: "Dulce de leche",
    price: 14,
    desc: "Dulce de leche colonial 1kg",
    img: "imagenes/dulcedelechecolonial.jpeg"
},
{
    id: "producto4",
    name: "Chocolinas",
    price: 8,
    desc: "Galletitas Chocolinas",
    img: "imagenes/chocolinas.jpeg"
}]

let basket = [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, desc, img } = x;
        return `<div id=product-id-${id} class="item">
            <img width = "219px" src =${img} alt = "" >
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>$ ${price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                            <div id=${id} class="quantity">0</div>
                            <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
                        </div>
                    </div>
                </div>
    </div>`;
    }).join(""));
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    update(selectedItem.id);
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(selectedItem.id);
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x, y)=> x + y, 0);
}





