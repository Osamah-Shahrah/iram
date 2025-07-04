// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Tracking Function (Placeholder)
function trackShipment() {
    const trackingNumber = document.getElementById("trackingNumber").value;
    const trackingResult = document.getElementById("trackingResult");
    if (trackingNumber) {
        trackingResult.innerHTML = `<p>جاري البحث عن الشحنة رقم: <strong>${trackingNumber}</strong>...</p><p>هذه وظيفة تجريبية. يرجى التواصل مع خدمة العملاء للحصول على معلومات تتبع دقيقة.</p>`;
        // In a real application, you would make an API call here to get tracking info
    } else {
        trackingResult.innerHTML = `<p>الرجاء إدخال رقم تتبع صالح.</p>`;
    }
}

// Quote Request Form Submission (Placeholder)
function submitQuote(event) {
    event.preventDefault();
    alert("تم استلام طلب عرض السعر الخاص بك بنجاح! سنتواصل معك قريباً.");
    // In a real application, you would send this data to a backend server
    event.target.reset();
}

// Contact Form Submission (Placeholder)
function submitContact(event) {
    event.preventDefault();
    alert("تم استلام رسالتك بنجاح! سنتواصل معك قريباً.");
    // In a real application, you would send this data to a backend server
    event.target.reset();
}


