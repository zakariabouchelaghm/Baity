import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Checkout.css'

const Checkout = ({ cart, clearCart }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        postalCode: '',
        city: '',
        state: '',
        country: 'الإمارات العربية المتحدة',
        notes: '',
        // Different delivery address
        useDifferentDelivery: false,
        deliveryFirstName: '',
        deliveryLastName: '',
        deliveryAddress: '',
        deliveryPostalCode: '',
        deliveryCity: '',
        deliveryState: ''
    })

    const [errors, setErrors] = useState({})
    const [isUAE, setIsUAE] = useState(true) // Payment fees toggle

    // UAE Emirates/States
    const uaeStates = [
        'أبوظبي',
        'دبي',
        'الشارقة',
        'عجمان',
        'أم القيوين',
        'رأس الخيمة',
        'الفجيرة'
    ]

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
        if (!formData.address.trim()) {
            newErrors.address = 'العنوان مطلوب'
        }
        if (!formData.city.trim()) {
            newErrors.city = 'المدينة مطلوبة'
        }
        if (!formData.state) {
            newErrors.state = 'الإمارة مطلوبة'
        }
        if (!formData.postalCode.trim()) {
            newErrors.postalCode = 'الرمز البريدي مطلوب'
        }

        // Validate delivery address if different delivery is enabled
        if (formData.useDifferentDelivery) {
            if (!formData.deliveryFirstName.trim()) {
                newErrors.deliveryFirstName = 'الاسم الأول مطلوب'
            }
            if (!formData.deliveryLastName.trim()) {
                newErrors.deliveryLastName = 'اسم العائلة مطلوب'
            }
            if (!formData.deliveryAddress.trim()) {
                newErrors.deliveryAddress = 'العنوان مطلوب'
            }
            if (!formData.deliveryCity.trim()) {
                newErrors.deliveryCity = 'المدينة مطلوبة'
            }
            if (!formData.deliveryState) {
                newErrors.deliveryState = 'الإمارة مطلوبة'
            }
            if (!formData.deliveryPostalCode.trim()) {
                newErrors.deliveryPostalCode = 'الرمز البريدي مطلوب'
            }
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

            console.log('Order submitted:', orderData)
            alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.')

            // Clear cart and redirect
            if (clearCart) clearCart()
            navigate('/')
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
            <div className="checkout-header">
                <div className="container">
                    <h1>إتمام الطلب</h1>
                    <p>املأ البيانات أدناه لإتمام طلبك</p>
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

                            <div className="form-section">
                                <div className="form-group">
                                    <label htmlFor="address">العنوان *</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className={errors.address ? 'error' : ''}
                                        placeholder="الشارع، رقم المبنى، الحي"
                                    />
                                    {errors.address && <span className="error-message">{errors.address}</span>}
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="city">المدينة *</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className={errors.city ? 'error' : ''}
                                            placeholder="المدينة"
                                        />
                                        {errors.city && <span className="error-message">{errors.city}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="postalCode">الرمز البريدي *</label>
                                        <input
                                            type="text"
                                            id="postalCode"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleChange}
                                            className={errors.postalCode ? 'error' : ''}
                                            placeholder="12345"
                                        />
                                        {errors.postalCode && <span className="error-message">{errors.postalCode}</span>}
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="state">الإمارة *</label>
                                        <select
                                            id="state"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            className={errors.state ? 'error' : ''}
                                        >
                                            <option value="">اختر الإمارة</option>
                                            {uaeStates.map((state) => (
                                                <option key={state} value={state}>
                                                    {state}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.state && <span className="error-message">{errors.state}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="country">الدولة</label>
                                        <input
                                            type="text"
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            readOnly
                                            className="readonly"
                                        />
                                    </div>
                                </div>

                                {/* Different Delivery Address Toggle */}
                                <div className="form-group" style={{ marginTop: '2rem' }}>
                                    <label className="toggle-label">
                                        <span>استخدام عنوان توصيل مختلف</span>
                                        <div className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                id="useDifferentDelivery"
                                                name="useDifferentDelivery"
                                                checked={formData.useDifferentDelivery}
                                                onChange={(e) => handleChange({ target: { name: 'useDifferentDelivery', value: e.target.checked } })}
                                            />
                                            <span className="toggle-slider"></span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Different Delivery Address Section */}
                            {formData.useDifferentDelivery && (
                                <div className="form-section delivery-section">
                                    <h2 className="section-title">عنوان التوصيل</h2>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="deliveryFirstName">الاسم الأول *</label>
                                            <input
                                                type="text"
                                                id="deliveryFirstName"
                                                name="deliveryFirstName"
                                                value={formData.deliveryFirstName}
                                                onChange={handleChange}
                                                className={errors.deliveryFirstName ? 'error' : ''}
                                                placeholder="أدخل الاسم الأول"
                                            />
                                            {errors.deliveryFirstName && <span className="error-message">{errors.deliveryFirstName}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="deliveryLastName">اسم العائلة *</label>
                                            <input
                                                type="text"
                                                id="deliveryLastName"
                                                name="deliveryLastName"
                                                value={formData.deliveryLastName}
                                                onChange={handleChange}
                                                className={errors.deliveryLastName ? 'error' : ''}
                                                placeholder="أدخل اسم العائلة"
                                            />
                                            {errors.deliveryLastName && <span className="error-message">{errors.deliveryLastName}</span>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="deliveryAddress">العنوان *</label>
                                        <input
                                            type="text"
                                            id="deliveryAddress"
                                            name="deliveryAddress"
                                            value={formData.deliveryAddress}
                                            onChange={handleChange}
                                            className={errors.deliveryAddress ? 'error' : ''}
                                            placeholder="الشارع، رقم المبنى، الحي"
                                        />
                                        {errors.deliveryAddress && <span className="error-message">{errors.deliveryAddress}</span>}
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="deliveryCity">المدينة *</label>
                                            <input
                                                type="text"
                                                id="deliveryCity"
                                                name="deliveryCity"
                                                value={formData.deliveryCity}
                                                onChange={handleChange}
                                                className={errors.deliveryCity ? 'error' : ''}
                                                placeholder="المدينة"
                                            />
                                            {errors.deliveryCity && <span className="error-message">{errors.deliveryCity}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="deliveryPostalCode">الرمز البريدي *</label>
                                            <input
                                                type="text"
                                                id="deliveryPostalCode"
                                                name="deliveryPostalCode"
                                                value={formData.deliveryPostalCode}
                                                onChange={handleChange}
                                                className={errors.deliveryPostalCode ? 'error' : ''}
                                                placeholder="12345"
                                            />
                                            {errors.deliveryPostalCode && <span className="error-message">{errors.deliveryPostalCode}</span>}
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="deliveryState">الإمارة *</label>
                                            <select
                                                id="deliveryState"
                                                name="deliveryState"
                                                value={formData.deliveryState}
                                                onChange={handleChange}
                                                className={errors.deliveryState ? 'error' : ''}
                                            >
                                                <option value="">اختر الإمارة</option>
                                                {uaeStates.map((state) => (
                                                    <option key={state} value={state}>
                                                        {state}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.deliveryState && <span className="error-message">{errors.deliveryState}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="deliveryCountry">الدولة</label>
                                            <input
                                                type="text"
                                                id="deliveryCountry"
                                                value="الإمارات العربية المتحدة"
                                                readOnly
                                                className="readonly"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Payment Fees Section */}
                            <div className="form-section">
                                <h2 className="section-title">رسوم الدفع</h2>
                                <div className="form-group">
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="paymentRegion"
                                            checked={true}
                                            disabled
                                            readOnly
                                        />
                                        <span>UAE (مجاناً)</span>
                                    </label>
                                    <p className="toggle-note">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                        التوصيل مجاني داخل الإمارات العربية المتحدة
                                    </p>
                                </div>
                            </div>

                            <div className="form-section">
                                <h2 className="section-title">ملاحظات إضافية</h2>
                                <div className="form-group">
                                    <label htmlFor="notes">ملاحظات (اختياري)</label>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="أي ملاحظات أو متطلبات خاصة..."
                                    ></textarea>
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
