import React from 'react';
import './FloatingContacts.css';

const FloatingContacts = () => {
    const whatsappNumber = '+201286282884';
    const phoneNumber = '01286282884';

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <div className="floating-contacts">
            <button
                className="floating-btn wha-btn"
                onClick={handleWhatsAppClick}
                aria-label="Contact via WhatsApp"
                title="تواصل عبر الواتساب"
            >
                <i className="fab fa-whatsapp"></i>
            </button>

            <button
                className="floating-btn phone-btn"
                onClick={handlePhoneClick}
                aria-label="Call us"
                title="اتصل بنا"
            >
                <i className="fas fa-phone-alt"></i>
            </button>
        </div>
    );
};

export default FloatingContacts;

