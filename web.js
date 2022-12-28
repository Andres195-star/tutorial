const btn1 = document.getElementById('over')
const btn2 = document.getElementById('know')
const btn3 = document.getElementById('instructor')
const descr = document.querySelector('.description')
const learn = document.querySelector('.learn')
const instructor = document.querySelector('.instructor')
const detil = document.querySelector('.detil')
window.addEventListener('DomContentLoaded',function(){
    descr.classList.add('show-descri')
    console.log('I here');
})
btn1.addEventListener('click',function(){
descr.classList.remove('show-descri')
learn.classList.remove('show-learn')
instructor.classList.remove('show-instructor')
console.log(descr);
})
btn2.addEventListener('click',function(){

learn.classList.add('show-learn')
instructor.classList.remove('show-instructor')
descr.classList.add('show-descri')
})
btn3.addEventListener('click',function(){
instructor.classList.add('show-instructor')
learn.classList.remove('show-learn')
descr.classList.add('show-descri')
})