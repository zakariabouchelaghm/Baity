import { useState } from 'react'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
import './SectionPage.css'

const ConsultationsPage = ({ addToCart }) => {
    const [selectedOffer, setSelectedOffer] = useState(null)

    const offers = [
        {
            id: 'consultation-page-1',
            title: 'مراجعة أسعار البناء',
            description: 'مراجعة وتدقيق عروض أسعار المقاولين',
            price: '500.00',
            currency: 'درهم',
            notice: 'ابتداءا من'
        },
        {
            id: 'consultation-page-2',
            title: 'حساب كميات',
            description: 'حساب كميات المواد اللازمة للمشروع بدقة',
            price: '500.00',
            currency: 'درهم',
            notice: 'ابتداءا من'
        },
        {
            id: 'consultation-page-3',
            title: 'مراجعة مخططك قبل الاعتماد',
            description: 'مراجعة شاملة للمخططات قبل البدء في التنفيذ',
            price: '500.00',
            currency: 'درهم',
            notice: 'ابتداءا من'
        }
    ]

    return (
        <div className="section-page">
            <div className="page-hero">
                <div className="page-hero-overlay"></div>
                <div className="container">
                    <h1 className="page-title">استشارات</h1>
                    <p className="page-subtitle">
                        استشارات متخصصة في التصميم الداخلي من خبرائنا
                    </p>
                </div>
            </div>

            <section className="offers-section">
                <div className="container">
                    <h2 className="section-title">باقات الاستشارات</h2>
                    <p className="section-description">
                        احصل على استشارة احترافية لمشروعك من فريقنا المتخصص
                    </p>
                    <div className="offers-grid">
                        {offers.length > 0 ? (
                            offers.map((offer) => (
                                <OfferCard
                                    key={offer.id}
                                    offer={offer}
                                    onOrderClick={addToCart}
                                    buttonText="add+"
                                />
                            ))
                        ) : (
                            <p className="no-offers">قريباً - سيتم إضافة العروض</p>
                        )}
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

export default ConsultationsPage
