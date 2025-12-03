import { useState } from 'react'
import { Link } from 'react-router-dom'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
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
            icon: '🏠',
            link: '/decorations'
        },
        {
            title: 'استشاراتي',
            description: 'استشارات هندسية متخصصة من خبراء المجال',
            icon: '📋',
            link: '/consultations'
        },
        {
            title: 'حديقتي',
            description: 'تصميم حدائق خلابة تضفي جمالاً على منزلك',
            icon: '🌳',
            link: '/garden'
        },
        {
            title: 'موقعي',
            description: 'تخطيط وتصميم مواقع احترافية',
            icon: '📍',
            link: '/location'
        },
        {
            title: 'تجديد',
            description: 'تجديد شامل يمنح مساحتك حياة جديدة',
            icon: '🔨',
            link: '/renovation'
        },
        {
            title: 'دورات',
            description: 'دورات تدريبية متخصصة في التصميم والهندسة',
            icon: '📚',
            link: '/courses'
        },
        {
            title: 'خدمات أخرى',
            description: 'خدمات إضافية لتلبية جميع احتياجاتك',
            icon: '⚙️',
            link: '/other-services'
        }
    ]

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1 className="hero-title fade-in">
                        مرحباً بك في <span className="highlight">بيتي</span>
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
                                <div className="service-icon">{service.icon}</div>
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

            {/* Modern Design Section */}
            <section className="modern-design">
                <div className="container">
                    <div className="modern-design-content">
                        <div className="modern-design-text">
                            <h2 className="section-title">من نحن</h2>
                            <p className="modern-design-description">
                                نحن شركة تصميم داخلي مشهورة، متخصصة في التصميمات الكلاسيكية والحديثة. مع مجموعة متنوعة من الخدمات، نحن نلبي جميع أنواع المساحات السكنية، من المساحات الصغيرة إلى العقارات الكبيرة
                            </p>

                            <div className="modern-buttons">
                                <Link to="/about" className="btn btn-outline">
                                    المزيد
                                </Link>

                            </div>
                        </div>

                        <div className="modern-design-image-placeholder">
                            <div className="placeholder-box">
                                <span>صورة التصميم العصري</span>
                            </div>
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
                            <h3>التزام بالمواعيد</h3>
                            <p>نحرص على تسليم المشاريع في الوقت المحدد</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>هل أنت مستعد لتحويل حلمك إلى واقع؟</h2>
                        <p>تواصل معنا اليوم واحصل على استشارة مجانية</p>
                        <Link to="/consultations" className="btn btn-primary">
                            احجز استشارة مجانية
                        </Link>
                    </div>
                </div>
            </section>

            {/* Payment Modal */}
            {selectedOffer && (
                <PaymentModal
                    offer={selectedOffer}
                    onClose={() => setSelectedOffer(null)}
                />
            )}
        </div>
    )
}

export default Home
