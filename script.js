const translations = {
    es: {
        "nav-home": "Inicio", "nav-obj": "Objetivo", "nav-members": "Miembros", "nav-blog": "Historias (Blog)", "nav-donate": "Cómo Donar", "nav-contact": "Contáctanos",
        "banner-h1": "Nuestra Misión:<br>Provemos ayuda a los más necesitados.", "banner-btn-dona": "Dona Ahora", "banner-btn-cono": "Conócenos",
        "obj-p1": "La Fundación Dios es Nuestro Proveedor nace del deseo de servir al prójimo. Nuestro objetivo es asistir a personas en crisis, proporcionando recursos y esperanza.",
        "members-title": "Miembros de la Fundación", "member-role1": "Fundador", "member-role2": "Mentora", "member-role3": "Coordinadora", "member-role4": "Mentora",
        // ... (existing keys) ...
        "footer-copy": "© 2026 Fundación Dios es Nuestro Proveedor (DEP). Todos los derechos reservados."
    },
    en: {
        "nav-home": "Home", "nav-obj": "Mission", "nav-members": "Members", "nav-blog": "Stories (Blog)", "nav-donate": "Donate", "nav-contact": "Contact Us",
        "banner-h1": "Our Mission:<br>We provide help to those in most need.", "banner-btn-dona": "Donate Now", "banner-btn-cono": "Meet Us",
        "obj-p1": "The Foundation 'God is Our Provider' was born from a desire to serve others. Our goal is to assist people in crisis, providing resources and hope.",
        "members-title": "Foundation Members", "member-role1": "Founder", "member-role2": "Mentor", "member-role3": "Coordinator", "member-role4": "Mentor",
        // ... (existing keys) ...
        "footer-copy": "© 2026 'God is Our Provider' Foundation (DEP). All rights reserved."
    }
};

let currentLang = 'es';

function showTab(tabId) {
    // Hide mobile menu
    document.getElementById('mobile-menu').classList.add('hidden');
    
    // Switch active nav state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        // Simple logic for active link state (can be refined with queryParams)
        if(link.onclick.toString().includes(`'${tabId}'`)) {
            link.classList.add('active');
        }
    });

    // Handle visible tab sections
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
        tab.style.display = 'none';
    });
    
    const activeTab = document.getElementById('tab-' + tabId);
    activeTab.style.display = 'block';
    // Allow display:block to propagate before triggering animation
    setTimeout(() => activeTab.classList.add('active'), 10);
    
    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Language Switching Logic
function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            // Using innerHTML allows <br> tags in h1
            el.innerHTML = translations[currentLang][key];
        }
    });

    // Update Buttons
    document.getElementById('lang-btn-desktop').innerText = currentLang === 'es' ? 'English' : 'Español';
    document.getElementById('lang-btn-mobile').innerText = currentLang === 'es' ? 'EN' : 'ES';
}

// Initialize page
window.addEventListener('load', () => {
    // Load default tab (Objective Section)
    showTab('objetivo');
});