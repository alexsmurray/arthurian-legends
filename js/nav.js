var mqMediumScreen = window.matchMedia("(min-width: 769px) and (max-width: 1023px)");
function bannerChange(mqMedium) {
        
    if (mqMedium.matches) {
        var lastScrollTop = 0
        banner = document.getElementById("banner");
        window.addEventListener("scroll", function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
             banner.style.left = "-100px";
        } else {
             banner.style.left = "0";
        }
            lastScrollTop = scrollTop;
        })
    
     
        
              
     } else {
            var lastScrollTop = 0
             banner = document.getElementById("banner");
             window.addEventListener("scroll", function() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                 banner.style.top = "-85px";
            } else {
                banner.style.top = "0";
            }
                lastScrollTop = scrollTop;
             })
              
        }

 }
        bannerChange(mqMediumScreen);
        var timer;
        window.addEventListener("resize", function() {
        window.clearTimeout(timer);
        //var millisecBeforeRedirect = 500; 
        timer = window.setTimeout(
        function(){
            bannerChange(mqMediumScreen);
        },500); 
});
        

