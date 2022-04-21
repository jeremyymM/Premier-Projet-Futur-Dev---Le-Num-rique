var burger = document.getElementById('burger');
var closeNav = document.getElementById('closeNav');
var mobileNavArea = document.getElementById('mobileNavArea');

burger.addEventListener('click', function(){
    mobileNavArea.classList.remove('none');

    setTimeout(() => {
        mobileNavArea.classList.add('openNav');
    }, 200);
    
    this.classList.add('none');
    closeNav.classList.remove('none');
})

closeNav.addEventListener('click', function(){

    mobileNavArea.classList.remove('openNav');

    setTimeout(() => {
        mobileNavArea.classList.add('none');
    }, 200);
   
    this.classList.add('none');
    burger.classList.remove('none');
    
})

document.getElementById('internetBtn').addEventListener('click', function(){
    window.location.assign('page1.html')
})

document.getElementById('bigDataBtn').addEventListener('click', function(){
    window.location.assign('page2.html')
})

document.getElementById('gameBtn').addEventListener('click', function(){
    window.location.assign('page3.html')
})