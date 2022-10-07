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
        console.log("une erreur est survenue");
    });

// Déclaration de la constante products qui sera un produit obtenu de l'API


// Création de la boucle 'for' pour afficher les produits :
for(let i=0; i<products[i].length; i++ ) {
    // Création de la sectio narticle qui va recevoir tous les élements des produits :
    const sectionArticle = document.querySelector(".class");

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
}