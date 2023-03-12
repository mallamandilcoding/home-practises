// alert("mandil");
const textField = document.querySelector("#result");
// console.log(textField);
const buttons = document.querySelectorAll(".btn");
// console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // alert(e.currentTarget.innerHTML);
    if (e.currentTarget.innerHTML === 'AC'){
      textField.value = "";
    }
    else if (e.currentTarget.innerHTML === 'DE') {
      // console.log(textField.value.slice(0,-1));
      textField.value = textField.value.slice(0,-1);
    }
    else if(e.currentTarget.innerHTML === '=') {
      // console.log("mandil");
      textField.value = eval(textField.value);
    }
    else if (e.currentTarget.innerHTML === '.'){
      if(textField.value.includes('.')){
        alert("WRONG NUMBER INPUT");
      }
      else{
        textField.value += e.currentTarget.innerHTML;
      }
    }
    else {
      textField.value += e.currentTarget.innerHTML;
    }
  });
});
