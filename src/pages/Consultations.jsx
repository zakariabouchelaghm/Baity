import { useState } from 'react'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
import { offersData } from '../data/offers'
import './SectionPage.css'

const Consultations = () => {
    const [selectedOffer, setSelectedOffer] = useState(null)
    const offers = offersData.consultations

    return (
        <div className="section-page">
            <div className="page-hero">
                <div className="page-hero-overlay"></div>
                <div className="container">
                    <h1 className="page-title">استشاراتي</h1>
                    <p className="page-subtitle">
                        استشارات هندسية متخصصة من خبراء المجال لضمان نجاح مشروعك
                    </p>
                </div>
            </div>

            <section className="offers-section">
                <div className="container">
                    <h2 className="section-title">باقات الاستشارات الهندسية</h2>
                    <p className="section-description">
                        احصل على استشارة هندسية احترافية تساعدك في اتخاذ القرارات الصحيحة
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

export default Consultations
