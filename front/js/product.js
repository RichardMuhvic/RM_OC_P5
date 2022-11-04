function productID() {
    let url = new URL(product);
    let searchParams = new URLSearchParams(url.search);
    
    for ( let p in searchParams ) {
        console.log(p);

        let product = fetch("http://localhost:3000/api/products.html?id"+productID[i]._id)
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

        console.log(product);
    };
};
