/* ---------登录框显示------------ */
$(".uc-my").on("click", function () {
  $(".pop-box").show();
});
/* ---------登录框隐藏------------ */
$(".pop-close").on("click", function () {
  $(".pop-box").hide();
});
/* ----------注册框显示-------------------- */
$(".uc-zhuce").on("click", function () {
  $(".zhuce-box").show();
});
/* ----------注册框隐藏--------------------- */
$(".pop-close").on("click", function () {
  $(".zhuce-box").hide();
  $(".username").val("");
  $(".pwd").val("");
});
/* -------------------------------------各频道入口--------------------------------------------- */

/* var index_channel_new = document.querySelector(".index-channel-new");
var lis = index_channel_new.querySelectorAll("li");
var index_channel_carBox = document.querySelectorAll(".index-channel-carBox");
for (var i = 0; i < lis.length; i++) {
  lis[i].setAttribute('index', i);
  lis[i].classList.add("active")
  lis[i].onmouseover = function () {
    for (var i = 0; i < lis.length; i++) {
      lis[i].classList.remove("active")
      
    }
    
    var index = this.getAttribute('index');
    console.log(index);
    for (var i = 0; i < index_channel_carBox.length; i++) {
      index_channel_carBox[i].style.display = 'none';
    }
    ndex_channel_carBox[index].style.display = 'block';
  }

} */


/* -----------注冊界面--------------------------- */
let url = "/api/res";
$(".zhuce-btn").on("click", function () {
  let username = $(".username").val();
  let pwd = $(".pwd").val();
  if (username == "" || pwd == "") {
    alert("请输入用户名或密码");
    return;
  } else {
    $.ajax({
      type: "post",
      url: "/api/res",
      data: {
        username,
        pwd,
      },
      success(data) {
        console.log(data);
        if (data.code == 1) {
          alert("用户已存在，请重新注册！");
        } else if (data.code == 0) {
          alert("注册成功！ 快去登录吧！");
          $(".zhuce-box").hide();
          $(".pop-box").show();
        }
      },
    });
  }
});

/* ------------------登录界面-------------------------- */
$(".sub-btn").on("click", function () {
  let username = $(".dengluusername").val();
  let pwd = $(".denglupwd").val();
  if (username == "" && pwd == "") {
    alert("请输入用户名或密码");
    return;
  } else {
    $.ajax({
      type: "post",
      url: "/api/login",
      data: {
        username,
        pwd,
      },
      success(data) {
        console.log(data);
        if (data.code == 1 || data.code == 3) {
          alert("用户名或密码错误或此用户不存在！");
        } else if (data.code == 0) {
          alert("登录成功");

          $(".pop-box").hide();
          let html = data.username;
          $(".uc-my").html(html);
          $(".uc-my").on("click", function () {
            alert("个人用户中心还在开发中，哭兮兮。。。。");
            $(".dengluusername").val("");
            $(".denglupwd").val("");
            $(".pop-box").hide();
          });
        }
      },
    });
  }
});

/* --------------------------退出登录-------------------------------------------------- */

$('.js-logout').on('click', function () {
  let aa = $('.show').text();
  // console.log(aa);
  if (aa == '登录') {
    alert('请登入账号')
  } else {
    $.ajax({
      type: "post",
      url: "/api/tuichu",
      success(data) {
        console.log(data);
        if (data.code == 0) {
          alert('账号退出成功')
          let aa = '登录';
          $('.uc-my').html(aa);
        }
      }
    })
  }
});

/* -----------------------搜索----------------------------- */
$(".search-btn").on("click", function () {
  let char_type = $(".search-input").val();
  console.log(char_type);
  $.get("/api/search", { char_type: char_type }, (data) => {
    if (data.code == 1 || data.data == 0) {
      alert("查询无果，请确定你查的是个车哦");
    } else if (data.code == 0) {
      // search_input = $('search-input').val();
      window.location.href = "buy.html";
      localStorage['information'] = char_type;
      console.log(char_type);
    }
  });
});
