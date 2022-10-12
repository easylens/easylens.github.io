$(document).ready(function(){
    getSomeCameraData();

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


    $(".galeri__box").off('click').on('click', function(){
        let clone = $(this).children("img").clone();

        $(".lightbox").addClass("open");
        $("body").addClass("on-load")
        $(".lightbox-content").find("img").remove();
        $(".lightbox-content").append(clone);

        setTimeout(() => {
            $(".lightbox-content").addClass("open")

            if ($(".lightbox").hasClass("open")) {
            }
        }, 50);
    });

    
    $(document).keypress(function(e){
        alert(e.key);
        // if(e.which == 27){

        // }
    });

    $(".close-lightbox, .lightbox-overlay").off('click').on('click', function(){
        onCloseLightbox();
    });


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
    
    if (wScroll > $("#produk").offset().top - 300) {
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
            }, i * 75);
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

    if (wScroll > $("#galeri").offset().top - 300) {
        $("#galeri").find(".section-title").attr("data-scroll", "show")
        $(".navbar__link").removeClass("active");
        $(".navbar__link[href='#galeri']").addClass("active");
        $(".galeri__box img").each(function(i){
            setTimeout(() => {
                $(".galeri__box img").eq(i).attr("data-scroll", "show")
            }, (i+1) * 75);
        });
    }
})

function onCloseLightbox(){
    $(".lightbox, .lightbox-content").removeClass("open");
    $("body").removeClass("on-load")
    setTimeout(() => {
        $(".lightbox-content").find("img").remove();
    }, 150);
}