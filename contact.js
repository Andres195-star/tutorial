const detilone = document.getElementById('detilone')
const img = document.querySelector('.img')
detilone.addEventListener('mouseover',function(){
    img.classList.add('imgstyle')
    console.log(img);
})
detilone.addEventListener('mouseout',function(){
    img.classList.remove('imgstyle')
})
const detiltwo = document.getElementById('detiltwo')
const img2 = document.querySelector('.img2')
detiltwo.addEventListener('mouseover',function(){
    img2.classList.add('imgstyle')
    console.log(img2);
})
detiltwo.addEventListener('mouseout',function(){
    img2.classList.remove('imgstyle')
})

const detilthree = document.getElementById('detilthree')
const img3 = document.querySelector('.img3')
detilthree.addEventListener('mouseover',function(){
    img3.classList.add('imgstyle')
    console.log(img2);
})
detilthree.addEventListener('mouseout',function(){
    img3.classList.remove('imgstyle')
})
const detilfour = document.getElementById('detilfour')
const img4 = document.querySelector('.img4')
detilfour.addEventListener('mouseover',function(){
    img4.classList.add('imgstyle')
    console.log(img2);
})
detilfour.addEventListener('mouseout',function(){
    img4.classList.remove('imgstyle')
})