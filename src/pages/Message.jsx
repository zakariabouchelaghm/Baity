import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './SectionPage.css'

const Message = () => {
    const form = useRef()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })
    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_id_placeholder'
        const TEMPLATE_ID = 'template_id_placeholder'
        const PUBLIC_KEY = 'public_key_placeholder'

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text)
                setStatus('success')
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                })
            }, (error) => {
                console.log(error.text)
                setStatus('error')
                alert('حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.')
            })
    }

    return (
        <div className="section-page">
            <div className="section-header">
                <div className="container">
                    <h1 className="page-title">أرسل إلينا رسالة</h1>
                    <p className="page-subtitle">يسعدنا سماع رأيك ومقترحاتك</p>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 0' }}>
                <div className="message-card" style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    background: 'white',
                    padding: '3rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    {status === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>تم إرسال رسالتك بنجاح!</h3>
                            <p>شكراً لتواصلك معنا، سنقوم بالرد عليك في أقرب وقت.</p>
                            <button onClick={() => setStatus('')} className="btn btn-primary" style={{ marginTop: '2rem' }}>إرسال رسالة أخرى</button>
                        </div>
                    ) : (
                        <form ref={form} onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>الاسم الأول</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd' }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>اسم العائلة</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd' }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>البريد الإلكتروني</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd' }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>رقم الهاتف</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd' }}
                                    />
                                </div>
                            </div>

                            <div className="form-group" style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>رسالتك</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', resize: 'vertical' }}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Message
