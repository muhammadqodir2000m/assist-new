import React, { useState, useEffect } from 'react';
import './Header.css';
import rasim from "../Header/images/rasim.png"
// import rasim from "../components/Header/rasim.png"; // Yo'lni to'g'riladim

const SalomAssist = () => {
  const [language, setLanguage] = useState('uz');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const translations = {
    uz: {
      // Header
      logo: "Salom Assist",
      about: "Biz haqimizda",
      services: "Xizmatlar",
      features: "Afzalliklar",
      contact: "Aloqa",

      // Hero Section - YANGILANDI
      heroTitle: "Salom Assist",
      heroSubtitle:  "Hobbiylarga ishonchli xizmat ko'rsatamiz",
      heroDescription: "Biz sizga yuqori sifatli tibbiy yordam xizmatlarini taklif etamiz",
      support: "Qollab-quwatlash",
      servicesCount: "Xizmatlar",
      partners: "Hamkorlar",
      experience: "Yillik tajriba",
      contactUs: "Biz bilan bog'laning",

      // About Section
      aboutTitle: "Kompaniya haqida",
      comprehensiveServices: "Kompleks xizmatlar",
      comprehensiveDesc: "Sug'urta kompaniyalari va sug'urtalangan shaxslar uchun to'liq tibbiy xizmatlar",
      reliablePartner: "Ishonchli hamkor",
      reliableDesc: "Tibbiy yordam bozorida 5 yildan ortiq muvaffaqiyatli ish",
      forEveryone: "Hammasi uchun",
      everyoneDesc: "O'zbekiston fuqarolari va chet elliklarning salomatligi uchun g'amxo'rlik",
      wideNetwork: "Keng tarmoq",
      networkDesc: "300 dan ortiq hamkor tibbiy muassasalar",

      // Services Section
      servicesTitle: "Bizning xizmatlar",
      expertConsultations: "Ekspert shifokorlar maslahatlari",
      expertDesc: "Onlayn va oflayn malakali mutaxassislarning professional maslahatlari",
      treatmentOrganization: "Davolashni tashkil etish",
      treatmentDesc: "Bemorning davolashning barcha bosqichlarida to'liq hamrohlik",
      qualityManagement: "Sifat boshqaruvi",
      qualityDesc: "Tibbiy xizmatlar va xizmat sifati nazorati",
      controlCoordination: "Nazorat va muvofiqlashtirish",
      controlDesc: "Bemorlar va tibbiy muassasalar o'rtasidagi o'zaro aloqani muvofiqlashtirish",

      // Features Section
      featuresTitle: "Biz bilan ishlashning afzalliklari",
      callCenter: "24/7 Call-markaz",
      callCenterDesc: "Kunduzi-kechasi qo'llab-quvvatlash va maslahatlar",
      partnerNetwork: "Hamkorlik tarmog'i",
      partnerDesc: "Keng tibbiy muassasalar tarmog'i",
      individualApproach: "Individual yondashuv",
      approachDesc: "Har bir mijozga shaxsiy xizmat ko'rsatish",
      monitoring: "Monitoring",
      monitoringDesc: "Xizmatlar sifati doimiy nazorati",

      // Medical Help Section
      medicalHelpTitle: "Tibbiy yordam olish",
      insuranceCases: "Sug'urta holatlari uchun",
      insuranceDesc: "Shoshilinch tibbiy yordam kerak bo'lsa, bizga qo'ng'iroq qiling",
      phone24: "📞 (71) 208-11-33",
      phone24Desc: "(Kunduzi-kechasi, 24/7)",
      consultations: "Maslahatlar",
      consultationDesc: "Maslahat va ma'lumot olish uchun",
      consultationPhone: "📱 (99) 235-11-88",
      onlineSupport: "Onlayn qo'llab-quvvatlash",
      onlineDesc: "Biz bilan qulay usulda bog'laning:",
      telegramChat: "• Telegram chat",
      shifokor: "• Shifokor",
      telemedicina: "• Telemedicina",

      // Contact Section
      contactTitle: "Biz bilan bog'laning",
      email: "info@salomassist.uz",
      downloadAndroid: "📱 Android uchun yuklab olish",

      // Footer
      copyright: "© 2025 Salom Assist. Barcha huquqlar himoyalangan.",
      copyrightSub: "Tibbiy yordamingiz ishonchli hamkori"
    },
    ru: {
      // Header
      logo: "Salom Assist",
      about: "О нас",
      services: "Услуги",
      features: "Преимущества",
      contact: "Контакты",

      // Hero Section - YANGILANDI
      heroTitle: "Salom Assist",
      heroSubtitle: "Ваш надежный партнер в медицинской помощи",
      heroDescription: "Мы предлагаем полный спектр медицинских услуг",
      support: "Поддержка",
      servicesCount: "Услуг",
      partners: "Партнеров",
      experience: "Лет опыта",
      contactUs: "Связаться с нами",

      // About Section
      aboutTitle: "О компании",
      comprehensiveServices: "Комплексные услуги",
      comprehensiveDesc: "Полный спектр медицинских услуг для страховых компаний и застрахованных лиц",
      reliablePartner: "Надежный партнер",
      reliableDesc: "Более 5 лет успешной работы на рынке медицинской помощи",
      forEveryone: "Для всех",
      everyoneDesc: "Забота о здоровье граждан Узбекистана и иностранцев",
      wideNetwork: "Широкая сеть",
      networkDesc: "Более 300 партнерских медицинских учреждений",

      // Services Section
      servicesTitle: "Наши услуги",
      expertConsultations: "Консультации врачей-экспертов",
      expertDesc: "Профессиональные консультации квалифицированных специалистов онлайн и офлайн",
      treatmentOrganization: "Организация лечения",
      treatmentDesc: "Полное сопровождение пациента на всех этапах лечения",
      qualityManagement: "Управление качеством",
      qualityDesc: "Контроль качества медицинских услуг и сервиса",
      controlCoordination: "Контроль и координация",
      controlDesc: "Координация взаимодействия между пациентами и медучреждениями",

      // Features Section
      featuresTitle: "Преимущества работы с нами",
      callCenter: "24/7 Call-центр",
      callCenterDesc: "Круглосуточная поддержка и консультации",
      partnerNetwork: "Партнерская сеть",
      partnerDesc: "Широкая сеть медицинских учреждений",
      individualApproach: "Индивидуальный подход",
      approachDesc: "Персонализированное обслуживание каждого клиента",
      monitoring: "Мониторинг",
      monitoringDesc: "Постоянный контроль качества услуг",

      // Medical Help Section
      medicalHelpTitle: "Получение медицинской помощи",
      insuranceCases: "Для страховых случаев",
      insuranceDesc: "При необходимости срочной медицинской помощи свяжитесь с нами по телефону",
      phone24: "📞 (71) 208-11-33",
      phone24Desc: "(Круглосуточно, 24/7)",
      consultations: "Консультации",
      consultationDesc: "Для получения консультаций и информации",
      consultationPhone: "📱 (99) 235-11-88",
      onlineSupport: "Онлайн поддержка",
      onlineDesc: "Свяжитесь с нами удобным способом:",
      telegramChat: "• Telegram чат",
      shifokor: "• Шифокор",
      telemedicina: "• Telemedicina",

      // Contact Section
      contactTitle: "Свяжитесь с нами",
      email: "info@salomassist.uz",
      downloadAndroid: "📱 Загрузить на Android",

      // Footer
      copyright: "© 2025 Salom Assist. Все права защищены.",
      copyrightSub: "Ваш надежный партнер в медицинской помощи"
    },
    en: {
      // Header
      logo: "Salom Assist",
      about: "About Us",
      services: "Services",
      features: "Features",
      contact: "Contact",

      // Hero Section - YANGILANDI
      heroTitle: "Salom Assist",
      heroSubtitle: "Your reliable partner in medical care",
      heroDescription: "We offer comprehensive medical assistance services",
      support: "Support",
      servicesCount: "Services",
      partners: "Partners",
      experience: "Years Experience",
      contactUs: "Contact Us",

      // About Section
      aboutTitle: "About Company",
      comprehensiveServices: "Comprehensive Services",
      comprehensiveDesc: "Full range of medical services for insurance companies and insured individuals",
      reliablePartner: "Reliable Partner",
      reliableDesc: "Over 5 years of successful work in the medical care market",
      forEveryone: "For Everyone",
      everyoneDesc: "Healthcare for citizens of Uzbekistan and foreigners",
      wideNetwork: "Wide Network",
      networkDesc: "Over 300 partner medical institutions",

      // Services Section
      servicesTitle: "Our Services",
      expertConsultations: "Expert Doctor Consultations",
      expertDesc: "Professional consultations with qualified specialists online and offline",
      treatmentOrganization: "Treatment Organization",
      treatmentDesc: "Full patient support at all stages of treatment",
      qualityManagement: "Quality Management",
      qualityDesc: "Quality control of medical services and service",
      controlCoordination: "Control and Coordination",
      controlDesc: "Coordination of interaction between patients and medical institutions",

      // Features Section
      featuresTitle: "Benefits of Working With Us",
      callCenter: "24/7 Call Center",
      callCenterDesc: "Round-the-clock support and consultations",
      partnerNetwork: "Partner Network",
      partnerDesc: "Wide network of medical institutions",
      individualApproach: "Individual Approach",
      approachDesc: "Personalized service for each client",
      monitoring: "Monitoring",
      monitoringDesc: "Constant quality control of services",

      // Medical Help Section
      medicalHelpTitle: "Getting Medical Help",
      insuranceCases: "For Insurance Cases",
      insuranceDesc: "If you need urgent medical assistance, call us",
      phone24: "📞 (71) 208-11-33",
      phone24Desc: "(24/7, Round the clock)",
      consultations: "Consultations",
      consultationDesc: "For consultations and information",
      consultationPhone: "📱 (99) 235-11-88",
      onlineSupport: "Online Support",
      onlineDesc: "Contact us conveniently:",
      telegramChat: "• Telegram chat",
      shifokor: "• Shifokor",
      telemedicina: "• Telemedicina",

      // Contact Section
      contactTitle: "Contact Us",
      email: "info@salomassist.uz",
      downloadAndroid: "📱 Download for Android",

      // Footer
      copyright: "© 2025 Salom Assist. All rights reserved.",
      copyrightSub: "Your reliable partner in medical care"
    }
  };

  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguageMenu = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
    localStorage.setItem('preferred-language', lang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-switcher')) {
        setIsLanguageOpen(false);
      }
      if (!event.target.closest('nav') && !event.target.closest('.mobile-menu-btn')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load preferred language and simulate loading
  useEffect(() => {
    const preferredLanguage = localStorage.getItem('preferred-language');
    if (preferredLanguage) {
      setLanguage(preferredLanguage);
    }

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const languageNames = {
    uz: "O'Z",
    ru: "RU", 
    en: "EN"
  };

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%)'
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div className="loading-spinner" style={{ margin: '0 auto 1rem' }}></div>
          <h2>Salom Assist</h2>
          <p>Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="salom-assist">
      {/* Header */}
      <header>
        <div className="header-container">
          <div className="logo">
            <span className="logo-icon">💙</span>
            {t.logo}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>

          <nav className={isMobileMenuOpen ? 'active' : ''}>
            <button onClick={() => scrollToSection('about')}>{t.about}</button>
            <button onClick={() => scrollToSection('services')}>{t.services}</button>
            <button onClick={() => scrollToSection('features')}>{t.features}</button>
            <button onClick={() => scrollToSection('contact')}>{t.contact}</button>
            
            {/* Modern Language Switcher */}
            <div className="language-switcher">
              <button 
                className="language-trigger"
                onClick={toggleLanguageMenu}
              >
                <span className="language-flag">
                  {language === 'uz' ? '🇺🇿' : language === 'ru' ? '🇷🇺' : '🇺🇸'}
                </span>
                <span className="language-code">{languageNames[language]}</span>
                <span className={`dropdown-arrow ${isLanguageOpen ? 'open' : ''}`}>▼</span>
              </button>
              
              {isLanguageOpen && (
                <div className="language-menu">
                  <button 
                    className={`language-option ${language === 'uz' ? 'active' : ''}`}
                    onClick={() => changeLanguage('uz')}
                  >
                    <span className="language-flag">🇺🇿</span>
                    <span>O'zbek</span>
                  </button>
                  <button 
                    className={`language-option ${language === 'ru' ? 'active' : ''}`}
                    onClick={() => changeLanguage('ru')}
                  >
                    <span className="language-flag">🇷🇺</span>
                    <span>Русский</span>
                  </button>
                  <button 
                    className={`language-option ${language === 'en' ? 'active' : ''}`}
                    onClick={() => changeLanguage('en')}
                  >
                    <span className="language-flag">🇺🇸</span>
                    <span>English</span>
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* YANGI Hero Section */}
      <section className="hero-new">
        <div className="hero-new-container">
          <div className="hero-content">
            <h1>{t.heroTitle}</h1>
            <p className="subtitle">{t.heroSubtitle}</p>
            <p className="description">{t.heroDescription}</p>

            {/* Statistika bloki - 2x2 tartibda */}
              <div className="stats-grid">
                <div className="stat-row">
                  <div className="stat-item-large">
                    <div className="stat-number-large"></div>
                    <div className="stat-label-large"></div>
                  </div>
                  <div className="stat-item-large">
                    <div className="stat-number-large"></div>
                    <div className="stat-label-large"></div>
                  </div>
                </div>
                <div className="stat-row">
                  <div className="stat-item-large">
                    <div className="stat-number-large"></div>
                    <div className="stat-label-large"></div>
                  </div>
                  <div className="stat-item-large">
                    <div className="stat-number-large"></div>
                    <div className="stat-label-large"></div>
                  </div>
                </div>
              </div>

            <button className="cta-button-new" onClick={() => scrollToSection('contact')}>
              {t.contactUs}
            </button>
          </div>
          
          <div className="hero-image">
            {/* Rasmni ko'rsatish */}
            <img 
              src={rasim} 
              alt="APEXLIFE" 
              className="hero-real-image"
              onError={(e) => {
                // Agar rasm yuklanmasa, placeholder ko'rsatish
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            
            {/* Agar rasm bo'lmasa placeholder */}
            <div className="red-image-placeholder" style={{display: 'none'}}>
              <span className="image-text">APEXLIFE</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">{t.aboutTitle}</h2>
          <div className="grid grid-4">
            <div className="card">
              <div className="card-icon">🏥</div>
              <h3 className="card-title">{t.comprehensiveServices}</h3>
              <p className="card-desc">{t.comprehensiveDesc}</p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3 className="card-title">{t.reliablePartner}</h3>
              <p className="card-desc">{t.reliableDesc}</p>
            </div>
            <div className="card">
              <div className="card-icon">🌍</div>
              <h3 className="card-title">{t.forEveryone}</h3>
              <p className="card-desc">{t.everyoneDesc}</p>
            </div>
            <div className="card">
              <div className="card-icon">🔗</div>
              <h3 className="card-title">{t.wideNetwork}</h3>
              <p className="card-desc">{t.networkDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-container">
          <h2 className="section-title">{t.servicesTitle}</h2>
          <div className="grid grid-2">
            <div className="service-card">
              <div className="service-icon">👨‍⚕️</div>
              <h3 className="card-title">{t.expertConsultations}</h3>
              <p className="card-desc">{t.expertDesc}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏥</div>
              <h3 className="card-title">{t.treatmentOrganization}</h3>
              <p className="card-desc">{t.treatmentDesc}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3 className="card-title">{t.qualityManagement}</h3>
              <p className="card-desc">{t.qualityDesc}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔎</div>
              <h3 className="card-title">{t.controlCoordination}</h3>
              <p className="card-desc">{t.controlDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="section-container">
          <h2 className="section-title">{t.featuresTitle}</h2>
          <div className="grid grid-4">
            <div className="feature-item">
              <div className="feature-icon">📞</div>
              <h3 className="feature-title">{t.callCenter}</h3>
              <p className="card-desc">{t.callCenterDesc}</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <h3 className="feature-title">{t.partnerNetwork}</h3>
              <p className="card-desc">{t.partnerDesc}</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">👨‍⚕️</div>
              <h3 className="feature-title">{t.individualApproach}</h3>
              <p className="card-desc">{t.approachDesc}</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">{t.monitoring}</h3>
              <p className="card-desc">{t.monitoringDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Help Section */}
      <section className="medical-help">
        <div className="section-container">
          <h2 className="section-title">{t.medicalHelpTitle}</h2>
          <div className="grid grid-3">
            <div className="help-card">
              <h3 className="help-title">📋 {t.insuranceCases}</h3>
              <div className="help-content">
                <p>{t.insuranceDesc}</p>
                <span className="phone-number">{t.phone24}</span>
                <p className="help-content-small">{t.phone24Desc}</p>
              </div>
            </div>
            <div className="help-card">
              <h3 className="help-title">✉️ {t.consultations}</h3>
              <div className="help-content">
                <p>{t.consultationDesc}</p>
                <span className="phone-number">{t.consultationPhone}</span>
              </div>
            </div>
            <div className="help-card">
              <h3 className="help-title">💬 {t.onlineSupport}</h3>
              <div className="help-content">
                <p className="help-content-mb">{t.onlineDesc}</p>
                <p className="help-content-small">{t.telegramChat}</p>
                <p className="help-content-small">{t.shifokor}</p>
                <p className="help-content-small">{t.telemedicina}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2 className="section-title contact-title">{t.contactTitle}</h2>
          
          <div className="contact-info">
            <div className="contact-item">
              <span>📞</span>
              <span>+998 71 208-11-33</span>
            </div>
            <div className="contact-item">
              <span>📧</span>
              <span>{t.email}</span>
            </div>
          </div>

          <div className="channels">
            <div className="channel-item"><strong>💬 {t.telegramChat}</strong></div>
            <div className="channel-item"><strong>🏥 {t.shifokor}</strong></div>
            <div className="channel-item"><strong>👨‍⚕️ {t.telemedicina}</strong></div>
          </div>

          <button className="cta-button">{t.downloadAndroid}</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>{t.copyright}</p>
        <p className="copyright-sub">{t.copyrightSub}</p>
      </footer>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        
      </button>
    </div>
  );
};

export default SalomAssist;