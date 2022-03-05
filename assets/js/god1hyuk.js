// 문서 내용 추가하기
let formType;
let formNum = {
  txt: 0,
  check: 0,
  sign: 0,
};
const content = document.querySelector(".sub-page__content");
const formMenu = document.querySelectorAll(".menu-option button");

// formMenu.forEach((element, index) => {
// 	element.addEventListener('click', (e) => {
// 		formMenu[index].className = formMenu[index].className.replace(" active", " ");
// 		e.target.classList += ' active';
// 	});
// });

for (let i = 0; i < formMenu.length; i++) {
  formMenu[i].addEventListener("click", (e) => {
    e.target.className += " active";
  });
}

// form stamp event
function createForm() {
  const formWrap = document.createElement("div");
  formWrap.classList += "drag-form";
  const formItem = document.createElement(formType);
  let x = event.pageX;
  let y = event.pageY;

  // formItem.setAttribute('disabled', 'disabled');
  formItem.style.position = `absolute`;
  formItem.style.left = `${x - 10}px`;
  formItem.style.top = `${y - 15}px`;

  if (formItem.tagName == "TEXTAREA") {
    ++formNum.txt;
    formItem.setAttribute("placeholder", `텍스트${formNum.txt}`);
    formItem.setAttribute("id", `txtForm${formNum.txt - 1}`);
    formItem.classList += "txt-form";
  } else if (formItem.tagName == "INPUT") {
    ++formNum.check;
    formItem.setAttribute("type", "checkbox");
    formItem.setAttribute("id", `checkForm${formNum.check - 1}`);
    formItem.classList += "check-form";
  } else if (formItem.tagName == "BUTTON") {
    ++formNum.sign;
    formItem.setAttribute("id", `signForm${formNum.sign - 1}`);
    formItem.classList += "sign-form";
  }

  formWrap.appendChild(formItem);
  content.appendChild(formWrap);

  // console.log(`x : ${x}`);	console.log(`y : ${y}`);

  console.log(formItem.getAttribute("id"));
}

// Drag & Drops

function dragNdrops() {
  const box = document.querySelectorAll(".drag-form");

  console.log(box);

  box.forEach((element) => {
    const { width: containerWidth, height: containerHeight } =
      container.getBoundingClientRect();
    const { width: elementWidth, height: elementHeight } =
      element.getBoundingClientRect();
    let isDragging = null;
    let originLeft = null;
    let originTop = null;
    let originX = null;
    let originY = null;

    element.addEventListener("mousedown", (e) => {
      if (isDragging == true) {
        isDragging = false;
      } else {
        isDragging = true;
        originX = e.clientX;
        originY = e.clientY;
        originLeft = element.offsetLeft;
        originTop = element.offsetTop;
      }
    });

    document.addEventListener("mouseup", (e) => {
      isDragging = false;
    });

    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        const diffX = e.clientX - originX;
        const diffY = e.clientY - originY;
        const endOfXPoint = containerWidth - elementWidth;
        const endOfYPoint = containerHeight - elementHeight;
        element.style.left = `${Math.min(
          Math.max(0, originLeft + diffX),
          endOfXPoint
        )}px`;
        element.style.top = `${Math.min(
          Math.max(0, originTop + diffY),
          endOfYPoint
        )}px`;
      }
    });
  });
}

// create stamp
// $.ajax("https://serene-chamber-30852.herokuapp.com/sign/" + text);
