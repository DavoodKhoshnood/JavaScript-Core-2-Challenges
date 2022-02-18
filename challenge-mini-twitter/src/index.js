let btn = document.querySelector('button')
let txt = document.querySelector('textarea')
let lul = document.querySelector('ul')
let counter = document.getElementById('counter')

let formD = document.querySelector('form')

function addIcons() {
  return (
    ` <i class="fa fa-comment-o" title="Reply">  ${getRandomNumber()}</i>` +
    ` <i class="fa fa-retweet" title="Retweet">  ${getRandomNumber()}</i>` +
    ` <i class="fa fa-heart-o" title="Like">  ${getRandomNumber()}k</i>` +
    ` <i class="fa fa-share-square-o" title="Share"></i>` +
    ` <i class="fa fa-trash" onclick="deleteFunction(event)" title="Delete"></i>`
  )
}

function getRandomNumber() {
  return Math.floor(Math.random() * (1000 - 5 + 1) + 5)
}

function counterChecker(evt) {
  counter.innerText = '  ' + txt.value.length + ' Letters'
  if (txt.value.length > 280) counter.style.color = 'red'
  else counter.style.color = 'grey'
}

txt.addEventListener('keydown', counterChecker)

btn.addEventListener('click', function (event) {
  event.preventDefault()
  if (txt.value.length < 280 && txt.value.length > 0) tweet()
  txt.focus()
})

function tweet() {
  let liTweet = document.createElement('li')
  let pTweet = document.createElement('div')

  pTweet.classList.add('icons')
  pTweet.innerHTML = addIcons()

  liTweet.innerHTML = getInputText()

  lul.appendChild(liTweet)
  liTweet.appendChild(pTweet)

  txt.value = ''
}

function getInputText() {
  let result = txt.value
  return result.replace(/@(\w+)/g, '<a href="www.twitter.com/$1">@$1</a>')
}

function deleteFunction(event) {
  event.target.parentElement.parentElement.remove()
}
