//Utilisation de 'fetch' pour requêter l'API :
fetch("http://localhost:3000/api/products")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value) {
        console.log(value);
        display(value);
    })
    .catch(function(err) {
        console.log(err);
    });

function display(products) {
    for( let i = 0; i < products.length; i++ ) {

        document.getElementById("items").innerHTML += 
        `<a href="./product.html?id=${products[i]._id}">
            <article>
                <img src="${products[i].imageUrl}" alt="${products[i].altTxt}">
                <h3 class="productName">${products[i].name}</h3>
                <p class="productDescription">${products[i].description}</p>
           </article>
        </a>`;
    };
};

//URLsearchParams :
let paramsID = "http://localhost:3000/api/products.html?id="+_id;
let searchParams = new URLSearchParams(paramsID);

for (let p of searchParams) {
    console.log(searchParams);
};

