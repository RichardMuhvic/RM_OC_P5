//Utilisation de 'fetch' pour requêter l'API :
fetch("http://localhost:3000/api/products")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value) {
        console.log(value);
    })
    .catch(function(err) {
        console.log(err);
    });

// Déclaration de la variable products :
let products;

function items(products) {
    // Création de la boucle 'for' pour afficher les produits :
    for(let i=0; i<products[i].length; i++ ) {
        // Création de la section article qui va recevoir tous les élements des produits :
        const sectionArticle = document.querySelector(".items");

        // Création des éléments dans le DOM :
        const productId = document.createElement("a");
        productId = products._id;

        const productImage = document.createElement("img");
        productImage = products.imageUrl;

        const productName = document.createElement("h3");
        productName = products.name;

        const productDescription = document.createElement("p");
        productDescription = products.description;

        const productAltTxt = document.createElement("alt");
        productAltTxt = products.altTxt;

        const productPrice = document.createElement("p");
        productPrice = products.price;

        // Parenter les éléments à la section article :
        sectionArticle.appendChild(productId);
        sectionArticle.appendChild(productImage);
        sectionArticle.appendChild(productName);
        sectionArticle.appendChild(productDescription);

        // Création du block html du DOM :
        sectionArticle.querySelector("#items").innerHTML += 
        `<a href="./product.html?id=${productId}">
            <article>
                <img src=${productImage} alt=${productAltTxt}>
                <h3 class="productName">${productName}</h3>
                <p class="productDescription">${productDescription}</p>
            </article>
        </a>`;
    };
};

items(products);