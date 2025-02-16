
(function(){

    document.addEventListener('click',burgerInet)

    function burgerInet(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavItem = e.target.closest('.nav__item')

        if(!burgerIcon && !burgerNavItem) return
        if(document.documentElement.clientWidth > 900) return

        if(!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        }else {
            document.body.classList.remove('body--opened-menu')
        }
    }
})()