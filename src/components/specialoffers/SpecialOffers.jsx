import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SpecialOffers.css';

const SpecialOffers = () => {
    const [activeOffer, setActiveOffer] = useState(0);

    const offers = [
        {
            id: 1,
            title: "🏡 ابني بيتك أو شطب وحدتك",
            subtitle: "مقدم يبدأ من 20% فقط وباقي المبلغ على 36 شهر بدون فوائد ✨",
            details: [
                {
                    title: "💰 نظام السداد:",
                    items: [
                        "المقدم الكلي: 40% من قيمة الأعمال.",
                        "طريقة الدفع: على دفعتين (20% + 20%) عند التعاقد.",
                        "الباقي (60%): يُقسّم على 36 شهر بدون فوائد."
                    ]
                },
                {
                    title: "🛠 خطوات التنفيذ:",
                    items: [
                        "المعاينة: زيارة مهندس شركتنا لموقع الأعمال مقابل 2000 جنيه.",
                        "الرسومات والمستندات: العميل يقدم الرسومات وكراسة الكميات.",
                        "عرض السعر: عرض تقريبي مجاني أو عرض تفصيلي بمقابل رمزي.",
                        "تجهيز الأوراق: العميل يجهز الأوراق المطلوبة لشركة التمويل.",
                        "التعاقد والتنفيذ: بعد توقيع العقد ودفع أول دفعة من المقدم، نبدأ التنفيذ خلال أسبوعين فقط.",
                        "سداد الأقساط: الأقساط تُسدد عبر شركة التمويل بشكل شهري بدون فوائد."
                    ]
                },
                {
                    title: "🌟 مميزات العرض:",
                    items: [
                        "مقدم مرن على دفعتين.",
                        "باقي المبلغ مقسط على 3 سنوات بدون فوائد.",
                        "تبدأ أعمال التنفيذ خلال أسبوعين فقط.",
                        "إشراف هندسي كامل وجودة تنفيذ عالية."
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "🎯 عرض خاص على تشطيب الشقق",
            subtitle: "مقدم 20% فقط والباقي بالتقسيط على 36 شهر بدون فوائد",
            details: [
                {
                    title: "✅ أسعار الباقات:",
                    items: [
                        "باقة اقتصادية: 1999 جنيه للمتر",
                        "باقة مميزة: 2750 جنيه للمتر",
                        "باقة فاخرة: 3400 جنيه للمتر",
                        "ملاحظة: أعمال المحارة خارج الباقات بسعر 120 جنيه للمتر"
                    ]
                },
                {
                    title: "📌 أنظمة السداد:",
                    items: [
                        "استلام خلال 6 شهور: 20% مقدم + 10% بعد شهرين + الباقي على 36 شهر.",
                        "استلام خلال 4 شهور: 20% مقدم + 20% بعد شهرين + الباقي على 36 شهر."
                    ]
                },
                {
                    title: "🛠 التشطيب يشمل:",
                    items: [
                        "سيراميك – سباكة – كهرباء – دهانات – جبس – ألوميتال",
                        "إشراف مهندسين متخصصين على كل مرحلة",
                        "شهادة ضمان مكتوبة لمدة 10 سنوات",
                        "تقرير هندسي كامل عند استلام كل مرحلة"
                    ]
                }
            ],
            contact: "📞 للحجز والاستفسار: واتساب – 01126351365 / 01055556363"
        }
    ];

    return (
        <section className="special-offers-section">
            <div className="container">
                <div className="section-header">
                    <h2>عروض خاصة</h2>
                    <p>عروض حصرية ومميزة لفترة محدودة</p>
                </div>

                <div className="offers-tabs">
                    {offers.map((offer, index) => (
                        <button
                            key={offer.id}
                            className={`offer-tab ${activeOffer === index ? 'active' : ''}`}
                            onClick={() => setActiveOffer(index)}
                        >
                            {offer.title}
                        </button>
                    ))}
                </div>

                <div className="offers-content">
                    {offers.map((offer, index) => (
                        <div
                            key={offer.id}
                            className={`offer-card ${activeOffer === index ? 'active' : ''}`}
                        >
                            <div className="offer-header">
                                <h3>{offer.title}</h3>
                                <p className="offer-subtitle">{offer.subtitle}</p>
                            </div>

                            <div className="offer-details">
                                {offer.details.map((section, idx) => (
                                    <div key={idx} className="offer-section">
                                        <h4>{section.title}</h4>
                                        <ul>
                                            {section.items.map((item, itemIdx) => (
                                                <li key={itemIdx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                                {offer.contact && (
                                    <div className="offer-contact">
                                        <p>{offer.contact}</p>
                                    </div>
                                )}
                            </div>

                            <div className="offer-actions">
                                <Link to="/contact" className="btn btn-primary">احصل على العرض</Link>
                                <Link to="/pricing" className="btn btn-secondary">تفاصيل الأسعار</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;
