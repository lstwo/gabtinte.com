$(function() {

    // Load HTML includes
    $('[data-include]').each(function() {
        $(this).load($(this).data('include'));
    });

    // Header scroll effect
    $(window).on('scroll', function() {
        $('#header').toggleClass('scrolled', $(this).scrollTop() > 10);
    });

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        const $target = $($(this).attr('href'));
        if (!$target.length) return;

        // Close mobile menu if open
        $('.nav-links').removeClass('open');
        $('.menu-toggle').removeClass('active');

        const offset = $target.offset().top - 80;
        $('html, body').animate({ scrollTop: offset }, 500);
    });

    // Mobile menu toggle
    $(document).on('click', '.menu-toggle', function() {
        $(this).toggleClass('active');
        $('.nav-links').toggleClass('open');
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.nav-links, .menu-toggle').length) {
            $('.nav-links').removeClass('open');
            $('.menu-toggle').removeClass('active');
        }
    });

    // Scroll-triggered fade-up animations
    function revealOnScroll() {
        $('.fade-up').each(function() {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height() - 80;
            if (elementTop < viewportBottom) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load

});
