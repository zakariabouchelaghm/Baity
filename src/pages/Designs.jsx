import { useState } from 'react'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
import './SectionPage.css'

const Designs = ({ addToCart }) => {
    const [selectedOffer, setSelectedOffer] = useState(null)

    const offers = [
        {
            id: 'design-1',
            title: 'صمم عظم البيت',
            description: 'تصميم هيكل عظمي متكامل لمنزلك',
            price: '500.00',
            currency: 'درهم',
            notice: 'تبدأ من'
        },
        {
            id: 'design-2',
            title: 'صمم كهرباء البيت',
            description: 'تصميم مخططات الكهرباء والإنارة',
            price: '500.00',
            currency: 'درهم',
            notice: 'تبدأ من'
        },
        {
            id: 'design-3',
            title: 'صمم خدمات بيتك صح',
            description: 'تصميم متكامل لخدمات المنزل (سباكة، تكييف، إلخ)',
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
                    <h1 className="page-title">تصميمات</h1>
                    <p className="page-subtitle">
                        تصميمات داخلية مبتكرة تناسب جميع الأذواق والمساحات
                    </p>
                </div>
            </div>

            <section className="offers-section">
                <div className="container">
                    <h2 className="section-title">باقات التصميمات</h2>
                    <p className="section-description">
                        اختر من بين تصميماتنا المتنوعة ما يناسب احتياجاتك
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

export default Designs
