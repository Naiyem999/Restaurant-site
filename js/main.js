    //smooth
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000
    });
        //sticky 
    $(document).ready(function(){

    $(".stcky-section").waypoint(function(direction){
    if(direction == "down"){
            $("nav").addClass("sticky");
        }   else{
                $("nav").removeClass("sticky");
        }
    });
    });
    //form 
    $(document).ready(function(){
        $(".log").click(function(){
            $(".login-form").toggle(1500);
        });
    });
    //form 
    var x = document.getElementById("login");
    var y = document.getElementById("signup");
    var z = document.getElementById("bttn");

    function register(){
        x.style.left = "-1500px";
        y.style.left = "53px";
        z.style.left = "110px";
    }
    function login(){
        x.style.left = "53px";
        y.style.left = "500px";
        z.style.left = "0";
    }
    //mix it up
    var mixer = mixitup('.menu');
    //date it up
    $('.date-picker').datetimepicker({
    timepicker:false,
    datepicker:true,
    format: 'd-m-y',
    weeks: true,
    });
    //carousel 
    $('.review--bbox').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    nav:false,
    responsive:{
    0:{
    items:1
    }
    }
    });