// const getElement = (selector) => {
//     const element = document.querySelector(selector)

//     if (element) return element
//     throw Error(
//       `Please double check your class names, there is no ${selector} class`
//     )
//   }

//   const links = getElement('.nav-links')
//   const navBtnDOM = getElement('.bi-list')

//   navBtnDOM.addEventListener('click', () => {
//     links.classList.toggle('show-links')
//   })

// ===========NAVBAR SETTINGS===========
// ================STICKY NAVBAR=================
const header = document.querySelector(".nav_container");
window.addEventListener("scroll", function () {
  if (this.window.scrollY <= 0) {
    header.classList.remove("stick");
  } else {
    header.classList.add("stick");
  }
});
// ================STICKY NAVBAR=================
