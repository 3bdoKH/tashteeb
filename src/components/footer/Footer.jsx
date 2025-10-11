import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../loog.png';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <Link to="/">
                            <img src={logo} alt="تشطيب" />
                            <span>تشطيب بالتقسيط</span>
                        </Link>
                        <p>خدمات تشطيب شقق فاخرة من الألف إلى الياء</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-links-column">
                            <h3>روابط سريعة</h3>
                            <ul>
                                <li><Link to="/">الرئيسية</Link></li>
                                <li><Link to="/about">من نحن</Link></li>
                                <li><Link to="/services">خدماتنا</Link></li>
                                <li><Link to="/pricing">الأسعار</Link></li>
                                <li><Link to="/projects">معرض الأعمال</Link></li>
                                <li><Link to="/contact">تواصل معنا</Link></li>
                            </ul>
                        </div>

                        <div className="footer-links-column">
                            <h3>خدماتنا</h3>
                            <ul>
                                <li><Link to="/services">تشطيب كامل</Link></li>
                                <li><Link to="/services">تصميم داخلي</Link></li>
                                <li><Link to="/services">ترميم وتجديد</Link></li>
                                <li><Link to="/services">أعمال الكهرباء</Link></li>
                                <li><Link to="/services">أعمال السباكة</Link></li>
                            </ul>
                        </div>

                        <div className="footer-links-column">
                            <h3>تواصل معنا</h3>
                            <ul className="contact-info">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span> شارع النزهه</span>
                                </li>
                                <li onClick={() => window.location.href = 'tel:01286282884'}>
                                    <i className="fas fa-phone"></i>
                                    <span>01286282884</span>
                                </li>
                                <li>
                                    <i className="fas fa-envelope"></i>
                                    <span>info@tashteeb.com</span>
                                </li>
                                <li>
                                    <i className="fas fa-clock"></i>
                                    <span>السبت - الخميس: 9 صباحًا - 6 مساءً</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        <p>© {new Date().getFullYear()} تشطيب بالتقسيط. جميع الحقوق محفوظة</p>
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
            </div>
        </footer>
    );
};

export default Footer;
