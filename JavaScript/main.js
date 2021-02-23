// NÚT GO TO TOP 
// Nút go to top------------------
//Get the button
var mybutton = document.getElementById("myBtn");

// Khi lăn xuống 800px thì xuất hiện nút Button go to top
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Click go to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



// <!-- sự kiện đăng nhập thành công  -->
document.addEventListener('DOMContentLoaded', function () {
    // Mong muốn của chúng ta
    Validator({
        form: '#form-1',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        rules: [
            Validator.isRequired('#fullname', 'Vui lòng nhập tên đầy đủ của bạn'),
            Validator.isEmail('#email'),
            Validator.minLength('#password', 6),
            Validator.isRequired('#password_confirmation'),
            Validator.isConfirmed('#password_confirmation', function () {
                return document.querySelector('#form-1 #password').value;
            }, 'Mật khẩu nhập lại không chính xác')
        ],
        onSubmit: function (data) {
            // Call API
            console.log(data);
        }
    });

    Validator({
        form: '#form-2',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        rules: [
            Validator.isEmail('#email'),
            Validator.minLength('#password', 6),
        ],
        onSubmit: function (data) {
            // Call API
            console.log(data);
        }
    });
});



// <!-- Sự kiện Login nổi lên màn hình -->
// Get the modal
var modal = document.getElementById("myModal1");

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// <!-- Sự kiện Sinup nổi lên màn hình -->
// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// // Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function () {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
    modal2.style.display = "none";
}



// chuyển login sang sinup 
var modal2 = document.getElementById("myModal2");

var btn3 = document.getElementById("myBtn3");

btn3.onclick = function () {
    modal2.style.display = "block";
    modal.style.display = "none";
}






//------- CHAT BOX ----------
var botController = (function () {

})();

var uiController = (function () {

})();


var controller = (function (botCntr, uiCntr) {
    var $chatCircle,
        $chatBox,
        $chatBoxClose,
        $chatBoxWelcome,
        $chatWraper,
        $submitBtn,
        $chatInput,
        $msg;

    /*toggle*/
    function hideCircle(evt) {
        evt.preventDefault();
        $chatCircle.hide('scale');
        $chatBox.show('scale');
        $chatBoxWelcome.show('scale');
    }

    function chatBoxCl(evt) {
        evt.preventDefault();
        $chatCircle.show('scale');
        $chatBox.hide('scale');
        $chatBoxWelcome.hide('scale');
        $chatWraper.hide('scale');
    }

    function chatOpenMessage(evt) {
        evt.preventDefault();
        $chatBoxWelcome.hide();
        $chatWraper.show();
    }

    //generate messages on submit click
    function submitMsg(evt) {
        evt.preventDefault();

        //1. get input message data
        msg = $chatSubmitBtn.val();

        //2.if there is no string button send shoudn't work
        if (msg.trim() == '') {
            return false;
        }
        //3. add message to bot controller
        callbot(msg);
        //4. display message to ui controller
        generate_message(msg, 'self');

    }

    function chatSbmBtn(evt) {
        if (evt.keyCode === 13 || evt.which === 13) {
            console.log("btn pushed");
        }
    }
    /* var input = uiCntr.getInput();*/
    /* $chatSubmitBtn.on("click", hideCircle);*/



    function init() {
        $chatCircle = $("#chat-circle");
        $chatBox = $(".chat-box");
        $chatBoxClose = $(".chat-box-toggle");
        $chatBoxWelcome = $(".chat-box-welcome__header");
        $chatWraper = $("#chat-box__wraper");
        $chatInput = $("#chat-input__text");
        $submitBtn = $("#chat-submit");

        //1. call toggle 
        $chatCircle.on("click", hideCircle);
        $chatBoxClose.on("click", chatBoxCl);
        $chatInput.on("click", chatOpenMessage);

        //2. call wait message from CRM-human

        $submitBtn.on("click", chatSbmBtn);
        $chatInput.on("keypress", chatSbmBtn);


        //6. get message from bot controller-back end
        //7. display bot message to ui controller
    }

    return {
        init: init
    };

})(botController, uiController);


$('.chat-input__form').on('submit', function (e) {
    e.preventDefault();
    msg = $('.chat-input__text').val();

    $('.chat-logs').append('<div id="cm-msg-0" class="chat-msg background-warning push-right bot"><div class="cm-msg-text">' + msg + '</div><span class="msg-avatar"><img class="chat-box-overlay_robot" src="image/user.png"></span></div>');
    $('.chat-input__text').val('');
});


$(document).ready(controller.init);

know = {
    "hello": "hi",
    "how are you?": "good",
    "ok": ":)"
};
function talk() {
    var user = document.getElementById("userBox").value;
    document.getElementById("userBox").value = "";
    document.getElementById("chatLog").innerHTML += user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML += know[user] + "<br>";
    }
    else {
        document.getElementById("chatLog").innerHTML += "I don't understand...<br>";
    }
} 
