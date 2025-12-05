import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import './Checkout.css'
import './SectionPage.css'

const Checkout = ({ cart, clearCart }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        notes: ''
    })

    const [errors, setErrors] = useState({})
    const [paymentMethod, setPaymentMethod] = useState('whatsapp') // Only WhatsApp payment enabled
    const [cardData, setCardData] = useState({
        cardNumber: '',
        cardName: '',
        cvc: '',
        saveCard: false
    })

    // Redirect if cart is empty
    useEffect(() => {
        if (!cart || cart.length === 0) {
            navigate('/cart')
        }
    }, [cart, navigate])

    const calculateTotal = () => {
        if (!cart) return '0.00'
        return cart.reduce((total, item) => {
            return total + (parseFloat(item.price) * item.quantity)
        }, 0).toFixed(2)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'الاسم الأول مطلوب'
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'اسم العائلة مطلوب'
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'رقم الهاتف مطلوب'
        } else if (!/^[0-9+\s-()]+$/.test(formData.phone)) {
            newErrors.phone = 'رقم هاتف غير صحيح'
        }
        if (!formData.email.trim()) {
            newErrors.email = 'البريد الإلكتروني مطلوب'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'البريد الإلكتروني غير صحيح'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm()) {
            const orderData = {
                ...formData,
                items: cart,
                total: calculateTotal(),
                orderDate: new Date().toISOString()
            }

            if (paymentMethod === 'whatsapp') {
                // Construct WhatsApp message
                const itemsList = cart.map(item => `- ${item.title} (${item.quantity})`).join('\n')
                const message = `
مرحباً، أود إتمام طلبي:
الاسم: ${formData.firstName} ${formData.lastName}
رقم الهاتف:\u200E+${formData.phone.replace('+', '')}

الطلبات:
${itemsList}

المجموع: ${calculateTotal()} درهم

ملاحظات: ${formData.notes}
                `.trim()

                const whatsappUrl = `https://wa.me/971505274405?text=${encodeURIComponent(message)}`

                // Open WhatsApp in new tab
                window.open(whatsappUrl, '_blank')

                // Clear cart and redirect
                if (clearCart) clearCart()
                navigate('/')
            } else {
                console.log('Order submitted:', orderData)
                alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.')

                // Clear cart and redirect
                if (clearCart) clearCart()
                navigate('/')
            }
        } else {
            // Scroll to first error
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    if (!cart || cart.length === 0) {
        return null
    }

    return (
        <div className="checkout-page">
            <div className="section-header">
                <div className="container">
                    <h1 className="page-title">إتمام الطلب</h1>
                    <p className="page-subtitle">املأ البيانات أدناه لإتمام طلبك</p>
                </div>
            </div>

            <div className="container checkout-container">
                <div className="checkout-content">
                    {/* Order Form - Left Side */}
                    <div className="checkout-form-section">
                        <form className="checkout-form" onSubmit={handleSubmit}>
                            <div className="form-section">
                                <h2 className="section-title">المعلومات الشخصية</h2>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="firstName">الاسم الأول *</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className={errors.firstName ? 'error' : ''}
                                            placeholder="أدخل اسمك الأول"
                                        />
                                        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="lastName">اسم العائلة *</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className={errors.lastName ? 'error' : ''}
                                            placeholder="أدخل اسم العائلة"
                                        />
                                        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">رقم الهاتف *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={errors.phone ? 'error' : ''}
                                            placeholder="+971 50 123 4567"
                                            dir="ltr"
                                        />
                                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">البريد الإلكتروني *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={errors.email ? 'error' : ''}
                                            placeholder="example@email.com"
                                        />
                                        {errors.email && <span className="error-message">{errors.email}</span>}
                                    </div>
                                </div>
                            </div>

                            {/* Notes Section - Moved before Payment */}
                            <div className="form-section">
                                <h2 className="section-title">اضف ملاحظة على الطلب</h2>
                                <div className="form-group">
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="ادخل رسالتك"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Payment Section */}
                            <div className="form-section">
                                <h2 className="section-title">دفع</h2>

                                {/* Credit Card Option - DISABLED */}
                                <div className="payment-option-wrapper" style={{ opacity: 0.5, pointerEvents: 'none' }}>
                                    <label className="payment-option-label">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="card"
                                            checked={paymentMethod === 'card'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            disabled
                                        />
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                                            <span>بطاقة ائتمان</span>
                                            <img
                                                src="/3_Card_color_horizontal.png"
                                                alt="Credit Cards"
                                                style={{ height: '24px', objectFit: 'contain' }}
                                            />
                                        </div>
                                    </label>

                                    {paymentMethod === 'card' && (
                                        <div className="payment-details">
                                            <div className="form-group">
                                                <label htmlFor="cardNumber">رقم البطاقة *</label>
                                                <input
                                                    type="text"
                                                    id="cardNumber"
                                                    name="cardNumber"
                                                    value={cardData.cardNumber}
                                                    onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                                                    placeholder="1234 5678 9012 3456"
                                                    maxLength="19"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="cardName">يتم عرض هذا النص في صفحة الطلب *</label>
                                                <input
                                                    type="text"
                                                    id="cardName"
                                                    name="cardName"
                                                    value={cardData.cardName}
                                                    onChange={(e) => setCardData({ ...cardData, cardName: e.target.value })}
                                                    placeholder="الاسم كما يظهر على البطاقة"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="cvc">CVC *</label>
                                                <input
                                                    type="text"
                                                    id="cvc"
                                                    name="cvc"
                                                    value={cardData.cvc}
                                                    onChange={(e) => setCardData({ ...cardData, cvc: e.target.value })}
                                                    placeholder="123"
                                                    maxLength="4"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label className="checkbox-label">
                                                    <input
                                                        type="checkbox"
                                                        checked={cardData.saveCard}
                                                        onChange={(e) => setCardData({ ...cardData, saveCard: e.target.checked })}
                                                        style={{ marginLeft: '0.5rem', width: 'auto' }}
                                                    />
                                                    <span>يتم عرض هذا في صفحة الطلب</span>
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Cash on Delivery Option - DISABLED */}
                                <div className="payment-option-wrapper" style={{ opacity: 0.5, pointerEvents: 'none' }}>
                                    <label className="payment-option-label">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="cash"
                                            checked={paymentMethod === 'cash'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            disabled
                                        />
                                        <span>الدفع عند الاستلام</span>
                                    </label>
                                </div>

                                {/* WhatsApp Payment Option */}
                                <div className="payment-option-wrapper">
                                    <label className="payment-option-label">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="whatsapp"
                                            checked={paymentMethod === 'whatsapp'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                                            <span>تواصل عبر الواتساب للدفع</span>
                                            <img src="/whatsapp.png" alt="WhatsApp" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="form-actions">
                                <button
                                    type="button"
                                    className="btn btn-outline"
                                    onClick={() => navigate('/cart')}
                                >
                                    العودة للسلة
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    تأكيد الطلب
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Order Summary - Right Side */}
                    <div className="checkout-summary-section">
                        <div className="order-summary-card">
                            <h2>ملخص الطلب</h2>

                            <div className="order-items">
                                {cart.map((item) => (
                                    <div key={item.id} className="summary-item">
                                        <div className="item-details">
                                            <h4>{item.title}</h4>
                                            <p className="item-quantity">الكمية: {item.quantity}</p>
                                        </div>
                                        <div className="item-price">
                                            {(parseFloat(item.price) * item.quantity).toFixed(2)} {item.currency}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="summary-divider"></div>

                            <div className="summary-total">
                                <span>المجموع الكلي:</span>
                                <span className="total-amount">{calculateTotal()} درهم</span>
                            </div>

                            <div className="summary-note">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg>
                                <p>سيتم التواصل معك خلال 24 ساعة لتأكيد الطلب</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
