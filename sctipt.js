let menu=document.querySelector("#menu-bars");
let navbar=document.querySelector(".navbar");
const black="#28282b"
const lightcolor="#666";

menu.onclick=() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll=()=>
{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
document.querySelector("#search-icon").onclick=() =>
{
    document.querySelector("#search-form").classList.toggle('active')
}
document.querySelector("#close").onclick=() =>
{
    document.querySelector("#search-form").classList.remove('active')
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  loop:true,
  });
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
   
  loop:true,
  breakpoints:
  {
    0:
    {
        slidesPerView:1,
    },
    640:
    {
        slidesPerView:2,
    },
    768:
    {
        slidesPerView:2,
    },
    1024:
    {
        slidesPerView:4,
    },
  },
  });
  var videoplayer=document.querySelector(".sachinvideo");
  setInterval(playvideo,4000);
  function playvideo()
  {
    videoplayer.play();
  }
 const modee=document.querySelector(".mode");
 modee.addEventListener("click",changemode);
 function changemode()
 {
  if(modee.className=="change mode fa-solid fa-toggle-off")
  {
  modee.classList.remove("fa-toggle-off");
  modee.classList.add("fa-toggle-on");
  document.querySelector("header").style.background=black;
  document.querySelector(".change").style.color="#fff";
  document.querySelector("header a.logo").style.color="#fff";
  document.querySelector(".about .row .content h3").style.color="#fff";
  document.querySelectorAll("header .navbar a").forEach(el =>
    {
      el.style.color="#fff";
    });
  document.querySelectorAll("section:nth-child(odd)").forEach(el =>
    {
      el.style.background="#121212";
    });
    document.querySelectorAll("section:nth-child(even)").forEach(el =>
      {
        el.style.background=black;
      });
      document.querySelectorAll(".dishes .box-container .box").forEach(el=>
        {
          el.style.background="#404040";
        });
        document.querySelectorAll(".dishes .box-container .box h3").forEach(el=>
          {
            el.style.color="#fff";
          });
          document.querySelector(".dishes .heading").style.color="#fff";
          document.querySelector(".menu .heading").style.color="#fff";
          document.querySelectorAll(".home .home-slider .slide .content h3").forEach(el=>
            {
              el.style.color="#fff";
            });
            document.querySelectorAll(".menu .box-container .box .content h3").forEach(el=>
              {
                el.style.color="#fff";
              });
              document.querySelectorAll(".menu .box-container .box .content p").forEach(el=>
                {
                  el.style.color="#fff";
                });
            document.querySelectorAll(".menu .box-container .box").forEach(el=>
              {
                el.style.background="#404040";
              });
              document.querySelectorAll(".home .home-slider .slide .content p").forEach(el=>
                {
                  el.style.color="#fff";
                });
                document.querySelectorAll(".review .slide .user h3").forEach(el=>
                  {
                    el.style.color="#fff";
                  });
                  document.querySelectorAll(".review .slide  p").forEach(el=>
                    {
                      el.style.color="#fff";
                    });
                    document.querySelector(".review .heading").style.color="#fff";
                    document.querySelectorAll(".footer .box-container .box a").forEach(el=>
                      {
                        el.style.color="#fff";
                      });
                      document.querySelector(".order .heading").style.color="#fff";
                      document.querySelector(".video .heading").style.color="#fff";
                      document.querySelector(".about .heading").style.color="#fff";
  }
  else
  {
    modee.classList.remove("fa-toggle-on");
    modee.classList.add("fa-toggle-off");
    document.querySelector("header").style.background="#fff";
    document.querySelector(".change").style.color=black;
    document.querySelector("header a.logo").style.color=black;
    document.querySelector(".about .row .content h3").style.color=black;
    document.querySelectorAll(".footer .box-container .box a").forEach(el=>
      {
        el.style.color=lightcolor;
      });
    document.querySelectorAll("header .navbar a").forEach(el =>
      {
        el.style.color=lightcolor;
      });
    document.querySelectorAll("section:nth-child(odd)").forEach(el =>
      {
        el.style.background="#fff";
      });

    document.querySelectorAll("section:nth-child(even)").forEach(el =>
      {
        el.style.background="#eee";
      });
      document.querySelectorAll(".dishes .box-container .box").forEach(el=>
        {
          el.style.background="#fff";
        });
        document.querySelectorAll(".dishes .box-container .box h3").forEach(el=>
          {
            el.style.color="#28282b";
          });
          document.querySelector(".dishes .heading").style.color="#28282b";
          document.querySelector(".menu .heading").style.color="#28282b";
          document.querySelectorAll(".home .home-slider .slide .content h3").forEach(el=>
            {
              el.style.color="#28282b";
            });
            document.querySelectorAll(".menu .box-container .box").forEach(el=>
              {
                el.style.background="#fff";
              });
              document.querySelectorAll(".menu .box-container .box .content h3").forEach(el=>
                {
                  el.style.color="#28282b";
                });
                document.querySelectorAll(".menu .box-container .box .content p").forEach(el=>
                  {
                    el.style.color="#28282b";
                  });
                  document.querySelectorAll(".home .home-slider .slide .content p").forEach(el=>
                    {
                      el.style.color="#28282b";
                    });
                    document.querySelectorAll(".review .slide .user h3").forEach(el=>
                      {
                        el.style.color="#28282b";
                      });
                      document.querySelectorAll(".review .slide  p").forEach(el=>
                        {
                          el.style.color=lightcolor;
                        });
                        document.querySelector(".review .heading").style.color=lightcolor;
                        document.querySelector(".order .heading").style.color=black;
                        document.querySelector(".video .heading").style.color=black;
                        document.querySelector(".about .heading").style.color=black;

  }
}
  
 
 