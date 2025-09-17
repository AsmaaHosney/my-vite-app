import { useState } from "react";
import { Check, Star, Rocket } from "lucide-react";

export default function PricingPlans() {
  const [yearly, setYearly] = useState(false);

  // الأسعار
  const basicMonthly = 200;
  const basicYearly = 1400;
  const advancedMonthly = 300;
  const advancedYearly = 3600;

  return (
    <div
      className="min-h-screen bg-blue-50 flex flex-col items-center py-10 px-4"
      dir="rtl"
    >
      {/* العنوان */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        مهما كان نوع عملك، لدينا الخطة التي تناسبك
      </h1>

      {/* Toggle */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-3 bg-white shadow-md px-4 py-2 rounded-full">
          <span
            className={`text-sm font-medium ${
              !yearly ? "text-blue-600" : "text-gray-700"
            }`}
          >
            الباقات الشهرية
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={yearly}
              onChange={() => setYearly(!yearly)}
            />
            {/* Track */}
            <div className="w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-300"></div>
            {/* Thumb */}
            <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-7"></div>
          </label>
          <span
            className={`text-sm font-medium ${
              yearly ? "text-blue-600" : "text-gray-700"
            }`}
          >
            الباقات السنوية
          </span>
        </div>

        {yearly && (
          <span className="text-xs font-semibold text-pink-600 mt-2 animate-pulse">
            🎁 شهرين مجانا مع دومين مجاني
          </span>
        )}
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Basic Plan (يمين) */}
        <div className="bg-white shadow rounded-2xl p-6 text-right order-1 md:order-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-blue-900 w-8 h-8 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-blue-900">الأساسية</h2>
          </div>

          <p className="text-gray-600 mb-4">لضريبة القيمة</p>
          <p className="text-3xl font-bold mb-1">
            {yearly ? basicYearly : basicMonthly}
            <span className="text-lg font-normal"> / شهر</span>
          </p>
          <p className="text-sm text-gray-500 mb-6">
            جميع الأسعار بعملات محلية معتمدة
          </p>

          <p className="font-semibold text-xl mb-4">انطلق من خلال:</p>
          <ul className="space-y-3 text-gray-700">
            {[
              "عدد لا محدود من المنتجات والطلبات",
              "عدد عملاء لا محدود",
              "نظام التسويق بالعمولة والكوبونات التسويقية",
              "الربط مع شركات الشحن بسهولة",
              "Custom CSS/Js",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="bg-black rounded-full p-1 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Advanced Plan (الأفضل قيمة على اليسار) */}
        <div className="bg-white shadow rounded-2xl overflow-hidden text-right order-2 md:order-2">
          {/* Blue Ribbon */}
          <div className="bg-blue-900 text-white text-center py-2 text-sm font-semibold">
            الأفضل قيمة
          </div>

          {/* Card Body */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-blue-900 fill-blue-900" />
              <h2 className="text-xl font-bold text-blue-900">المتقدمة</h2>
            </div>

            <p className="text-blue-950 mb-4">
              جميع المميزات التي يحتاجها متجرك للنمو
            </p>
            <p className="text-3xl font-bold mb-1">
              {yearly ? advancedYearly : advancedMonthly}
              <span className="text-lg font-normal"> / شهر</span>
            </p>
            <p className="text-sm text-gray-500 mb-6">
              جميع الأسعار بعملات محلية معتمدة
            </p>

            <p className="font-bold text-xl mb-4">
              جميع مميزات الأساسية بالإضافة إلى:
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "مسؤول متابعة نمو المتجر",
                "فريق عمل غير محدود لإدارة المتجر",
                "تقارير وإحصائيات متقدمة عن المتجر",
                "محفظة العميل لإضافة رصيد للعملاء",
                "نظام الولاء (نقاط المكافآت)",
                "إدارة حملات الرسائل عبر اللوحة",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="bg-black rounded-full p-1 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
