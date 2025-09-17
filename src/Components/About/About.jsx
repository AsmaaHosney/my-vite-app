import { useState } from "react";
import netflixLogo from "../../assets/images/n.png";
import facebookLogo from "../../assets/images/f.png";
import instagramLogo from "../../assets/images/in.png";
import attarLogo from "../../assets/images/o.png";
import libraryLogo from "../../assets/images/l.png";
import shoeImg from "../../assets/images/shoes.png";
import bagImg from "../../assets/images/bag.png";
import helloKittyImg from "../../assets/images/h.png";
import shortsImg from "../../assets/images/shorts.png";
import { FiShoppingCart } from "react-icons/fi";
import {
  Palette,
  ChevronLeft,
  Settings,
  MousePointerClick,
  CreditCard,
  Truck,
} from "lucide-react";

export default function EcommerceSection() {
  const [onlinePayment, setOnlinePayment] = useState(true);
  const [shipping, setShipping] = useState(true);

  return (
    <section className="bg-white py-16 font-avenir">
      {/* العنوان العلوي */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <p className="text-gray-800 text-2xl font-medium mb-10 tracking-wide">
          في وصل، نساعدك تحوّل حلمك التجاري إلى واقع بخطوات أبسط وأسرع.
        </p>
        <div className="flex justify-center items-center gap-8 flex-nowrap">
          <img src={netflixLogo} alt="Netflix" className="h-8 grayscale hover:grayscale-0 hover:scale-110 transition duration-200" />
          <img src={facebookLogo} alt="Facebook" className="h-10 grayscale hover:grayscale-0 hover:scale-110 transition duration-200" />
          <img src={instagramLogo} alt="Instagram" className="h-10 grayscale hover:grayscale-0 hover:scale-110 transition duration-200" />
          <img src={attarLogo} alt="Attar" className="h-12 grayscale hover:grayscale-0 hover:scale-110 transition duration-200" />
          <img src={libraryLogo} alt="Library" className="h-10 grayscale hover:grayscale-0 hover:scale-110 transition duration-200" />
        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 max-w-6xl mx-auto px-6">
        {/* النصوص */}
        <div className="text-right bg-white rounded-2xl p-8">
          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-blue-300 text-blue-900 px-4 py-2 rounded-full mb-6 text-xl font-black border border-blue-200">
              إطلاق المتجر
              <FiShoppingCart className="w-6 h-6" />
            </button>
          </div>
          <h2 className="text-3xl font-black text-blue-900 mb-4 leading-relaxed">
            تحكّم كامل في تجارتك من مكان واحد
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed font-normal">
            مع "وصل"، تقدر تدير متجرك بكل سهولة واحترافية عبر منصة متكاملة
            مصممة لتناسب السوق المحلي وتواكب المعايير العالمية.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* إعداد متجر */}
            <div className="flex flex-col items-start text-left">
              <div className="text-2xl mb-2 text-blue-700">
                <MousePointerClick className="w-7 h-7" />
              </div>
              <h3 className=" font-black text-blue-900 mb-1">
                إعداد متجر إلكتروني بسهولة
              </h3>
              <p className="text-gray-600 text-sm font-light">أدواتنا السهلة وجاهزة.</p>
            </div>

            {/* الدفع */}
            <div className="flex flex-col items-start text-left">
              <div className="text-2xl mb-2 text-blue-700">
                <CreditCard className="w-7 h-7" />
              </div>
              <h3 className="font-black text-blue-900 mb-1">
                تكامل مع بوابات الدفع المحلية
              </h3>
              <p className="text-gray-600 text-sm font-light">
                بطاقة مصرفية، سداد، موباي، كاش، يسر باي.
              </p>
            </div>

            {/* الشحن */}
            <div className="flex flex-col items-start text-left">
              <div className="text-2xl mb-2 text-blue-700">
                <Truck className="w-7 h-7" />
              </div>
              <h3 className="font-black text-blue-900 mb-1">
                ربط مباشر مع شركات الشحن
              </h3>
              <p className="text-gray-600 text-sm font-light">
                توصيل أسرع وتجربة عميل أفضل.
              </p>
            </div>
          </div>
        </div>

        {/* صورة / واجهة المتجر */}
        <div className="relative bg-blue-50 rounded-2xl p-8">
          <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6">
            {/* الهيدر */}
            <div className="flex justify-between items-center mb-6 text-gray-600 text-sm font-light">
              <span>الرئيسية</span>
              <div className="flex items-center border rounded-lg px-3 py-1 w-48">
                <input
                  type="text"
                  placeholder="بحث..."
                  className="flex-1 outline-none text-sm font-light"
                />
                <span className="text-gray-400">🔍</span>
              </div>
            </div>
{/* منتجات المتجر */}
<div className="grid grid-cols-3 gap-4">
  {/* أول صورة تملى الصف */}
  <div className="bg-[#fef2f2] p-4 h-36 rounded-xl flex items-center justify-center col-span-3">
    <img src={shoeImg} alt="Shoe" className="w-48" />
  </div>

  {/* الثلاث صور في الصف التاني */}
  <div className="bg-[#fefce8] p-4 rounded-xl flex items-center justify-center">
    <img src={bagImg} alt="Bag" className="w-28" />
  </div>
  <div className="bg-[#f0fdf4] p-4 rounded-xl flex items-center justify-center">
    <img src={helloKittyImg} alt="Hello Kitty" className="w-28" />
  </div>
  <div className="bg-[#eff6ff] p-4 rounded-xl flex items-center justify-center">
    <img src={shortsImg} alt="Shorts" className="w-24" />
  </div>
</div>

            {/* هوية المتجر */}
            <div className="absolute bottom-20 -left-20 bg-white rounded-xl shadow-lg p-4 w-44 mb-8">
              <div className="flex justify-end gap-2 mb-3">
           
                <span className="font-black text-blue-900 text-sm">
                  هوية المتجر
                </span>
                     <Palette className="w-4 h-4 text-blue-950" />
              </div>
              <ul className="space-y-2 text-sm text-gray-600 font-light">
                <li className="flex justify-between items-center hover:text-blue-600 cursor-pointer">
                  <span>الشعار</span>
                  <ChevronLeft className="w-4 h-4" />
                </li>
                <li className="flex justify-between items-center hover:text-blue-600 cursor-pointer">
                  <span>صور الغلاف</span>
                  <ChevronLeft className="w-4 h-4" />
                </li>
                <li className="flex justify-between items-center hover:text-blue-600 cursor-pointer">
                  <span>الألوان</span>
                  <ChevronLeft className="w-4 h-4" />
                </li>
              </ul>
            </div>

            {/* الإعدادات */}
            <div className="absolute bottom-20 -right-20 bg-white rounded-xl shadow-lg p-4 w-48 mb-8">
              <div className="flex justify-end gap-2 mb-4">
               
                <span className="font-black text-blue-900 text-sm ">
                  الإعدادات
                </span>
                 <Settings className="w-4 h-4 text-blue-700" />
              </div>

              <div className="flex items-center justify-between text-sm mb-3 font-light">
                <span>دفع إلكتروني</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={onlinePayment}
                    onChange={() => setOnlinePayment(!onlinePayment)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition"></div>
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-4 transition"></div>
                </label>
              </div>

              <div className="flex items-center justify-between text-sm font-light">
                <span>شركات شحن</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={shipping}
                    onChange={() => setShipping(!shipping)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition"></div>
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-4 transition"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
