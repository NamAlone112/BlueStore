// hiển thị danh sách sản phẩm 




//  ------------------------- LIST GIAY -----------------------------------------------

const listShoes = [
    {
        nameShoes: 'NIKE',
        idShow: 'nike',
        listRow: [
            {
                id: 1,
                row: [{
                    anh: "image/nike/nike1.jpg",
                    ten: "AIR FORCE 1 OFF-WHITE",
                    gia: "10.000.000 VNĐ",
                    color: 'white gia4',
                },
                {
                    anh: "image/nike/nike2.jpg",
                    ten: "NIKE CORTEZ BASIC",
                    gia: "3.000.000 VNĐ",
                    color: 'white gia3'
                },
                {
                    anh: "image/nike/nike3.jpg",
                    ten: "WMNS SOCK DART",
                    gia: "1.850.000 VNĐ",
                    color: 'grey gia2'
                }]
            },
            {
                id: 2,
                row: [{
                    anh: "image/nike/nike4.jpg",
                    ten: "AIR FORCE 1 G-DRAGON",
                    gia: "12.000.000 VNĐ",
                    color: 'black gia5'
                },
                {
                    anh: "image/nike/nike5.jpg",
                    ten: "FLYKNIT RACER",
                    gia: "5.700.000 VNĐ",
                    color: 'teal gia4'
                },
                {
                    anh: "image/nike/nike6.jpg",
                    ten: "AIR MAX 90",
                    gia: "3.350.000 VNĐ",
                    color: 'grey gia3'
                }]
            },
        ]
    },


    {
        nameShoes: 'ADIDAS',
        idShow: 'adidas',
        listRow: [
            {
                id: 1,
                row: [{
                    anh: "image/adidas/adidas1.jpg",
                    ten: "NMD_R1",
                    gia: "2.500.000 VNĐ",
                    color: 'red gia3'
                },
                {
                    anh: "image/adidas/adidas2.jpg",
                    ten: "SUPERSTAR J",
                    gia: "1.100.000 VNĐ",
                    color: 'white gia2'
                },
                {
                    anh: "image/adidas/yeezy1.jpg",
                    ten: "YEEZY BOOST 350 V2",
                    gia: "16.000.000 VNĐ",
                    color: 'white  gia5'
                }]
            },
            {
                id: 2,
                row: [{
                    anh: "image/adidas/adidas3.jpg",
                    ten: "ULTRA BOOST X GOT",
                    gia: "9.470.000 VNĐ",
                    color: 'blue-1 gia4'
                },
                {
                    anh: "image/adidas/adidas4.jpg",
                    ten: "STAN SMITH",
                    gia: "4.700.000 VNĐ",
                    color: 'white gia3'
                },
                {
                    anh: "image/adidas/ultra2.jpg",
                    ten: "ULTRA BOOST 4.0",
                    gia: "8.000.000 VNĐ",
                    color: 'black red gia4'
                }]
            },
        ]
    },


    {
        nameShoes: 'VANS',
        idShow: 'vans',
        listRow: [
            {
                id: 1,
                row: [{
                    anh: "image/vans/vans2.jpg",
                    ten: "VANS FEAR OF GOD",
                    gia: "10.000.000 VNĐ",
                    color: 'red gia4'
                },
                {
                    anh: "image/vans/vans1.jpg",
                    ten: "VANS OLD SKOOL",
                    gia: "1.500.000 VNĐ",
                    color: 'black gia2'
                },
                {
                    anh: "image/vans/vans3.jpg",
                    ten: "OLD SKOOL PRO",
                    gia: "1.850.000 VNĐ",
                    color: 'white blue blue-1 gia2'
                }]
            },
            {
                id: 2,
                row: [{
                    anh: "image/vans/vans4.jpg",
                    ten: "SK8-HI REISSUE CAP",
                    gia: "2.200.000 VNĐ",
                    color: 'earth gia3'
                },
                {
                    anh: "image/vans/vans5.jpg",
                    ten: "BOLD NI Rhude",
                    gia: "4.720.000 VNĐ",
                    color: 'blue gia3'
                },
                {
                    anh: "image/vans/vans6.jpg",
                    ten: "VANS ERA",
                    gia: "1.300.000 VNĐ",
                    color: 'red gia2'
                }]
            },
        ]
    },


    {
        nameShoes: 'CONVERSE',
        idShow: 'converse',
        listRow: [
            {
                id: 1,
                row: [{
                    anh: "image/converse/converse1.jpg",
                    ten: "CHUCK 70 OX",
                    gia: "2.100.000 VNĐ",
                    color: 'pink gia3'
                },
                {
                    anh: "image/converse/converse2.jpg",
                    ten: "CHUCK 70 HI FOG",
                    gia: "3.800.000 VNĐ",
                    color: 'black gia3'
                },
                {
                    anh: "image/converse/converse3.jpg",
                    ten: "CHUCK 70 HI Hearts White",
                    gia: "5.300.000 VNĐ",
                    color: 'white gia4'
                }]
            },
        ]
    },


    {
        nameShoes: 'JORDAN',
        idShow: 'jordan',
        listRow: [
            {
                id: 1,
                row: [{
                    anh: "image/nike/air1.jpg",
                    ten: "NIKE AIR JORDAN DIOR",
                    gia: "50.000.000 VNĐ",
                    color: 'grey gia5'
                },
                {
                    anh: "image/nike/air2.jpg",
                    ten: "AIR JORDAN 1 RETRO HIGH",
                    gia: "16.500.000 VNĐ",
                    color: 'blue blue-1 gia5'
                },
                {
                    anh: "image/nike/air3.jpg",
                    ten: "AIR JORDAN 4 RETRO",
                    gia: "15.000.000 VNĐ",
                    color: 'skin grey gia5'
                }]
            },
        ]
    },


    {
        nameShoes: 'PUMA',
        idShow: 'puma',
        listRow: [
            {
                id: 1,
                row: [{
                    anh: "image/puma/puma1.jpg",
                    ten: "CALIFORNIA TECH LUXE",
                    gia: "9.400.000 VNĐ",
                    color: 'white gia4'
                },
                {
                    anh: "image/puma/puma2.jpg",
                    ten: "BLAZE OF GLORY X COLETTE",
                    gia: "3.800.000 VNĐ",
                    color: 'blue gia3'
                },
                {
                    anh: "image/puma/puma3.jpg",
                    ten: "MOSTRO WMNS",
                    gia: "2.000.000 VNĐ",
                    color: 'black gia2'
                }]
            },
        ]
    },


    {
        nameShoes: 'VENTO',
        idShow: 'vento',
        listRow: [
            {
                id: 1,
                row: [{
                    anh: "image/vento/vento1.webp",
                    ten: "VENTO BLUE CARO",
                    gia: "350.000 VNĐ",
                    color: 'blue blue-1 gia1'
                },
                {
                    anh: "image/vento/vento2.webp",
                    ten: "VENTO FULL BLACK",
                    gia: "270.000 VNĐ",
                    color: 'black gia1'
                },
                {
                    anh: "image/vento/vento3.webp",
                    ten: "VENTO KHAKI",
                    gia: "345.000 VNĐ",
                    color: 'green gia1'
                }]
            },
        ]
    },


    {
        nameShoes: 'BITIS',
        idShow: 'bitis',
        listRow: [
            {
                id: 1,
                row: [{
                    anh: "image/bitis/bitis1.webp",
                    ten: "SANDAL NỮ",
                    gia: "259.000 VNĐ",
                    color: 'pink gia1'
                },
                {
                    anh: "image/bitis/bitis2.webp",
                    ten: "SANDAL UNISEX",
                    gia: "390.000 VNĐ",
                    color: 'grey gia1'
                },
                {
                    anh: "image/bitis/bitis3.webp",
                    ten: "SANDAL GIẢ DA",
                    gia: "325.000 VNĐ",
                    color: 'earth gia1'
                }]
            },
        ]
    }
]



