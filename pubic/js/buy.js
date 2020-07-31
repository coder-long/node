let url = '/api/page';
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
        
        click(){

            let data = this.data
            $('.l_box').on('click','.carlists',function(){
                cookie.setCookie('data',JSON.stringify(data),1)
                window.location.href = './buyInfo.html'
            
                $('.carlists').val()
                console.log($('.carlists').attr('data'));
                
            })
        }
    }


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


    $.post(url, { page: 1 }, (res) => {
        $('.carListBox').html('');
        $.each(res.data, (index, value) => {
            new car(value);
        })
    })

    $('.pageChange button').on('click', function () {

        let page = this.value;

        $.post(url, { page: page }, (res) => {
            $('.carListBox').html('');
            $.each(res.data, (index, value) => {
                new car(value);
            })
        })
    })

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


    })

    var tradmarkesSon1 = document.querySelectorAll('.trademark:nth-of-type(1)>li a');
    var tradmarkesSon2 = document.querySelectorAll('.trademark:nth-of-type(2)>li a');
    var tradmarkesSon3 = document.querySelectorAll('.trademark:nth-of-type(3)>li a');

    //默认样式
    tradmarkesSon1[0].style.backgroundColor = '#22ac38';
    tradmarkesSon1[0].style.fontWeight = 900;
    tradmarkesSon1[0].style.color = 'white';


    console.log(tradmarkesSon1);
    $('.trademark li a').click(function() {
        // if(tradmarkesSon1.include(this)){
            for(var item of tradmarkesSon1){
            item.style.backgroundColor = 'white';
            item.style.fontWeight = 500;
            item.style.color = 'black';
        // }    
    }
    
        let char_type = $(this).html();
        // console.log(this);



        // this.classList.add('bacoGreen');
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
