import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';
import { whatsappNumbers } from '../../utils/phoneNumbers';
import { plans } from '../../utils/pricingPlans';
const Pricing = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Form state
    const [formData, setFormData] = useState({
        area: '',
        plan: 'اقتصادي',
        rooms: '',
        bathrooms: '',
        kitchens: '',
        balconies: ''
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission to WhatsApp
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (!formData.area || !formData.rooms || !formData.bathrooms || !formData.kitchens || !formData.balconies) {
            alert('الرجاء ملء جميع الحقول المطلوبة');
            return;
        }

        // Create WhatsApp message
        const message = `
🏠 *طلب عرض سعر تشطيب*

📏 *المساحة:* ${formData.area} متر مربع
🎨 *نوع التشطيب:* ${formData.plan}
🚪 *عدد الغرف:* ${formData.rooms}
🚿 *عدد الحمامات:* ${formData.bathrooms}
🍳 *عدد المطابخ:* ${formData.kitchens}
🏡 *عدد البلكونات:* ${formData.balconies}

أرجو تزويدي بعرض سعر تفصيلي.
        `.trim();

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${whatsappNumbers[0]}?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="pricing-page">
            <div className="page-header">
                <div className="container">
                    <h1>الأسعار والخطط</h1>
                    <p>باقات تشطيب تناسب جميع الميزانيات</p>
                </div>
            </div>

            <section className="pricing-plans-section">
                <div className="container">
                    <div className="section-header">
                        <h2>باقات التشطيب</h2>
                        <p>اختر الباقة المناسبة لاحتياجاتك</p>
                    </div>

                    <div className="pricing-grid">
                        {plans.map(plan => (
                            <div
                                className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
                                key={plan.id}
                                style={{ '--accent-color': plan.color }}
                            >
                                {plan.recommended && <div className="recommended-badge">الأكثر طلبًا</div>}

                                <div className="pricing-header">
                                    <h3>{plan.name}</h3>
                                    <div className="pricing-price">
                                        <span className="price">{plan.price}</span>
                                        <span className="unit">{plan.unit}</span>
                                    </div>
                                    <p>{plan.description}</p>
                                </div>

                                <div className="pricing-features">
                                    <h4>المميزات</h4>
                                    <ul>
                                        {plan.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {plan.notIncluded.length > 0 && (
                                        <>
                                            <h4>لا يشمل</h4>
                                            <ul className="not-included">
                                                {plan.notIncluded.map((item, index) => (
                                                    <li key={index}>
                                                        <i className="fas fa-times"></i>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>

                                <div className="pricing-action">
                                    <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pricing-note">
                        <p>* الأسعار تقريبية وقد تختلف حسب متطلبات المشروع والمواد المستخدمة</p>
                    </div>
                </div>
            </section>

            <section className="calculator-section">
                <div className="container">
                    <div className="section-header">
                        <h2>احصل على عرض سعر مخصص</h2>
                        <p>املأ البيانات وسنرسل لك عرض سعر تفصيلي عبر الواتساب</p>
                    </div>

                    <div className="quote-form-container">
                        <form className="quote-form" onSubmit={handleSubmit}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="area">
                                        <i className="fas fa-ruler-combined"></i>
                                        المساحة (متر مربع) *
                                    </label>
                                    <input
                                        type="number"
                                        id="area"
                                        name="area"
                                        min="1"
                                        placeholder="أدخل المساحة"
                                        value={formData.area}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="plan">
                                        <i className="fas fa-paint-roller"></i>
                                        نوع التشطيب *
                                    </label>
                                    <select
                                        id="plan"
                                        name="plan"
                                        value={formData.plan}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="اقتصادي">اقتصادي</option>
                                        <option value="لوكس">لوكس</option>
                                        <option value="هاي لوكس">هاي لوكس</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="rooms">
                                        <i className="fas fa-door-closed"></i>
                                        عدد الغرف *
                                    </label>
                                    <input
                                        type="number"
                                        id="rooms"
                                        name="rooms"
                                        min="0"
                                        placeholder="عدد الغرف"
                                        value={formData.rooms}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="bathrooms">
                                        <i className="fas fa-bath"></i>
                                        عدد الحمامات *
                                    </label>
                                    <input
                                        type="number"
                                        id="bathrooms"
                                        name="bathrooms"
                                        min="0"
                                        placeholder="عدد الحمامات"
                                        value={formData.bathrooms}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="kitchens">
                                        <i className="fas fa-utensils"></i>
                                        عدد المطابخ *
                                    </label>
                                    <input
                                        type="number"
                                        id="kitchens"
                                        name="kitchens"
                                        min="0"
                                        placeholder="عدد المطابخ"
                                        value={formData.kitchens}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="balconies">
                                        <i className="fas fa-border-style"></i>
                                        عدد البلكونات *
                                    </label>
                                    <input
                                        type="number"
                                        id="balconies"
                                        name="balconies"
                                        min="0"
                                        placeholder="عدد البلكونات"
                                        value={formData.balconies}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-submit">
                                <button type="submit" className="btn btn-whatsapp">
                                    <i className="fab fa-whatsapp"></i>
                                    إرسال عبر الواتساب
                                </button>
                                <p className="form-note">* سيتم فتح الواتساب مباشرة مع رسالة تحتوي على بياناتك</p>
                            </div>
                        </form>

                        <div className="form-benefits">
                            <h3>لماذا تطلب عرض سعر من تشطيب؟</h3>
                            <ul>
                                <li>
                                    <i className="fas fa-check-circle"></i>
                                    <span>عرض سعر مفصل ودقيق حسب احتياجاتك</span>
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i>
                                    <span>استشارة مجانية من خبرائنا</span>
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i>
                                    <span>ضمان شامل على جميع الأعمال</span>
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i>
                                    <span>خيارات تقسيط مرنة</span>
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i>
                                    <span>فريق عمل محترف وخبرة 15 عام</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <div className="section-header">
                        <h2>الأسئلة الشائعة</h2>
                        <p>إجابات على الأسئلة الأكثر شيوعًا</p>
                    </div>

                    <div className="faq-list">
                        <div className="faq-item">
                            <h3>ما هي مدة تنفيذ المشروع؟</h3>
                            <p>تختلف مدة تنفيذ المشروع حسب حجمه ونوع التشطيب، ولكن بشكل عام تتراوح المدة بين 3-6 أشهر للشقق السكنية.</p>
                        </div>

                        <div className="faq-item">
                            <h3>هل يمكنني تقسيط تكلفة المشروع؟</h3>
                            <p>نعم، نوفر خيارات تقسيط مرنة تناسب ميزانيتك، حيث يمكنك دفع التكلفة على دفعات مرتبطة بمراحل تنفيذ المشروع.</p>
                        </div>

                        <div className="faq-item">
                            <h3>هل تقدمون ضمان على الأعمال المنفذة؟</h3>
                            <p>نعم، نقدم ضمان شامل لمدة سنة على جميع الأعمال المنفذة، وضمان لمدة 5 سنوات على أعمال السباكة والكهرباء.</p>
                        </div>

                        <div className="faq-item">
                            <h3>هل يمكنني تعديل الباقة حسب احتياجاتي؟</h3>
                            <p>بالتأكيد، يمكننا تصميم باقة مخصصة تناسب احتياجاتك وميزانيتك، حيث نضيف أو نحذف بعض الخدمات حسب رغبتك.</p>
                        </div>

                        <div className="faq-item">
                            <h3>هل تقدمون خدمات التصميم الداخلي؟</h3>
                            <p>نعم، نقدم خدمات التصميم الداخلي بشكل منفصل أو كجزء من باقة التشطيب الشاملة، مع تصورات ثلاثية الأبعاد للتصميم النهائي.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pricing-cta-section">
                <div className="container">
                    <div className="pricing-cta">
                        <h2>جاهز لبدء مشروعك؟</h2>
                        <p>تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر تفصيلي لمشروعك.</p>
                        <Link to="/contact" className="btn btn-primary">تواصل معنا</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
