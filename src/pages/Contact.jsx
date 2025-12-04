import './SectionPage.css'

const Contact = () => {
    return (
        <div className="section-page">
            <div className="section-header">
                <div className="container">
                    <h1 className="page-title">تواصل معنا</h1>
                    <p className="page-subtitle">نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أحلامك</p>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 0' }}>
                <div className="contact-card" style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    background: 'white',
                    padding: '3rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-lg)',
                    textAlign: 'center'
                }}>
                    <h2 style={{ marginBottom: '2rem', color: 'var(--primary)' }}>معلومات التواصل</h2>

                    <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <a href="https://wa.me/971505274405" target="_blank" rel="noopener noreferrer" className="btn btn-outline contact-btn">
                            <img src="/whatsapp.png" alt="WhatsApp" className="contact-icon" />
                            تواصل عبر الواتساب
                        </a>

                        <a href="mailto:info@baity.com" className="btn btn-outline contact-btn">
                            <span style={{ fontSize: '1.5rem' }}>✉️</span>
                            info@baity.com
                        </a>

                        <a href="https://www.instagram.com/mbk.home.studio/" target="_blank" rel="noopener noreferrer" className="btn btn-outline contact-btn">
                            <img src="/instgram.png" alt="Instagram" className="contact-icon" />
                            تابعنا على انستغرام
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
