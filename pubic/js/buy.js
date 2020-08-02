// const cookieParser = require("cookie-parser");

let url = '/api/page';
<<<<<<< HEAD
    let page = 10
var carList = document.querySelector('.carListBox');
var boxArr = new Array;

var num = 0;
    class car {
        constructor(data) {

            this.data = data;
            // console.log(data.img_src);
            this._id = data._id
            this.char_type = data.char_type
            this.img_src = data.img_src
            this.year = data.year
            this.mileage = data.mileage
            this.now_price = data.now_price
            this.pre_price = data.pre_price
            // this.init()
            // this.click();
            this.box = document.createElement('div');
            this.box.classList.add('carlists');
            this.box.setAttribute('idx',num);
            num ++;
            this.img = document.createElement('img');
            this.img.src = this.img_src;

            this.p1 = document.createElement('p');
            this.p1.innerHTML = this.char_type;
            this.p2 = document.createElement('p');
            this.p2.innerHTML = ''+this.year+'|'+this.mileage+'|到店服务';
            this.p3 = document.createElement('p');
            this.p3.innerHTML= this.now_price;
            this.box.appendChild(this.img);
            this.box.appendChild(this.p1);
            this.box.appendChild(this.p2);
            this.box.appendChild(this.p3);
            carList.appendChild(this.box);
            boxArr.push(this);
            
           


            this.box.onclick = () => {
                let data = {
                    datas : this.data,
                    // type: this.p1.innerHTML,
                    // desc: this.p2.innerHTML,
                    // pic: this.img.src,
                    // price: this.p3.innerHTML
                }
                console.log(JSON.stringify(data));
                window.location.href = `./buyInfo.html?data=${JSON.stringify(data)}`;
                cookie.setCookie('carMsg',JSON.stringify(data));
                
                console.log(data);
            }
            // $(this.box).on('click','.carlists',function(){
            //     console.log($(this))
                // cookie.setCookie('data',JSON.stringify(data),1);
                // console.log(this.data);
            // console.log(data)
                // $('.carlists').val()
                // console.log($('.carlists').attr('data'));
            // })


        }
        // init() {
        //     let html = '';
        //     html += `
        //         <div class="carlists" data=${JSON.stringify(this.data)}>
        //             <img src="${this.img_src}"
        //                 alt="">
        //             <p>${this.char_type}</p>
        //             <p>${this.year}|${this.mileage}|到店服务</p>
        //             <p>${this.now_price}</p>
        //               </div>
        //     `
        //     $('.carListBox').append(html);
        // }
        
    }
    console.log(boxArr);
    for(var item of boxArr){
        console.log(item)
        
=======
let page = 10

class car {
    constructor(data) {
        this.data = data;
        this._id = data._id
        this.char_type = data.char_type
        this.img_src = data.img_src
        this.year = data.year
        this.mileage = data.mileage
        this.now_price = data.now_price
        this.pre_price = data.pre_price
        this.init()
        this.click();

    }
    init() {
        let html = ''
        html += `
                <div class="carlists" data=${JSON.stringify(this.data)}>
                    <img src="${this.img_src}"
                        alt="">
                    <p>${this.char_type}</p>
                    <p>${this.year}|${this.mileage}|到店服务</p>
                    <p>${this.now_price}</p>
                      </div>
            `
        $('.carListBox').append(html);
    }

    click() {

        let data = this.data
        $('.l_box').on('click', '.carlists', function () {
            cookie.setCookie('data', JSON.stringify(data), 1)
            window.location.href = './buyInfo.html'

            $('.carlists').val()
            console.log($('.carlists').attr('data'));

        })
>>>>>>> 35197fd6d32b95be2b9a86c31b5f36e72fcaa9af
    }
}

$('.selection_ipt').val(localStorage['information'])

var floats = document.querySelector('.floats');
// floats.appendChild();
window.addEventListener('scroll', function () {
    // console.log(document.documentElement.scrollTop);
    // console.log('滚动')
    if (document.documentElement.scrollTop >= 500) {
        floats.style.display = 'block';
    } else {
        floats.style.display = 'none';
    }
});


<<<<<<< HEAD
    
    var floats = document.querySelector('.floats');
    // floats.appendChild();
    window.addEventListener('scroll', function () {
        // console.log(document.documentElement.scrollTop);
        // console.log('滚动')
        if (document.documentElement.scrollTop >= 500) {
            floats.style.display = 'block';
        } else {
            floats.style.display = 'none';
        }
    });
=======
$.post(url, { page: 1 }, (res) => {
    $('.carListBox').html('');
    $.each(res.data, (index, value) => {
        new car(value);
    })
})

$('.pageChange button').on('click', function () {
>>>>>>> 35197fd6d32b95be2b9a86c31b5f36e72fcaa9af

    let page = this.value;

    $.post(url, { page: page }, (res) => {
        $('.carListBox').html('');
        $.each(res.data, (index, value) => {
            new car(value);
        })
    })
})

<<<<<<< HEAD
    $('.pageChange button').on('click', function () {
        console.log(this);
        let page = this.value;

        $.post(url, { page: page }, (res) => {
=======
let search_url1 = '/api/search'
$('.selection input').on('keydown', function (e) {

    if (e.keyCode == 13) {
        $('.l_box').css({
            'display': 'none'
        })
        $('.l_box1').css({
            'display': 'block'
        })
        let char_type = $('.selection input').val();
        console.log(char_type);
        $.get(search_url1, { char_type: char_type }, (res) => {
            console.log(res);
>>>>>>> 35197fd6d32b95be2b9a86c31b5f36e72fcaa9af
            $('.carListBox').html('');
            $.each(res.data, (index, value) => {
                new car(value);
                
            })
                // for(var i = 0;i<boxArr.length;i++){
                //     boxArr[i].box.setAttribute('idx',i);
                //     boxArr[i].box.onclick = function(){
                //         // this.getAttribute('idx')
                //     }
                // }
                

        })
<<<<<<< HEAD
    })

    // console.log(boxArr[1].box);

    let search_url1 = '/api/search'
    $('.selection input').on('keydown', function (e) {

        if (e.keyCode == 13) {
            $('.l_box').css({
                'display': 'none'
            })
            $('.l_box1').css({
                'display': 'block'
            })
            let char_type = $('.selection input').val();
            console.log(char_type);
            $.get(search_url1, { char_type: char_type }, (res) => {
                console.log(res);
                $('.carListBox').html('');
                $.each(res.data, (index, value) => {
                    new car(value);
                })
            })
        }
=======
    }
>>>>>>> 35197fd6d32b95be2b9a86c31b5f36e72fcaa9af


})

<<<<<<< HEAD
    //筛选字段
    var char_type = '';

    var selection1 = document.querySelectorAll('.selection1 li a');
    var selection2 = document.querySelectorAll('.selection2 li a');
    var selection3 = document.querySelectorAll('.selection3 li a');
    
    $('.selection1 li a').click(function() {

        for(var i of selection1){
            i.style.backgroundColor = ' white';
            i.style.color = 'black';
            i.style.fontWeight = 500;
        }
=======
var tradmarkesSon1 = document.querySelectorAll('.trademark:nth-of-type(1)>li a');
var tradmarkesSon2 = document.querySelectorAll('.trademark:nth-of-type(2)>li a');
var tradmarkesSon3 = document.querySelectorAll('.trademark:nth-of-type(3)>li a');

//默认样式
tradmarkesSon1[0].style.backgroundColor = '#22ac38';
tradmarkesSon1[0].style.fontWeight = 900;
tradmarkesSon1[0].style.color = 'white';


console.log(tradmarkesSon1);
$('.trademark li a').click(function () {
    // if(tradmarkesSon1.include(this)){
    for (var item of tradmarkesSon1) {
        item.style.backgroundColor = 'white';
        item.style.fontWeight = 500;
        item.style.color = 'black';
        // }    
    }

    let char_type = $(this).html();
    // console.log(this);
>>>>>>> 35197fd6d32b95be2b9a86c31b5f36e72fcaa9af

        char_type += $(this).html()+" ";

<<<<<<< HEAD
        this.classList.add('bacoGreen');
        this.style.backgroundColor = ' #22ac38';
        this.style.color = 'white';
        this.style.fontWeight = 900;

        $('.l_box').css({
            'display': 'none'
        })
        $('.l_box1').css({
            'display': 'block'
        })

        $.get(search_url1, { char_type: char_type }, (res) => {
            console.log(res);
            $('.carListBox').html('');
            $.each(res.data, (index, value) => {
                new car(value);
            })
        })
    })

    $('.selection2 li a').click(function() {

        for(var i of selection2){
            i.style.backgroundColor = ' white';
            i.style.color = 'black';
            i.style.fontWeight = 500;
        }
=======

    // this.classList.add('bacoGreen');
    this.style.backgroundColor = ' #22ac38';
    this.style.color = 'white';
    this.style.fontWeight = 900;
>>>>>>> 35197fd6d32b95be2b9a86c31b5f36e72fcaa9af

        char_type += $(this).html()+" ";

        this.classList.add('bacoGreen');
        this.style.backgroundColor = ' #22ac38';
        this.style.color = 'white';
        this.style.fontWeight = 900;


    $('.l_box').css({
        'display': 'none'
    })
    $('.l_box1').css({
        'display': 'block'
    })

    $.get(search_url1, { char_type: char_type }, (res) => {
        console.log(res);
        $('.carListBox').html('');
        $.each(res.data, (index, value) => {
            new car(value);
        })
    })
<<<<<<< HEAD
    


=======
})
>>>>>>> 35197fd6d32b95be2b9a86c31b5f36e72fcaa9af
