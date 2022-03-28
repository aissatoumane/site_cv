// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageXOffset ||
    this.document.documentElement.scrollTop;

    // si on descend
    if(scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    } 
    lastScrollTop = scrollTop;
});

// TYPED
var typed = new Typed('.typed', {
  strings: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet velit non neque porta fermentum. Morbi scelerisque quis enim at pharetra. Morbi porttitor purus vitae turpis ornare, eu ullamcorper arcu commodo. Pellentesque vel nisi metus. Nulla facilisi. Aliquam consequat ante eget quam blandit, vitae ultricies lectus lobortis. Morbi pellentesque urna ex, vitae hendrerit justo fermentum vel. Donec id pulvinar quam. Donec mattis tortor sit amet justo euismod tempus. Sed efficitur iaculis libero ut auctor. Ut non porttitor lectus, id imperdiet dui. Pellentesque ut porttitor mauris, posuere pulvinar ex. Duis auctor dui eget metus luctus, non vehicula velit rutrum. Aenean auctor interdum odio in suscipit. Sed non laoreet ipsum.'],
  typeSpeed: 20,
});

// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function() {

    const top = $('.counter').offset().top - window.innerHeight;

    if(compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() {
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum : countTo
            },
            {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum)
                }
            });
        });
        compteur = 1;
    }
});

//  AOS - Animate On Scroll
AOS.init();