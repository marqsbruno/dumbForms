const phone = document.getElementById("number");
const plusButton = document.getElementById("plusButton");
const reset1 = document.getElementById("reset");
const submitButton = document.querySelectorAll(".submit");
const div1 = document.getElementById("form1");
const plus1000 = document.getElementById("plus1000");
const plus1000000 = document.getElementById("plus1000000");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const egg = document.getElementById("e");

// AUX
function getRawNumber(htmlTag) {
  return Number(htmlTag.innerHTML.replace(/[^0-9]/g, ""));
}
function getFormatNumber(rawNumber, plusNumber) {
  const sumNumber = (rawNumber + plusNumber).toString().padStart(11, "0");
  let result = `(${sumNumber.slice(0, 2)}) ${sumNumber.slice(
    2,
    7
  )}-${sumNumber.slice(7)}`;

  return result;
}

submitButton.forEach((e) => {
  e.addEventListener("click", () => modal.showModal());
});

closeModal.addEventListener("click", () => {
  modal.close();
});

egg.addEventListener("dblclick", () => console.log("Oi érika 🤯"));

//1
plusButton.addEventListener("click", () => {
  let rawNumber = getRawNumber(phone);
  let formatNumber = getFormatNumber(rawNumber, 1);

  phone.innerHTML = formatNumber;
});

plus1000.addEventListener("click", () => {
  let rawNumber = getRawNumber(phone);
  let formatNumber = getFormatNumber(rawNumber, 1000);
  phone.innerHTML = formatNumber;
});
plus1000000.addEventListener("click", () => {
  let rawNumber = getRawNumber(phone);
  let formatNumber = getFormatNumber(rawNumber, 1000000);
  phone.innerHTML = formatNumber;
});
reset1.addEventListener("click", () => {
  phone.innerHTML = "(00) 00000-0000";
  const thanks = document.getElementById("message");
  if (thanks) thanks.remove();
});

//2

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const reset2 = document.getElementById("reset2");
function getRandon(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn1.addEventListener("click", () => {
  p1.innerHTML = `(${getRandon(0, 9)}${getRandon(0, 9)})`;
});

btn2.addEventListener("click", () => {
  p2.innerHTML = `${getRandon(11111, 99999)}-`;
});

btn3.addEventListener("click", () => {
  p3.innerHTML = `${getRandon(1111, 9999)}`;
});

reset2.addEventListener("click", () => {
  p1.innerHTML = "(00)";
  p2.innerHTML = "00000-";
  p3.innerHTML = "0000";
});

//3
const slider = document.getElementById("slider");
const value = document.getElementById("value");

slider.addEventListener("input", (e) => {
  value.textContent = getFormatNumber(Number(e.target.value), 0);
});

//4
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");

function iterator(maxNumber) {
  let array = [];
  for (let i = 0; i <= maxNumber; i++) {
    array.push(i);
  }
  return array;
}

const data1 = iterator(99);
const data2 = iterator(9999);

data1.forEach((e) => {
  const option = document.createElement("option");
  option.textContent = e.toString().padStart(2, "0");
  select1.add(option);
});
data2.forEach((e) => {
  const option2 = document.createElement("option");
  const option3 = document.createElement("option");
  option2.textContent = e.toString().padStart(4, "0");
  option3.textContent = e.toString().padStart(4, "0");
  select2.add(option2);
  select3.add(option3);
});
