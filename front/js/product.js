//URLsearchParams :

let product = fetch("http://localhost:3000/api/products.html?id"+_id)
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
    
let url = new URL(product);
let searchParams = new URLSearchParams(url.search);

for (let p of searchParams) {
    console.log(p);
};