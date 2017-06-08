/* spig.js */
//Right click (Menu)
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        if(e.which==3){
        showMessage("Secret Passage:<br /><a href=\"hhtp://blog.ijayaprakash.in/\" title=\"Leave a message\">Leave a message</a> ;   
}
});
$("#spig").bind("contextmenu", function(e) {
    return false;
});
});

//when the mouse is on the message
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
       $("#message").fadeTo("100", 1);
     });
});


//when the mouse is on the Top
jQuery(document).ready(function ($) {
    //$(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    $(".mumu").mouseover(function () {
       $(".mumu").fadeTo("300", 0.3);
       msgs = ["I stealth, you can not see me, "" I will stealth Oh! Hey hey! "Do not hands and feet, handle away!！"];
       var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
});

//开始
jQuery(document).ready(function ($) {
    if (isindex) { //if it is the Homepage
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + ' Are you a night owl? Do not sleep, ？', 6000);
        } else if (now > 6 && now <= 11) {
            showMessage(visitor + ' Good morning, early birds have worms eat Oh! Elderly insects are eaten by birds, are you birds or insects? Hee hee hee！', 6000);
        } else if (now > 11 && now <= 14) {
            showMessage(visitor + ' At noon, eat it? Do not be hungry, ！', 6000);
        } else if (now > 14 && now <= 18) {
            showMessage(visitor + ' Afternoon time really tough! Fortunately, you are there！', 6000);
        } else {
            showMessage(visitor + ' Come and play with me now！', 6000);
        }
    }
    else {
        showMessage('welcome' + visitor + 'you Just entered into my Personal Blog《' + title + '》', 6000);
    }
    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 160
    },
	{
	    queue: false,
	    duration: 1000
	});
});

//When the mouse is above some elements
jQuery(document).ready(function ($) {
    $('h2 a').click(function () {//When the title is clicked
        showMessage('We are loading 《<span style="color:#0099cc;">' + $(this).text() + '</span>》请稍候');
    });
    $('h2 a').mouseover(function () {
        showMessage('To see《<span style="color:#0099cc;">' + $(this).text() + '</span>》这篇文章么？');
    });
    $('#prev-page').mouseover(function(){
        showMessage('Would you like to turn to the previous page??');
    });
    $('#next-page').mouseover(function(){
        showMessage('Would you like to turn to the next page??');
    });
    $('#index-links li a').mouseover(function () {
        showMessage('go with <span style="color:#0099cc;">' + $(this).text() + '</span> 逛逛');
    });
    $('.comments').mouseover(function () {
        showMessage('<span style="color:#0099cc;">' + visitor + '</span> 向评论栏出发吧！');
    });
    $('#submit').mouseover(function () {
        showMessage('Are you sure to submit?？');
    });
    $('#s').mouseover(function () {
        showMessage('Enter the keywords you want to search forEnter(Enter key就可以搜索啦!');
    });
    $('#go-prev').mouseover(function () {
        showMessage('It can be back！');
    });
    $('#go-next').mouseover(function () {
        showMessage('It can go ahead！');
    });
    $('#refresh').mouseover(function () {
        showMessage('It can reload this page！');
    });
    $('#go-home').mouseover(function () {
        showMessage('It can go back to the home page！');
    });
    $('#addfav').mouseover(function () {
        showMessage('It can add this page to the bookmark！');
    });
    $('#nav-two a').mouseover(function () {
        showMessage('Hush, from here you can enter the control panel Oh！');
    });
    $('.post-category a').mouseover(function () {
        showMessage('Click to view all articles under this category');
    });
    $('.post-heat a').mouseover(function () {
        showMessage('Point it can jump directly to the comment list.');
    });
    $('#tho-shareto span a').mouseover(function () {
        showMessage('Do you know? It can share this article'+$(this).attr('title'));
    });
    $('#switch-to-wap').mouseover(function(){
        showMessage('Click to switch to the mobile version of the blog layout');
    });
});


//Bored to say something
jQuery(document).ready(function ($) {

    window.setInterval(function () {
        msgs = ["Broadcast tomorrow weather<iframe name=\"xidie\" src=\"http://heartmoving.com/skin/2020-0601.html\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", "Chat with me！", "<a href=\"http://messense.me/feed/\" target=\"_blank\" rel=\"external\" tip=\"Feed\"><img border=\"0\" title=\"Subscribe to chaos feeling\" alt=\"Feed\" src=\"/dsimg/weipayimg.jpg\" width=\"80\" height=\"80\"></a>", "So boring, oh, you do not play with me! "..." ... ... ... ... ... ... "," ^% # & *! @ * (& #) (!) ("," I am cute! Hee hee! ~ ^ _ ^! ~~ " ……”"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000);
    }, 35000);
});

//Boring move
jQuery(document).ready(function ($) {
    window.setInterval(function () {
        msgs = ["Broadcast tomorrow weather<iframe name=\"xidie\" src=\"http://heartmoving.com/skin/2020-0601.html\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", "Quickly subscribe to my blog！<a href=\"http://blog.ijayaprakash.in/\" target=\"_blank\" rel=\"external\" tip=\"Feed\"><img border=\"0\" title=\"Subscribe to chaos feeling\" alt=\"Feed\" src=\"/dsimg/weipayimg.jpg\" width=\"80\" height=\"80\"></a>", "Heaven and earth big diversion! "I drank over!" ~ "," I drifted over "," I am proud to float! " ~ Gone with the Wind！~"];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetHeight/2*(1+s[i1])
        },
			{
			    duration: 2000,
			    complete: showMessage(msgs[i])
			});
    }, 45000);
});

//
jQuery(document).ready(function ($) {
    $("#author").click(function () {
        showMessage("Leave your Name and Phno！");
        $(".spig").animate({
            top: $("#author").offset().top - 70,
            left: $("#author").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#email").click(function () {
        showMessage("Leave your mailbox, or No avatar people！");
        $(".spig").animate({
            top: $("#email").offset().top - 70,
            left: $("#email").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#url").click(function () {

        showMessage("Quickly tell me where your home is, so that I can visit it！");
        $(".spig").animate({
            top: $("#url").offset().top - 70,
            left: $("#url").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#comment").click(function () {
        showMessage("Seriously fill in Oh! Otherwise it will be considered spam comments! My obediently~");
        $(".spig").animate({
            top: $("#comment").offset().top - 70,
            left: $("#comment").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
});

var spig_top = 50;
//mOVE tHE Scroll Bar
jQuery(document).ready(function ($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function () {
        $(".spig").animate({
            top: $(window).scrollTop() + f +300
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
});

//When the mouse is clicked
jQuery(document).ready(function ($) {
    var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["you have finished it？" "you have touched me" + stat_click + "Not ", "OH-yeah！HELP！OH，My ladygaga"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["Somersault ~ I fly "I run and run!" ~ ~ "," Do not touch me, big man, what a good touch! "," Untouchables, I can not hide you? " "Do not touch me, I will tell my Girl frnd to hit you!" "Why do you move me!" Be careful I bite you！"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetHeight/2*(1+s[i1])
            },
			{
			    duration: 500,
			    complete: showMessage(msgs[i])
			});
        } else {
            ismove = false;
        }
    });
});
//显示消息函数 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};

//拖动
var _move = false;
var ismove = false; //Move the mark
var _x, _y; //The relative position of the mouse from the top left corner of the control
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
     });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x; 
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#spig').width();
            var dy = $(document).height() - $('#spig').height();
            if(x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x
                }); //控件新位置
            ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});
