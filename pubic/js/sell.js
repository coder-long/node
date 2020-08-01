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
        this.car3p.innerHTML = '成交价'


        this.carem = document.createElement("em")
        this.car3p.appendChild(this.carem)
        this.carem.innerHTML = data.now_price
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
var sellcar = document.querySelector('.sellcar')
var wrapper__close = document.querySelector(".wrapper__close")
var heightprise = document.querySelector(".free-sell-btn")
var submit = document.querySelector(".submit")
var sellvalue = document.querySelectorAll(".sellvalue")
wrapper__close.onclick = function () {
    sellvalue.value = ''
    sellcar.style.display = 'none'
}

$('.num_btn').on('click', function () {
    let number = $('.phone_number').val()
    if (!number) {
        $('.phone_number').addClass('infoTextarea change')
        $('.phone_number').attr('placeholder','请输入手机号码!')
        return
    }

    if(!(/^1[3456789]\d{9}$/.test(number))){ 
        $('.phone_number').val('')
        $('.phone_number').attr('placeholder','手机号码有误，请重填!')
        return false; 
    } 


    sellcar.style.display = 'block'
})



$('.submit').on('click', function () {
    let brand = $('.brand').val()
    let car_system = $('.car_system').val()
    let car_model = $('.car_model').val()

    let number = $('.phone_number').val()
    let mileage = $('.mileage').val() + '万公里'
    let year = $('.year').val() + '年'

    let char_type = brand + ' ' + car_system + ' ' + car_model + ' ' + mileage
    console.log(char_type);

    $.post('/api/sell', { char_type: char_type, year: year, number: number, mileage: mileage }, (data) => {
        console.log(data);
    })
})

submit.onclick = function () {
    sellvalue.value = ''
    sellcar.style.display = 'none'
}


