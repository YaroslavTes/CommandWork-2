// var button = document.querySelector('.signBtn');
// console.log("button");

// button.onclick = function () {

//     alert("Регистрация")

//     setTimeout(function () {
//         location.reload();
//     }, 500)

// }


/* BUTTON FOR MENU (JQUERY) */
const btn = $('.signBtn');

$(".signBtn").on("click", function() {
    alert("Регистрация");
    setTimeout(function() {
        location.reload()
    }, 500);
})

