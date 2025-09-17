import logo1 from "../../assets/images/9.png";
import logo2 from "../../assets/images/7.png";
import logo3 from "../../assets/images/8.png";
import logo4 from "../../assets/images/5.png";
import logo5 from "../../assets/images/6.png";

export default function Partners() {
  return (
    <section className="bg-white text-center py-16">
      {/* العنوان */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#001E62] mb-12">
        شركاؤنا
      </h2>

      {/* الشعارات */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
        {[
          { img: logo1, label: "البطاقات المصرفية", alt: "Maamalat" },
          { img: logo2, label: "بطاقات تداول", alt: "Tadawul" },
          { img: logo3, label: "خدمة موبي كاش", alt: "Mobi Cash" },
          { img: logo4, label: "خدمة أدفع لي", alt: "Adf3ly" },
          { img: logo5, label: "خدمة سداد", alt: "Sdad" },
        ].map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-3 group cursor-pointer transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src={partner.img}
              alt={partner.alt}
              className="h-12 object-contain drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
            />
            <p className="text-base md:text-lg font-semibold text-gray-800">
              {partner.label}
            </p>
          </div>
        ))}
      </div>
{/* دعوة للعمل */}
<div className="bg-gray-50 mt-16 py-12 flex flex-col md:flex-row-reverse items-center justify-around px-6">
  {/* النصوص في اليسار */}
  <div className="text-right md:text-left">
    <h1 className="text-2xl md:text-4xl font-black text-[#001E62] mb-3">
      كن من أوائل التجار على وصل
    </h1>
   <p className="text-gray-600 text-right">
  استمتع بتجربة مجانية ودعم خاص للمشتركين الأوائل.
</p>

  </div>

  {/* الزر في اليمين */}
  <button className="bg-[#001E62] text-white px-9 py-3 rounded-md hover:bg-[#002b85] transition-colors mt-6 md:mt-0">
    ابدأ مجاناً الآن
  </button>
</div>


    </section>
  );
}
