/*Write a Letter*/
var displayLetter = document.getElementById("generatedLetter");
var writeBtn = document.getElementById("writeBtn");

if (writeBtn) {
  writeBtn.addEventListener("click", generateLetter);
}

function generateLetter() {
  var state = document.getElementById("state").value;
  var name = document.getElementById("name").value;
  var concern = document.getElementById("concern").value;
  displayLetter.innerHTML = "Dear " + state + " senator/representative, <br/> <br/> I am " + name + " and I would like to bring light to the ongoing wealth inequality happening in the United States of America. This issue has caused many concerns, such as " + concern + " in underprivleged communities, which has left people in this country heartbroken. People should have the opportunity to sustain their lives by earning livable wages against the ongoing inflation of living costs. It would be beneficial for the betterment of this country if policies, such as the tax and benefit system, were to be implemented to porportionately tax people of different incomes and redistrubute wealth to help poor communities. I hope that you can take this message into account and make a positive impact by bringing up this issue to Congress. <br/> <br/> Thank you, <br/> " + name + " "
}

/*Contact*/
var submit = document.getElementById("submitBtn");

if (submit){
  submit.addEventListener("click", thankYou);
}

function thankYou(){
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  document.getElementById("thankYou").innerHTML = "<h5>Hello " + firstName + " " + lastName + "! Thank you for your message and for participating in this mock contact form! </h5>"
}


/*Checklist*/
var fullItemList = document.getElementById("listActivity");

if (fullItemList){
  fullItemList.addEventListener("click", checkOffItem);
}

function checkOffItem(clicked) {
  if (clicked.target.tagName == "LI") {
    clicked.target.classList.toggle("checked");
  }
}