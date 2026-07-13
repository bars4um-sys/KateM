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

// ===== CONTACT FORM =====
const form=document.getElementById('contactForm');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let valid=true;

  const name=document.getElementById('fName');
  const errName=document.getElementById('errName');
  if(name.value.trim().length<2){errName.classList.add('show');valid=false;}
  else{errName.classList.remove('show');}

  const email=document.getElementById('fEmail');
  const errEmail=document.getElementById('errEmail');
  const emailRe=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRe.test(email.value)){errEmail.classList.add('show');valid=false;}
  else{errEmail.classList.remove('show');}

  const msg=document.getElementById('fMsg');
  const errMsg=document.getElementById('errMsg');
  if(msg.value.trim().length<5){errMsg.classList.add('show');valid=false;}
  else{errMsg.classList.remove('show');}

  if(valid){
    const success=document.getElementById('formSuccess');
    success.classList.add('show');
    form.reset();
    setTimeout(()=>success.classList.remove('show'),5000);
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