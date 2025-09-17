import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaTiktok, FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGift, FiStar, FiVolume2, FiShoppingCart, FiTarget } from "react-icons/fi";

export default function MarketingSection() {
  const [coupons, setCoupons] = useState(true);
  const [loyalty, setLoyalty] = useState(false);
  const [campaigns, setCampaigns] = useState(false);
  const [retargeting, setRetargeting] = useState(true);

  return (
    <section className="bg-white py-16 overflow-hidden font-avenir">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 items-center">
        {/* Left: Animated UI Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative bg-gray-50 rounded-2xl p-10 shadow-lg"
        >
          {/* Loyalty Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-6 left-6 bg-white rounded-xl shadow-md px-5 py-3 flex items-center gap-2 text-blue-900 font-medium"
          >
            ⭐ <span className="text-sm">نظام ولاء للعملاء</span>
          </motion.div>

          {/* Toggle Menu */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-md px-6 py-5 w-72 mt-20"
          >
            <h4 className="font-semibold mb-4 text-gray-500">أدوات التسويق</h4>
            {[
              ["كوبونات تخفيض", coupons, setCoupons, <FiGift key="gift" />],
              ["برنامج ولاء", loyalty, setLoyalty, <FiStar key="star" />],
              ["الحملات التسويقية", campaigns, setCampaigns, <FiVolume2 key="vol" />],
              ["استهداف سلات متروكة", retargeting, setRetargeting, <FiShoppingCart key="cart" />],
            ].map(([label, state, setter, icon], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center justify-between mb-3 text-sm"
              >
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-600 text-lg">{icon}</span>
                  {label}
                </div>
                {/* Custom Toggle */}
                <div
                  onClick={() => setter(!state)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                    state ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="bg-white w-4 h-4 rounded-full shadow"
                    style={{ marginLeft: state ? "20px" : "0px" }}
                  />
                </div>
              </motion.div>
            ))}
            <p className="text-blue-600 text-xs mt-2">🎁 عروض خاصة</p>
          </motion.div>

          {/* Floating Offers */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-6 right-1 bg-white rounded-2xl shadow-lg p-2 w-44 h-30"
          >
            <div className="flex items-center justify-between mb-1">
              <p className="text-red-500 font-bold text-xs">عروض وخصومات</p>
              <p className="text-gray-500 font-semibold text-[10px]">عروض خاصة</p>
            </div>
            <p className="text-gray-500 text-[10px] mb-1">تسوق أحدث منتجات مميزة</p>
            <div className="grid grid-cols-2 gap-1">
              <div className="bg-gray-50 rounded-xl border p-1 text-center shadow-sm">
                <p className="text-[10px] text-gray-700 mb-0.5">أشترِ قطعتين من المنتج بـ</p>
                <p className="text-red-600 font-bold text-xs">199 د.ل</p>
                <p className="text-[8px] text-gray-500 mt-0.5">خصم يصل إلى (20%)</p>
              </div>
              <div className="bg-gray-50 rounded-xl border p-1 text-center shadow-sm">
                <p className="text-[10px] text-gray-700 mb-0.5">أشترِ 3 قطع من المنتج بـ</p>
                <p className="text-red-600 font-bold text-xs">272 د.ل</p>
                <p className="text-[8px] text-gray-500 mt-0.5">خصم يصل إلى (20%)</p>
              </div>
            </div>
          </motion.div>

          {/* Social Media Icons */}
          <div className="absolute top-6 right-6 flex flex-col gap-6 text-3xl">
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <FaInstagram className="text-pink-500" />
            </motion.div>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.2 }}>
              <FaTiktok className="text-black" />
            </motion.div>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.4 }}>
              <FaWhatsapp className="text-green-500" />
            </motion.div>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.3 }}>
              <FaSnapchatGhost className="text-yellow-400" />
            </motion.div>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
              <FaXTwitter className="text-black" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-right"
        >
          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-6 text-base font-semibold shadow">
              أدوات التسويق
              <FiTarget className="w-5 h-5" />
            </button>
          </div>

          <h2 className="text-3xl font-extrabold text-blue-900 mb-4 leading-relaxed">
            حلول تسويقيّة في مكان واحد
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed text-lg font-medium">
            استهدف المزيد من العملاء بحلول تسويقية مخصصة.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <div className="flex items-center gap-2 mb-2 justify-end">
                <h3 className="font-semibold text-blue-900 text-lg">كوبونات خصم.</h3>
                <FiGift className="text-blue-700 w-5 h-5" />
              </div>
              <p className="text-gray-600 text-sm font-medium">قدّم خصومات مميزة تشجع عملاءك على إتمام الشراء.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <div className="flex items-center gap-2 mb-2 justify-end">
                <h3 className="font-bold text-blue-900 text-lg">برنامج ولاء.</h3>
                <FiStar className="text-blue-700 w-5 h-5" />
              </div>
              <p className="text-gray-600 text-sm font-medium">كافئ عملاءك المخلصين لزيادة تكرار الشراء.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              <div className="flex items-center gap-2 mb-2 justify-end">
                <h3 className="font-bold text-blue-900 text-lg">الحملات التسويقية.</h3>
                <FiVolume2 className="text-blue-700 w-5 h-5" />
              </div>
              <p className="text-gray-600 text-sm font-medium">أطلق حملات SMS وإيميل وواتساب لزيادة تواصلك ومبيعاتك.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              <div className="flex items-center gap-2 mb-2 justify-end">
                <h3 className="font-bold text-blue-900 text-lg">عروض خاصة.</h3>
                <FiShoppingCart className="text-blue-700 w-5 h-5" />
              </div>
              <p className="text-gray-600 text-sm font-medium">اعرض خصومات حصرية تجذب الانتباه وتزيد المبيعات.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
