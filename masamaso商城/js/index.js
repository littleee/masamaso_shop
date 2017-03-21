/**
 * Created by Cora on 2017/3/17.
 */
$(function(){
    changePic();
    notice();
    accor();
    recommend();
  //  console.log($('.smallImg span').length);
});
//轮播图
function changePic(){
    var _index=0;
    function Init(){
    $('.bigImg ul').append("<li style='background: url(img/indexImg/bannerbg_1.jpg) 50% 0 no-repeat; display:list-item'><a href='#'></a></li>");
    $('.bigImg ul').append("<li style='background: url(img/indexImg/bannerbg_2.jpg) 50% 0 no-repeat; display:none'><a href='#'></a></li>");
    $('.bigImg ul').append("<li style='background: url(img/indexImg/bannerbg_3.jpg) 50% 0 no-repeat; display:none'><a href='#'></a></li>");
    $('.smallImg span').eq(_index).addClass("actor");
    }
    function _control(){
        var _ind=_index;
        var _timer = null;
        var _timer2 = null;
        _timer = setInterval(slider,3000);
        function slider(){
        //  _ind==2?_ind=0:_ind++;

            _index==2?_ind=0:_ind=_index+1;
         //   console.log(_ind);
          //     console.log(_index)
            $('.bigImg li').eq(_ind).css({'display':'list-item','opacity':'0.6'}).animate({
                'opacity':1
            },650).siblings().css({'display':'none'})
            $('.smallImg span').eq(_ind).toggleClass("actor");//目标
            $('.smallImg span').eq(_index).toggleClass("actor");//当前
            _index==2?_index=0:_index=_ind;
        //    console.log(_ind);
        }

    $('.smallImg span').mouseenter(function(){

        clearInterval(_timer);
        _ind = $(this).index();//目标
         _timer2=setTimeout(fn,250);
        function fn() {
            $('.smallImg span').eq(_index).removeClass("actor");//当前
             //  console.log(_index);
            $('.bigImg li').eq(_ind).css({'display':'list-item','opacity':'0.6'}).animate({//轮播动画效果
                'opacity':1
            },650).siblings().css({'display':'none'})
            $('.smallImg span').eq(_ind).addClass("actor");
            _index=_ind;
            //  $(this).addClass("actor");//目标
        }
    })
        $('.smallImg span').mouseleave(function () {
            clearInterval(_timer2);
            _timer = setInterval(slider, 3000)
       //     console.log(_timer)
        })
    }
    Init();
    _control();
}
//滚动
function notice() {
    $(".notice-poab").animate({
        "left": "-1843px"
    }, 50000, "linear").animate({
        "left": 0
    }, 0, function() {
        notice();
    })
}
//手风琴
function accor() {
    //					for(var i = 0;i<4;i++){
    $(".accor_item .accor_text").eq(0).css({
        "opacity": "0.9",
        "width": "378px",
        "height": "160px",
        "bottom": "20px",
        "right": "0px",
        "background": "rgb(240,240,240)"
    })
    // $(".accor_item .accor_text").eq(2).css({
    // 	"background": "rgb(240,240,240)"
    // })
    $(".accor_small").eq(0).css("left", "-140px");
    $(".accor_small").eq(0).css("background", "url(img/indexImg/smallaccor_1.jpg)")
    $(".accor_small").eq(1).css("background", "url(img/indexImg/smallaccor_2.jpg)")
    $(".accor_small").eq(2).css("background", "url(img/indexImg/smallaccor_3.jpg)")
    $(".accor_small").eq(3).css("background", "url(img/indexImg/smallaccor_4.jpg)")
    //					}
    $(".accor_item").mouseenter(function() {
        var _index = $(this).index()
        $(this).stop().animate({
            "width": "780px",
            "background-position":"0"

        }, 500).siblings().stop().animate({
            "width": "140px",
            "background-position":"-300px"
        }, 500)
        $(".accor_item .accor_small").eq(_index).stop().animate({
            "left": "-140px",
            "opacity": "0"
        }, 500)
        $(".accor_item .accor_small").not($(".accor_item .accor_small").eq(_index)).stop().animate({
            "left": "0px",
            "opacity": "1"
        }, 500)
        $(".accor_item .accor_text").eq(_index).stop().animate({
            "width": "378px",
            "height": "160px",
            "bottom": "20px",
            "right": "0",
            "background": "rgb(240,240,240)",
            "opacity": "0.9"
        }, 500)
        $(".accor_item .accor_text").not($(".accor_item .accor_text").eq(_index)).stop().animate({
            "width": "140px",
            "height": "255px",
            "background": "#f9f9f9",
            "right": "0",
            "bottom": "0",
            "opacity": "1"
        })
    })
}
//无缝滚动
function recommend() {
    var _indexNum = 0
    $(".recommned_info").stop().animate({
        "left": 0
    })
    $(".recommend_li li").mouseenter(function() {
        var _index = $(this).index();
        clearInterval(_timer);
        _indexNum = _index
        $(this).addClass("on").siblings().removeClass("on")
        //						alert(_index)
        $(".recommned_info").stop().animate({
            "left": "-" + 1210 * _index + "px"
        })
    })
    $(".recommend").mouseenter(function() {
        clearInterval(_timer);
    })
    $(".recommend").mouseleave(function() {
        _timer = setInterval(recommendMove, 3000)
    })
    var _timer = setInterval(recommendMove, 3000)

    function recommendMove() {
        _indexNum++;
        if (_indexNum == 7) {
            $(".recommned_info").stop().animate({
                "left": "-" + (1210 * _indexNum) + "px"
            })
            //  .animate({
            //    "left": "0"
            //}, 0)
            _indexNum = 0;
        } else {
            $(".recommned_info").stop().animate({
                "left": "-" + 1210 * _indexNum + "px"
            })
        }
        $(".recommend_li li").eq(_indexNum).addClass("on").siblings().removeClass("on")
    }
    var _strclone = "";
    //clothesnew
    $.ajax({
        url: "json/goods.json",
        success: function(date) {
            var _len = date["clothenew"].length
            var _str = "<ul class='clearfix'>"
            for (var i = 0; i < _len; i++) {
                _str += "<li><a href='#'><img src='img/indexImg/clothesnew_" + (i + 1) + ".jpg'/></a><div class='info_text'><a href='#'>" + date["clothenew"][i].name + "</a><div class='price'><font>￥</font><span>" + date["clothenew"][i].price + "</span></div></div></li>"
            }
            _str += "</ul>";
            $(".recommned_info").append(_str)
            _strclone = _str//加载到最后一个，方便无缝滚动
            //陆续加载
            $.ajax({
                url: "json/goods.json",
                success: function(date) {
                    var _len = date["switer"].length
                    var _str = "<ul class='clearfix'>"
                    for (var i = 0; i < _len; i++) {
                        _str += "<li><a href='#'><img src='img/indexImg/switer_" + (i + 1) + ".jpg'/></a><div class='info_text'><a href='#'>" + date["switer"][i].name + "</a><div class='price'><font>￥</font><span>" + date["switer"][i].price + "</span></div></div></li>"
                    }
                    _str += "</ul>";
                    $(".recommned_info").append(_str)
                    //coat
                    $.ajax({
                        url: "json/goods.json",
                        success: function(date) {
                            var _len = date.coat.length
                            var _str = "<ul class='clearfix'>"
                            for (var i = 0; i < _len; i++) {
                                _str += "<li><a href='#'><img src='img/indexImg/coat_" + (i + 1) + ".jpg'/></a><div class='info_text'><a href='#'>" + date["coat"][i].name + "</a><div class='price'><font>￥</font><span>" + date["coat"][i].price + "</span></div></div></li>"
                            }
                            _str += "</ul>";
                            $(".recommned_info").append(_str)
                            //shirt
                            $.ajax({
                                url: "json/goods.json",
                                success: function(date) {
                                    var _len = date["shirt"].length
                                    var _str = "<ul class='clearfix'>"
                                    for (var i = 0; i < _len; i++) {
                                        _str += "<li><a href='#'><img src='img/indexImg/shirt_" + (i + 1) + ".jpg'/></a><div class='info_text'><a href='#'>" + date["shirt"][i].name + "</a><div class='price'><font>￥</font><span>" + date["shirt"][i].price + "</span></div></div></li>"
                                    }
                                    _str += "</ul>";
                                    $(".recommned_info").append(_str)
                                    //tshirt
                                    $.ajax({
                                        url: "json/goods.json",
                                        success: function(date) {
                                            var _len = date["tshirt"].length
                                            var _str = "<ul class='clearfix'>"
                                            for (var i = 0; i < _len; i++) {
                                                _str += "<li><a href='#'><img src='img/indexImg/tshirt_" + (i + 1) + ".jpg'/></a><div class='info_text'><a href='#'>" + date["tshirt"][i].name + "</a><div class='price'><font>￥</font><span>" + date["tshirt"][i].price + "</span></div></div></li>"
                                            }
                                            _str += "</ul>";
                                            $(".recommned_info").append(_str)
                                            //trousers
                                            $.ajax({
                                                url: "json/goods.json",
                                                success: function(date) {
                                                    var _len = date["trousers"].length
                                                    var _str = "<ul class='clearfix'>"
                                                    for (var i = 0; i < _len; i++) {
                                                        _str += "<li><a href='#'><img src='img/indexImg/trousers_" + (i + 1) + ".jpg'/></a><div class='info_text'><a href='#'>" + date["trousers"][i].name + "</a><div class='price'><font>￥</font><span>" + date["trousers"][i].price + "</span></div></div></li>"
                                                    }
                                                    _str += "</ul>";
                                                    $(".recommned_info").append(_str)
                                                    $.ajax({
                                                        url: "json/goods.json",
                                                        success: function(date) {
                                                            var _len = date["shoe"].length
                                                            var _str = "<ul class='shoe clearfix'>"
                                                            for (var i = 0; i < _len; i++) {
                                                                _str += "<li><a class='imga' href='javascript:;'><img src='img/indexImg/shoe_" + (i + 1) + ".jpg'/></a><div class='info_text'><a class='imgtxt' href='javascript:;'>" + date["shoe"][i].name + "</a><div class='price'><font>￥</font><span>" + date["shoe"][i].price + "</span></div></div></li>"
                                                            }
                                                            _str += "</ul>";
                                                            $(".recommned_info").append(_str)
                                                            $(".recommned_info").append(_strclone)
                                                            $(".shoe li:first").find("a").attr("shoe_id", "20682");
                                                            $(".shoe li").eq(1).find("a").attr("shoe_id", "15557");
                                                            $(".shoe li a").click(function() {
                                                                var _id = $(this).attr("shoe_id");
                                                                $.cookie('goodid', _id, {
                                                                    path: '/'
                                                                });
                                                                location.href = "gooddetail.html"
                                                            })
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });


}