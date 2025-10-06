import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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


    // Calculator state
    const [calculatorData, setCalculatorData] = useState({
        area: 100,
        plan: 'متوسط',
        rooms: 2,
        bathrooms: 1,
        kitchen: true,
        balcony: false
    });

    // Calculation result
    const [calculationResult, setCalculationResult] = useState({
        basePrice: 0,
        additionalCosts: 0,
        totalPrice: 0
    });

    // Handle calculator input changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCalculatorData({
            ...calculatorData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Calculate price based on inputs
    useEffect(() => {
        const calculatePrice = () => {
            // Get base price per square meter based on selected plan
            let pricePerMeter = 0;
            switch (calculatorData.plan) {
                case 'اقتصادي':
                    pricePerMeter = 1999;
                    break;
                case 'متوسط':
                    pricePerMeter = 2750;
                    break;
                case 'فاخر':
                    pricePerMeter = 3400;
                    break;
                default:
                    pricePerMeter = 1999;
            }

            // Calculate base price
            const basePrice = pricePerMeter * calculatorData.area;

            // Calculate additional costs
            let additionalCosts = 0;

            // Additional cost for rooms (wiring, flooring, etc.)
            additionalCosts += parseInt(calculatorData.rooms) * 5000;

            // Additional cost for bathrooms (plumbing, tiles, fixtures)
            additionalCosts += parseInt(calculatorData.bathrooms) * 15000;

            // Additional cost for kitchen
            if (calculatorData.kitchen) {
                additionalCosts += 25000;
            }

            // Additional cost for balcony
            if (calculatorData.balcony) {
                additionalCosts += 8000;
            }

            // Calculate total price
            const totalPrice = basePrice + additionalCosts;

            setCalculationResult({
                basePrice,
                additionalCosts,
                totalPrice
            });
        };

        calculatePrice();
    }, [calculatorData]);

    // Format number with commas
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                        <h2>حاسبة التكلفة</h2>
                        <p>احسب تكلفة تشطيب شقتك</p>
                    </div>

                    <div className="calculator-container">
                        <div className="calculator-form">
                            <div className="form-group">
                                <label htmlFor="area">المساحة (متر مربع)</label>
                                <input
                                    type="number"
                                    id="area"
                                    name="area"
                                    min="50"
                                    max="1000"
                                    value={calculatorData.area}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="plan">نوع التشطيب</label>
                                <select
                                    id="plan"
                                    name="plan"
                                    value={calculatorData.plan}
                                    onChange={handleInputChange}
                                >
                                    <option value="اقتصادي">اقتصادي (1999 جنيه / متر)</option>
                                    <option value="متوسط">لوكس (2750 جنيه / متر)</option>
                                    <option value="فاخر">فاخر (3400 جنيه / متر)</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="rooms">عدد الغرف</label>
                                <input
                                    type="number"
                                    id="rooms"
                                    name="rooms"
                                    min="1"
                                    max="10"
                                    value={calculatorData.rooms}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bathrooms">عدد الحمامات</label>
                                <input
                                    type="number"
                                    id="bathrooms"
                                    name="bathrooms"
                                    min="1"
                                    max="5"
                                    value={calculatorData.bathrooms}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group checkbox-group">
                                <input
                                    type="checkbox"
                                    id="kitchen"
                                    name="kitchen"
                                    checked={calculatorData.kitchen}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="kitchen">تشطيب مطبخ</label>
                            </div>

                            <div className="form-group checkbox-group">
                                <input
                                    type="checkbox"
                                    id="balcony"
                                    name="balcony"
                                    checked={calculatorData.balcony}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="balcony">تشطيب بلكونة</label>
                            </div>
                        </div>

                        <div className="calculator-result">
                            <h3>التكلفة التقديرية</h3>
                            <div className="result-item">
                                <span className="result-label">التكلفة الأساسية:</span>
                                <span className="result-value">{formatNumber(calculationResult.basePrice)} جنيه</span>
                            </div>
                            <div className="result-item">
                                <span className="result-label">تكاليف إضافية:</span>
                                <span className="result-value">{formatNumber(calculationResult.additionalCosts)} جنيه</span>
                            </div>
                            <div className="result-item total">
                                <span className="result-label">التكلفة الإجمالية:</span>
                                <span className="result-value">{formatNumber(calculationResult.totalPrice)} جنيه</span>
                            </div>
                            <p className="result-note">* هذه التكلفة تقديرية وقد تختلف بناءً على متطلبات المشروع والمواد المستخدمة.</p>
                            <Link to="/contact" className="btn btn-primary">احصل على عرض سعر دقيق</Link>
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
