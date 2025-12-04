import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ cartCount = 0 }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [showMoreDropdown, setShowMoreDropdown] = useState(false)
    const location = useLocation()

    const navLinks = [
        { path: '/', label: 'الرئيسية' },
        { path: '/about', label: 'من نحن' },
        { path: '/#services', label: 'خدمات' },
        {
            path: '/more',
            label: 'المزيد',
            hasDropdown: true,
            subItems: [
                { path: '/portfolio', label: 'أعمالنا' },
                { path: '/contact', label: 'تواصل معنا' },
                { path: '/message', label: 'أرسل إلينا رسالة' }
            ]
        }
    ]

    const isActive = (path) => location.pathname === path

    const handleServicesClick = (e) => {
        e.preventDefault()
        const servicesSection = document.getElementById('services')
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' })
        } else {
            window.location.href = '/#services'
        }
        setIsOpen(false)
    }

    return (
        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
                    {/* Logo removed as per request */}
                </Link>

                <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li
                            key={link.path}
                            className={link.hasDropdown ? 'navbar-item-dropdown' : ''}
                            onMouseEnter={() => link.hasDropdown && setShowMoreDropdown(true)}
                            onMouseLeave={() => link.hasDropdown && setShowMoreDropdown(false)}
                        >
                            {link.hasDropdown ? (
                                <>
                                    <span className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}>
                                        {link.label}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.25rem' }}>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                    {showMoreDropdown && (
                                        <div className="dropdown-menu">
                                            {link.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.path}
                                                    to={subItem.path}
                                                    className="dropdown-item"
                                                    onClick={() => {
                                                        setIsOpen(false)
                                                        setShowMoreDropdown(false)
                                                    }}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : link.label === 'خدمات' ? (
                                <a
                                    href="#services"
                                    className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
                                    onClick={handleServicesClick}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    to={link.path}
                                    className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="navbar-actions">
                    <Link to="/cart" className="cart-icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cart-icon">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>

                    <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
