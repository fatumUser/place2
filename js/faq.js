
document.getElementById("faq-division-1").classList.add("show");
document.getElementById("btn-division-1").classList.add("btn-division-background");

/*document.getElementById("faq-division-2").classList.add("display-none");
document.getElementById("faq-division-3").classList.add("display-none");*/

function faqDivision1() {
  document.getElementById("btn-division-1").classList.add("btn-division-background");
  document.getElementById("btn-division-2").classList.remove("btn-division-background");
  document.getElementById("btn-division-3").classList.remove("btn-division-background");

  document.getElementById("faq-division-1").classList.add("show");
  document.getElementById("faq-division-2").classList.remove("show");
  document.getElementById("faq-division-3").classList.remove("show");
}
function faqDivision2() {
  document.getElementById("btn-division-1").classList.remove("btn-division-background");
  document.getElementById("btn-division-2").classList.add("btn-division-background");
  document.getElementById("btn-division-3").classList.remove("btn-division-background");

  document.getElementById("faq-division-1").classList.remove("show");
  document.getElementById("faq-division-2").classList.add("show");
  document.getElementById("faq-division-3").classList.remove("show");
}
function faqDivision3() {
  document.getElementById("btn-division-1").classList.remove("btn-division-background");
  document.getElementById("btn-division-2").classList.remove("btn-division-background");
  document.getElementById("btn-division-3").classList.add("btn-division-background");

  document.getElementById("faq-division-1").classList.remove("show");
  document.getElementById("faq-division-2").classList.remove("show");
  document.getElementById("faq-division-3").classList.add("show");
}

document.querySelectorAll('.faq-block').forEach(el => 
    el.addEventListener('click', () =>
        el.classList.toggle('faq-block-background')
    )
  );

document.querySelectorAll('.faq-block').forEach(el => 
    el.addEventListener('click', () =>
    el.childNodes[3].classList.toggle('display-none')
    )
  );

  document.querySelectorAll('.faq-block').forEach(el => 
    el.addEventListener('click', () =>
    el.childNodes[5].classList.toggle('display-block')
    )
  );

  document.querySelectorAll('.faq-block').forEach(el => 
    el.addEventListener('click', () =>
    el.childNodes[1].childNodes[3].classList.toggle('display-block')
    )
  );
  