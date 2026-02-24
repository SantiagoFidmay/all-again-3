fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(dados =>{
    console.log(dados.products[0].tags)
})