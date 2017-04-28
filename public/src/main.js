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

function clicky(i) {

  let it = document.getElementById(i);

  it.setAttribute('contentEditable', true);
  it.addEventListener('keypress', function(e) {
      let key = e.which || e.keyCode;
      if (key === 13) {
          it.setAttribute("contentEditable", false)

          fetch( `/itinerary/${i}`, {
            method: 'PUT',
            body: JSON.stringify({ item: it.innerText, id: i }),
            headers: new Headers({
              "Content-Type": "application/json",
              "Accept": "application/json"
            })
          })
          .then(jsonRes => {
            return jsonRes.text()
          })
        }
    })
}
