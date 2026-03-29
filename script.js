const translations = {
    es: {
        "nav-home": "[INICIO]",
        "nav-about": "[SOBRE NOSOTROS]",
        "nav-blog": "[HISTORIAS DE AYUDA (BLOG)]",
        "nav-donate": "[CÓMO DONAR]",
        "nav-contact": "[CONTÁCTANOS]",
        "banner-h1": "Nuestra Misión:<br>Provemos ayuda a los más necesitados.",
        "btn-dona": "Dona Ahora",
        "btn-cono": "Conócenos",
        "obj-title": "Objetivo",
        "obj-p1": "Brindamos asistencia integral y esperanza a familias en situación de vulnerabilidad, guiados por la fe.",
        "about-h2": "Sobre Nosotros",
        "about-p": "Somos una organización dedicada a ser el puente entre la provisión y la necesidad, transformando vidas a través de la fe y la ayuda directa.",
        "members-title": "Miembros de la Fundación"
    },
    en: {
        "nav-home": "[HOME]",
        "nav-about": "[ABOUT US]",
        "nav-blog": "[HELP STORIES (BLOG)]",
        "nav-donate": "[HOW TO DONATE]",
        "nav-contact": "[CONTACT US]",
        "banner-h1": "Our Mission:<br>Providing help to those in most need.",
        "btn-dona": "Donate Now",
        "btn-cono": "Meet Us",
        "obj-title": "Objective",
        "obj-p1": "We provide comprehensive assistance and hope to families in vulnerability, guided by faith.",
        "about-h2": "About Us",
        "about-p": "We are an organization dedicated to being the bridge between provision and need, transforming lives through faith and direct help.",
        "members-title": "Foundation Members"
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