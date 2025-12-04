import { Link } from 'react-router-dom'
import './SectionPage.css'

const Consultations = () => {
    const consultationSections = [
        {
            id: 1,
            title: 'صمم بيتك من الصفر',
            description: 'ابدأ رحلة تصميم منزل أحلامك من البداية مع فريقنا المحترف',
            link: '/design-from-scratch',
            icon: '🏗️'
        },
        {
            id: 2,
            title: 'تصميمات',
            description: 'تصميمات داخلية مبتكرة تناسب جميع الأذواق والمساحات',
            link: '/designs',
            icon: '🎨'
        },
        {
            id: 3,
            title: 'تعديلات',
            description: 'تعديلات وتحسينات على التصميمات الحالية لتحقيق رؤيتك',
            link: '/modifications',
            icon: '✏️'
        },
        {
            id: 4,
            title: 'استشارات',
            description: 'استشارات متخصصة في التصميم الداخلي من خبرائنا',
            link: '/consultations-page',
            icon: '💡'
        }
    ]

    return (
        <div className="section-page">
            <div className="section-header">
                <div className="container">
                    <h1 className="page-title">خدمات الاستشارات</h1>
                    <p className="page-subtitle">
                        اختر الخدمة المناسبة لك من بين خدماتنا المتنوعة
                    </p>
                </div>
            </div>

            <section className="offers-section">
                <div className="container">
                    <h2 className="section-title">أقسام الخدمات</h2>
                    <p className="section-description">
                        استكشف خدماتنا المتخصصة في التصميم الداخلي
                    </p>
                    <div className="consultation-sections-grid">
                        {consultationSections.map((section) => (
                            <Link
                                key={section.id}
                                to={section.link}
                                className="consultation-section-card"
                            >
                                <div className="section-icon">{section.icon}</div>
                                <h3 className="section-card-title">{section.title}</h3>
                                <p className="section-card-description">{section.description}</p>
                                <span className="section-card-arrow">←</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Consultations
