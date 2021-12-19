var mqMedium = window.matchMedia("(max-width: 1023px) and (min-width: 768px)");
function bannerChange(mqMedium) {
        
    if (mqMedium.matches) {
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
    
     
        
              
     } else {
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
              
        }

 }
        bannerChange(mqMedium);
        mqMedium.addListener(bannerChange);