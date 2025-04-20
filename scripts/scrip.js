let cartproduct=JSON.parse(localStorage.getItem("cart")) || []
let wishproduct=JSON.parse(localStorage.getItem("wish")) || []
function get_data() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => show_data(data));
}

function show_data(data) {
    let products = document.getElementById("products")
    console.log(data)
    data.map((p, i) => {
        let product = document.createElement("div")
        let title = document.createElement("h2")
        title.innerHTML = p.title
        let image = document.createElement("img")
        image.setAttribute("class", "product_img")
        image.src = p.image
        let description = document.createElement("p")
        description.innerHTML = p.description
        let price = document.createElement("p")
        price.innerHTML = p.price + "$"
        let category = document.createElement("h3")
        category.innerHTML = p.category
        let add_to_cart = document.createElement("button")
        add_to_cart.innerHTML = "Add To Cart"
        add_to_cart.addEventListener("click",function(){
            addToCart(p)
        })
        let buy_now = document.createElement("button")
        buy_now.innerHTML = "Buy Now"
        let add_to_wishlist = document.createElement("button")
        add_to_cart.setAttribute("class","button")
        buy_now.setAttribute("class","button")
        add_to_wishlist.setAttribute("class","button")
        add_to_wishlist.innerHTML = "Add to Wishlist"
        add_to_wishlist.addEventListener("click",function(){
            addtowishlist(p)
        })
        product.append(title, category, image, description, price, add_to_cart, buy_now, add_to_wishlist)
        products.append(product)
    })

}
function addToCart(product){
    cartproduct.push(product)
    localStorage.setItem("cart",JSON.stringify(cartproduct))
    
}
function addtowishlist(product){
    wishproduct.push(product)
    localStorage.setItem("wish",JSON.stringify(wishproduct))
    
}
get_data()
