var carbox = document.querySelector(".deal-list-wrapper");
var more = document.querySelector(".deal-more")
var url = '/api/SellAll'

/* 点击更多汽车 */
class car {
    constructor(data) {
        this.carli = document.createElement("li")
        this.carimg = document.createElement("img")
        this.carli.appendChild(this.carimg)
        this.carimg.src = data.img_src


        this.car1p = document.createElement('p')
        this.car1p.classList.add("deal-p1")
        this.carli.appendChild(this.car1p)   //创建第一个并且添加  
        this.car1p.innerHTML = data.char_type

        this.car2p = document.createElement('p')
        this.car2p.classList.add("deal-p2")
        this.carli.appendChild(this.car2p) //创建第二个并添加     
        this.car2p.innerHTML = data.year + ' | ' + data.mileage + ' | ' + data.position

        this.car3p = document.createElement('p')
        this.car3p.classList.add("deal-p3")
        this.carli.appendChild(this.car3p)  //创建第三个并添加
        this.car3p.innerHTML='成交价'
        
        
        this.carem = document.createElement("em")
        this.car3p.appendChild(this.carem)
        this.carem.innerHTML=data.now_price
        carbox.appendChild(this.carli)

    }
}
let value = 1
$('.deal-more').on('click', function () {
    value++
    let page = value
    $.post(url, { page: page }, (data) => {
        console.log(data);
        for (var i = 0; i < data.data.length; i++) {
            new car(data.data[i])
        }
    })
})

/*估价买车弹窗*/
var sellcar =document.querySelector('.sellcar')
var wrapper__close=document.querySelector(".wrapper__close")
var heightprise=document.querySelector(".free-sell-btn")
var submit=document.querySelector(".submit")
var sellvalue=document.querySelector(".sellvalue")
wrapper__close.onclick=function(){
    sellvalue.value=''
    sellcar.style.display='none'
}
heightprise.onclick=function(){
    sellcar.style.display='block'
}
submit.onclick=function(){
    sellvalue.value=''
    sellcar.style.display='none'
}



