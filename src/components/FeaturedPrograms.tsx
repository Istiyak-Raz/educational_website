import React from 'react';
import { Users, Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedPrograms = () => {
  const programs = [
    {
      id: 1,
      title: 'মেডিকেল + ভার্সিটি ম্যাথ ভর্তি প্রোগ্রাম',
      year: '২০২৫',
      type: 'Combo',
      duration: '১২ মাস',
      students: '৫০০০+',
      features: [
        'লাইভ ম্যারাথন ক্লাস',
        'প্রশ্ন ব্যাংক',
        'মানসম্পন্ন উপকরণ',
        '২৪/৭ প্রশ্নোত্তর'
      ],
      rating: 4.9,
      image: 'https://images.pexels.com/photos/5427673/pexels-photo-5427673.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'ইঞ্জিনিয়ারিং + বায়োলজি ভর্তি',
      year: '২০২৫',
      type: 'Online/Offline',
      duration: '১০ মাস',
      students: '৩০০০+',
      features: [
        'সাপ্তাহিক পরীক্ষা',
        'বিশেষজ্ঞ শিক্ষক',
        'সমাধান ভিডিও',
        'পার্সোনাল কাউন্সেলিং'
      ],
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'এইচএসসি একাডেমিক প্রোগ্রাম',
      year: '২০২৫',
      type: 'Offline',
      duration: '২ বছর',
      students: '৮০০০+',
      features: [
        'সম্পূর্ণ সিলেবাস কভার',
        'নিয়মিত পরীক্ষা',
        'রেজাল্ট এনালাইসিস',
        'অভিভাবক মিটিং'
      ],
      rating: 4.9,
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            জনপ্রিয় <span className="text-red-600">প্রোগ্রামসমূহ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            আপনার লক্ষ্য অনুযায়ী বেছে নিন উপযুক্ত প্রোগ্রাম
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    {program.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {program.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {program.title}
                </h3>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{program.students}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{program.rating}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105">
                    ভর্তি হন
                  </button>
                  <Link
                    to="/programs"
                    className="flex-1 border-2 border-red-500 text-red-500 py-3 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-all duration-200 text-center"
                  >
                    বিস্তারিত
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/programs"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <span>সকল প্রোগ্রাম দেখুন</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;