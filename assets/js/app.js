document.getElementById('toggle').addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById('nav-header').classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
  document.getElementById('logo-image').classList.toggle("image");
});

var lastScrollTop = 0;
window.addEventListener("scroll", function(){
  var currentScroll = window.pageYOffset || document.body.scrollTop;
  if(currentScroll > lastScrollTop){
    document.getElementById('nav-header').classList.remove("header-in");
    document.getElementById('nav-header').style.opacity = 0;
  }
  else{
    document.getElementById('nav-header').classList.add("header-in");
    document.getElementById('nav-header').classList.add("solid");
    document.getElementById('nav-header').style.opacity = 1;
    if(currentScroll <= 3){
      document.getElementById('nav-header').classList.remove("solid");
      document.getElementById('nav-header').classList.remove("header-in");
    }
  }

  if(lastScrollTop <= 7890){
    if(document.getElementById('theCoders').offsetWidth >=1036){
      document.getElementById('theCoders').style.minHeight = '5400px';
    }
    else if(document.getElementById('theCoders').offsetWidth <=690){
      document.getElementById('theCoders').style.minHeight = '15800px';
    }
    else {
      document.getElementById('theCoders').style.minHeight = '7950px';
    }
    document.getElementById('footer').style.display="inline";
  }
  lastScrollTop = currentScroll;
}, false);
