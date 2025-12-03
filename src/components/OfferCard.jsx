import { formatPrice } from '../data/offers'
import './OfferCard.css'

const OfferCard = ({ offer, onOrderClick }) => {
    return (
        <div className="offer-card">
            <div className="offer-header">
                {offer.discount && (
                    <span className="offer-badge">{offer.discount} خصم</span>
                )}
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>
            </div>

            <div className="offer-pricing">
                <div className="price-container">
                    <span className="price-new">{formatPrice(offer.newPrice)}</span>
                    <span className="price-old">{formatPrice(offer.oldPrice)}</span>
                </div>
            </div>

            <div className="offer-features">
                <h4 className="features-title">المميزات:</h4>
                <ul className="features-list">
                    {offer.features.map((feature, index) => (
                        <li key={index}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <button
                className="btn btn-primary offer-btn"
                onClick={() => onOrderClick(offer)}
            >
                اطلب الآن
            </button>
        </div>
    )
}

export default OfferCard
