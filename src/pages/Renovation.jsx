import { useState } from 'react'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
import { offersData } from '../data/offers'
import './SectionPage.css'

const Renovation = () => {
    const [selectedOffer, setSelectedOffer] = useState(null)
    const offers = offersData.renovation

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

export default Renovation
