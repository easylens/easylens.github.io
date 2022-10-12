$(document).ready(function(){

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    let productParams = urlParams.get('product')

    if (productParams == null || productParams == undefined || productParams == "") {
        window.location.href = "products.html"
    }else{
        if (productParams > 0) {
            getDetailCameraData(productParams)
        }else{
            window.location.href = "products.html"
        }
    }
})

function showPrice(button){
    $(".button-variant").removeClass("selected");
    $(button).addClass("selected");
    let price = $(button).attr("data-price");
    $(".price__number").text("Rp. " + price);
    $(".book-produk").removeAttr("disabled")
}

function orderWhatsapp(button){

    let title = $(button).parents(".detail-produk__text").find(".detail-produk__title").text();
    let price = $(".button-variant.selected").attr("data-price");
    let duration = $(".button-variant.selected").attr("variant-value");
    let stringText = `Halo Admin EasyLens, Saya ingin memesan *${title}* selama *${duration} Jam*. Harga yang tercantum di Website EasyLens adalah *Rp. ${price}*`;
    let encodedStringText = encodeURI(stringText)
    let link = `https://wa.me/6283861527757?text=${encodedStringText}`
    if(price != undefined){
        window.open(link, '_blank')
    }
}