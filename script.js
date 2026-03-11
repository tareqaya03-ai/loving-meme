// Translation System
const translations = {
    ar: {
        logo: "Loving Holmes",
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        facilities: "المرافق",
        packages: "الحزم",
        gallery: "معرض الصور",
        contact: "اتصل بنا",
        heroTitle: "مرحباً بك في Loving Holmes",
        heroSubtitle: "فندق الكلاب الفاخر في هونغ كونغ",
        viewPackages: "عرض الحزم",
        bookNow: "احجز الآن",
        ourFeatures: "مميزاتنا",
        grooming: "صالة للحلاقة والمنتجع",
        groomingDesc: "خدمات حلاقة وتجميل احترافية لكلابك",
        rooms: "غرف مريحة",
        roomsDesc: "غرف مزودة بتدفئة وتبريد وتلفزيون",
        transport: "خدمة التوصيل",
        transportDesc: "توصيل من وإلى المكان",
        outdoor: "مراعي خارجية",
        outdoorDesc: "مراعي آمنة للعب والتمرين",
        veterinary: "خدمات بيطرية",
        veterinaryDesc: "خدمات بيطرية على مدار 24 ساعة",
        monitoring: "مراقبة مستمرة",
        monitoringDesc: "مراقبة الحيوانات الأليفة على مدار الساعة",
        aboutUsTitle: "عن Loving Holmes",
        aboutUsDesc1: "Loving Holmes هو فندق للكلاب يقع في قلب هونغ كونغ، نقدم خدمات فاخرة ورعاية استثنائية لكلابك المحبوبة.",
        aboutUsDesc2: "نحن نؤمن بأن كل كلب يستخدم أفضل رعاية ممكنة، ولهذا السبب نقدم مرافق عالمية المستوى وفريق من المحترفين المتخصصين في رعاية الحيوانات.",
        learnMore: "اعرف المزيد",
        testimonials: "آراء العملاء",
        testimonial1: "خدمة ممتازة وفريق محترف. كلبي كان سعيداً جداً خلال إقامته!",
        testimonial2: "أفضل فندق للكلاب في هونغ كونغ. المرافق نظيفة والخدمة رائعة.",
        testimonial3: "خدمة التوصيل مريحة جداً. أوصي به بشدة لجميع أصحاب الكلاب!",
        customer: "عميل سعيد",
        ctaTitle: "هل أنت مستعد لإعطاء كلبك أفضل تجربة؟",
        ctaDesc: "احجز الآن واستمتع بخصم 10% على أول إقامة",
        contactUs: "اتصل بنا اليوم",
        aboutFooter: "عن Loving Holmes",
        footerDesc: "فندق الكلاب الفاخر في هونغ كونغ نقدم أفضل رعاية لكلابك المحبوبة",
        quickLinks: "روابط سريعة",
        contactInfo: "معلومات الاتصال",
        address: "هونغ كونغ، الصين",
        phone: "+852 1234 5678",
        email: "info@lovingholmes.com",
        hours: "ساعات العمل",
        hoursDesc: "24/7 للخدمات البيطرية",
        receptionHours: "الاستقبال: 8:00 ص - 10:00 م",
        rights: "جميع الحقوق محفوظة"
    },
    en: {
        logo: "Loving Holmes",
        home: "Home",
        about: "About Us",
        services: "Services",
        facilities: "Facilities",
        packages: "Packages",
        gallery: "Gallery",
        contact: "Contact",
        heroTitle: "Welcome to Loving Holmes",
        heroSubtitle: "Luxury Dog Hotel in Hong Kong",
        viewPackages: "View Packages",
        bookNow: "Book Now",
        ourFeatures: "Our Features",
        grooming: "Grooming Salon & Spa",
        groomingDesc: "Professional grooming and beauty services for your dogs",
        rooms: "Comfortable Rooms",
        roomsDesc: "Rooms with heating/cooling and TV",
        transport: "Transportation Service",
        transportDesc: "Door-to-door delivery service",
        outdoor: "Outdoor Playgrounds",
        outdoorDesc: "Safe playgrounds for play and exercise",
        veterinary: "Veterinary Services",
        veterinaryDesc: "24-hour veterinary services",
        monitoring: "Continuous Monitoring",
        monitoringDesc: "24/7 pet monitoring",
        aboutUsTitle: "About Loving Holmes",
        aboutUsDesc1: "Loving Holmes is a dog hotel located in the heart of Hong Kong, offering luxury services and exceptional care for your beloved dogs.",
        aboutUsDesc2: "We believe that every dog deserves the best possible care, which is why we provide world-class facilities and a team of professionals specializing in animal care.",
        learnMore: "Learn More",
        testimonials: "Customer Reviews",
        testimonial1: "Excellent service and professional team. My dog was very happy during his stay!",
        testimonial2: "The best dog hotel in Hong Kong. Clean facilities and great service.",
        testimonial3: "The delivery service is very convenient. Highly recommend it to all dog owners!",
        customer: "Happy Customer",
        ctaTitle: "Ready to give your dog the best experience?",
        ctaDesc: "Book now and enjoy 10% off your first stay",
        contactUs: "Contact Us Today",
        aboutFooter: "About Loving Holmes",
        footerDesc: "Luxury dog hotel in Hong Kong providing the best care for your beloved dogs",
        quickLinks: "Quick Links",
        contactInfo: "Contact Information",
        address: "Hong Kong, China",
        phone: "+852 1234 5678",
        email: "info@lovingholmes.com",
        hours: "Working Hours",
        hoursDesc: "24/7 for veterinary services",
        receptionHours: "Reception: 8:00 AM - 10:00 PM",
        rights: "All rights reserved"
    }
};

