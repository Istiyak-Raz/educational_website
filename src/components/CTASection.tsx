import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            আজই শুরু করুন আপনার
            <span className="block text-red-700">সফল ভবিষ্যতের যাত্রা</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            ২০ বছরের অভিজ্ঞতা এবং হাজারো সফল শিক্ষার্থীর আস্থার প্রতিষ্ঠান উদ্ভাসে 
            যোগ দিন এবং নিশ্চিত করুন আপনার সাফল্য।
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-red-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-xl flex items-center space-x-2">
              <span>এখনই ভর্তি হন</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <a
              href="tel:09666775566"
              className="bg-white text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-xl flex items-center space-x-2"
            >
              <Phone className="h-5 w-5 text-red-600" />
              <span>০৯৬৬৬৭৭৫৫৬০</span>
            </a>
          </div>

          <div className="mt-8 text-gray-700">
            <p className="text-sm">
              কোভিড-১৯ এর সময়েও আমাদের শিক্ষা কার্যক্রম অব্যাহত রয়েছে 
              অনলাইনের মাধ্যমে একই মানের সাথে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;