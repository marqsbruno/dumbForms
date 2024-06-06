const phone = document.getElementById("number");
const plusButton = document.getElementById("plusButton");
const resetButton = document.getElementById("reset");
const submitButton = document.getElementById("submit");
const div1 = document.getElementById("form1");

submitButton.addEventListener("click", submitMessage);
plusButton.addEventListener("click", addOne);
resetButton.addEventListener("click", resetValue);

function addOne() {
  let rawNumber = Number(phone.innerHTML.replace(/[^0-9]/g, ""));
  let sumNumber = (rawNumber + 1).toString().padStart(11, "0");
  let formatNumber = `(${sumNumber.slice(0, 2)}) ${sumNumber.slice(
    2,
    7
  )}-${sumNumber.slice(7)}`;

  phone.innerHTML = formatNumber;

  console.log("Oi érika");
}

function resetValue() {
  phone.innerHTML = "(00) 00000-0000";
  const thanks = document.getElementById("message");
  if (thanks) thanks.remove();
}

function submitMessage() {
  const h2 = document.createElement("h2");
  h2.innerText = "Thanks!";
  h2.setAttribute("id", "message");
  const thanks = document.getElementById("message");
  if (!thanks) div1.appendChild(h2);
}
