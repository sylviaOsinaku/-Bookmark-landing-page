const simple = document.querySelector('.c-f')
const speedy = document.querySelector('.c-g')
const easy =  document.querySelector('.c-h')
const arrow1 = document.querySelector('.arrow1')
const arrow2 = document.querySelector('.arrow2')
const arrow3 = document.querySelector('.arrow3')
const arrow4 = document.querySelector('.arrow4')
const arrowdown1  = document.getElementById('arrowdown1')
const arrowdown2  = document.getElementById('arrowdown2')
const arrowdown3  = document.getElementById('arrowdown3')
const arrowdown4  = document.getElementById('arrowdown4')
const email = document.querySelector('.email')
const submit = document.querySelector('.submit')
const menu = document.querySelector('.menu')
const closeDiv = document.querySelector('.close')
const error = document.querySelector('.error')

logo = document.querySelector('.a-a')
 tab1 = document.querySelector('.c-i')
 tab2 = document.querySelector('.c-a-i')
 tab3 = document.querySelector('.c-b-i')
 answer1 = document.querySelector('.e-f')
 answer2 = document.querySelector('.e-f-a')
 answer3 = document.querySelector('.e-f-b')
 answer4 = document.querySelector('.e-f-c')
center = document.querySelector('.center')

 menu.addEventListener('click',()=> {
  center.style.display = 'flex'
  logo.style.display= 'none'
  menu.style.display= 'none'
 }) 
 closeDiv.onclick = () =>{
  center.style.display = 'none '
  logo.style.display= 'block'
  menu.style.display= 'block'
 }
easy.onclick = () =>{
  tab1.style.display = 'none'
  tab2.style.display = 'none'
  tab3.style.display = 'flex'
}
  
simple.onclick = () =>{
  tab1.style.display = 'flex'
  tab2.style.display = 'none'
  tab3.style.display = 'none'
}
speedy.onclick = () =>{
  tab1.style.display = 'none'
  tab2.style.display = 'flex'
  tab3.style.display = 'none'
}

arrow1.onclick = () =>{
  answer1.style.display = 'block'
  arrow1.style.display = 'none'
  arrowdown1.style.display= 'block'
}
arrow2.onclick = () =>{
  answer2.style.display = 'block'
  arrow2.style.display = 'none'
  arrowdown2.style.display= 'block'
}
arrow3.onclick = () =>{
  answer3.style.display = 'block'
  arrow3.style.display = 'none'
  arrowdown3.style.display= 'block'
}
arrow4.onclick = () =>{
  answer4.style.display = 'block'
  arrow4.style.display = 'none'
  arrowdown4.style.display= 'block'
}

arrowdown1.onclick = () =>{
  answer1.style.display = 'none'
  arrowdown1.style.display = 'none'
  arrow1.style.display =  'block'
}
arrowdown4.onclick = () =>{
  answer4.style.display = 'none'
  arrowdown4.style.display = 'none'
  arrow4.style.display =  'block'
}
arrowdown2.onclick = () =>{
  answer2.style.display = 'none'
  arrowdown2.style.display = 'none'
  arrow2.style.display =  'block'
}
arrowdown3.onclick = () =>{
  answer3.style.display = 'none'
  arrowdown3.style.display = 'none'
  arrow3.style.display =  'block'
}

const errorM = () => {
  error.innerText = 'whoops!,make sure its an email'
}
const clear = () =>{
  error.innerText = ''
}
submit.onclick = (e) => {
  if (email.value === ''){
    e.preventDefault()
   errorM()
   setTimeout(clear,3000)
    console.log('You need to fill out this field')
  }
}