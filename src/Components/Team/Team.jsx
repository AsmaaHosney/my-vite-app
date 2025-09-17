import { motion } from "framer-motion";
import { BarChart3, Package, Users } from "lucide-react";
import dashboardImg from "../../assets/images/tt.png";

export default function AnalyticsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 font-avenir">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-center">
        {/* النصوص */}
        <div className="space-y-6 text-right">
        <span className="inline-flex items-center gap-2 bg-indigo-200 text-blue-900 px-6 py-2 rounded-full text-lg font-black">
 
  تحليلات وتقارير
   <BarChart3 className="w-4 h-4" />
</span>


          <h2 className="text-3xl md:text-4xl font-black text-blue-900 leading-snug">
            تحليلات قوية، قرارات أذكى
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed  font-light">
            كل الأرقام اللي تهمك في لوحة تحكم وحدة. تقارير تفصيلية تساعدك تفهم
            أدائك وتطور شغلك بثقة.
          </p>

          {/* المميزات */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {/* تقارير المبيعات */}
            <div className="flex flex-col space-y-2">
              <BarChart3 className="w-6 h-6 text-indigo-800 ml-auto" />
              <h3 className="font-black  text-indigo-900 text-lg">
                تقارير أداء المبيعات
              </h3>
              <p className="text-gray-600 text-sm font-light">
                راقب مبيعاتك لحظة بلحظة، وحسن أدائك لتحقيق نمو أسرع.
              </p>
            </div>

            {/* تحليلات المخزون */}
            <div className="flex flex-col space-y-2">
              <Package className="w-6 h-6 text-indigo-800 ml-auto" />
              <h3 className="font-black text-indigo-900 text-lg">
                تحليلات المخزون
              </h3>
              <p className="text-gray-600 text-sm font-light">
                تابع حركة مخزونك بدقة وتوقع الطلب قبل ما ينقص المخزون.
              </p>
            </div>

            {/* سلوك العملاء */}
            <div className="flex flex-col space-y-2">
              <Users className="w-6 h-6 text-indigo-800 ml-auto" />
              <h3 className="font-black text-indigo-900 text-lg">
                فهم سلوك العملاء
              </h3>
              <p className="text-gray-600 text-sm font-light">
                تعرف على المنتجات الأكثر طلبًا وقسم عملائك حسب اهتماماتهم.
              </p>
            </div>
          </div>
        </div>

        {/* صورة التحليلات */}
        <div className="flex justify-center relative">
          <motion.img
            src={dashboardImg}
            alt="Dashboard Analytics"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
}
