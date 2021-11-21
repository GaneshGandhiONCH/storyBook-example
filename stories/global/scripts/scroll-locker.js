(function(){    
    let disableScroll = function disableScroll() {
        if (document.body.classList.contains('disable-scroll')) {
            return false;
        }
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        let pagePosition = window.pageYOffset;  
        document.body.style.paddingRight = paddingOffset;
        document.body.classList.add('disable-scroll');
        setStyleDisableScroll();
        document.body.setAttribute('data-position', `${pagePosition}`);
        document.body.style.top = -pagePosition + 'px';
    }

    let enableScroll = function enableScroll() {
        if (!document.body.classList.contains('disable-scroll')) {
            return false;
        }
        let pagePosition = document.body.getAttribute('data-position');
        document.body.style.top = 'auto';
        document.body.classList.remove('disable-scroll');
        setStyleEnableScroll()
        document.body.style.paddingRight = '';
        window.scrollTo(0, +pagePosition);
        document.body.removeAttribute('data-position');
    }

    function setStyleDisableScroll() {
        document.body.style.position = 'relative';
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        document.body.style.position = 'fixed';
        document.body.style.left = '0';
        document.body.style.top = '0';
        document.body.style.width = '100%';
    }

    function setStyleEnableScroll() { 
        document.body.style.position = '';
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.body.style.position = '';
        document.body.style.left = '';
        document.body.style.top = '';
        document.body.style.width = '';
    }

    window.disableScroll = disableScroll;
    window.enableScroll = enableScroll;
})();
