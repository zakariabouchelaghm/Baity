import './OfferCard.css'

const OfferCard = ({ offer, onOrderClick, buttonText = 'اطلب الآن' }) => {
    const formatPrice = (price, currency = 'ريال') => {
        if (!price) return ''
        return `${currency} ${price}`
    }

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
                {offer.notice && (
                    <p className="offer-notice">{offer.notice}</p>
                )}
                <div className="price-container">
                    {offer.price && (
                        <span className="price-new">
                            {formatPrice(offer.price, offer.currency || 'ريال')}
                        </span>
                    )}
                    {offer.newPrice && (
                        <span className="price-new">
                            {formatPrice(offer.newPrice, offer.currency || 'ريال')}
                        </span>
                    )}
                    {offer.oldPrice && (
                        <span className="price-old">
                            {formatPrice(offer.oldPrice, offer.currency || 'ريال')}
                        </span>
                    )}
                </div>
            </div>

            {offer.features && offer.features.length > 0 && (
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
            )}

            <button
                className="btn btn-primary offer-btn"
                onClick={() => onOrderClick(offer)}
            >
                <span className="btn-icon">
                    <span className="plus-symbol">+</span>
                </span>
                <span className="btn-text">Add</span>
            </button>
        </div>
    )
}

export default OfferCard
