// Mobile menu toggle: toggles class on body and updates section name
(function(){
    function getPageName() {
        const path = window.location.pathname.split('/').pop().toLowerCase();
        if (!path || path === 'home.html' || path === '') return 'INÍCIO';
        if (path.includes('contact')) return 'CONTATO';
        if (path.includes('library')) return 'BIBLIOTECA';
        if (path.includes('professional')) return 'PROFISSIONAL';
        return '';
    }

    function init() {
        const btn = document.querySelector('.mobile-hamburger');
        const sectionNameEl = document.querySelector('.mobile-section-name');
        const navLinks = document.querySelectorAll('nav ul li a');

        if (sectionNameEl) sectionNameEl.textContent = getPageName();

        if (!btn) return;
        btn.addEventListener('click', function(){
            document.body.classList.toggle('mobile-menu-open');
        });

        // Close menu when clicking a nav link and update the section name
        navLinks.forEach(function(a){
            a.addEventListener('click', function(){
                document.body.classList.remove('mobile-menu-open');
                // small timeout so the nav closes before page navigation
                setTimeout(function(){
                    const el = document.querySelector('.mobile-section-name');
                    if (el) el.textContent = getPageName();
                }, 100);
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e){
            const open = document.body.classList.contains('mobile-menu-open');
            if (!open) return;
            const nav = document.querySelector('nav');
            const hamburg = document.querySelector('.mobile-hamburger');
            if (nav && !nav.contains(e.target) && hamburg && !hamburg.contains(e.target)) {
                document.body.classList.remove('mobile-menu-open');
            }
        });

        // Header hide-on-scroll for mobile (hide on scroll down, show on scroll up)
        var lastScroll = window.scrollY || window.pageYOffset;
        var ticking = false;
        function onScroll() {
            if (ticking) return;
            window.requestAnimationFrame(function(){
                var current = window.scrollY || window.pageYOffset;
                var header = document.querySelector('header');
                if (!header) return;
                if (current > lastScroll && current > 40) {
                    // scrolling down
                    header.classList.add('hide-header');
                } else {
                    // scrolling up
                    header.classList.remove('hide-header');
                }
                lastScroll = current <= 0 ? 0 : current;
                ticking = false;
            });
            ticking = true;
        }
        window.addEventListener('scroll', onScroll, {passive: true});

        // Intercept '#aboutme' link on mobile to scroll vertically to second page
        var aboutLinks = document.querySelectorAll('a[href="#aboutme"]');
        aboutLinks.forEach(function(a){
            a.addEventListener('click', function(ev){
                if (window.matchMedia('(max-width: 768px)').matches) {
                    ev.preventDefault();
                    // find second .page inside .content
                    var pages = document.querySelectorAll('.content .page');
                    if (pages && pages.length > 1) {
                        pages[1].scrollIntoView({behavior: 'smooth'});
                    }
                }
            });
        });

        // Move footer into first page on mobile so it's visible within the first section
        var footer = document.querySelector('footer');
        var firstPage = document.querySelector('.page#first-page');
        var mq = window.matchMedia('(max-width: 768px)');
        function moveFooterIfMobile() {
            if (!footer || !firstPage) return;
            if (mq.matches) {
                if (footer.parentNode !== firstPage) {
                    // save original parent to restore later
                    if (!window.__originalFooterParent) window.__originalFooterParent = footer.parentNode;
                    firstPage.appendChild(footer);
                    footer.classList.add('mobile-in-first');
                }
            } else {
                // restore footer to original parent when leaving mobile
                if (window.__originalFooterParent && footer.parentNode !== window.__originalFooterParent) {
                    window.__originalFooterParent.appendChild(footer);
                    footer.classList.remove('mobile-in-first');
                }
            }
        }
        // run once and also on resize
        moveFooterIfMobile();
        var resizeTimer = null;
        window.addEventListener('resize', function(){
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(moveFooterIfMobile, 150);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