// Initialize variables
let currentLang = localStorage.getItem('language') || 'ar';
let currentFontSize = localStorage.getItem('fontSize') || 16;
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;
let isSpeaking = false;

// DOM Elements
const languageSelect = document.getElementById('languageSelect');
const increaseFontBtn = document.getElementById('increaseFont');
const decreaseFontBtn = document.getElementById('decreaseFont');
const speakBtn = document.getElementById('speakBtn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeFontSize();
    initializeEventListeners();
    initializeMobileMenu();
});

// Language System
function initializeLanguage() {
    languageSelect.value = currentLang;
    setLanguage(currentLang);
    setDocumentDirection(currentLang);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update document direction
    setDocumentDirection(lang);
}

function setDocumentDirection(lang) {
    if (lang === 'ar') {
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
        document.documentElement.dir = 'rtl';
    } else {
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
        document.documentElement.dir = 'ltr';
    }
}

// Font Size System
function initializeFontSize() {
    document.body.style.fontSize = currentFontSize + 'px';
}

function increaseFontSize() {
    if (currentFontSize < 24) {
        currentFontSize += 2;
        updateFontSize();
    }
}

function decreaseFontSize() {
    if (currentFontSize > 12) {
        currentFontSize -= 2;
        updateFontSize();
    }
}

function updateFontSize() {
    document.body.style.fontSize = currentFontSize + 'px';
    localStorage.setItem('fontSize', currentFontSize);
}

// Text-to-Speech System
function toggleSpeech() {
    if (isSpeaking) {
        stopSpeech();
    } else {
        startSpeech();
    }
}

function startSpeech() {
    if (!speechSynthesis) {
        alert('Speech synthesis is not supported in your browser.');
        return;
    }

    // Get all text content
    const textContent = getTextContent();
    
    if (textContent.trim() === '') {
        return;
    }

    // Create utterance
    currentUtterance = new SpeechSynthesisUtterance(textContent);
    currentUtterance.lang = currentLang === 'ar' ? 'ar-SA' : 'en-US';
    currentUtterance.rate = 0.9;
    currentUtterance.pitch = 1;
    currentUtterance.volume = 1;

    // Set up event listeners
    currentUtterance.onstart = function() {
        isSpeaking = true;
        updateSpeakButton();
    };

    currentUtterance.onend = function() {
        isSpeaking = false;
        updateSpeakButton();
    };

    currentUtterance.onerror = function(event) {
        console.error('Speech synthesis error:', event);
        isSpeaking = false;
        updateSpeakButton();
    };

    // Start speaking
    speechSynthesis.speak(currentUtterance);
}

