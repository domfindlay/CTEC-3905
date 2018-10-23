/* create variable */
const hello = document.getElementById("hello");

/* create function */
function greeting() {
  alert("Hello!");
  hello.textContent = "BYEEEE";
}

hello.addEventListener("click", greeting);
