import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "شغل جميل",
    name: "وليد",
    role: "متجر",
  },
  {
    id: 2,
    text: "خدمات الله يبارك",
    name: "أحمد علي",
    role: "متجر",
  },
  {
    id: 3,
    text: "وعد",
    name: "دودي",
    role: "متجر",
  },
  {
    id: 4,
    text: "ساعدوني في شغلي والله",
    name: "وليد",
    role: "متجر",
  },
  {
    id: 5,
    text: "ودمتم بخير.",
    name: "عبدالله محمد",
    role: "عبايات",
  },
  {
    id: 6,
    text: "افضل منصة",
    name: "محمد خليل",
    role: "متجر",
  },
];

const ReviewCard = ({ text, name, role }) => {
  return (
    <div className="border rounded-2xl shadow-sm p-6 flex flex-col justify-between bg-white">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-800 text-lg mb-6">{text}</p>

      {/* Name + Role */}
      <div>
        <h3 className="font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
}
