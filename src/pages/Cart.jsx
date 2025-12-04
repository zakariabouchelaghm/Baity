import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './SectionPage.css'
import './Cart.css'

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
    const navigate = useNavigate()
    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            return total + (parseFloat(item.price) * item.quantity)
        }, 0).toFixed(2)
    }

    return (
        <div className="section-page">
            <div className="page-hero" style={{ height: '40vh' }}>
                <div className="page-hero-overlay"></div>
                <div className="container">
                    <h1 className="page-title">سلة المشتريات</h1>
                    <p className="page-subtitle">
                        راجع طلباتك وأكمل عملية الشراء
                    </p>
                </div>
            </div>

            <section className="cart-section" style={{ padding: '4rem 0' }}>
                <div className="container">
                    {cart.length === 0 ? (
                        <div className="empty-cart" style={{ textAlign: 'center', padding: '3rem' }}>
                            <h3>سلة المشتريات فارغة</h3>
                            <p>لم تقم بإضافة أي عروض بعد</p>
                            <Link to="/" className="btn btn-primary mt-3">تصفح العروض</Link>
                        </div>
                    ) : (
                        <div className="cart-content">
                            {/* Desktop Table View */}
                            <div className="cart-table-container desktop-only" style={{ overflowX: 'auto' }}>
                                <table className="cart-table" style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid var(--border)' }}>
                                            <th style={{ padding: '1rem', textAlign: 'right' }}>المنتج</th>
                                            <th style={{ padding: '1rem', textAlign: 'center' }}>الكمية</th>
                                            <th style={{ padding: '1rem', textAlign: 'left' }}>الإجمالي</th>
                                            <th style={{ padding: '1rem' }}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item) => (
                                            <tr key={item.id} style={{ borderBottom: '1px solid var(--border)' }}>
                                                <td style={{ padding: '1rem' }}>
                                                    <div style={{ fontWeight: 'bold' }}>{item.title}</div>
                                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.price} {item.currency}</div>
                                                </td>
                                                <td style={{ padding: '1rem', textAlign: 'center' }}>
                                                    <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid var(--border)', background: 'white', cursor: 'pointer' }}
                                                        >
                                                            -
                                                        </button>
                                                        <span style={{ minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid var(--border)', background: 'white', cursor: 'pointer' }}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold', color: 'var(--primary)' }}>
                                                    {(parseFloat(item.price) * item.quantity).toFixed(2)} {item.currency}
                                                </td>
                                                <td style={{ padding: '1rem', textAlign: 'center' }}>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer' }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Card View */}
                            <div className="cart-cards mobile-only">
                                {cart.map((item) => (
                                    <div key={item.id} className="cart-card" style={{
                                        background: 'white',
                                        border: '1px solid var(--border)',
                                        borderRadius: 'var(--radius-md)',
                                        padding: '1rem',
                                        marginBottom: '1rem',
                                        boxShadow: 'var(--shadow-sm)'
                                    }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{item.title}</div>
                                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.price} {item.currency}</div>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer', padding: '0.5rem' }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    style={{ width: '35px', height: '35px', borderRadius: '50%', border: '1px solid var(--border)', background: 'white', cursor: 'pointer', fontSize: '1.2rem' }}
                                                >
                                                    -
                                                </button>
                                                <span style={{ minWidth: '30px', textAlign: 'center', fontSize: '1.1rem', fontWeight: 'bold' }}>{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    style={{ width: '35px', height: '35px', borderRadius: '50%', border: '1px solid var(--border)', background: 'white', cursor: 'pointer', fontSize: '1.2rem' }}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary)' }}>
                                                {(parseFloat(item.price) * item.quantity).toFixed(2)} {item.currency}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="cart-summary" style={{ marginTop: '2rem', padding: '2rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', maxWidth: '400px', marginRight: 'auto' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                    <span>المجموع الكلي:</span>
                                    <span>{calculateTotal()} درهم</span>
                                </div>
                                <button
                                    className="btn btn-primary"
                                    style={{ width: '100%' }}
                                    onClick={() => navigate('/checkout')}
                                >
                                    تأكيد الطلب
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Cart
