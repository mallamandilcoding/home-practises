// for navbar scroll

window.onscroll = ()=>{
  const navigation= document.querySelector("nav");
  // const sticky = navigation.offset;
  // console.log(sticky);
  // console.log(scrollY);
  if (scrollY > 50 ) {
    navigation.classList.add("sticky");
  }else{
    navigation.classList.remove("sticky");
  }
}

// for home section typing
var typed = new Typed(".typing", {
  strings: ["Full Stack Developer","Front End Developer","Back End Developer","Web Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

//for active tabs in about section
const tab = document.querySelector(".tab-titles");
const tabcontent = document.querySelector(".tab-content");
tab.addEventListener("click",(e)=>{
  // console.log(e.target);
  // console.log(e.currentTarget);
  const titles = e.currentTarget.querySelectorAll('.title');
  const contents = tabcontent.querySelectorAll('.content');
  const tabname = e.target.innerText;
  // console.log("." + tabname)
  for (let title of titles){
    title.classList.remove("active");
  }
  for (let content of contents){
    content.classList.remove("active");
  }
  e.target.classList.add("active");
  tabcontent.querySelector("."+tabname).classList.add("active");
})
