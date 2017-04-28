const formatMoney = (dollars) => {
  return "$" + dollars
}

const redirectHome = () => {
  window.location="/"
}

const redirectCreateItinerary = () => {
  window.location="/new-itinerary"
}

const redirectViewItinerary = () => {
  window.location="/itinerary"
}

const redirectAboutUs = () => {
  window.location="/about"
}

const redirectContactUs = () => {
  window.location="/contact"
}

const redirectIntentionalNotFound = () => {
  window.location="/404"
}

const redirectEdit = () => {
  window.location="/edit"
}

// function clicky(i) {
//
//   let it = document.getElementById(`${i}`);
//
//   it.contentEditable = 'true';
//   it.addEventListener('keypress', function(e) {
//       let key = e.which || e.keyCode;
//       if (key === 13) {
//           it.setAttribute("contentEditable", "false")
//
//           fetch( `/edit`, {
//             method: 'POST',
//             body: JSON.stringify({ newToDo: it.innerText, id: i }),
//             headers: new Headers({
//               "Content-Type": "application/json",
//               "Accept": "application/json"
//             })
//           })
//         }
//     })
// }
