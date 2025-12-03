import { useState } from 'react'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
import { offersData } from '../data/offers'
import './SectionPage.css'

const OtherServices = () => {
    const [selectedOffer, setSelectedOffer] = useState(null)
    const offers = offersData.otherServices

    return (
        <div className="section-page">
            <div className="page-hero">
                <div className="page-hero-overlay"></div>
                <div className="container">
                    <h1 className="page-title">خدمات أخرى</h1>
                    <p className="page-subtitle">
                        خدمات إضافية متنوعة لتلبية جميع احتياجاتك المعمارية والتصميمية
                    </p>
                </div>
            </div>

            <section className="offers-section">
                <div className="container">
                    <h2 className="section-title">خدماتنا الإضافية</h2>
                    <p className="section-description">
                        مجموعة متنوعة من الخدمات الاحترافية التي تكمل مشروعك
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

export default OtherServices
