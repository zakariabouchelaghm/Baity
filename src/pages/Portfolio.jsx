import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Portfolio.css'

const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const location = useLocation()

    // All showcase images
    const showcaseImages = [
        '02e53e09-07d3-449a-8548-7a2b3c72269e.jpg',
        '2bb96724-42c3-4d25-af28-afc33615e438.jpg',
        '2bcb5671-e9ac-4f82-b184-83d840e9d565.jpg',
        '2e73f694-fe64-4205-b5bb-1ec4245baa58.jpg',
        '3aaa1069-a4ac-42c2-8ef3-390cc3a56a3d.jpg',
        '3ad6306f-e3b6-49b0-b2b9-344ffc788c93.jpg',
        'EXT-01.jpg',
        'EXT-08.jpg',
        'FF-Bedroom-1-01.jpg',
        'FF-Hall-05.jpg',
        'FF-Hall-06.jpg',
        'GF-101-Sitting-01.jpg',
        'GF-101-Sitting-02.jpg',
        'GF-101-Sitting-03.jpg',
        'GF-101-Sitting-04.jpg',
        'GF-101-Sitting-05.jpg',
        'GF-101-Sitting-06.jpg',
        'GF-105-Family-Living-03.jpg',
        'GF-106-Master-Bedroom-02.jpg',
        'GF-Hall-02.jpg',
        'GF-Hall-Bath-01.jpg',
        'GF-Men-Bath-01.jpg',
        'Hall-01.jpg',
        'Hall-15.jpg',
        'Hall-16.jpg',
        'WhatsApp Image 2023-11-30 at 07.28.12_522b6634.jpg',
        'WhatsApp Image 2023-11-30 at 07.28.12_6d36d79d.jpg',
        'bath.jpg',
        'bed rooms.jpg',
        'design.jpg',
        'site reality.jpg',
        'صالة 3.jpg'
    ]

    // Update meta tags when image is selected for better social sharing
    useEffect(() => {
        if (selectedImage) {
            const imageUrl = `${window.location.origin}${selectedImage}`;
            updateMetaTags(imageUrl);
        }
    }, [selectedImage])

    const updateMetaTags = (imageUrl) => {
        // Update or create Open Graph meta tags
        updateMetaTag('og:image', imageUrl);
        updateMetaTag('og:image:secure_url', imageUrl);
        updateMetaTag('og:image:type', 'image/jpeg');
        updateMetaTag('og:image:width', '1200');
        updateMetaTag('og:image:height', '630');
        updateMetaTag('og:title', 'تصميم رائع من بيتي');
        updateMetaTag('og:description', 'اطلع على تصاميمنا المميزة في التصميم الداخلي');

        // Twitter Card
        updateMetaTag('twitter:card', 'summary_large_image', 'name');
        updateMetaTag('twitter:image', imageUrl, 'name');
        updateMetaTag('twitter:title', 'تصميم رائع من بيتي', 'name');
    }

    const updateMetaTag = (property, content, attr = 'property') => {
        let element = document.querySelector(`meta[${attr}="${property}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute(attr, property);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    }

    const handleShare = (platform, image) => {
        const imageUrl = `${window.location.origin}/showcase/${image}`;
        const shareText = 'تحقق من هذا التصميم الرائع من بيتي';
        const pageUrl = `${window.location.origin}/portfolio`;

        let shareUrl = '';

        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${encodeURIComponent(shareText)}`;
                break;
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + pageUrl)}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, '_blank', 'width=600,height=400');
    }

    return (
        <div className="portfolio-page">
            {/* Hero Section with Background */}
            <section className="page-hero" style={{
                backgroundImage: 'url(/showcase/FF-Hall-06.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                padding: '8rem 0 4rem',
                marginBottom: '4rem'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(127, 6, 33, 0.9), rgba(0, 0, 0, 0.7))',
                    zIndex: 1
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        color: 'white',
                        marginBottom: '1rem',
                        textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
                    }}>أعمالنا</h1>
                    <p style={{
                        fontSize: '1.3rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        استعرض مجموعة من أفضل مشاريعنا وتصاميمنا المنجزة
                    </p>
                </div>
            </section>

            <div className="container portfolio-content">
                <div className="portfolio-grid">
                    {showcaseImages.map((image, index) => {
                        return (
                            <div
                                key={index}
                                className="portfolio-item"
                            >
                                <img
                                    src={`/showcase/${image}`}
                                    alt={`مشروع ${index + 1}`}
                                    loading="lazy"
                                    onClick={() => setSelectedImage(`/showcase/${image}`)}
                                />
                                <div className="portfolio-item-overlay">
                                    <div className="portfolio-item-actions">
                                        <button
                                            className="portfolio-action-btn view-btn"
                                            onClick={() => setSelectedImage(`/showcase/${image}`)}
                                            title="عرض الصورة"
                                        >
                                            🔍
                                        </button>
                                        <button
                                            className="portfolio-action-btn share-btn"
                                            title="مشاركة على X"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleShare('twitter', image);
                                            }}
                                        >
                                            𝕏
                                        </button>
                                        <button
                                            className="portfolio-action-btn share-btn"
                                            title="مشاركة على Facebook"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleShare('facebook', image);
                                            }}
                                        >
                                            f
                                        </button>
                                        <button
                                            className="portfolio-action-btn share-btn"
                                            title="مشاركة على WhatsApp"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleShare('whatsapp', image);
                                            }}
                                        >
                                            📱
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                            ✕
                        </button>
                        <img src={selectedImage} alt="عرض كامل" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Portfolio
