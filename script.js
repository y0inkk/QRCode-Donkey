const class1 = document.querySelector('.class1');
const class2 = document.querySelector('.class2');


class1.addEventListener('click', ()=>{
    class2.classList.remove('selected')
    class1.classList.toggle('selected')






})


class2.addEventListener('click', ()=>{
    class1.classList.remove('selected')
    class2.classList.toggle('selected')






    
})