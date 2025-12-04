import { useState } from 'react'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
import { offersData } from '../data/offers'
import './SectionPage.css'

const Renovation = ({ addToCart }) => {
    const [selectedOffer, setSelectedOffer] = useState(null)
    const offers = [
        {
            id: 'renovation-1',
            title: 'تصميم',
            description: 'تصميم تجديد شامل للمساحة',
            price: '500.00',
            currency: 'درهم',
            notice: 'تبدأ من'
        },
        {
            id: 'renovation-2',
            title: 'تسعير',
            description: 'تسعير مفصل لأعمال التجديد',
            price: '500.00',
            currency: 'درهم',
            notice: 'تبدأ من'
        },
        {
            id: 'renovation-3',
            title: 'زيارة الموقع و إعطاء النصائح',
            description: 'زيارة ميدانية لتقديم نصائح التجديد',
            price: '500.00',
            currency: 'درهم',
            notice: 'تبدأ من'
        }
    ]

    return (
        <div className="section-page">
            <div className="page-hero">
                <div className="page-hero-overlay"></div>
                <div className="container">
                    <h1 className="page-title">تجديد</h1>
                    <p className="page-subtitle">
                        تجديد شامل يمنح مساحتك حياة جديدة وإطلالة عصرية
                    </p>
                </div>
            </div>

            <section className="offers-section">
                <div className="container">
                    <h2 className="section-title">باقات التجديد</h2>
                    <p className="section-description">
                        جدد منزلك أو مكتبك مع باقاتنا المتنوعة التي تناسب جميع الاحتياجات
                    </p>
                    <div className="offers-grid">
                        {offers.map((offer) => (
                            <OfferCard
                                key={offer.id}
                                offer={offer}
                                onOrderClick={addToCart}
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

export default Renovation
