/* ---------登录框显示------------ */
$('.uc-my').on('click', function() {
    $('.pop-box').show();
});
/* ---------登录框隐藏------------ */
$('.pop-close').on('click', function() {
    $('.pop-box').hide();
});
/* ----------注册框显示-------------------- */
$('.uc-zhuce').on('click', function() {
    $('.zhuce-box').show();
});
/* ----------注册框隐藏--------------------- */
$('.pop-close').on('click', function() {
    $('.zhuce-box').hide();
    $('.username').val('')
    $('.pwd').val('')
});

/* -----------注冊界面--------------------------- */
let url = '/api/res'
$('.zhuce-btn').on('click', function() {

    let username = $('.username').val()
    let pwd = $('.pwd').val()
    if (username == '' || pwd == '') {
        alert('请输入用户名或密码')
        return
    } else {
        $.ajax({
            type: "post",
            url: '/api/res',
            data: {
                username,
                pwd
            },
            success(data) {
                console.log(data);
                if (data.code == 1) {
                    alert("用户已存在，请重新注册！")
                } else if (data.code == 0) {
                    alert('注册成功！ 快去登录吧！');
                    $('.zhuce-box').hide();
                    $('.pop-box').show();
                }
            }

        })
    }
})

/* ------------------登录界面-------------------------- */
$('.sub-btn').on('click', function() {
    let username = $('.dengluusername').val()
    let pwd = $('.zhucepwd').val()
    if (username == '' && pwd == '') {
        alert('请输入用户名或密码')
        return
    } else {
        $.ajax({
            type: "post",
            url: '/api/login',
            data: {
                username,
                pwd
            },
            success(data) {

                if (data.code == 1) {
                    alert('用户名或密码错误！')
                } else if (data.code == 0) {
                    alert('登录成功');
                    $('.pop-box').hide();
                    let html = data.username;
                    $('.uc-my').html(html);
                    $('.uc-my').on('click', function() {
                        alert('个人用户中心还在开发中，哭兮兮。。。。')
                        $('.dengluusername').val('');
                        $('.zhucepwd').val('');
                        $('.pop-box').hide();
                    })
                }
            }
        })
    }
})

/* -----------------------搜索----------------------------- */
$('.search-btn').on('click', function() {

    let vehicle = $('.search-input').val();

    if (vehicle == '') {
        alert('奴家只是卖车的,不要这么为难人家好吗,么么哒！')
        return
    } else {

        $.ajax({
            type: 'get',
            url: '/api/search',
            data: {
                vehicle
            },
            success(data) {
                console.log(data);
                console.log(13323);
                if (data.code == 1) {
                    alert('奴家只是个卖车的，不要为难人家嘛，爱你呦，么么哒');
                } else if (data.code == 0) {
                    alert('哇哦！好厉害哦！这都搜到了！不过此产品页面还在开发中...苦兮兮...')
                }
            }
        })
    }
})