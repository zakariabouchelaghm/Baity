import { useState } from 'react'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
import { offersData } from '../data/offers'
import './SectionPage.css'

const Decorations = () => {
    const [selectedOffer, setSelectedOffer] = useState(null)
    const offers = offersData.decorations

    return (
        <div className="section-page">
            <div className="page-hero">
                <div className="page-hero-overlay"></div>
                <div className="container">
                    <h1 className="page-title">ديكوراتي</h1>
                    <p className="page-subtitle">
                        تصميم داخلي فاخر يعكس ذوقك الرفيع ويحول مساحتك إلى تحفة فنية
                    </p>
                </div>
            </div>

            <section className="offers-section">
                <div className="container">
                    <h2 className="section-title">باقات التصميم الداخلي</h2>
                    <p className="section-description">
                        اختر الباقة المناسبة لك واحصل على تصميم داخلي احترافي يلبي جميع احتياجاتك
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

export default Decorations
