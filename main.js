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
/* Start Asking Secition */
let myParentBtn = document.querySelector(".ask-content .cards .cards");
let myButtonAsk = document.querySelectorAll(".ask-content .cards .card");
let myPlus = document.querySelector(".ask-content .cards .card > .plus");
let myInfo = document.querySelectorAll(".info");

let myQs = document.querySelectorAll(".q");
// let myA = document.querySelector(".a");

for (let myQ of myButtonAsk) {
  myQ.addEventListener("click", (event) => {
    if (event.target.nextElementSibling.style.maxHeight == 0) {
      // First Close All Answers
      for (let i = 0; i < myButtonAsk.length; i++) {
        let myBaby = myButtonAsk[i];
        myBaby.nextElementSibling.style.maxHeight = "";
        myBaby.nextElementSibling.style.transform = "translateY(-40px)";
        myBaby.nextElementSibling.style.marginBottom = "2px";
        myBaby.lastElementChild.classList.remove("rot45");
      }

      // Open Target Anwer And Close if it Open
      event.target.lastElementChild.classList.add("rot45");
      event.target.nextElementSibling.style.marginBottom = "2.3rem";
      event.target.nextElementSibling.style.transform = "translateY(0px)";
      event.target.nextElementSibling.style.maxHeight =
        event.target.nextElementSibling.scrollHeight + 24 + "px";
    } else {
      event.target.lastElementChild.classList.remove("rot45");
      event.target.nextElementSibling.style.marginBottom = "2px";
      event.target.nextElementSibling.style.maxHeight = "";
      event.target.nextElementSibling.style.transform = "translateY(-40px)";
      // event.target.nextElementSibling.style.padding = "0rem";
    }
  });
}
// form
let myEmailTwo = document.querySelector(".ask-content .email");
let mySpanTwo = document.querySelector(".ask-content .place");
let mySReqTwo = document.querySelector(".ask-content .requiredOne");
let btnTwo = document.querySelector(".ask-content .ready button");

myEmailTwo.onfocus = function () {
  mySpanTwo.style.fontSize = "12px";
  mySpanTwo.style.cssText = "top: 7px !important; left: 15px; font-size: 12px;";
};
myEmailTwo.onblur = function () {
  if (myEmailTwo.value == "") {
    mySpanTwo.style.cssText =
      "  top: calc(56px / 2 - 9px); left: 15px; transition: 0.2s;";

    myEmailTwo.style.cssText =
      "border: 1px solid #eb3942; background-color: #05050563 !important ;";

    mySReqTwo.style.cssText = "display: block !important";
  } else if (typeof myEmailTwo.value === "string") {
    if (myEmailTwo.value.indexOf("@gmail.com") !== -1) {
      myEmailTwo.style.cssText = "border: 2px solid green;";

      mySReqTwo.style.cssText = "display: none !important";
    } else {
      mySReqTwo.textContent =
        "Email is required... It should contain @gmail.com";
    }

    let listCE = myEmailTwo.value.split("");
    for (let i = 0; i < listCE.length; i++) {
      console.log(listCE[i]);
    }
  }
};
btnTwo.onclick = function () {
  myEmailTwo.style.cssText = "border: 2px solid transparent;";
};
// myButtonAsk.forEach((element) => {
//   function removeFromCurrentButton() {
//     element.lastElementChild.classList.remove("rot45");
//     element.nextElementSibling.classList.remove("show-info");
//   }
//   element.onclick = function (c) {
//     if (
//       element.lastElementChild.classList.contains("rot45") &&
//       element.nextElementSibling.classList.contains("show-info")
//     ) {
//       return removeFromCurrentButton();
//     }

//     // Loop For Del Class Show-info and rot45 from any button
//     for (let i = 0; i < element.parentElement.children.length; i++) {
//       let vTow = element.parentElement.children[i];
//       if (vTow.classList.contains("card")) {
//         vTow.lastElementChild.classList.remove("rot45");
//       }
//       if (vTow.classList.contains("info")) {
//         vTow.classList.remove("show-info");
//       }
//     }
//     // Add Class Show-info and rot45 to Cuurent Button
//     element.lastElementChild.classList.toggle("rot45");
//     element.nextElementSibling.classList.toggle("show-info");
//   };
// });

/* End Asking Secition */
