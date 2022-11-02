const containerEl = document.querySelector(".d-flex");
const f = "Fizz";
const b = "Buzz";
const fb = "FizzBuzz";

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    containerEl.innerHTML += `<div class="border border-secondary  bg-secondary width-square d-flex align-items-center justify-content-center flip">${fb}</div>`;
  } else if (i % 5 === 0) {
    containerEl.innerHTML += `<div class="border border-danger  bg-danger width-square d-flex align-items-center justify-content-center flip">${b}</div>`;
  } else if (i % 3 === 0) {
    containerEl.innerHTML += `<div class="border border-success  bg-success width-square d-flex align-items-center justify-content-center flip">${f}</div>`;
  } else {
    containerEl.innerHTML += `<div class="border border-primary   bg-primary width-square d-flex align-items-center justify-content-center flip">${i}</div>`;
  }
}
