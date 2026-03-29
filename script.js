const translations = {
    es: {
        "nav-home": "Inicio", "nav-members": "Miembros", "nav-blog": "Historias", "nav-donate": "Donar", "nav-contact": "Contacto",
        "banner-h1": "Nuestra Misión:<br>Provemos ayuda a los más necesitados.", "btn-dona": "Dona Ahora", "btn-cono": "Conócenos",
        "obj-title": "Objetivo", "obj-p1": "Brindamos asistencia integral y esperanza a familias en situación de vulnerabilidad, guiados por la fe.",
        "members-title": "Miembros de la Fundación", "blog-title": "Historias de Ayuda", "donate-title": "Cómo Donar"
    },
    en: {
        "nav-home": "Home", "nav-members": "Members", "nav-blog": "Stories", "nav-donate": "Donate", "nav-contact": "Contact",
        "banner-h1": "Our Mission:<br>We provide help to those in most need.", "btn-dona": "Donate Now", "btn-cono": "Meet Us",
        "obj-title": "Objective", "obj-p1": "We provide comprehensive assistance and hope to families in vulnerability, guided by faith.",
        "members-title": "Foundation Members", "blog-title": "Help Stories", "donate-title": "How to Donate"
    }
};

let currentLang = 'es';

function showTab(tabId) {
    document.getElementById('mobile-menu').classList.add('hidden');
    
    // Switch navigation active states
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('onclick').includes(tabId)) link.classList.add('active');
    });

    // Switch tab content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
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
    document.getElementById('lang-btn-desktop').innerText = currentLang === 'es' ? 'English' : 'Español';
}