var el = document.getElementById('nav-sticky-element');
var el2 = document.getElementById('top-black-bar-tablet');
var el3 = document.getElementById('black-navigation-bar2');
var el4 = document.getElementById('ads-bar-yellow-tablet');


window.addEventListener('scroll', function(){
    if (document.documentElement.scrollTop > 0){
        el.style.position = "fixed";
        el.style.top = "0px";
        el.style.width = "100%";
    }
    else
    {
        el.style.position = "static";
        el.style.top = "auto";
    }

    if (document.documentElement.scrollTop > 0){
      el3.style.position = "fixed";
      el3.style.top = "0px";
      el3.style.zIndex = "999";
      el3.style.width = "100%";
    }
    else
    {
        el3.style.position = "static";
        el3.style.top = "auto";
    }


    if (document.documentElement.scrollTop > 0){
      el4.style.position = "fixed";
      el4.style.top = "50px";
      el4.style.zIndex = "999";
    }
    else
    {
        el4.style.position = "static";
        el4.style.top = "auto";
    }

    if (document.documentElement.scrollTop > 0){
      el2.style.display = "none";      
    }
    else{
      el2.style.display = "flex";  
    }
});