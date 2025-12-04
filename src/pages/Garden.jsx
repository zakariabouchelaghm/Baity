import { useState } from 'react'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
import { offersData } from '../data/offers'
import './SectionPage.css'

const Garden = ({ addToCart }) => {
    const [selectedOffer, setSelectedOffer] = useState(null)
    const offers = [
        {
            id: 'garden-1',
            title: 'تصميم حديقتي',
            description: 'تصميم حديقة منزلية متكاملة',
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
                    <h1 className="page-title">حديقتي</h1>
                    <p className="page-subtitle">
                        تصميم حدائق خلابة تضفي جمالاً وحيوية على منزلك
                    </p>
                </div>
            </div>

            <section className="offers-section">
                <div className="container">
                    <h2 className="section-title">باقات تصميم الحدائق</h2>
                    <p className="section-description">
                        حول حديقتك إلى واحة خضراء مع تصاميمنا الاحترافية
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

export default Garden
