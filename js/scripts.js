/* create variable */
const hello = document.getElementById("hello");

/* create function */
function greeting() {
  alert("Hello!");
  hello.textContent = "Goodbyeeeeee";
}

hello.addEventListener("click", greeting);
