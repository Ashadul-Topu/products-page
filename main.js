// export let id

// calling API : https://dummyjson.com/docs

// Todo 
// Show all Products
// show product details
//pagination 
// add to card
//search
// filter



const getData = async () => {
    await axios.get('https://dummyjson.com/products')
    .then(response => {
        let data = ''
    response.data.products.map(res => {
        // console.log(res);
        data += `
            <a href="./singleProduct.html"  target="_blank">
            <div class="item-body">
                <div class="image">
                    <img src=${res.thumbnail} alt="">
                </div>
                <h4 class="title">${res.title}</h4>
                <p class="discount-percent">$${res.discountPercentage}</p>
                <p class="price"> $${res.price} <span>price</span></p>
                <div>
                    <p class="rating">Rating:<span>${res.rating}</span></p>
                    <p class="stock">Stock:<span>${res.stock}</span></p>
                    <p class="brand">Brand:<span>${res.brand} </span></p>
                </div>
            </div>
            </a>
        `
        })
        document.getElementById('product-list').innerHTML = data
    })
    .catch(err => console.log(err))
};
getData()


// document.querySelectorAll("a").forEach(element => {
//     console.log(element);
//     element.addEventListener("click",function(e) {
//         console.log(e);
//     })
// });