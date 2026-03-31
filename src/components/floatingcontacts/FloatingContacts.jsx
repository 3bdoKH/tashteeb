import React from 'react';
import './FloatingContacts.css';
import { phoneNumbers, whatsappNumbers } from '../../utils/phoneNumbers';
const FloatingContacts = () => {
    const whatsappNumber = whatsappNumbers[0];
    const phoneNumber = phoneNumbers[0];

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

