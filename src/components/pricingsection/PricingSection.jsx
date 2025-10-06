import React from 'react';
import { Link } from 'react-router-dom';
import './PricingSection.css';

const PricingSection = () => {
    // Pricing plans data
    const plans = [
        {
            id: 1,
            name: 'الباقة الاقتصادية',
            price: '1999',
            unit: 'جنيه / متر',
            description: 'تشطيب متميز بسعر اقتصادي يناسب الميزانيات المحدودة',
            features: [
                ' سلك السويدي المعتمد شامل الأسلاك ',
                'سباكة الشريف او (B.R) - ضمان مدى الحياة',
                'عزل أرضيات الحمامات - ضمان مدى الحياة',
                'ديكورات بجميع الالوان',
                'ترميم محارة',
                'مصيص لكامل للشقة',
                'نقاشه فاخرة (سايبس - دايتون - بكين)',
                'سيراميك فرز اول (كليوباترا - ارت - انوفا - رويال)',
            ],
            notIncluded: [
                'الأثاث',
                'الأجهزة الكهربائية',
                'الديكورات الخاصة',
                'التكييف المركزي'
            ],
            recommended: false,
            color: '#3498db'
        },
        {
            id: 2,
            name: 'الباقة هاي لوكس',
            price: '3400',
            unit: 'جنيه / متر',
            description: 'فخامة وتشطيب فاخر بأعلى الخامات والتفاصيل الدقيقة',
            features: [
                'الكهرباء بتأسيس سلك السويدي المعتمد شامل الأسلاك والخرطيم والدش',
                'سباكة الشريف او (B.R) - ضمان مدى الحياة',
                'عزل أرضيات الحمامات - ضمان مدى الحياة',
                'ديكورات بجميع الالوان',
                'ترميم محارة',
                'مصيص لكامل للشقة',
                'نقاشه فاخرة (سايبس - دايتون - بكين)',
                'سيراميك فرز اول (كليوباترا - ارت - انوفا - رويال)',
                'الوميتال B.S ضد الصوت و الاتربه',
                'ابواب غرف فاخرة من معارض الشركة',
                'كرانيش او فيوتك لكامل الشقه',
                'توريد وتركيب طقم صحي وخلاطات في حدود 15000 جنيه (ديورافيت  او ايديال ستاندرد)',
                'توريد وتركيب باب مصفح تركي 11 سم',
                'توريد وتركيب جبس بورد في الريسبشن والطرقات'
            ],
            notIncluded: [
                'الأثاث',
                'الأجهزة الكهربائية'
            ],
            recommended: true,
            color: '#9b59b6'
        },
        {
            id: 3,
            name: 'الباقة اللوكس',
            price: '2750',
            unit: 'جنيه / متر',
            description: 'توازن مثالي بين الجودة العالية والسعر المناسب',
            features: [
                'الكهرباء بتأسيس سلك السويدي المعتمد شامل الأسلاك والخرطيم والدش',
                'سباكة الشريف او (B.R) - ضمان مدى الحياة',
                'عزل أرضيات الحمامات - ضمان مدى الحياة',
                'ديكورات بجميع الالوان',
                'ترميم محارة',
                'مصيص لكامل للشقة',
                'نقاشه فاخرة (سايبس - دايتون - بكين)',
                'سيراميك فرز اول (كليوباترا - ارت - انوفا - رويال)',
                'الوميتال B.S ضد الصوت و الاتربه',
                'ابواب غرف فاخرة من معارض الشركة',
                'كرانيش او فيوتك لكامل الشقه'
            ],
            notIncluded: [
                'الأثاث',
                'الأجهزة الكهربائية المتطورة',
                'التكييف المركزي'
            ],
            recommended: false,
            color: '#e67e22'
        },
    ];


    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <div className="section-header">
                    <h2>الأسعار</h2>
                    <p>باقات تشطيب تناسب جميع الميزانيات</p>
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

                <div className="pricing-cta">
                    <h3>احسب تكلفة تشطيب شقتك</h3>
                    <p>استخدم الحاسبة التفاعلية في صفحة الأسعار لتقدير التكلفة بشكل دقيق</p>
                    <Link to="/pricing" className="btn btn-secondary">حاسبة التكلفة</Link>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
