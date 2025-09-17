import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // 👈 استيراد Link
import logo from "../../assets/images/Wasl.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("ar");

  const menuItems = {
    ar: [
      { to: "/team", label: "المميزات" },
      { to: "/page6", label: "الأسعار" },
      { to: "/testimonial", label: "لماذا وصل؟" },
    ],
    en: [
      { to: "/team", label: "Features" },
      { to: "/page6", label: "Pricing" },
      { to: "/testimonial", label: "Why Wasl?" },
    ],
  };

  const actions = {
    ar: { login: "تسجيل الدخول", tryNow: "جرّب الآن مجانا", toggleLang: "🌐 English" },
    en: { login: "Login", tryNow: "Try for Free", toggleLang: "🌐 عربي" },
  };

  return (
    <nav dir={lang === "ar" ? "rtl" : "ltr"} className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-8 w-auto" src={logo} alt="Wasl" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems[lang].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-gray-700 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="text-gray-700"
            >
              {actions[lang].toggleLang}
            </button>
            <a
              href="https://dashboard.waslplatform.com/auth/login"
              className="px-4 py-2 border border-blue-700 rounded-lg text-blue-900 hover:bg-blue-50"
            >
              {actions[lang].login}
            </a>
            <a
              href="https://dashboard.waslplatform.com/auth/login"
              className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
            >
              {actions[lang].tryNow}
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden bg-white shadow-md px-4 py-4 space-y-4 ${
            lang === "ar" ? "text-right" : "text-left"
          }`}
        >
          {menuItems[lang].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)} // يقفل المنيو بعد الضغط
              className="block text-gray-700 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="w-full text-gray-700"
          >
            {actions[lang].toggleLang}
          </button>
          <a
            href="https://dashboard.waslplatform.com/auth/login"
            className="block w-full px-4 py-2 border border-blue-950 rounded-lg text-blue-950 text-center hover:bg-blue-50"
          >
            {actions[lang].login}
          </a>
          <a
            href="https://dashboard.waslplatform.com/auth/login"
            className="block w-full px-4 py-2 bg-blue-950 text-white rounded-lg text-center hover:bg-blue-800"
          >
            {actions[lang].tryNow}
          </a>
        </div>
      )}
    </nav>
  );
}
