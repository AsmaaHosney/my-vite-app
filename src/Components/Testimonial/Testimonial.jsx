import { Palette, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import ordersImg from "../../assets/images/4.png";

export default function AllInOneSection() {
  return (
    <section className="relative py-16 px-6 flex justify-center bg-slate-100 overflow-hidden font-avenir">
      {/* خطوط جانبية */}
      <div className="absolute top-0 left-0 w-[2px] h-full bg-blue-300" />
      <div className="absolute top-0 right-0 w-[2px] h-full bg-[#d6e2ff]" />

      <div className="max-w-7xl w-full text-center relative z-10">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-black text-gray-900 mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          كل الي تحتاجه في مكان واحد
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 font-normal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          كل الأدوات الي تحتاجها لتوسيع تجارتك وتنجح في مكان واحد.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Marketing Tools */}
          <motion.div
            className="relative bg-gradient-to-b from-[#ffffff] to-[#f7f9ff] rounded-2xl shadow-lg p-6 border border-indigo-100 flex flex-col text-right overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 30px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.4 }}
          >
            {/* شريط علوي وجانبي */}
            <div className="absolute top-0 left-0 w-full h-6 bg-blue-200 rounded-t-2xl"></div>
            <div className="absolute top-0 left-0 h-2/3 w-6 bg-blue-200 rounded-l-2xl"></div>

            <h3 className="text-lg font-bold text-indigo-900 mb-6 mt-8">
              أدوات التسويق
            </h3>
            <ul className="space-y-4">
              {[
                { name: "كوبونات تخفيض", active: true },
                { name: "برنامج ولاء", active: true },
                { name: "الحملات التسويقية", active: true },
                { name: "استهداف السلات المتروكة", active: false },
                { name: "صفحات الهبوط", active: true },
                { name: "عروض خاصة", active: true },
              ].map((tool, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between group"
                >
                  <span className="text-gray-700 pl-3 group-hover:text-indigo-700 transition font-light">
                    {tool.name}
                  </span>
                  <span
                    className={`w-10 h-5 rounded-full relative transition ${
                      tool.active ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute top-0 w-5 h-5 bg-white rounded-full shadow transition-all ${
                        tool.active ? "right-0" : "left-0"
                      }`}
                    />
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6  font-black">تسويق متكامل</p>
            <p className="text-gray-500 text-sm mt-2 font-light">
              حملات SMS وواتساب، كوبونات تخفيض، متابعة السلات المتروكة وخطط لزيادة المبيعات.
            </p>
          </motion.div>

          {/* Products & Orders */}
          <motion.div
  className="relative bg-gradient-to-b from-[#ffffff] to-[#f7f9ff] 
  rounded-2xl shadow-lg p-6 border border-indigo-100 
  flex flex-col items-end justify-between text-right 
  overflow-hidden cursor-pointer"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05, boxShadow: "0px 8px 30px rgba(0,0,0,0.15)" }}
  transition={{ duration: 0.6 }}
>
  <div className="absolute top-0 left-0 w-full h-6 bg-blue-200 rounded-t-2xl"></div>
  <div className="absolute top-0 left-0 h-2/3 w-6 bg-blue-200 rounded-l-2xl"></div>

  <motion.img
    src={ordersImg}
    alt="Products and Orders"
    className="rounded-lg shadow-md mb-6 mt-8 h-72 w-full object-cover"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  />

  <h3 className="text-lg font-black text-indigo-900 mb-2">
    إدارة المنتجات والطلبات
  </h3>
  <p className="text-gray-600 text-sm font-light">
    أضف منتجاتك وتابع طلبات عملائك بخطوات بسيطة وواضحة.
  </p>
</motion.div>


          {/* Store Identity */}
          <motion.div
            className="relative bg-gradient-to-b from-[#ffffff] to-[#f7f9ff] rounded-2xl shadow-lg p-6 border border-indigo-100 flex flex-col items-end justify-between text-right  overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 30px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 left-0 w-full h-6 bg-blue-200 rounded-t-2xl"></div>
            <div className="absolute top-0 left-0 h-2/3 w-6 bg-blue-200 rounded-l-2xl"></div>

            <h3 className="text-lg font-bold text-indigo-900 mb-4 w-full flex items-center justify-end mt-8">
              هوية المتجر
              <Palette className="w-5 h-5 text-indigo-600 ml-2" />
            </h3>

            <div className="bg-gray-50 border rounded-lg w-full p-4 space-y-3 hover:border-indigo-200 transition">
              {["الشعار", "صور الغلاف", "الألوان"].map((item, i) => (
                <p
                  key={i}
                  className="flex justify-between text-gray-700 hover:text-indigo-700 transition font-light"
                >
                  <span>{item}</span> <ChevronLeft className="w-4 h-4" />
                </p>
              ))}
            </div>
            <p className="mt-6 font-black text-indigo-900 text-1xl ">
              ابن متجرك خلال دقائق
            </p>
            <p className="text-gray-500 text-sm mt-2 font-light">
              ابن متجرك في دقائق وابدأ بعرض منتجاتك فوراً.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
