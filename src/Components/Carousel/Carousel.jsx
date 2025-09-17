import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, DollarSign, Users } from "lucide-react";

// استيراد الصور من مجلد assets
import heroMan from "../../assets/images/1.png";
import storeIcon from "../../assets/images/Vector.png";
import productImg from "../../assets/images/shoes.png";

const HeroSection = () => {
  return (
    <section className="relative bg-[#F9FBFF] min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden font-avenir">
      {/* النصوص */}
      <div className="max-w-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-snug mt-24"
        >
          إدارة أبسط , نمو أسرع , حلول متكاملة
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-2 text-gray-600 text-sm md:text-base"
        >
          ...منصة واحدة تجمع كل أدواتك
        </motion.p>

        {/* أزرار */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <a
            href="https://dashboard.waslplatform.com/auth/login"
            className="bg-blue-900 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-800 hover:scale-105 transform transition duration-300"
          >
            جرب مجانا الآن
          </a>

          <p className="font-thin">عرض لميزة محدودة</p>
        </motion.div>
      </div>

      {/* صورة + العناصر */}
      <div className="relative mt-12 flex justify-center">
        {/* خلفية خضراء للصورة */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative flex items-center justify-center w-[420px] h-[420px] bg-blue-200 rounded-2xl shadow-lg"
        >
          {/* صورة البطل */}
          <motion.img
            src={heroMan}
            alt="hero"
            className="w-[280px] md:w-[350px] object-contain drop-shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* بطاقة منتج */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ scale: 1.08 }}
            className="absolute top-4 left-[-110px] bg-white shadow-lg rounded-xl p-4 text-right cursor-pointer hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-3">
              {/* النصوص */}
              <div>
                <p className="text-sm text-gray-700">حذاء</p>
                <p className="text-xs text-gray-500">رقم الصنف: BLK587</p>
                <p className="text-xs text-gray-500">الكمية: 30</p>
                <p className="text-sm font-bold text-blue-900 mt-1">
                  120 دينار
                </p>
              </div>

              {/* صورة المنتج بخلفية رمادي فاتح */}
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                <img
                  src={productImg}
                  alt="product"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* ألوان */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            whileHover={{ scale: 1.08 }}
            className="absolute top-6 right-[-130px] bg-white shadow-lg rounded-xl p-4 cursor-pointer hover:shadow-2xl transition"
          >
            <motion.div
              className="flex gap-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-5 h-5 bg-red-500 rounded-full"></div>
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              <div className="w-5 h-5 bg-green-500 rounded-full"></div>
              <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
              <div className="w-5 h-5 bg-red-300 rounded-full"></div>
              <div className="w-5 h-5 bg-purple-700 rounded-full"></div>
            </motion.div>
            <p className="text-xs text-gray-600 mt-2">#A735FF</p>
          </motion.div>

          {/* إحصائيات */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            whileHover={{ scale: 1.08 }}
            className="absolute bottom-6 left-[-120px] bg-white shadow-lg rounded-xl p-4 text-right cursor-pointer hover:shadow-2xl transition"
          >
            <p className="text-sm text-green-600 font-bold">+18.3%</p>
            <p className="text-lg font-extrabold text-blue-900">33,250.00</p>
          </motion.div>

          {/* أيقونة متجر */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            whileHover={{ rotate: 12, scale: 1.15 }}
            className="absolute bottom-10 right-[-100px] bg-white shadow-md rounded-xl p-5 cursor-pointer hover:shadow-xl transition"
          >
            <img src={storeIcon} alt="store" className="w-12 h-12" />
          </motion.div>
        </motion.div>
      </div>

   
{/* إحصائيات أسفل */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2, duration: 0.8 }}
  className="flex flex-wrap justify-center gap-10 mt-20 text-gray-700 text-lg font-bold"
>
  <motion.div 
    whileHover={{ scale: 1.15 }} 
    className="cursor-pointer flex items-center gap-2"
  >
   
    <span>ألف طلب</span> <ShoppingCart className="w-7 h-7 text-gray-700" />
  </motion.div>

  <motion.div 
    whileHover={{ scale: 1.15 }} 
    className="cursor-pointer flex items-center gap-2"
  >
   
    <span>مليون دينار مبيعات</span> <DollarSign className="w-7 h-7 text-gray-700" />
  </motion.div>

  <motion.div 
    whileHover={{ scale: 1.15 }} 
    className="cursor-pointer flex items-center gap-2"
  >
   
    <span>ألف عميل لمتاجرنا</span> <Users className="w-7 h-7 text-gray-700" />
  </motion.div>
</motion.div>

    </section>
  );
};

export default HeroSection;
