import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-400 via-red-500 to-red-600 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              সময়োপযোগী
              <span className="block text-yellow-200">প্রোগ্রামসমূহ</span>
            </h1>
            <p className="text-xl lg:text-2xl text-yellow-100 leading-relaxed">
              বাংলাদেশের ১নং শিক্ষা প্রতিষ্ঠান থেকে নিশ্চিত করুন আপনার সাফল্য
            </p>
            <ul className="space-y-2 text-lg">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span>অভিজ্ঞ শিক্ষকমণ্ডলী</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span>অনলাইন ও অফলাইন ক্লাস</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span>২৪/৭ প্রশ্নোত্তর সহায়তা</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <span>বিস্তারিত দেখুন</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-200 flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>ভিডিও দেখুন</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">বিনামূল্যে যোগ দিন</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="আপনার নাম"
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="মোবাইল নম্বর"
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  />
                  <select className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-700">
                    <option>প্রোগ্রাম নির্বাচন করুন</option>
                    <option>মেডিকেল ভর্তি প্রস্তুতি</option>
                    <option>ইঞ্জিনিয়ারিং ভর্তি</option>
                    <option>বিশ্ববিদ্যালয় ভর্তি</option>
                    <option>এইচএসসি একাডেমিক</option>
                  </select>
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105">
                    নিবন্ধন করুন
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white rounded-full opacity-20 animate-bounce"></div>
    </section>
  );
};

export default HeroSection;