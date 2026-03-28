const translations = {
    es: {
        "nav-home": "Inicio",
        "nav-obj": "Objetivo",
        "nav-members": "Miembros",
        "nav-blog": "Historias",
        "nav-donate": "Donar",
        "hero-title": "Proveemos ayuda a los más necesitados.",
        "hero-sub": "Guiados por la fe, trabajamos para ser el canal de provisión para familias en vulnerabilidad.",
        "hero-btn": "Apoyar ahora",
        "obj-title": "Nuestro Objetivo",
        "obj-p1": "La Fundación Dios es Nuestro Proveedor nace del deseo de servir al prójimo. Nuestro objetivo es asistir a personas en crisis, proporcionando recursos y esperanza.",
        "obj-icon1": "Alimentación",
        "obj-icon2": "Vivienda",
        "obj-icon3": "Salud",
        "blog-title": "Historias de Impacto",
        "blog-cat": "Testimonio",
        "blog-h1": "Una nueva oportunidad para María",
        "blog-p1": "Gracias a la fundación, María pudo costear su tratamiento médico...",
        "blog-more": "Leer más",
        "donate-title": "Haz tu Donación",
        "donate-sub": "Cada aporte cuenta para ayudar a los demás.",
        "donate-bank": "Datos Bancarios",
        "footer-copy": "© 2026 Fundación Dios es Nuestro Proveedor. Todos los derechos reservados."
    },
    en: {
        "nav-home": "Home",
        "nav-obj": "Mission",
        "nav-members": "Members",
        "nav-blog": "Stories",
        "nav-donate": "Donate",
        "hero-title": "Providing help to those in most need.",
        "hero-sub": "Guided by faith, we work to be the channel of provision for families in vulnerability.",
        "hero-btn": "Support Now",
        "obj-title": "Our Objective",
        "obj-p1": "The Foundation 'God is Our Provider' was born from a desire to serve others. Our goal is to assist people in crisis, providing resources and hope.",
        "obj-icon1": "Food",
        "obj-icon2": "Housing",
        "obj-icon3": "Health",
        "blog-title": "Impact Stories",
        "blog-cat": "Testimonial",
        "blog-h1": "A new opportunity for Maria",
        "blog-p1": "Thanks to the foundation, Maria was able to afford her medical treatment...",
        "blog-more": "Read more",
        "donate-title": "Make a Donation",
        "donate-sub": "Every contribution counts towards helping others.",
        "donate-bank": "Bank Details",
        "footer-copy": "© 2026 'God is Our Provider' Foundation. All rights reserved."
    }
};

let currentLang = 'es';

function showTab(tabId) {
    // Close mobile menu if open
    document.getElementById('mobile-menu').classList.add('hidden');
    
    // Switch Tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
        tab.style.display = 'none';
    });
    
    const activeTab = document.getElementById('tab-' + tabId);
    activeTab.style.display = 'block';
    setTimeout(() => activeTab.classList.add('active'), 10);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    // Update buttons
    document.getElementById('lang-btn-desktop').innerText = currentLang === 'es' ? 'English' : 'Español';
    document.getElementById('lang-btn-mobile').innerText = currentLang === 'es' ? 'EN' : 'ES';
}