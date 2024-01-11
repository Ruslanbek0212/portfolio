window.addEventListener('load', function (e) {

    // header dropdown menu

    $('.dropdownItem').click(function () {
        $(this).parent().find('.dropdown').slideToggle(500)
    })

    // modal-signin show

    $('#signin').click(function () {
        $('.signin-modal').fadeIn(500)
    })

    // modal-signin close

    $('.fa-close').click(function () {
        $('.signin-modal').fadeOut(500)
    })

    // modal-signin show password

    $('.fa-eye').click(function () {
        $('#pass').attr('type', 'text')
        $(this).css({ display: 'none' })
        $(".fa-eye-slash").css({ display: 'block' })
    })

    // modal-signin hide password

    $('.fa-eye-slash').click(function () {
        $('#pass').attr('type', 'password')
        $(this).css({ display: 'none' })
        $(".fa-eye").css({ display: 'block' })
    })

    // modal-signin input

    $('.signin-modal button').click(function (e) {
        e.preventDefault()
        if ($('.signin-modal input').val() == "") {
            $('.signin-modal h2').html('Bosh qoldirmang!').css({ color: 'red' })
            document.querySelector('.signin-modal button').disabled = true
        }
        // if($('.modal-signin input'))
    })

    // header navbars bars show hide

    $(".bars").click(function () {
        $('header ul').not('header .dropdown').slideToggle()
    })

    // header header-title owl-carousel

    $('header .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed : 1000
    })

});