function stopSpeech() {
    if (speechSynthesis && speechSynthesis.speaking) {
        speechSynthesis.cancel();
        isSpeaking = false;
        updateSpeakButton();
    }
}

function getTextContent() {
    // Get main content areas, excluding navigation and footer
    const contentSelectors = [
        'main',
        '.hero',
        '.features',
        '.about-preview',
        '.testimonials',
        '.cta',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', '.btn'
    ];
    
    let textContent = '';
    
    contentSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            // Skip navigation and footer elements
            if (!element.closest('header') && !element.closest('footer')) {
                const text = element.textContent.trim();
                if (text && text.length > 10) { // Only include meaningful text
                    textContent += text + '. ';
                }
            }
        });
    });
    
    return textContent;
}

function updateSpeakButton() {
    if (isSpeaking) {
        speakBtn.innerHTML = '<i class="fas fa-stop"></i>';
        speakBtn.classList.add('speaking');
        speakBtn.setAttribute('aria-label', 'إيقاف القراءة');
    } else {
        speakBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        speakBtn.classList.remove('speaking');
        speakBtn.setAttribute('aria-label', 'قراءة صوتية');
    }
}

// Mobile Menu
function initializeMobileMenu() {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// Event Listeners
function initializeEventListeners() {
    // Language change
    languageSelect.addEventListener('change', function() {
        setLanguage(this.value);
    });

    // Font size controls
    increaseFontBtn.addEventListener('click', increaseFontSize);
    decreaseFontBtn.addEventListener('click', decreaseFontSize);

    // Speech control
    speakBtn.addEventListener('click', toggleSpeech);

    // Keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        // Ctrl/Cmd + Plus: Increase font size
        if ((event.ctrlKey || event.metaKey) && event.key === '+') {
            event.preventDefault();
            increaseFontSize();
        }
        // Ctrl/Cmd + Minus: Decrease font size
        if ((event.ctrlKey || event.metaKey) && event.key === '-') {
            event.preventDefault();
            decreaseFontSize();
        }
        // Ctrl/Cmd + 0: Reset font size
        if ((event.ctrlKey || event.metaKey) && event.key === '0') {
            event.preventDefault();
            currentFontSize = 16;
            updateFontSize();
        }
        // Space: Toggle speech (when not focused on input)
        if (event.key === ' ' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            event.preventDefault();
            toggleSpeech();
        }
    });

    // Stop speech when page is hidden
    document.addEventListener('visibilitychange', function() {
        if (document.hidden && isSpeaking) {
            stopSpeech();
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to header
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        const header = document.querySelector('.header');
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Accessibility enhancements
function enhanceAccessibility() {
    // Add ARIA labels dynamically
    document.querySelectorAll('button:not([aria-label])').forEach(button => {
        if (!button.textContent.trim()) {
            button.setAttribute('aria-label', 'Button');
        }
    });

    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = currentLang === 'ar' ? 'تخطي إلى المحتوى' : 'Skip to content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Initialize accessibility enhancements
document.addEventListener('DOMContentLoaded', enhanceAccessibility);

// Performance optimization
function optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
        
        // Add error handling
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
        });
    });
}

// Initialize image optimization
document.addEventListener('DOMContentLoaded', optimizeImages);

// Export functions for potential use in other scripts
window.LovingHolmes = {
    setLanguage,
    increaseFontSize,
    decreaseFontSize,
    toggleSpeech,
    stopSpeech
};
