const translations = {
    es: {
        "nav-home": "INICIO",
        "nav-about": "SOBRE NOSOTROS",
        "nav-blog": "HISTORIAS",
        "nav-donate": "CÓMO DONAR",
        "nav-contact": "CONTÁCTANOS",
        "banner-h1": "Nuestra Misión:<br>Provemos ayuda a los más necesitados.",
        "btn-dona": "Dona Ahora",
        "btn-cono": "Conócenos",
        "obj-title": "Objetivo",
        "obj-p1": "Brindamos asistencia integral y esperanza a familias en situación de vulnerabilidad, guiados por la fe.",
        "about-h2": "Sobre Nosotros",
        "about-p": "Somos una organización dedicada a ser el puente entre la provisión y la necesidad, transformando vidas a través de la fe y la ayuda directa.",
        "members-title": "Miembros de la Fundación",
        "blog-title": "Historias de Impacto",
        "blog-cat": "Testimonio",
        "blog-1-title": "Una nueva oportunidad para María",
        "blog-1-desc": "Gracias a la fundación, María pudo costear su tratamiento médico y hoy lidera un pequeño emprendimiento familiar.",
        "blog-more": "Leer más →",
        "donate-title": "Haz tu Donación",
        "donate-sub": "Cada aporte cuenta para ayudar a los demás.",
        "donate-bank": "Datos Bancarios"
    },
    en: {
        "nav-home": "HOME",
        "nav-about": "ABOUT US",
        "nav-blog": "STORIES",
        "nav-donate": "HOW TO DONATE",
        "nav-contact": "CONTACT US",
        "banner-h1": "Our Mission:<br>Providing help to those in most need.",
        "btn-dona": "Donate Now",
        "btn-cono": "Meet Us",
        "obj-title": "Objective",
        "obj-p1": "We provide comprehensive assistance and hope to families in vulnerability, guided by faith.",
        "about-h2": "About Us",
        "about-p": "We are an organization dedicated to being the bridge between provision and need, transforming lives through faith and direct help.",
        "members-title": "Foundation Members",
        "blog-title": "Impact Stories",
        "blog-cat": "Testimony",
        "blog-1-title": "A new opportunity for Maria",
        "blog-1-desc": "Thanks to the foundation, Maria was able to afford her medical treatment and today leads a small family business.",
        "blog-more": "Read more →",
        "donate-title": "Make a Donation",
        "donate-sub": "Every contribution helps us reach those in need.",
        "donate-bank": "Bank Details"
    }
};

let currentLang = 'es';

function showTab(tabId) {
    document.getElementById('mobile-menu').classList.add('hidden');
    
    // Manage active states for the bracketed links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        // If the click matches the tab, set active
        if(link.getAttribute('onclick').includes(tabId)) link.classList.add('active');
    });

    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.getElementById('tab-' + tabId).classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
    });
    document.getElementById('lang-btn-desktop').innerText = currentLang === 'es' ? 'EN' : 'ES';
}