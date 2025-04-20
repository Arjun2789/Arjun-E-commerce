function get_data_local_storage() {
    let cart_products = JSON.parse(localStorage.getItem("cart")) || []
    if (cart_products.length > 0) {
        cart_show_data(cart_products)
    }
}
function cart_show_data(products) {
    let cart_main=document.getElementById("cart_info")
    let cart_products = document.createElement("div")
    cart_products.setAttribute("class","cart_products")
    let total_price=0
    let no_of_products=products.length
    products.map((p, i) => {
        let product = document.createElement("div")
        let title = document.createElement("h2")
        title.innerHTML = p.title
        let image = document.createElement("img")
        image.setAttribute("class", "cart_product_img")
        image.src = p.image
        let description = document.createElement("p")
        description.innerHTML = p.description
        let price = document.createElement("p")
        price.innerHTML = p.price + "$"
        let category = document.createElement("h3")
        category.innerHTML = p.category
        let remove_from_cart = document.createElement("button")
        remove_from_cart.innerHTML = "Remove from Cart"
        remove_from_cart.addEventListener("click", function () {
            removefromcart(p)
        })
        product.append(title, category, image, description, price, remove_from_cart)
        cart_products.append(product)
        total_price+=p.price

    })
    let cart_info=document.createElement("div")
    let tprice=document.createElement("h2")
    tprice.setAttribute("class","right")
    tprice.innerHTML="Total Price = "+total_price+"$"
    let tproducts=document.createElement("h2")
    tproducts.setAttribute("class","right")
    tproducts.innerHTML="No Of Products = "+no_of_products
    cart_info.append(tprice,tproducts)
    cart_main.append(cart_products,cart_info)

    

}
function removefromcart(p) {
    let cart_products = JSON.parse(localStorage.getItem("cart")) || []
    cart_products.splice(p,1)
    localStorage.setItem("cart",JSON.stringify(cart_products))
    window.location.reload()
}

get_data_local_storage()