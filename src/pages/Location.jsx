import { useState } from 'react'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
import { offersData } from '../data/offers'
import './SectionPage.css'

const Location = ({ addToCart }) => {
    const [selectedOffer, setSelectedOffer] = useState(null)
    const offers = [
        {
            id: 'location-1',
            title: 'طلب زيارات الموقع قبل واثناء التشطيب',
            description: 'زيارات ميدانية لمتابعة أعمال التشطيب',
            price: '500.00',
            currency: 'درهم',
            notice: 'تبدأ من'
        },
        {
            id: 'location-2',
            title: 'طلب استشارة ديكور في الموقع',
            description: 'استشارة ديكور مباشرة في موقع المشروع',
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
                    <h1 className="page-title">موقعي</h1>
                    <p className="page-subtitle">
                        تخطيط وتصميم مواقع احترافية تضمن نجاح مشروعك
                    </p>
                </div>
            </div>

            <section className="offers-section">
                <div className="container">
                    <h2 className="section-title">باقات تخطيط المواقع</h2>
                    <p className="section-description">
                        دراسة شاملة لموقعك مع تخطيط احترافي يراعي جميع المعايير
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

export default Location
