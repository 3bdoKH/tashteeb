import React from 'react';
import { Link } from 'react-router-dom';
import './PricingSection.css';
import { plans } from '../../utils/pricingPlans';
const PricingSection = () => {

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
                    <h3>احصل على عرض سعر مخصص</h3>
                    <p>املأ البيانات وسنرسل لك عرض سعر تفصيلي عبر الواتساب</p>
                    <Link to="/pricing" className="btn btn-secondary"> اختر الباقة</Link>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
