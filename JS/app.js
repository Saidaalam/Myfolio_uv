var modeIcon = document.getElementById('mode');
var password= document.getElementById('password');
var password_eye = document.getElementById('password_eye');





modeIcon.addEventListener('click', function() {
    document.body.classList.toggle('darkMode')

    if(modeIcon.classList.contains('fa-moon')){
        modeIcon.classList.add('fa-sun');
        modeIcon.classList.remove('fa-moon');
    }else {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
})

    // CUSTOM MOUSE CURSOR
let cursor = document.querySelector('#cursor')
function customMouseCursor (event) {
   
    let left = event.clientX;
    let top = event.clientY;

    cursor.style.top = `${top}px`
    cursor.style.left = `${left}px`

}
window.addEventListener("mousemove", customMouseCursor);

password_eye.addEventListener('click', function () {

    if (password.type == 'password') {
        password.type ='text';
        password_eye.classList.add('fa-eye');
        password_eye.classList.remove('fa-eye-slash');
    } else {
        password.type ='password';
        password_eye.classList.remove('fa-eye');
        password_eye.classList.add('fa-eye-slash');
    }
})


$( function () {

    $(window).scroll(function(){
        let scrollTopValue = $(window).scrollTop();
        console.log(scrollTopValue);
        if(scrollTopValue > 1300){
          
            $('nav').addClass('menuFixed')
            $('.topBtn').fadeIn()

        } else {
            $("nav").removeClass("menuFixed");
            $(".topBtn").fadeOut();

        }


    })


    $(".topBtn").click(function(){

            $('html,body').animate({
                scrollTop: 0
            }, 5000)



    });
   

} )
 $(window).on("load", function () {
   $(".preloader").fadeOut();
 });
