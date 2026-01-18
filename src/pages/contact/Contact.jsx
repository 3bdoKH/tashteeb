import React, { useState, useEffect } from 'react';
import './Contact.css';
import { image40 } from '../../utils/imports';
const Contact = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!formData.name || !formData.phone || !formData.message) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            return;
        }

        // Get service label
        const serviceLabel = serviceOptions.find(opt => opt.value === formData.service)?.label || 'غير محدد';

        // Create WhatsApp message
        let message = `
📧 *رسالة تواصل جديدة*

👤 *الاسم:* ${formData.name}
📱 *رقم الهاتف:* ${formData.phone}`;

        if (formData.email) {
            message += `\n✉️ *البريد الإلكتروني:* ${formData.email}`;
        }

        if (formData.service) {
            message += `\n🔧 *الخدمة المطلوبة:* ${serviceLabel}`;
        }

        message += `\n\n💬 *الرسالة:*\n${formData.message}`;

        message = message.trim();

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/+201286282884?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappURL, '_blank');

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });
    };

    // Services options
    const serviceOptions = [
        { value: '', label: 'اختر الخدمة' },
        { value: 'full', label: 'تشطيب كامل' },
        { value: 'design', label: 'تصميم داخلي' },
        { value: 'renovation', label: 'ترميم وتجديد' },
        { value: 'other', label: 'خدمة أخرى' }
    ];

    // Office locations
    const offices = [
        {
            id: 1,
            city: 'القاهرة',
            address: 'ميدان تريمف بجوار كنيسة العذراء سانت فاتيما',
            phone: '01286282884',
            email: 'info@tashteeb.com',
            hours: 'السبت - الخميس: 9 صباحًا - 6 مساءً',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3451.5765511235877!2d31.341871785602894!3d30.106311485569357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zINmF2YrYr9in2YYg2KrYsdmK2YXZgSDYqNis2YjYp9ixINmD2YbZitiz2Kkg2KfZhNi52LDYsdin2KEg2LPYp9mG2Kog2YHYp9iq2YrZhdin!5e0!3m2!1sen!2seg!4v1761058175593!5m2!1sen!2seg'
        },
    ];


    // Active office for map display
    const [activeOffice, setActiveOffice] = useState(offices[0]);

    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1>تواصل معنا</h1>
                    <p>نحن هنا للإجابة على استفساراتك</p>
                </div>
            </div>

            <section className="contact-info-section">
                <div className="container">
                    <div className="contact-info-grid">
                        <div className="contact-card">
                            <div className="icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <h3>اتصل بنا</h3>
                            <p>01286282884</p>
                            <p>01126351365</p>
                        </div>

                        <div className="contact-card">
                            <div className="icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <h3>البريد الإلكتروني</h3>
                            <p>info@tashteeb.com</p>
                            <p>support@tashteeb.com</p>
                        </div>

                        <div className="contact-card">
                            <div className="icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h3>العنوان</h3>
                            <p>ميدان تريمف بجوار كنيسة العذراء سانت فاتيما</p>
                        </div>

                        <div className="contact-card">
                            <div className="icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <h3>ساعات العمل</h3>
                            <p>السبت - الخميس: 9 صباحًا - 6 مساءً</p>
                            <p>الجمعة: مغلق</p>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://www.facebook.com/share/172axqTggG/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a href="https://wa.me/+201286282884" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </section>

            <section className="contact-form-section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-form-container">
                            <h2>أرسل لنا رسالة عبر الواتساب</h2>
                            <p className="form-description">املأ النموذج وسيتم فتح الواتساب مباشرة مع رسالتك</p>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">الاسم <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">البريد الإلكتروني</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">رقم الهاتف <span className="required">*</span></label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="service">الخدمة المطلوبة</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                        >
                                            {serviceOptions.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">الرسالة <span className="required">*</span></label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-whatsapp-submit">
                                    <i className="fab fa-whatsapp"></i>
                                    إرسال عبر الواتساب
                                </button>
                            </form>
                        </div>

                        <div className="contact-whatsapp">
                            <h2>تواصل معنا عبر الواتساب</h2>
                            <p>للتواصل السريع والاستفسارات العاجلة، يمكنك التواصل معنا مباشرة عبر الواتساب</p>
                            <a href="https://wa.me/+201286282884" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                                <i className="fab fa-whatsapp"></i> تواصل عبر الواتساب
                            </a>

                            <div className="contact-image">
                                <img src={image40} alt="تواصل معنا" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="offices-section">
                <div className="container">
                    <h2>فروعنا</h2>

                    <div className="offices-grid">
                        <div className="offices-list">
                            {offices.map(office => (
                                <div
                                    key={office.id}
                                    className={`office-card ${activeOffice.id === office.id ? 'active' : ''}`}
                                    onClick={() => setActiveOffice(office)}
                                >
                                    <h3>{office.city}</h3>
                                    <div className="office-details">
                                        <p><i className="fas fa-map-marker-alt"></i> {office.address}</p>
                                        <p><i className="fas fa-phone-alt"></i> {office.phone}</p>
                                        <p><i className="fas fa-envelope"></i> {office.email}</p>
                                        <p><i className="fas fa-clock"></i> {office.hours}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2>أسئلة شائعة</h2>

                    <div className="faq-list">
                        <div className="faq-item">
                            <h3>كيف يمكنني الحصول على عرض سعر؟</h3>
                            <p>يمكنك الحصول على عرض سعر من خلال ملء نموذج التواصل أعلاه، أو من خلال الاتصال بنا مباشرة على الأرقام الموضحة، وسيقوم فريقنا بالتواصل معك في أقرب وقت ممكن.</p>
                        </div>

                        <div className="faq-item">
                            <h3>هل يمكنني زيارة معرض الشركة؟</h3>
                            <p>نعم، يمكنك زيارة معرضنا في أي من فروعنا خلال ساعات العمل الرسمية، ويفضل تحديد موعد مسبق لضمان تقديم أفضل خدمة لك.</p>
                        </div>

                        <div className="faq-item">
                            <h3>هل تقدمون خدمات خارج المدن الرئيسية؟</h3>
                            <p>نعم، نقدم خدماتنا في جميع أنحاء المملكة، ولدينا فرق متنقلة يمكنها الوصول إلى مختلف المناطق لتنفيذ المشاريع.</p>
                        </div>

                        <div className="faq-item">
                            <h3>كم تستغرق الرد على استفساراتي؟</h3>
                            <p>نحرص على الرد على جميع الاستفسارات خلال 24 ساعة كحد أقصى، وفي حالة الاستفسارات العاجلة يمكنك التواصل معنا عبر الواتساب للحصول على رد سريع.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
