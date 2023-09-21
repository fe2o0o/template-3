let spans = document.querySelectorAll(".progress-bar span");
let skills = document.querySelector(".skills").offsetTop;


$(".otherlinks").click(function () {
    if ($(".megaMenue").css("display") == "none") {
        $(".megaMenue").css("display", "flex");
    } else {
        $(".megaMenue").css("display", "none");
    }
})

window.onscroll = function () {
    if (window.scrollY > skills+100) {
        console.log("hello");
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}


