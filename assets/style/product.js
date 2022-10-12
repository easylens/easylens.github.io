$(document).ready(function(){
    getAllCameraData();

    $("#filter-content").change(function(){
        let value = $(this).val();
        let title = $(this).children("option:selected").text()
        $(".produk-page__header .content-title").text(title);

        if (value == "semua") {
            $(".produk-page__box").attr("data-product-show", "show")
        }else{
            $(".produk-page__box").removeAttr("data-product-show");
            $(".produk-page__box[data-category='"+value+"']").attr("data-product-show", "show")
        }

    })

    setTimeout(() => {
        $(".produk-page__box").each(function(i){
            setTimeout(() => {
                $(".produk-page__box").eq(i).attr("data-scroll", "show")
            }, i * 50);
        });
    }, 150);
});