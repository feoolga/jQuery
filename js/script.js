;(function() {

    let sectionParallax = document.querySelector('.layers')

	sectionParallax.addEventListener('mousemove', e => {
        Object.assign(document.documentElement, {
            style: `
                --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
                --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
            `
        })
    })

})();

;(function() {

    let blockLargeImg = document.querySelector('.large-img')
    let largeImg = document.querySelector('#large-img')
    let srcImg = 'img/list/'

    document.querySelectorAll('.col-image').forEach(function(item,index){
        item.addEventListener('click', function() {
            console.log(index);
            blockLargeImg.classList.add('open')
            largeImg.setAttribute('src', srcImg + (index+1) + '.jpg')
        })
    })

    blockLargeImg.addEventListener('click', function(){
        this.classList.remove('open')
    })

    // document.querySelectorAll('.col-image').forEach(item => {
    //     item.addEventListener('click', event => {
    //         item.classList.toggle('opened')
    //     })
    // })

})();

