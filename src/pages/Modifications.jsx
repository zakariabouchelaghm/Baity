import { useState } from 'react'
import OfferCard from '../components/OfferCard'
import PaymentModal from '../components/PaymentModal'
import './SectionPage.css'

const Modifications = ({ addToCart }) => {
    const [selectedOffer, setSelectedOffer] = useState(null)

    const offers = [
        {
            id: 'modification-1',
            title: 'تعديل مخططات',
            description: 'تعديل المخططات الهندسية والمعمارية',
            price: '500.00',
            currency: 'درهم',
            notice: 'تبدأ من'
        },
        {
            id: 'modification-2',
            title: 'الإشراف على التعديلات',
            description: 'إشراف هندسي على تنفيذ التعديلات',
            price: '500.00',
            currency: 'درهم',
            notice: 'تبدأ من'
        }
    ]

    return (
        <div className="section-page">
            <div className="section-header">
                <div className="container">
                    <h1 className="page-title">تعديلات</h1>
                    <p className="page-subtitle">
                        تعديلات وتحسينات على التصميمات الحالية لتحقيق رؤيتك
                    </p>
                </div>
            </div>

            <section className="offers-section">
                <div className="container">
                    <h2 className="section-title">باقات التعديلات</h2>
                    <p className="section-description">
                        خدمات تعديل وتحسين التصميمات الداخلية الموجودة
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

export default Modifications
