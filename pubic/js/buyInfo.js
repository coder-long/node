var $ = (selector)=> document.querySelector.call(document,selector);
$(".qrcode-btn").onmouseenter = ()=>{
    $(".qrcode-box").classList.remove("hidden")
}
$(".qrcode-btn").onmouseleave = ()=>{
    $(".qrcode-box").classList.add("hidden")
}


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
console.log(smallImg);
class carImg {
    constructor(urls){
        this.urls = urls;
        this.img = document.createElement('li');
        this.img.style.backgroundImage = 'url('+this.urls+')';
        this.img.style.width = 118+'px'
        this.img.style.height = 80+'px;'
        smallImg.appendChild(this.img);
        this.img.addEventListener('mouseenter',()=>{
            imgBox.style.backgroundImage = 'url('+this.urls+')';
        })
    }
}
for(var item of imgarr0){

    new carImg(item);

}

















// var html = ''
// for (let i = 0; i < imgarr.length; i++) {
//     new car(imgarr[i])
// //     let img_src = imgarr[i]

// //     // imgarr[i].setAtrribute("num",i)
// //     let index = i;
// //     html += `
   
// //     <li class="js-hover"  data-role="thumb" data-hover data-click>
// //         <span class="green-border"></span>
// //         <img src="${img_src}">
// //     </li>
   
// //    `
// //    console.log($('.smallImg li'))

// }

// console.log(html);

// $('.smallImg').html(html)

// $('.smallImg li').on('mouseover',()=>{
// })




// var html0 = ''
// for (let i = 0; i < imgarr.length; i++) {
//     let img_src = imgarr0[i]
//     html += `
   
//            <li class="js-bigpic" data-role="img" data-index="17">
//                <img src='${img_src}'
//                    alt="大众 帕萨特 2014款 1.8TSI DSG御尊版"
//                    data-gzlog="tracking_type=click&eventid=0220050000099001">
//            </li>
   
//    `
// }

// $('.det-picside').html(html0)

