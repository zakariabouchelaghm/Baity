import { useState } from 'react'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
import { offersData } from '../data/offers'
import './SectionPage.css'

const Location = () => {
    const [selectedOffer, setSelectedOffer] = useState(null)
    const offers = offersData.location

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
                                onOrderClick={setSelectedOffer}
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
