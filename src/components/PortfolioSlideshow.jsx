import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PortfolioSlideshow.css'

const PortfolioSlideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Portfolio images from showcase folder
    const portfolioItems = [
        {
            id: 1,
            image: '/showcase/GF-101-Sitting-01.jpg',
            title: 'غرفة جلوس عصرية',
            category: 'تصميم داخلي'
        },
        {
            id: 2,
            image: '/showcase/FF-Hall-05.jpg',
            title: 'صالة فاخرة',
            category: 'تصميم داخلي'
        },
        {
            id: 3,
            image: '/showcase/GF-106-Master-Bedroom-02.jpg',
            title: 'غرفة نوم رئيسية',
            category: 'تصميم داخلي'
        },
        {
            id: 4,
            image: '/showcase/Hall-01.jpg',
            title: 'مدخل أنيق',
            category: 'تصميم داخلي'
        },
        {
            id: 5,
            image: '/showcase/EXT-01.jpg',
            title: 'تصميم خارجي',
            category: 'تصميم معماري'
        },
        {
            id: 6,
            image: '/showcase/GF-105-Family-Living-03.jpg',
            title: 'غرفة معيشة عائلية',
            category: 'تصميم داخلي'
        }
    ]

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, portfolioItems.length])

    const goToSlide = (index) => {
        setCurrentSlide(index)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    return (
        <section className="portfolio-slideshow">
            <div className="container">
                <div className="slideshow-container">
                    <div className="slideshow-wrapper">
                        {portfolioItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`slide ${index === currentSlide ? 'active' : ''} ${index === (currentSlide - 1 + portfolioItems.length) % portfolioItems.length ? 'prev' : ''
                                    } ${index === (currentSlide + 1) % portfolioItems.length ? 'next' : ''}`}
                            >
                                <div className="slide-image-container">
                                    <img src={item.image} alt={item.title} className="slide-image" />
                                    <div className="slide-overlay"></div>
                                </div>
                                <div className="slide-content">
                                    <span className="slide-category">{item.category}</span>
                                    <h3 className="slide-title">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button className="slide-nav slide-nav-prev" onClick={prevSlide} aria-label="Previous">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button className="slide-nav slide-nav-next" onClick={nextSlide} aria-label="Next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="slide-dots">
                        {portfolioItems.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>

                <div className="portfolio-cta">
                    <Link to="/portfolio" className="btn btn-primary btn-lg">
                        عرض جميع الأعمال
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSlideshow
