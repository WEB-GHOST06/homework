
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

/////////////modal//////////////

    const modal = document.querySelector('.modal')
    const modalBtn = document.querySelector('.about__img-button')

    modalBtn.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    
    }


})()