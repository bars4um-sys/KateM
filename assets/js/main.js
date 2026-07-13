// ===== PRELOADER =====
function hidePreloader(){document.getElementById('preloader').classList.add('hidden');}
setTimeout(hidePreloader,800);
setTimeout(hidePreloader,4000);

// ===== LUCIDE ICONS =====
function initLucide(){if(window.lucide){lucide.createIcons();}else{setTimeout(initLucide,200);}}
initLucide();

// ===== NAVIGATION =====
const nav=document.getElementById('nav');
const navBurger=document.getElementById('navBurger');
const navLinks=document.getElementById('navLinks');

window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',window.scrollY>60);
});

navBurger.addEventListener('click',()=>{
  navBurger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link=>{
  link.addEventListener('click',()=>{
    navBurger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ===== SCROLL REVEAL =====
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.1,rootMargin:'0px 0px -60px 0px'});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// ===== HERO PARALLAX =====
const heroBg=document.querySelector('.hero-bg');
window.addEventListener('scroll',()=>{
  const scrolled=window.scrollY;
  if(scrolled<window.innerHeight){
    heroBg.style.transform=`translateY(${scrolled*0.4}px)`;
  }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    const target=document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});