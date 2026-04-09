// ===== Scroll to properties =====
document.getElementById("explore").onclick = function () {
    document.getElementById("properties").scrollIntoView({
        behavior: "smooth"
    });
};

// ===== Mobile menu =====
let menu = document.getElementById("menu");
let nav = document.getElementById("nav");

menu.onclick = function () {
    nav.classList.toggle("active");
};

// ===== WhatsApp quick button =====
function openWhatsApp(){
    window.location.href = "https://wa.me/201111244434";
}

// ===== FORM VALIDATION + WHATSAPP =====
function sendWhatsApp(){

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    error.innerText = "";

    if(name === "" || phone === "" || message === ""){
        error.innerText = "⚠️ لازم تملي كل البيانات";
        return;
    }

    let text =
`📩 رسالة جديدة

👤 الاسم: ${name}
📞 الهاتف: ${phone}
💬 الرسالة: ${message}`;

    window.location.href =
    "https://wa.me/201111244434?text=" + encodeURIComponent(text);
}

// ===== TOP BUTTON =====
let topBtn = document.getElementById("topBtn");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollTopBtn(){
    window.scrollTo({top:0, behavior:"smooth"});
}