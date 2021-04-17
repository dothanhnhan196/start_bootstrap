window.addEventListener("scroll", function() {
    var header = document.querySelector("#header")
    header.classList.toggle("sticky", window.scrollY > 0)
})


// $('.navbar-nav .nav-link').click(function() {
//     $('.navbar-nav .nav-link').removeClass('active');
//     $(this).addClass('active');
// });