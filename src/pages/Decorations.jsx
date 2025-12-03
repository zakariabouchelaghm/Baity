import { useState } from 'react'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
import './SectionPage.css'

const Decorations = () => {
    const [selectedOffer, setSelectedOffer] = useState(null)

    const offers = [
        {
            id: 'decoration-1',
            title: 'صمم موود بورد و صورة ثلاثية الأبعاد مع التفاصيل',
            description: 'احصل على تصميم موود بورد احترافي وصورة ثلاثية الأبعاد مفصلة لمشروعك',
            price: '500.00',
            currency: 'AED',
            notice: 'تبدأ من',
            image: '/services/decorations.png',
            features: [
                'موود بورد احترافي',
                'صورة ثلاثية الأبعاد عالية الجودة',
                'تفاصيل كاملة للتصميم'
            ]
        }
    ]

    return (
        <div className="section-page">
            <div className="page-hero">
                <div className="page-hero-overlay"></div>
                <div className="container">
                    <h1 className="page-title">ديكوراتي</h1>
                    <p className="page-subtitle">
                        تصميم داخلي فاخر يعكس ذوقك الرفيع ويحول مساحتك إلى تحفة فنية
                    </p>
                </div>
            </div>

            <section className="offers-section">
                <div className="container">
                    <h2 className="section-title">عرض خاص</h2>
                    <p className="section-description">
                        احصل على تصميم احترافي متكامل بسعر مميز
                    </p>
                    <div className="offers-grid">
                        {offers.map((offer) => (
                            <OfferCard
                                key={offer.id}
                                offer={offer}
                                onOrderClick={setSelectedOffer}
                                buttonText="add+"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {selectedOffer && (
                <PaymentModal
                    offer={selectedOffer}
                    onClose={() => setSelectedOffer(null)}
                />
            )}
        </div>
    )
}

export default Decorations
