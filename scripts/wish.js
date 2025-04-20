function get_data_local_storage(){
    let wish_products=JSON.parse(localStorage.getItem("wish")) || []
    if(wish_products.length>0){
        wish_show_data(wish_products)
    }}
function wish_show_data(products) {
    let wish_main=document.getElementById("wish_info")
    let wish_products = document.createElement("div")
    wish_products.setAttribute("class","wish_products")
    let total_price=0
    let no_of_products=products.length
    products.map((p, i) => {
        let product = document.createElement("div")
        let title = document.createElement("h2")
        title.innerHTML = p.title
        let image = document.createElement("img")
        image.setAttribute("class", "wish_product_img")
        image.src = p.image
        let description = document.createElement("p")
        description.innerHTML = p.description
        let price = document.createElement("p")
        price.innerHTML = p.price + "$"
        let category = document.createElement("h3")
        category.innerHTML = p.category
        let remove_from_wish = document.createElement("button")
        remove_from_wish.innerHTML = "Remove from Wishlist"
        remove_from_wish.addEventListener("click",function(){
            removefromwish(p)
        })
        product.append(title, category, image, description, price, remove_from_wish)
        wish_products.append(product)
        total_price+=p.price
    })
    let wish_info=document.createElement("div")
    let tprice=document.createElement("h2")
    tprice.setAttribute("class","right")
    tprice.innerHTML="Total Price = "+total_price+"$"
    let tproducts=document.createElement("h2")
    tproducts.setAttribute("class","right")
    tproducts.innerHTML="No Of Products = "+no_of_products
    wish_info.append(tprice,tproducts)
    wish_main.append(wish_products,wish_info)


        
}
function removefromwish(p) {
    let wish_products=JSON.parse(localStorage.getItem("wish")) || []
    wish_products.splice(p,1)
    localStorage.setItem("wish",JSON.stringify(wish_products))
    window.location.reload()
}
get_data_local_storage()