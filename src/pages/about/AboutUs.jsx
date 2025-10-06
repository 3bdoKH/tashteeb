import React from 'react';
import './AboutUs.css';
import { video1 } from '../../utils/imports';
const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>من نحن</h1>
        <p>تعرف على فريقنا وخبراتنا في مجال التشطيبات</p>
      </div>

      <div className="about-content container">
        <div className="about-story">
          <h2>قصتنا</h2>
          <p>
            تأسست شركتنا منذ أكثر من 15 عامًا بهدف تقديم خدمات تشطيب عالية الجودة بأسعار منافسة.
            نفتخر بتنفيذ أكثر من 500 مشروع ناجح في مختلف أنحاء جمهورية مصر العربيه ونسعى دائمًا لتقديم أفضل الحلول
            التي تلبي احتياجات عملائنا وتتجاوز توقعاتهم.
          </p>
        </div>

        <div className="about-vision">
          <h2>رؤيتنا</h2>
          <p>
            نسعى لأن نكون الخيار الأول في مجال التشطيبات والديكورات الداخلية، من خلال تقديم خدمات متكاملة
            تجمع بين الجودة العالية والتصميم المبتكر والتنفيذ الاحترافي.
          </p>
        </div>

        <div className="about-values">
          <h2>قيمنا</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>الجودة</h3>
              <p>نلتزم بأعلى معايير الجودة في كافة مراحل العمل</p>
            </div>
            <div className="value-item">
              <h3>الالتزام</h3>
              <p>نحترم المواعيد ونلتزم بتسليم المشاريع في الوقت المحدد</p>
            </div>
            <div className="value-item">
              <h3>الشفافية</h3>
              <p>نتعامل بشفافية كاملة مع عملائنا في كافة مراحل المشروع</p>
            </div>
            <div className="value-item">
              <h3>الابتكار</h3>
              <p>نسعى دائمًا لتقديم حلول مبتكرة تناسب احتياجات كل عميل</p>
            </div>
          </div>
        </div>

        <div className="about-team">
          <h2>فريقنا</h2>
          <p>
            يضم فريقنا نخبة من المهندسين والمصممين والفنيين ذوي الخبرة الواسعة في مجال التشطيبات والديكورات الداخلية.
            يعمل فريقنا بروح الفريق الواحد لتقديم أفضل النتائج وتحقيق رضا العملاء.
          </p>
          <div className="team-gallery">
            {/* Team images will be added here */}
          </div>
        </div>

        <div className="about-process">
          <h2>كيف نعمل</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>الاستشارة الأولية</h3>
              <p>نستمع لاحتياجاتك ونفهم متطلباتك بدقة</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>التصميم</h3>
              <p>نقدم تصورات وتصاميم تناسب ذوقك وميزانيتك</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>التخطيط</h3>
              <p>نضع خطة عمل تفصيلية مع جدول زمني دقيق</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>التنفيذ</h3>
              <p>ننفذ المشروع وفق أعلى معايير الجودة</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>التسليم</h3>
              <p>نسلم المشروع مع ضمان الجودة وخدمات ما بعد التنفيذ</p>
            </div>
          </div>
        </div>

        <div className="about-video">
          <h2>شاهد كيف نعمل</h2>
          <div className="video-container">
            <video controls>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
