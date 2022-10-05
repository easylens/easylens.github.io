$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        autoWidth: true,
        lazyLoad:true,
        dots: true,
        loop: true,
        margin: 10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    $(".navbar__link").off('click').on('click', function(){
        $(".navbar__link").removeClass("active");
        $(this).addClass("active");

        setTimeout(() => {
            if ($(".navbar ul").hasClass("show")) {
                $(".navbar ul").removeClass("show");
                $(".navbar-overlay").removeClass("show");
            }
        }, 50);
    });
    
    $(".navbar-overlay").click(function(){
        $(".navbar ul").removeClass("show");
        $(".navbar-overlay").removeClass("show");
    });

    $(".beranda__image-group").attr("data-scroll", "show");
    $(".beranda__text-group").children().each(function(i){
        setTimeout(() => {
            $(".beranda__text-group").children().eq(i).attr("data-scroll", "show")
            if (i == 2) {
                setTimeout(() => {
                    $(".layanan__box-group").attr("data-scroll", "show");
                    $(".layanan__box").each(function(i){
                        setTimeout(() => {
                            $(".layanan__box").eq(i).attr("data-scroll", "show")
                        }, (i+1) * 150);
                    })
                }, 200);
            }
        }, (i+1) * 200);
    });

    $(".menu-button").click(function(e){
        e.preventDefault();

        $(".navbar ul").toggleClass("show");

        setTimeout(() => {
            if ($(".navbar ul").hasClass("show")) {
                $(".navbar-overlay").addClass("show")
            }else{   
                $(".navbar-overlay").removeClass("show")
            }
        }, 50);
    })

})

$(window).on('scroll', function(){
    let wScroll = $(this).scrollTop();
    
    if (wScroll < 200) {
        $(".navbar__link").removeClass("active");
        $(".navbar__link[href='#beranda']").addClass("active")
    }
    
    if (wScroll > $("#layanan").offset().top - 200) {
        $("#layanan").find(".section-title").attr("data-scroll", "show")
        $(".navbar__link").removeClass("active");
        $(".navbar__link[href='#layanan']").addClass("active")    
        $(".layanan__content-box").each(function(i){
            setTimeout(() => {
                $(".layanan__content-box").eq(i).attr("data-scroll", "show")
            }, i * 200);
        })
    }
    
    if (wScroll > $("#produk").offset().top - 200) {
        $(".navbar__link").removeClass("active");
        $(".navbar__link[href='#produk']").addClass("active");
        $("#produk .section-header").children().each(function(i){
            setTimeout(() => {
                $("#produk .section-header").children().eq(i).attr("data-scroll", "show")
            }, i * 150);
        });
        
        $(".produk__box").each(function(i){
            setTimeout(() => {
                $(".produk__box").eq(i).attr("data-scroll", "show")
            }, (i+1) * 150);
        });
    }
    
    if (wScroll > $("#produk").offset().top + 100) {
        $("#cara-pemesanan").find(".section-title").attr("data-scroll", "show")
        $(".navbar__link").removeClass("active");
        $(".navbar__link[href='#cara-pemesanan']").addClass("active");
        $(".order__box").each(function(i){
            setTimeout(() => {
                $(".order__box").eq(i).attr("data-scroll", "show")
            }, (i+1) * 150);
        });
    }
})