// hiển thị giày
window.onload = function () {
    var showShoesList = document.getElementById('showShoesList');

    var clearfix = document.createElement('div')
    clearfix.setAttribute('class', 'clearfix');

    showShoesList.append(clearfix);

    listShoes.map(shoesList => {

        var idShow = document.createElement('div');
        idShow.setAttribute('id', `${shoesList.idShow}`);
        idShow.setAttribute('class', `filterDiv ${shoesList.idShow} sneaker show`)


        var pp = document.createElement('p');
        pp.setAttribute('class', 'shoes-product-label')
        pp.setAttribute('id', 'label-shoes');
        pp.innerHTML = shoesList.nameShoes;

        idShow.append(pp);
        idShow.append(clearfix);
        console.log(idShow);
        shoesList.listRow.map(props => {
            var shoesRow = document.createElement('div');
            shoesRow.setAttribute('class', 'row-buy-3');
            if (props.id > 1) {
                shoesRow.style.marginTop = -50 + 'px';
                // khoảng cách giữa 2 dòng chứa giày 
            }

            props.row.map(prop => {

                // gán tên class, id 
                var product = document.createElement("div");
                product.setAttribute("class", "col span-1-of-3 shoes-product");
                var item = document.createElement("div");
                item.setAttribute("class", `item ${prop.color}`);


                // Gọi ảnh 
                var a1 = document.createElement('a');
                a1.setAttribute("href", "muahang.html");
                var img = document.createElement("img");
                img.setAttribute("id", "img-buy-1");
                img.setAttribute("src", prop.anh);

                // Gọi link tên giày 
                var a2 = document.createElement("a");
                a2.setAttribute("href", "muahang.html");

                // Gọi tên giày 
                var p1 = document.createElement("p");
                p1.setAttribute("class", "name-shoes");
                p1.innerHTML = prop.ten;

                // Gọi giá tiền 
                var p2 = document.createElement("p");
                p2.setAttribute("class", "giatien");
                p2.innerHTML = prop.gia;

                //Gọi hình tym
                var p3 = document.createElement("a");
                p3.setAttribute("type", "button");
                p3.setAttribute("value", "button");
                p3.setAttribute("id", "heart");
                p3.setAttribute("onclick", "setColor(event)");
                var p4 = document.createElement("i");
                p4.setAttribute("class", "fas fa-heart");
                
                
                // Hiển thị ra màn hình 
                product.append(item);
                item.append(a1);
                item.append(a2);
                a1.append(img);
                a2.append(p1);
                item.append(p2);
                item.append(p3);
                p3.append(p4);
                shoesRow.append(product);
            })
            var br = document.createElement('br');
            idShow.append(br);
            idShow.append(clearfix);
            idShow.append(shoesRow);
        })

        showShoesList.append(idShow)

    })
    console.log(showShoesList);




    //------Phân loại theo MÀU-----------
    var $items = $('.item');
    var $btns = $('.click-color').click(function () {
        if (this.id == 'all') {
            $items.show();
        } else {
            var $el = $('.' + this.id).show();
            $items.not($el).hide();
        }
        $btns.removeClass('active');
        $(this).addClass('active');
    })
}




//---- Tìm kiếm sản phẩm ----------
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}




//----- PHÂN LOẠI SẢN PHẨM theo loại tên giày :
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}




// sự kiện đăng nhập thành công
document.addEventListener('DOMContentLoaded', function () {
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





// Nút go to top------------------
//Get the button
var mybutton = document.getElementById("myBtn");

// Khi lăn xuống 500px thì xuất hiện nút Go to top
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
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



// ---- Tìm kiếm giày ------- 
function myFunction() {
    var input, filter, nameShoes, div, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    nameShoes = document.getElementsByClassName('name-shoes')
    div = document.getElementsByClassName('shoes-product');
    // console.log('hehe')
    for (i = 0; i < nameShoes.length; i++) {
        a = nameShoes[i];
        txtValue = a.textContent.toLowerCase() || a.innerText.toLowerCase();
        if (txtValue.indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
}




