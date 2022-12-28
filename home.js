 const webcard= document.querySelector('.webcard')
 const lancard= document.querySelector('.lancard')
 const kidcard = document.querySelector('.kidcard')
 const btnjoin = document.getElementById('join')
 const pcourse = document.querySelector('.pcourse1')
 const pcourse1 = document.querySelector('.pcourse')
 const pimg = document.getElementById('pimage')
 const pimg1= document.getElementById('course')
 const courseone = document.querySelector('.courseone')
 const coursetwo = document.querySelector('.coursetwo') 
 const imageone = document.getElementById('imageone')
 const imagetwo = document.getElementById('imagetwo')
 const porti1 = document.querySelector('.one')
 const porti2 = document.querySelector('.two')
 const porti3 =document.querySelector('.three')
 const pobtn = document.getElementById('one')
 const pobtn2 = document.getElementById('two')
 const pobtn3 = document.getElementById('three')
 webcard.addEventListener('mouseover',function(){
webcard.style.transform = 'translateY(-70px)'
 })
 webcard.addEventListener('mouseout',function(){
    webcard.style.transform = 'translateY(0px)'
 })
 lancard.addEventListener('mouseover',function(){
    lancard.style.transform = 'translateY(-70px)'
     })
     lancard.addEventListener('mouseout',function(){
        lancard.style.transform = 'translateY(0px)'
     })
     kidcard.addEventListener('mouseover',function(){
        kidcard.style.transform = 'translateY(-100px)'
         })
         kidcard.addEventListener('mouseout',function(){
            kidcard.style.transform = 'translateY(0px)'
         })
         join.addEventListener('mouseover',function(){
            join.style.backgroundColor = 'rgb(24, 14, 63)'
             })
             join.addEventListener('mouseout',function(){
                join.style.backgroundColor= 'rgb(255, 0, 81)'
             })

        pcourse.addEventListener('mouseover',function(){
            pimg.style.borderRadius = '0%'
        })
        pcourse.addEventListener('mouseout',function(){
            pimg.style.borderRadius = '50%'
        })
        pcourse1.addEventListener('mouseover',function(){
            pimg1.style.borderRadius = '0%'
        })
        pcourse1.addEventListener('mouseout',function(){
            pimg1.style.borderRadius = '50%'
        })
        courseone.addEventListener('mouseover',function(){
            imageone.style.borderRadius = '0%'
        })
        courseone.addEventListener('mouseout',function(){
            imageone.style.borderRadius = '50%'
        })
        coursetwo.addEventListener('mouseover',function(){
            imagetwo.style.borderRadius = '0%'
        })
        coursetwo.addEventListener('mouseout',function(){
            imagetwo.style.borderRadius = '50%'
        })
        

const maintitle= document.querySelector('.maintitle')
window.addEventListener('DOMContentLoaded',function(){
maintitle.style.transform = 'translateY(-20px)'
})

const janbtn = document.getElementById('janbtn')
janbtn.addEventListener('mouseover',function(){
    janbtn.style.backgroundColor = 'rgb(24, 14, 63)'
})
janbtn.addEventListener('mouseout',function(){
    janbtn.style.backgroundColor ='rgb(255, 0, 81)'
})
const viewbtn = document.getElementById('viewc')
viewbtn.addEventListener('mouseover',function(){
    viewbtn.style.backgroundColor = 'rgb(24, 14, 63)'
})
viewbtn.addEventListener('mouseout',function(){
    viewbtn.style.backgroundColor ='rgb(255, 0, 81)'
})
const items = [
    {
        id:1,
        name : "U Lwin Mg Maung",
        img : "img/lmm.jpg",
        job:"Professional System And Networking Professor",
        h5 : "Lorem ipsum dolor sit amet consectetur, porro nemo quasi at dolore veniam inventore fugit accusamus corrupti voluptatem qui, praesentium quaerat totam numquam, voluptates aliquid eveniet blanditiis."
    },
    {
        id:2,
        name : "U Daw Moe Moe Htwe",
        img : "img/mmh.jpg",
        job : "Professional Designer",
        h5 : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Sunt recusandae, porro nemo quasi at dolore veniam inventore fugit accusamus corrupti voluptatem qui, praesentium quaerat totam numquam, voluptates aliquid eveniet blanditiis.dfiddifidifjdifidifeeueuueueuuefjjjf"
    },
    {
        id:3,
        name : "U Aung Nanda Htun",
        img : "img/stones.jpg",
        job : "Professional English,Biology and Economy Professor",
        h5 : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Sunt recusandae, porro nemo quasi at dolore veniam inventore fugit accusamus corrupti voluptatem qui, praesentium quaerat totam numquam, voluptates aliquid eveniet blanditiis."
    }
]
 const instructor = document.getElementById('name')
 const img = document.getElementById('content-img')
 const quote = document.getElementById('quote')
 const jobs = document.getElementById('job')
 
 const nextbtn = document.querySelector('.next-btn')
 const prevbtn = document.querySelector('.prev-btn')
 console.log(prevbtn);
 let currentItem = 0


 window.addEventListener('DOMContentLoaded',function(){
const content = items[currentItem]
img.src = content.img
jobs.textContent = content.job
instructor.textContent = content.name
  quote.textContent = content.h5
 })

function myfunction(showContent){
    const content = items[showContent]
    img.src = content.img
instructor.textContent = content.name
  quote.textContent = content.h5
  jobs.textContent = content.job
}

nextbtn.addEventListener('click',function(){
    currentItem ++;
    if(currentItem > items.length-1){
        currentItem = 0;
    }
    console.log(currentItem)
    myfunction(currentItem)
})

prevbtn.addEventListener('click',function(){
    currentItem --;
 console.log(currentItem);
 if(currentItem<0){
    currentItem = 0;
 }
 myfunction(currentItem)
})
const btnMenu = document.getElementById('menu1')
const detil = document.querySelector('.detil')
btnMenu.addEventListener('click',function(){
    detil.style.display = 'block'
    console.log(detil);
})