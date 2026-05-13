const imagesDiv = document.querySelector('#images')

const count = document.querySelector('#count')

const restoreBtn = document.querySelector('#restore')

let imageCount = 4


// Remove Images
imagesDiv.addEventListener('click', function(e){

  if(e.target.tagName === 'IMG'){

    alert(`${e.target.id} image removed`)

    e.target.remove()

    imageCount--

    count.innerHTML = `${imageCount} Images Left`
  }

})


// Restore Images
restoreBtn.addEventListener('click', function(){

  imagesDiv.innerHTML = `
  
  <img id="waterflow" src="https://picsum.photos/id/1015/200/120">

  <img id="mountain" src="https://picsum.photos/id/1016/200/120">

  <img id="road" src="https://picsum.photos/id/1018/200/120">

  <img id="bear" src="https://picsum.photos/id/1020/200/120">
  
  `

  imageCount = 4

  count.innerHTML = `${imageCount} Images Left`

  alert('All Images Restored')

})
