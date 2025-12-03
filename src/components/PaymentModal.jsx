import { useState } from 'react'
import { formatPrice } from '../data/offers'
import './PaymentModal.css'

const PaymentModal = ({ offer, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        paymentMethod: 'credit-card',
        notes: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000))

        alert('تم استلام طلبك بنجاح! سنتواصل معك قريباً.')
        setIsSubmitting(false)
        onClose()
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className="modal-header">
                    <h2>إتمام الطلب</h2>
                    <div className="order-summary">
                        <h3>{offer.title}</h3>
                        <div className="summary-price">
                            <span className="label">المبلغ الإجمالي:</span>
                            <span className="amount">{formatPrice(offer.newPrice)}</span>
                        </div>
                    </div>
                </div>

                <form className="payment-form" onSubmit={handleSubmit}>
                    <div className="form-section">
                        <h4>معلومات العميل</h4>
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="name">الاسم الكامل *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="أدخل اسمك الكامل"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">رقم الجوال *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="05xxxxxxxx"
                                    pattern="[0-9]{10}"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">البريد الإلكتروني *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="example@email.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">العنوان *</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    placeholder="المدينة، الحي"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <h4>طريقة الدفع</h4>
                        <div className="payment-methods">
                            <label className="payment-option">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="credit-card"
                                    checked={formData.paymentMethod === 'credit-card'}
                                    onChange={handleChange}
                                />
                                <span className="option-content">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                        <line x1="1" y1="10" x2="23" y2="10" />
                                    </svg>
                                    <span>بطاقة ائتمانية</span>
                                </span>
                            </label>

                            <label className="payment-option">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="bank-transfer"
                                    checked={formData.paymentMethod === 'bank-transfer'}
                                    onChange={handleChange}
                                />
                                <span className="option-content">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="12" y1="1" x2="12" y2="23" />
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                    <span>تحويل بنكي</span>
                                </span>
                            </label>

                            <label className="payment-option">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="cash"
                                    checked={formData.paymentMethod === 'cash'}
                                    onChange={handleChange}
                                />
                                <span className="option-content">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="12" y1="1" x2="12" y2="23" />
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                    <span>الدفع عند الاستلام</span>
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="form-group">
                            <label htmlFor="notes">ملاحظات إضافية (اختياري)</label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows="4"
                                placeholder="أي ملاحظات أو متطلبات خاصة..."
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn btn-outline" onClick={onClose}>
                            إلغاء
                        </button>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <span className="loading"></span>
                                    <span>جاري المعالجة...</span>
                                </>
                            ) : (
                                'تأكيد الطلب'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentModal
