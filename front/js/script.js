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

// Déclaration de la constante products qui sera un produit obtenu de l'API :
let products;

// Création de la boucle 'for' pour afficher les produits :
for(let i=0; i<products[i].length; i++ ) {
    // Création de la section article qui va recevoir tous les élements des produits :
    const sectionArticle = document.querySelector("#items");

    // Création du block html du DOM :
    sectionArticle.querySelector("#items").innerHTML += 
    `<a href="./product.html?id=42">
        <article>
            <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
            <h3 class="productName">Kanap name1</h3>
            <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
        </article>
    </a>`;

    // Création des éléments dans le DOM :
    const products = products[i];

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
};