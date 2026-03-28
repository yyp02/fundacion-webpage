const translations = {
    es: {
        "nav-home": "Inicio", "nav-obj": "Objetivo", "nav-members": "Miembros", "nav-blog": "Historias", "nav-donate": "Donar",
        "hero-title": "Proveemos ayuda a los más necesitados.", "hero-sub": "Guiados por la fe, trabajamos para ser el canal de provisión.", "hero-btn": "Apoyar ahora",
        "obj-title": "Nuestro Objetivo", "obj-p1": "Brindamos asistencia integral y esperanza a familias en situación de vulnerabilidad, guiados por la fe.",
        "obj-icon1": "Alimentación", "obj-icon2": "Vivienda", "obj-icon3": "Educación",
        "members-title": "Nuestro Equipo", "member-1-name": "Nacas Santoz", "member-1-role": "Fundador",
        "blog-title": "Historias de Impacto", "blog-cat": "Testimonio", "blog-1-title": "Una nueva oportunidad para María", "blog-1-desc": "Gracias a la fundación, María pudo costear su tratamiento médico...", "blog-more": "Leer más →",
        "donate-title": "Haz tu Donación", "donate-sub": "Cada aporte cuenta para ayudar a los demás.", "donate-bank": "Datos Bancarios",
        "footer-desc": "Transformando vidas a través del amor y la provisión.", "footer-insta": "Comunidad en Instagram"
    },
    en: {
        "nav-home": "Home", "nav-obj": "Objective", "nav-members": "Members", "nav-blog": "Stories", "nav-donate": "Donate",
        "hero-title": "Providing help to those in most need.", "hero-sub": "Guided by faith, we work to be the channel of provision.", "hero-btn": "Support Now",
        "obj-title": "Our Objective", "obj-p1": "We provide comprehensive assistance and hope to families in vulnerability, guided by faith.",
        "obj-icon1": "Nutrition", "obj-icon2": "Housing", "obj-icon3": "Education",
        "members-title": "Our Team", "member-1-name": "Nacas Santoz", "member-1-role": "Founder",
        "blog-title": "Impact Stories", "blog-cat": "Testimonial", "blog-1-title": "A New Opportunity for Maria", "blog-1-desc": "Thanks to the foundation, Maria was able to afford her medical treatment...", "blog-more": "Read more →",
        "donate-title": "Make a Donation", "donate-sub": "Every contribution counts to help others.", "donate-bank": "Bank Details",
        "footer-desc": "Transforming lives through love and provision.", "footer-insta": "Instagram Community"
    }
};

let currentLang = 'es';

function showTab(tabId) {
    document.getElementById('mobile-menu').classList.add('hidden');
    document.querySelectorAll('.tab-content').forEach(t => { t.classList.remove('active'); t.style.display = 'none'; });
    const activeTab = document.getElementById('tab-' + tabId);
    activeTab.style.display = 'block';
    setTimeout(() => activeTab.classList.add('active'), 10);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() { document.getElementById('mobile-menu').classList.toggle('hidden'); }

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) el.innerText = translations[currentLang][key];
    });
    document.getElementById('lang-btn-desktop').innerText = currentLang === 'es' ? 'English' : 'Español';
    document.getElementById('lang-btn-mobile').innerText = currentLang === 'es' ? 'EN' : 'ES';
}