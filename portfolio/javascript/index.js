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
