function openNav() {
  document.getElementsByClass("navbar__menu").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementsByClass("navbar__menu").style.width = "0";
}
let sections = document.querySelectorAll('.section');
function dataNav() {
  var x = document.getElementByTagName("H1")[0].getattribute("data-nav");
  document.getElementByID("").innerHTML = x;
}
function scroll() {
  sections.ForEach ( (section) => {
    let text = section.getAttribute("data-nav");
    let newli = document.createElement('li');
    let newlink = document.createElement('a');
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    let textNode = document.createTextNode(text);
    appendChild(fragment); } );
  ul.appendChild(fragment);}

function boundary() {
  var div = document.getElementById("myDiv");
  var rect = div.getBoundingClientRect();
  x = rect.left;
  y = rect.top;
  b = rect.bottom;
  w = rect.width;
  h = rect.height;
  alert ("Left: " + x + ", Top: " + y + ", Width: " + w + ", Height: " + b);}

function active_link(active_section) {
  let links = document.querySelectorAll('a');
  let section_nav = active_section.getAttribute('data-nav');}
  link.forEach ( (links) => {
    if (link.textcontent == section_nav){
      querySelectorAll('link');
      link.classList.add('activeclass');
      active_link(link); } 
  });
function boundary2() {
  sections.ForEach ( (section) => {
    let rect = section.getBoundingClientRect();
    if (rect.top >=0 && rect.bottom < window.innerHeight) {
      querySelectorAll('section');
      section.classList.add('your-active-class');}
      active_link(section);
    }
  );
}
