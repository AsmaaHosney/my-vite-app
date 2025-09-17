import { Instagram, Twitter, MessageCircle } from "lucide-react";
import logo from "../../assets/images/Wasl.png";

export default function Footer() {
  return (
    <footer className="bg-[#001E62] text-white px-8 py-10">
      <div 
  className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-right mr-20" 
  dir="rtl"
>
  {/* المنتج */}
  <div>
    <h3 className="font-semibold mb-3">المنتج</h3>
    <ul className="space-y-2 text-sm text-gray-200">
      <li><a href="#">الباقات</a></li>
      <li><a href="#">المميزات</a></li>
    </ul>
  </div>

  {/* الحلول */}
  <div>
    <h3 className="font-semibold mb-3">الحلول</h3>
    <ul className="space-y-2 text-sm text-gray-200">
      <li><a href="#">تطبيق المتجر</a></li>
      <li><a href="#">نقاط البيع</a></li>
    </ul>
  </div>

  {/* لماذا متجر؟ */}
  <div>
    <h3 className="font-semibold mb-3">لماذا متجر؟</h3>
    <ul className="space-y-2 text-sm text-gray-200">
      <li><a href="#">لماذا متجر؟</a></li>
      <li><a href="#">تقرير حالة المنصة</a></li>
      <li><a href="#">سجل التغيير</a></li>
    </ul>
  </div>

  {/* المساعدة */}
  <div>
    <h3 className="font-semibold mb-3">المساعدة</h3>
    <ul className="space-y-2 text-sm text-gray-200">
      <li><a href="#">مركز المساعدة</a></li>
      <li><a href="#">اتصل بنا</a></li>
    </ul>
  </div>
</div>

        
      {/* Social icons left + Logo right */}
      <div className="flex items-center justify-between mt-8 ml-20">
        {/* Social icons */}
        <div className="flex items-center space-x-6">
          <a href="#" aria-label="Instagram">
            <Instagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
          </a>
          <a href="#" aria-label="Twitter / X">
            <Twitter className="w-6 h-6 hover:text-blue-500 transition-colors" />
          </a>
          <a href="#" aria-label="WhatsApp">
            <MessageCircle className="w-6 h-6 hover:text-green-500 transition-colors" />
          </a>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 mr-20">
          <img
            className="h-8 w-auto filter brightness-0 invert" // makes logo white
            src={logo}
            alt="Wasl"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-6 pt-6"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 space-y-4 md:space-y-0">
    <div className="flex flex-col items-start space-y-2">
  <div className="flex items-center space-x-2">
    <span>🌐</span>
    <a href="#" className="hover:underline">English</a>
  </div>
  
  <p>الرقم الضريبي: 300309168700003 | السجل التجاري: 2176</p>
</div>

       
        
        

        <div className="flex flex-col text-center md:text-left">
          <a href="#" className="hover:underline">الشروط والأحكام سياسة الخصوصية</a>
          <span>جميع الحقوق محفوظة وصـل</span>
        </div>
      </div>
    </footer>
  );
}
