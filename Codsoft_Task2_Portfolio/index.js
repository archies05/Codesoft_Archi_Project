//navbar color
var navbar = document.getElementById('navbar');

document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//skill animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.remove('hp')

        } else {
            entry.target.classList.add('hp')
        }
    });
});

const progressBars = document.querySelectorAll('.progress-bar');
progressBars.forEach(el => observer.observe(el));


// reveal animation
ScrollReveal({
    reset: true,
    distance: '70px',
    duration: 1500,
    viewFactor: 0.15,
    delay: 200,
});


ScrollReveal().reveal('.about-img,.skill-head', { origin: 'left' });
ScrollReveal().reveal('.h6-head,.contact-info', { origin: 'right' });
ScrollReveal().reveal('.about-head,.about-title,.contact-head,.resume-head,.h1-head,.h1-greet', { origin: 'top' });
ScrollReveal().reveal('.about-description', { origin: 'right' });
ScrollReveal().reveal('.fa-brands', { origin: 'bottom', delay: 300, interval: 150, distance: '30px' });
ScrollReveal().reveal('.animated-bar,.form-group', { scale: 0.6, interval: 150 });
ScrollReveal().reveal('.prjct', { scale: 0.4, interval: 180 });
// ScrollReveal().reveal('.button-main', { origin: 'left' ,distance:'90px'});
ScrollReveal().reveal('.srvc',{origin:'bottom',interval:180,distance:'90px'});

ScrollReveal().reveal('.header-img',{origin:'right',distance:'80px'});


//text intro heading animation
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 120;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
