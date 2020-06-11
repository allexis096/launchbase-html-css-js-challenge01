const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')
const body = document.querySelector('body')

const closeModal = document.querySelector('.close')

for (let card of cards) {
  card.addEventListener('click', function() {
    const cardId = card.getAttribute('id')
    const videoContent = document.querySelector('iframe')

    modal.classList.add('active')
    videoContent.src = `https://rocketseat.com.br/${cardId}` 
  })
}

closeModal.addEventListener('click', function() {
  modal.classList.remove('active')
})

