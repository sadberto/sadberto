const menu_responsivo = () => {
    const nav = document.querySelector('.menu'); 
    document.addEventListener('click' , e => {
        const el = e.target;
        if(el.classList.contains('menu_responsive')){
            nav.classList.toggle('nav-active')
        }else {
            nav.classList.remove('nav-active')
        }
    })
}

function start(){
    menu_responsivo()
    myWorks()
    eventos()

}

function myWorks (){
    let cont = 0;
    let big = document.querySelector('.img1')
    let big2 = document.querySelector('.img2')
    let big3 = document.querySelector('.img3')
    
    document.addEventListener('click' , e =>{
        const el = e.target; 
        if (el.classList.contains('flx')){
            big2.classList.remove('img2') 
            big.classList.remove('img1')
            big.classList.add('img2') 
            big2.classList.add('img3')
            big3.classList.remove('img3')
            big3.classList.add('img1')
            cont ++;
            console.log(cont)
        }
        if(cont >= 2 ){
            big2.classList.remove('img3')
            big2.classList.add('img1')
            big.classList.remove('img2')
            big.classList.add('img3')
            big3.classList.remove('img1')
            big3.classList.add('img2')
            cont ++;
        }
        if(cont >= 3) {
            big2.classList.remove('img3')
            big2.classList.add('img2')
            big.classList.remove('img3')
            big.classList.add('img1')
            big3.classList.remove('img2')
            big3.classList.add('img3')
            cont = 0;
        }
    });
    document.addEventListener('click' , e =>{
        const el = e.target; 
        if (el.classList.contains('fly')){
            big2.classList.remove('img2') 
            big.classList.remove('img1')
            big.classList.add('img3') 
            big2.classList.add('img1')
            big3.classList.remove('img3')
            big3.classList.add('img2')
            cont ++;
            console.log(cont)
        }
        if(cont >= 2 ){
            big2.classList.remove('img1')
            big2.classList.add('img3')
            big.classList.remove('img3')
            big.classList.add('img2')
            big3.classList.remove('img2')
            big3.classList.add('img1')
            cont ++;
        }
        if(cont >= 3) {
            big2.classList.remove('img3')
            big2.classList.add('img2')
            big.classList.remove('img2')
            big.classList.add('img1')
            big3.classList.remove('img1')
            big3.classList.add('img3')
            cont = 0;
        }
    });
}


function eventos() {
    let side = document.querySelector('.side');
    let experiencie = document.querySelector('.experiencie_btn')
    let cordenadas = window.pageYOffset
    if (cordenadas >= 550) {
        experiencie.classList.add('experiencie_btx')
    }
    // if(cordenadas < 400){
    //     experiencie.classList.remove('experiencie_btx')
    // }

    if(cordenadas >= 200){
        side.classList.add('sideX')
    }
    // if(cordenadas <= 400){
    //     side.classList.remove('sideX')
    // }
    
}

window.addEventListener('scroll' , function(){
        eventos()
    });



start();