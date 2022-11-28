"use strict";
let buttonX = document.querySelector(".x");
let buttonO = document.querySelector(".o");
let chooseBox = document.querySelector(".choose");

let btn1 = document.querySelector(".bt1");
let btn2 = document.querySelector(".bt2");
let btn3 = document.querySelector(".bt3");
let btn4 = document.querySelector(".bt4");
let btn5 = document.querySelector(".bt5");
let btn6 = document.querySelector(".bt6");
let btn7 = document.querySelector(".bt7");
let btn8 = document.querySelector(".bt8");
let btn9 = document.querySelector(".bt9");
let containerBox = document.querySelector(".container");

let pen;
let array = [];

function btnX() {
  pen = "X";
  chooseBox.style.display = "none";
  containerBox.style.display = "flex";
}
buttonX.addEventListener("click", btnX);

function btnO() {
  pen = "O";
  chooseBox.style.display = "none";
  containerBox.style.display = "flex";
}
buttonO.addEventListener("click", btnO);

function b1() {
  array[0] = pen;
  btn1.textContent = pen;
  btn1.setAttribute("disabled", "disabled");
  func();
}
btn1.addEventListener("click", b1);

function b2() {
  array[1] = pen;
  btn2.textContent = pen;
  btn2.setAttribute("disabled", "disabled");
  func();
}
btn2.addEventListener("click", b2);

function b3() {
  array[2] = pen;
  btn3.textContent = pen;
  btn3.setAttribute("disabled", "disabled");
  func();
}
btn3.addEventListener("click", b3);

function b4() {
  array[3] = pen;
  btn4.textContent = pen;
  btn4.setAttribute("disabled", "disabled");
  func();
}
btn4.addEventListener("click", b4);

function b5() {
  array[4] = pen;
  btn5.textContent = pen;
  btn5.setAttribute("disabled", "disabled");
  func();
}
btn5.addEventListener("click", b5);

function b6() {
  array[5] = pen;
  btn6.textContent = pen;
  btn6.setAttribute("disabled", "disabled");
  func();
}
btn6.addEventListener("click", b6);

function b7() {
  array[6] = pen;
  btn7.textContent = pen;
  btn7.setAttribute("disabled", "disabled");
  func();
}
btn7.addEventListener("click", b7);

function b8() {
  array[7] = pen;
  btn8.textContent = pen;
  btn8.setAttribute("disabled", "disabled");
  func();
}
btn8.addEventListener("click", b8);

function b9() {
  array[8] = pen;
  btn9.textContent = pen;
  btn9.setAttribute("disabled", "disabled");
  func();
}
btn9.addEventListener("click", b9);

// cheking;

function up() {
  if (
    (array[0] === "X" && array[1] === "X" && array[2] === "X") ||
    (array[0] === "O" && array[1] === "O" && array[2] === "O")
  ) {
    btn1.style.color = "red";
    btn1.style.border = "2px solid red";
    btn2.style.color = "red";
    btn2.style.border = "2px solid red";
    btn3.style.color = "red";
    btn3.style.border = "2px solid red";
    setTimeout(location.reload(), 3000);
  }
}

function middle() {
  if (
    (array[3] === "X" && array[4] === "X" && array[5] === "X") ||
    (array[3] === "O" && array[4] === "O" && array[5] === "O")
  ) {
    btn4.style.color = "red";
    btn4.style.border = "2px solid red";
    btn5.style.color = "red";
    btn5.style.border = "2px solid red";
    btn6.style.color = "red";
    btn6.style.border = "2px solid red";
    setTimeout(location.reload(), 3000);
  }
}

function down() {
  if (
    (array[6] === "X" && array[7] === "X" && array[8] === "X") ||
    (array[6] === "O" && array[7] === "O" && array[8] === "O")
  ) {
    btn7.style.color = "red";
    btn7.style.border = "2px solid red";
    btn8.style.color = "red";
    btn8.style.border = "2px solid red";
    btn9.style.color = "red";
    btn9.style.border = "2px solid red";
    setTimeout(location.reload(), 3000);
  }
}

function left() {
  if (
    (array[0] === "X" && array[3] === "X" && array[6] === "X") ||
    (array[0] === "O" && array[3] === "O" && array[6] === "O")
  ) {
    btn1.style.color = "red";
    btn1.style.border = "2px solid red";
    btn4.style.color = "red";
    btn4.style.border = "2px solid red";
    btn7.style.color = "red";
    btn7.style.border = "2px solid red";
    setTimeout(location.reload(), 3000);
  }
}

function center() {
  if (
    (array[1] === "X" && array[4] === "X" && array[7] === "X") ||
    (array[1] === "O" && array[4] === "O" && array[7] === "O")
  ) {
    btn2.style.color = "red";
    btn2.style.border = "2px solid red";
    btn5.style.color = "red";
    btn5.style.border = "2px solid red";
    btn8.style.color = "red";
    btn8.style.border = "2px solid red";
    setTimeout(location.reload(), 3000);
  }
}

function rigth() {
  if (
    (array[2] === "X" && array[5] === "X" && array[8] === "X") ||
    (array[2] === "O" && array[5] === "O" && array[8] === "O")
  ) {
    btn3.style.color = "red";
    btn3.style.border = "2px solid red";
    btn6.style.color = "red";
    btn6.style.border = "2px solid red";
    btn9.style.color = "red";
    btn9.style.border = "2px solid red";
    setTimeout(location.reload(), 3000);
  }
}

function x1() {
  if (
    (array[0] === "X" && array[4] === "X" && array[8] === "X") ||
    (array[0] === "O" && array[4] === "O" && array[8] === "O")
  ) {
    btn1.style.color = "red";
    btn1.style.border = "2px solid red";
    btn5.style.color = "red";
    btn5.style.border = "2px solid red";
    btn9.style.color = "red";
    btn9.style.border = "2px solid red";
    setTimeout(location.reload(), 3000);
  }
}

function x2() {
  if (
    (array[2] === "X" && array[4] === "X" && array[6] === "X") ||
    (array[2] === "O" && array[4] === "O" && array[6] === "O")
  ) {
    btn3.style.color = "red";
    btn3.style.border = "2px solid red";
    btn5.style.color = "red";
    btn5.style.border = "2px solid red";
    btn7.style.color = "red";
    btn7.style.border = "2px solid red";
    setTimeout(location.reload(), 3000);
  }
}

function xOrO() {
  if (pen === "X") {
    pen = "O";
  } else {
    pen = "X";
  }
}

function func() {
  up();
  middle();
  down();
  left();
  center();
  rigth();
  x1();
  x2();
  xOrO();
}
