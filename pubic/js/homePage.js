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
                if (data.code == 0) {
                    alert('注册成功！ 快去登录吧！');
                    $('.zhuce-box').hide();
                    $('.pop-box').show();
                }
            }

        })
    }
})

/* ------------------登录界面-------------------------- */
// let url = '/api/login'
$('.sub-btn').on('click', function() {
    let username = $('.dengluusername').val()
    let pwd = $('.zhucepwd').val()
    console.log(username);
    console.log(pwd);
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
                console.log(data);
                if (data.code == 1) {
                    alert('用户名或密码错误！')
                } else if (data.code == 0) {
                    alert('登录成功');
                    $('.pop-box').hide();
                }
            }
        })
    }
})