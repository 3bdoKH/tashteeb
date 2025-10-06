import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import { image1 } from '../../utils/imports';
import { video1 } from '../../utils/imports';
const Hero = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    useEffect(() => {
        // Simulate video loading
        const timer = setTimeout(() => {
            setIsVideoLoaded(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="hero">
            <div className="hero-media">
                {/* Video background */}
                <video
                    autoPlay
                    muted
                    loop
                    className={`hero-video ${isVideoLoaded ? 'loaded' : ''}`}
                    onCanPlay={() => setIsVideoLoaded(true)}
                >
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Fallback image (shown until video loads) */}
                <div className={`hero-image ${isVideoLoaded ? 'hidden' : ''}`}
                    style={{ backgroundImage: `url(${image1})` }}
                ></div>

                {/* Overlay */}
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <h1>خدمات تشطيب شقق فاخرة من الألف إلى الياء</h1>
                <p>نحول مساحتك إلى منزل أحلامك مع خبرة أكثر من 15 عامًا في مجال التشطيبات الداخلية</p>
                <div className="hero-buttons">
                    <Link to="/services" className="btn btn-primary">اعرف أكثر</Link>
                    <Link to="/pricing" className="btn btn-secondary">شوف الأسعار</Link>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    );
};

export default Hero;
