import { useState } from 'react'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
import { offersData } from '../data/offers'
import './SectionPage.css'

const Courses = () => {
    const [selectedOffer, setSelectedOffer] = useState(null)
    const offers = offersData.courses

    return (
        <div className="section-page">
            <div className="page-hero">
                <div className="page-hero-overlay"></div>
                <div className="container">
                    <h1 className="page-title">دورات</h1>
                    <p className="page-subtitle">
                        دورات تدريبية متخصصة في التصميم والهندسة المعمارية
                    </p>
                </div>
            </div>

            <section className="offers-section">
                <div className="container">
                    <h2 className="section-title">الدورات التدريبية</h2>
                    <p className="section-description">
                        طور مهاراتك مع دوراتنا التدريبية المتخصصة والمعتمدة
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

export default Courses
