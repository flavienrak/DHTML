const all = document.querySelectorAll(".pub section");
let currentIndex = 0;

function toggleElements() {
  if (!all[currentIndex].classList.contains("displayNone")) {
    all[currentIndex].classList.add("displayNone");
    currentIndex = (currentIndex + 1) % all.length;
    all[currentIndex].classList.remove("displayNone");
  }
}
toggleElements();
setInterval(toggleElements, 3000);

let test = document.querySelectorAll(".testForEach section");
const BASE_CLASS = "index";

function permutClass(arr) {
  arr.forEach((element, index) => {
    element.classList.add(`index${index}`);
  });
  for (let i = 0; i < test.length; i++) {
    let currentIndex = i;
    const element = test[i];
    const currentClass = `${BASE_CLASS}${i}`;
    const nextIndex = (currentIndex + 1) % test.length;
    const nextClass = `${BASE_CLASS}${nextIndex}`;
    element.classList.replace(currentClass, nextClass);
  }
}
console.log(test);
permutClass(test);
console.log(test);
permutClass(test);
console.log(test);

// index0 i==0
// index1 i==1
// index2 i==2
// ...

// 1000

// index1 i==0  index((i+1)%test.length)
// index2 i==1
// index0 i==2
// ...

// ...
