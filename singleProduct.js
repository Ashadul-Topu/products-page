// get single product information

const getSingleData = async () => {
    await axios.get('https://dummyjson.com/products/99')
    .then(res => {
        // console.log(res);

       let data = `
        
        <div class="product-img">
        <div class="main-img">
        <img src=${res.data.thumbnail} alt="">
        </div>
        <div class="next-img">
        <script>
             res.data.images.map(img => {
                console.log(img);
            })
        </script>
        </div>
        </div>
        <div class="product-detail">
        <h3 class="title item-title">${res.data.title}</h3>
        <h4 class="item-desc">${res.data.description}</h4>
        <p class="price item-price"> ${res.data.price} <span>price</span></p>
        <p class="discount-percent item-price">${res.data.discountPercentage}</p>
        <p class="rating item-text">Rating <span> ${res.data.rating} </span></p>
        <p class="stock item-text">Stock: <span>${res.data.stock}</span></p>
        <p class="brand item-text">Brand: <span>${res.data.brand}</span></p>
        </div>
        <div class="other-info">
        <div class="delivery">
        <p class="text-muted item-text mb">Delivery</p>
        <div class="delivery-address">
        <p class="location">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
        </svg>
        House:6, sector:11, Uttara-1230, <br> Dhaka, Bangladesh</i></p>
        <a href="#">Change Address</a>
        </div>
                <p class="text-muted item-text ma">Delivery Fee</p>
            </div>
        </div>
        `
        document.getElementById('single-product').innerHTML = data
    })
    .catch(err => console.log(err))
};
getSingleData()

            // if(res.data.images != null){
            // for(let i=0; i<res.data.images.length; i++){
                // <img src=${res.data.images[i]} alt=""> 
            //     }
            // }