function updateView() {
  let view = document.getElementById('app')
  switch (model.app.currentPage) {
    case 'checkout':
      view.innerHTML = checkoutView()
      break
    case 'contact':
      view.innerHTML = contactView()
      break
    case null:
			resetRegisterInput()
      view.innerHTML = mainView()
      break
    case 'basket':
      view.innerHTML = basketView()
      break
		case 'menu':
			view.innerHTML = showMenu()
			break
		case 'editProducts':
			view.innerHTML = showEditProducts()
			break
    case 'orderconfirmation':
      view.innerHTML = orderConfirmedView()
      break
    case 'contactinfo':
      view.innerHTML = contactInfoView()
      break
    case 'toppings':
      view.innerHTML = toppingsView()
      break
  }
}
