const popupAvatar = document.querySelector('.popup_type_avatar')
const popupForm = document.querySelector('.popup_type_form')
const closeButtonAvatar = document.querySelector('.popup__close-button_type_avatar')
const avatar = document.querySelector('.avatar')
const form = document.querySelector('.skills__link')
const popups = document.querySelectorAll('.popup')

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'))
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEsc)
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-button')) [
      closePopup(popup)
    ]
  })
})

avatar.addEventListener('click', function() {
  openPopup(popupAvatar)
})

form.addEventListener('click', function() {
  openPopup(popupForm)
})