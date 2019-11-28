$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$(function(){
    $("#get-register").validate({
        rules: {
            fullName: "required",
            email: {
                required: true,
                email: true
            },
            location: "required",
            mobile: {
                required: true,
                minlength: 10,
                maxlength: 10,
            },
            otp: "required"
        },
        messages: {
            fullName: "<span style='color:red'>Enter your name</span>",
            email: {
                required: "<span style='color:red'>Enter your Email Id</span>",
                email: "<spam style='color:red'>Enter a valid Email address</span>"
        },
            location: "<span style='color:red'>Enter your location</span>",
            mobile: {
                required: "<span style='color:red'>Enter your mobile no.</span>",
                minlength:"<span style='color:red'>Enter valid mobile no.</span>",
                maxlength:"<span style='color:red'>Enter valid mobile no.</span>",
            },
            otp: "<span style='color:red'>Enter your otp no.</span>",
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });
});


/*$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})*/

/*var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});*/


// for the following jQuery we need two button(play)&(stop).
/*var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})*/