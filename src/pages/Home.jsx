import { useState } from 'react'
import { Link } from 'react-router-dom'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
import PortfolioSlideshow from '../components/PortfolioSlideshow'
import { offersData } from '../data/offers'
import './Home.css'

const Home = () => {
    const [selectedOffer, setSelectedOffer] = useState(null)

    // Get featured offers (first offer from each category)
    const featuredOffers = [
        { ...offersData.decorations[0], category: 'ديكوراتي' },
        { ...offersData.consultations[0], category: 'استشاراتي' },
        { ...offersData.garden[0], category: 'حديقتي' },
        { ...offersData.renovation[0], category: 'تجديد' }
    ]

    const services = [
        {
            title: 'ديكوراتي',
            description: 'تصميم داخلي فاخر يعكس ذوقك الرفيع',
            image: '/services/decorations.png',
            link: '/decorations'
        },
        {
            title: 'استشاراتي',
            description: 'استشارات هندسية متخصصة من خبراء المجال',
            image: '/services/consultations.png',
            link: '/consultations'
        },
        {
            title: 'حديقتي',
            description: 'تصميم حدائق خلابة تضفي جمالاً على منزلك',
            image: '/services/garden.png',
            link: '/garden'
        },
        {
            title: 'موقعي',
            description: "استشارات وزيارات ميدانية للديكور والتشطيب",
            image: '/services/location.png',
            link: '/location'
        },
        {
            title: 'تجديد',
            description: 'تجديد شامل يمنح مساحتك حياة جديدة',
            image: '/services/renovation.png',
            link: '/renovation'
        },
        {
            title: 'دورات',
            description: 'دورات تدريبية متخصصة في التصميم والهندسة',
            image: '/services/courses.png',
            link: '/courses'
        }
    ]

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1 className="hero-title fade-in">
                        <img src="/logo.png" alt="Baity Logo" className="hero-logo" style={{ maxWidth: '350px', height: 'auto' }} />
                    </h1>
                    <p className="hero-subtitle fade-in">
                        منصتك المتكاملة للهندسة المعمارية والتصميم الداخلي
                    </p>
                    <div className="hero-buttons fade-in">
                        <a href="#services" className="btn btn-primary">
                            استكشف خدماتنا
                        </a>
                        <Link to="/consultations" className="btn btn-outline">
                            احجز استشارة
                        </Link>
                        <a href="#footer" className="btn btn-accent" style={{ backgroundColor: 'white', color: '#7F0621', border: 'none' }}>
                            اتصل بنا
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services">
                <div className="container">
                    <h2 className="section-title">خدماتنا المميزة</h2>
                    <p className="section-subtitle">
                        اختر الخدمة المناسبة لك واستكشف عروضنا الحصرية
                    </p>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <Link
                                to={service.link}
                                key={index}
                                className="service-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="service-icon"><img src={service.image} alt={service.title} /></div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <div className="service-footer">
                                    <span className="service-cta">استكشف العروض</span>
                                    <span className="service-arrow">←</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Offers Section */}
            <section className="featured-offers">
                <div className="container">
                    <h2 className="section-title">عروض مميزة</h2>
                    <p className="section-subtitle">
                        اغتنم الفرصة واحصل على أفضل العروض لخدماتنا المتميزة
                    </p>
                    <div className="offers-grid">
                        {featuredOffers.map((offer) => (
                            <OfferCard
                                key={offer.id}
                                offer={offer}
                                onOrderClick={setSelectedOffer}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section - رؤيتنا */}
            <section className="vision-section" style={{
                position: 'relative',
                padding: '8rem 0',
                margin: '4rem 0',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url(/showcase/GF-105-Family-Living-03.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    filter: 'blur(3px)',
                    transform: 'scale(1.1)', // Prevent blur edges
                    zIndex: 0
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(127, 6, 33, 0.92), rgba(0, 0, 0, 0.85))',
                    zIndex: 1
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: '800',
                        color: 'white',
                        marginBottom: '2rem',
                        textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                        fontFamily: 'var(--font-secondary)'
                    }}>رؤيتنا</h2>
                    <p style={{
                        fontSize: '1.4rem',
                        lineHeight: '2',
                        color: 'rgba(255, 255, 255, 0.95)',
                        maxWidth: '900px',
                        margin: '0 auto',
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                        fontWeight: '400'
                    }}>
                        نطمح أن نكون الخيار الأول للعملاء الذين يسعون الى أناقة أبدية في منازلهم. من خلال البقاء في طليعة اتجاهات التصميم و تقديم جودة متفوقة بشكل مستمر, نهدف الى وضع معايير جديدة في الصناعة وترك تأثير يدوم من التميز
                    </p>
                </div>
            </section>

            {/* Portfolio Slideshow - أعمالنا */}
            <section className="portfolio-section">
                <div className="container">
                    <h2 className="section-title">أعمالنا</h2>
                    <p className="section-subtitle">
                        استعرض مجموعة من أفضل مشاريعنا المنجزة
                    </p>
                </div>
                <PortfolioSlideshow />
            </section>

            {/* Modern Design Section */}
            <section className="modern-design">
                <div className="container">
                    <div className="modern-design-content">
                        <div className="modern-design-text">
                            <h2 className="section-title">من نحن</h2>
                            <p className="modern-design-description">
                                نحن شركة تصميم داخلي مشهورة، متخصصة في التصميمات الكلاسيكية والحديثة. مع مجموعة متنوعة من الخدمات، نحن نلبي جميع أنواع المساحات السكنية، من المساحات الصغيرة إلى العقارات الكبيرة
                            </p>


                        </div>

                        <div className="modern-design-image-placeholder">
                            <img
                                src="public/showcase/3aaa1069-a4ac-42c2-8ef3-390cc3a56a3d.jpg"
                                alt="تصميم عصري"
                                style={{
                                    width: '100%',
                                    height: '500px',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: 'var(--shadow-xl)',
                                    border: '4px solid #d4af37' // Gold border
                                }}
                            />
                        </div>
                        <div className="modern-buttons">
                            <Link to="/about" className="btn btn-outline">
                                المزيد
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-us">
                <div className="container">
                    <h2 className="section-title">لماذا تختار بيتي؟</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">✨</div>
                            <h3>تصاميم مبتكرة</h3>
                            <p>نقدم تصاميم عصرية تجمع بين الأصالة والحداثة</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">👥</div>
                            <h3>فريق محترف</h3>
                            <p>مهندسون ومصممون ذوو خبرة واسعة في المجال</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">💎</div>
                            <h3>جودة عالية</h3>
                            <p>نستخدم أفضل المواد ونلتزم بأعلى معايير الجودة</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">⏱️</div>
                            <h3>الالتزام بالمواعيد</h3>
                            <p>نحرص على تسليم المشاريع في الوقت المحدد</p>
                        </div>
                    </div>
                </div>
            </section>




            {/* Payment Modal */}
            {
                selectedOffer && (
                    <PaymentModal
                        offer={selectedOffer}
                        onClose={() => setSelectedOffer(null)}
                    />
                )
            }
        </div>
    )
}

export default Home
