window.onload = function () {
    // var $ = (selector)=> document.querySelector.call(document,selector);

    $(".qrcode-btn").onmouseenter = () => {
        $(".qrcode-box").classList.remove("hidden")
    }
    $(".qrcode-btn").onmouseleave = () => {
        $(".qrcode-box").classList.add("hidden")
    }

    var data = cookie.getCookie(data)
    $('.info .titleBox').html(data)
    console.log($('.info .titleBox'));


    // class car{
    //     constructor(src){
    //         this.src = src;
    //         this.item = document.createElement('li')
    //         this.item.style.backgroundImage = 'url('+this.src+')'
    //         console.log( $('.smallImg'))
    //         $('.smallImg').appendChild(this.item)
    //         this.item.addEventListener('mouseenter',function(){
    //             $('.bigimgbox').style.backgroundImage = this.style.backgroundImage
    //         })
    //     }

    // }



    var imgarr0 = [
        'https://image1.guazistatic.com/qn20072808052413e6a325ef35a8eafa6919eed1c4d9a1.jpg?imageView2/1/w/600/h/400/q/88',
        'https://image1.guazistatic.com/qn200728080525a0713153afd65f24885e7cd3b63f9285.jpg?imageView2/1/w/600/h/400/q/88',
        'https://image1.guazistatic.com/qn200728080525dc875a884d0e0c377d2899469100f929.jpg?imageView2/1/w/600/h/400/q/88',
        'https://image1.guazistatic.com/qn200728080526e2960620c5ee88a917a81d544ac5a401.jpg?imageView2/1/w/600/h/400/q/88',
        'https://image1.guazistatic.com/qn200728080525788bbd06eb249aba34aa8357fe663cb9.jpg?imageView2/1/w/600/h/400/q/88'
    ];
    // var imgarr = [
    //     "https://image1.guazistatic.com/qn20072808052413e6a325ef35a8eafa6919eed1c4d9a1.jpg?imageView2/1/w/120/h/80/q/88",
    //     "https://image1.guazistatic.com/qn200728080525a0713153afd65f24885e7cd3b63f9285.jpg?imageView2/1/w/120/h/80/q/88",
    //     "https://image1.guazistatic.com/qn200728080525dc875a884d0e0c377d2899469100f929.jpg?imageView2/1/w/120/h/80/q/88",
    //     "https://image1.guazistatic.com/qn200728080526e2960620c5ee88a917a81d544ac5a401.jpg?imageView2/1/w/120/h/80/q/88",
    //     "https://image1.guazistatic.com/qn200728080525788bbd06eb249aba34aa8357fe663cb9.jpg?imageView2/1/w/120/h/80/q/88",
    //     "https://image1.guazistatic.com/qn2007280805272f1bf5723bcc45be8769308094fea225.jpg?imageView2/1/w/120/h/80/q/88"
    // ];





    var imgBox = document.querySelector('.bigimgbox');
    var smallImg = document.querySelector('.smallImg');

    class carImg {
        constructor(urls) {
            this.urls = urls;
            this.img = document.createElement('li');
            this.img.style.backgroundImage = 'url(' + this.urls + ')';
            this.img.style.width = 118 + 'px'
            this.img.style.height = 80 + 'px;'
            smallImg.appendChild(this.img);
            this.img.addEventListener('mouseenter', () => {
                imgBox.style.backgroundImage = 'url(' + this.urls + ')';
            })
        }
    }
    for (var item of imgarr0) {

        new carImg(item);

    }









}







window.onunload = function () {

    cookie.removeCookie('data')

}