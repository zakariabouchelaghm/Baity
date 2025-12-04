import './OfferCard.css'

const OfferCard = ({ offer, onOrderClick, buttonText = 'اطلب الآن' }) => {
    const formatPrice = (price, currency = 'ريال') => {
        if (!price) return ''
        return `${price} ${currency}`
    }

    return (
        <div className="offer-card">
            <div className="offer-header">
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
                </div>
            </div>

            <button
                className="btn btn-primary offer-btn"
                onClick={() => onOrderClick(offer)}
            >
                <span className="btn-icon-circle">
                    <span className="plus-symbol">+</span>
                </span>
                <span className="btn-text">Add</span>
            </button>
        </div>
    )
}

export default OfferCard
