import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "هل أحتاج إلى خبرة تقنية لإعداد متجري؟", answer: "لا، يمكنك إعداد متجرك بسهولة بدون أي خبرة تقنية." },
  { question: "ماهي الخدمات المشمولة في الباقات؟", answer: "تشمل الباقات استضافة، دعم فني، تحديثات، والمزيد." },
  { question: "هل الاشتراك يشمل تحديثات لمتجري؟", answer: "نعم، جميع الباقات تشمل تحديثات مستمرة للنظام." },
  { question: "هل أستطيع إلغاء الخدمة والحصول على بيانات متجري؟", answer: "بالتأكيد، يمكنك تصدير جميع بيانات متجرك قبل إلغاء الخدمة." },
  { question: "كيف أنشئ متجر الكتروني بسرعة؟", answer: "فقط سجل في المنصة واتبع خطوات الإعداد السريعة." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* العنوان */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#001E62] mb-10">
        الأسئلة الشائعة
      </h2>

      {/* الأسئلة */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
          <button
  onClick={() => toggleFAQ(index)}
  className="w-full flex justify-end items-center text-right space-x-5 space-x-reverse"
>
  <span className="text-gray-800">{faq.question}</span>
  {openIndex === index ? (
    <Minus className="w-5 h-5 text-gray-600" />
  ) : (
    <Plus className="w-5 h-5 text-gray-600" />
  )}
</button>


            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
