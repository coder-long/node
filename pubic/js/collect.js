var midd = document.querySelector('.midd');
var car_1 = document.querySelector('.car_1');
var car_2 = document.querySelector('.car_2');
var car_3 = document.querySelector('.car_3');
var shoucang = document.querySelector('.shoucang');
var jiangjia = document.querySelector('.jiangjia');
var liulan = document.querySelector('.liulan');
var closes = document.querySelector('.pop-close');
var mask = document.querySelector('.pop-mask');
var boxs = document.querySelector('.pop-box');
var btnPrimary = document.querySelector('.btn-primary');


midd.style.width = window.innerWidth;

class xin {
    constructor(data, dom, car_1) {
        this.char_type = data.char_type;
        this.img_src = data.img_src;
        this.mileage = data.mileage;
        this.now_price = data.now_price;
        this.position = data.position;
        this.pre_price = data.pre_price;
        this.year = data.year;
        this.dom = dom;
        this.car_1 = car_1;
        this.data = data;
        this.init();
        this.delete();
    }
}

xin.prototype.init = function() {

    let cov = document.createElement('div');
    cov.classList.add('cov');
    this.dom.appendChild(cov);

    let imgs = document.createElement('img');
    imgs.src = this.img_src;
    cov.appendChild(imgs);

    this.del = document.createElement('span');
    this.del.classList.add('del');
    cov.appendChild(this.del);

    let char = document.createElement('div');
    char.classList.add('char');
    char.innerHTML = this.char_type;
    cov.appendChild(char);

    let year = document.createElement('div');
    year.classList.add('year');
    year.innerHTML = `${this.year}上牌 | 行驶${this.mileage}`
    cov.appendChild(year);

    let price = document.createElement('div');
    price.classList.add('price');
    cov.appendChild(price);

    let priceCurr = document.createElement('div');
    priceCurr.classList.add('price-curr');
    priceCurr.innerHTML = this.now_price;
    price.appendChild(priceCurr)

    if (this.pre_price == '') {

        let priceDown = document.createElement('div');
        priceDown.classList.add('price-down')
        price.appendChild(priceDown);

        let p = document.createElement('p');
        p.innerHTML = '已降价';
        priceDown.appendChild(p);

        let span = document.createElement('span');
        span.innerHTML = '7000元';
        priceDown.appendChild(span);

        let through = document.createElement('div');
        through.classList.add('price-through');
        through.innerHTML = this.pre_price;
        price.appendChild(through);
    }

}

xin.prototype.delete = function() {

    this.del.onclick = () => {

        console.log(this.data);
        boxs.classList.remove('hidd');
        mask.classList.remove('hidd');

        btnPrimary.onclick = () => {

            console.log(this.data);
            boxs.classList.add('hidd');
            mask.classList.add('hidd')

        }
    }

}



shoucang.onclick = function() {
    window.location = '../collect.html'
    $.ajax({
        type: 'get',
        url: '/api/collect',
        // data: data,
        success(data) {
            if (data.length == 0) { //判断收藏表有无数据
                midd.style.height = '680px';
                car_1.style.height = '620px';
                car_1.innerHTML = '<div class="zan">暂无收藏车辆</div><a href="" class="guang">去逛逛瓜子海量车源 ></a>'
            } else {
                // console.log(data);
                midd.style.height = data.data.length * 190 + 'px';
                car_1.innerHTML = '';

                var data = data.data;
                let dom = document.createElement('div');
                dom.classList.add('all');
                dom.style.height = Math.ceil(data.length / 3) * 300 + 'px';
                car_1.appendChild(dom);


                for (i = 0; i < data.length; i++) {

                    new xin(data[i], dom, car_1)

                }
                let fenye = document.createElement('div');
                fenye.classList.add('fenye');
                fenye.innerHTML = '已到最后一页了哦';
                car_1.appendChild(fenye);

            }
        },
        error() {

        }



    })


}



jiangjia.onclick = function() {
    window.location = '../jiangjia.html'
}

liulan.onclick = function() {
    window.location = '../history.html'
}




$.ajax({
    type: 'get',
    url: '/api/collect',
    // data: data,
    success(data) {
        if (data.length == 0) { //判断收藏表有无数据
            midd.style.height = '680px';
            car_1.style.height = '620px';
            car_1.innerHTML = '<div class="zan">暂无收藏车辆</div><a href="" class="guang">去逛逛瓜子海量车源 ></a>'
        } else {
            console.log(data);
            midd.style.height = data.data.length * 150 + 'px';
            var data = data.data;
            let dom = document.createElement('div');
            dom.classList.add('all');
            dom.style.height = Math.ceil(data.length / 3) * 300 + 'px';
            car_1.appendChild(dom);


            for (i = 0; i < data.length; i++) {

                new xin(data[i], dom, car_1)

            }
            let fenye = document.createElement('div');
            fenye.classList.add('fenye');
            fenye.innerHTML = '已到最后一页了哦';
            car_1.appendChild(fenye);

        }
    },
    error() {

    }



})





closes.onclick = function() {

    boxs.classList.add('hidd');
    mask.classList.add('hidd')

}