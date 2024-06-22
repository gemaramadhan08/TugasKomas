const btn = document.querySelector("#btn");
const courses = document.querySelector("#courses");

// btn.addEventListener("click", function () {
//   btn.classList.toggle(".active");
//   courses.classList.toggle("hidden");
// });

btn.addEventListener("click", function () {
  btn.classList.toggle(".active");
  courses.classList.toggle("hidden");
});

var typed = new Typed(".auto-type", {
  strings: ["Gema", "Mahasiswa", "Frontend"],
  typeSpeed: 150,
  backSpeed: 50,
  loop: true,
});
