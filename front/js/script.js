//J'utilise fetch pour requêter l'API :
fetch("http://localhost:3000/api/products")
.then( function(res) {
    if (res.ok) {
        return res.json();
    }
})
.catch( function(err) {
    console.log("une erreur est survenue");
})