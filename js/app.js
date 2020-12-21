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
let links = document.querySelectorAll('a');
function active_link(active_section) {
  let section_nav = active_section.getAttribute('data-nav');}
  links.forEach ( (links) => {
    if (links.textcontent == section_nav){
      querySelectorAll('link');
      links.classList.add('activeclass');
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
window.addEventListener('scroll', function (event) {
    sections.forEach((element)=>{
        //console.log(element);
        if (isInViewport(element)) {
             deactivesec();
			 deactivelink();
             element.classList.add('your-active-class');
             let elm_id = element.id;
			 //alert(elm_id);
			 setactivelink(elm_id);
            //console.log('In viewport!');
        } else if(window.scrollY==0) {
             deactivesec();
			 deactivelink();
            //console.log('No Change');
        }
    }, false);
});	
  const projectData = {
    
    topic_counts: 0,
    topic_titles: [],
    section_id: [],
    ulid: "",
    navContainers: [],
    navClass: [],
    mylinks: [],
    create_nav: function() {
       let x = 1;
       const fragment = document.createDocumentFragment();
       for (var i=0; i < allSections.length; i++) {
         let newli = document.createElement('li');
         let newlink = document.createElement('a');
         let title = projectData.topic_titles[i];
         let newtext = document.createTextNode(title);
         
         newli.class = "section";
         newli.id = "link" + x;
		 
		 let att = document.createAttribute("href");
		 att.value = "#section" + x;
		 x += 1;
         newlink.className = "navlink";
		 newlink.setAttributeNode(att);
         //newlink.href = "#" + projectData.section_id[i];
          //projectData.mylinks.push(newli.id);
          
          newlink.appendChild(newtext);
          newli.appendChild(newlink);
          fragment.appendChild(newli);
       }
       x = 0;
       myul.appendChild(fragment);
       
    }
    
  
  };
  



  // get all divs 
  const allSections = document.querySelectorAll(".landing__container");
  
  // loop using for of loop then get section firstElementChild.title
  for (sec of allSections) {
  
  // get the firstElementChild Value which H2 or section title to store it
  const section_title = sec.firstElementChild.textContent;
  
  
  // get section title h2 
  projectData.topic_titles.push(section_title);
  
  // get all section elements
  const section_parent = sec.parentElement;
  
  // get sections id 
  const section_id = section_parent.id;
  
  // push sections id to nav
  projectData.section_id.push(section_id);
  
  
  // test step
  //alert(projectData.section_id);
  }
  
  // get topic_counts or sections count
  projectData.topic_counts = projectData.topic_titles;
  
  
  
  
  /* ---------------------##############-------------------------------------------*/
                            // Nav Menu
  /* ---------------------##############-------------------------------------------*/
  
  // get the ul element using HTML DOM
  const myul = document.getElementById("navbar__list");
  
  // get the ul element
  projectData['ul'] = myul;
  
  
  // get the ul id
  projectData['ulid'] = projectData.ul.id;
  //alert(projectData.ulid);
  
  
  // feature li 
  let allli = document.querySelectorAll(".section");
  //alert(allli);
  
  
  // get the nav container
  let mynav = myul.parentElement;
  
  let mynav_class = myul.parentElement;
  
  // get nav class name
  //alert(mynav.className);
  
  
  projectData.create_nav();
  }
