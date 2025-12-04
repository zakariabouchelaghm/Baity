import { useState } from 'react'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
import './SectionPage.css'

const DesignFromScratch = ({ addToCart }) => {
    const [selectedOffer, setSelectedOffer] = useState(null)

    const offers = [
        {
            id: 'design-scratch-1',
            title: 'صمم بيتك من الصفر',
            description: 'تصميم شامل ومتكامل لمنزلك من البداية حتى النهاية',
            price: '500.00',
            currency: 'درهم',
            notice: 'تبدأ من'
        }
    ]

    return (
        <div className="section-page">
            <div className="section-header">
                <div className="container">
                    <h1 className="page-title">صمم بيتك من الصفر</h1>
                    <p className="page-subtitle">
                        ابدأ رحلة تصميم منزل أحلامك من البداية مع فريقنا المحترف
                    </p>
                </div>
            </div>

            <section className="offers-section">
                <div className="container">
                    <h2 className="section-title">باقات التصميم من الصفر</h2>
                    <p className="section-description">
                        اختر الباقة المناسبة لك واحصل على تصميم شامل لمنزلك
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

export default DesignFromScratch
