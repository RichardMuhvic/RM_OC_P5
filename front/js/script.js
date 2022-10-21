//Utilisation de 'fetch' pour requêter l'API :
fetch("http://localhost:3000/api/products")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value) {
        console.log(value);
        products(value);
    })
    .catch(function(err) {
        console.log(err);
    });

// Déclaration de la variable products :
//let products;

function value(products) {
    for( let i = 0; i < products.length; i++ ) {
        // Création de la section article qui va recevoir tous les élements des produits :
        const sectionBlock = document.querySelector(".items");
    
        // Création d'une balise article pour accueillir l'ensemble du block :
        const sectionArticle = document.createElement("article");
    
        // Création des éléments dans le DOM :
        const productId = document.createElement("a");
        // On accède à l'indice 'i' de la liste product pour configurer la source de l'ID :
        productId = products[i]._id;
        // On rattache l'ID à sectionArticle (la balise article) :
        sectionArticle.appendChild(productId);
    
        // On recommence les trois opérations précédentes pour image, name, description:
        const productImage = document.createElement("img");
        productImage = products[i].imageUrl;
        sectionArticle.appendChild(productImage);
    
        const productName = document.createElement("h3");
        productName = products[i].name;
        sectionArticle.appendChild(productName);
    
        const productDescription = document.createElement("p");
        productDescription = products[i].description;
        sectionArticle.appendChild(productDescription);
    
        // On rattache la balise article à la section fiches
        sectionBlock.appendChild(sectionArticle);
    
        // Création du block HTML du DOM :
        sectionArticle.querySelector("# items").innerHTML += 
        `<a href="./product.html?id=${products[i]._id}">
            <article>
                <img src=${products[i].imageUrlmage} alt=${products[i].altTxt}>
                <h3 class="productName">${products[i].name}</h3>
                <p class="productDescription">${products[i].description}</p>
           </article>
      </a>`;
    };
};

value(products);
