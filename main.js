let myEmail = document.querySelector(".email");
let mySpan = document.querySelector(".place");
let mySReq = document.querySelector(".required");
let btn = document.querySelector(".ready button");
myEmail.onfocus = function () {
  // mySpan.style.color = "red"
  mySpan.style.fontSize = "12px";
  mySpan.style.cssText = "top: 7px !important; left: 15px; font-size: 12px;";
  
};
    // top: 5px;
    // left: 25px;
myEmail.onblur = function () {
  if (myEmail.value == "") {
    mySpan.style.cssText =
      "  top: calc(56px / 2 - 9px); left: 15px; transition: 0.2s;";
    
    myEmail.style.cssText =
      "border: 1px solid #eb3942; background-color: #05050563 !important ;";
    
    mySReq.style.cssText = "display: block !important";

  } else if (typeof myEmail.value === "string") {
    if (myEmail.value.indexOf("@gmail.com") !== -1) {

      myEmail.style.cssText = "border: 2px solid green;";

      mySReq.style.cssText = "display: none !important";

    } else {
      mySReq.textContent = "Email is required... It should contain @gmail.com";
    }
    
    let listCE = myEmail.value.split("");
    for (let i = 0; i < listCE.length; i++) {
      console.log(listCE[i]);
    }
  }
};
btn.onclick = function () {
  myEmail.style.cssText = "border: 2px solid transparent;";
};
