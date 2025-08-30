import React from 'react';
import { TrendingUp, Users, MapPin, Trophy } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="h-12 w-12" />,
      number: '৫০,০০০+',
      label: 'সন্তুষ্ট শিক্ষার্থী',
      description: 'সফল ক্যারিয়ার গড়েছেন'
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      number: '১১০+',
      label: 'শাখা',
      description: 'সারাদেশে বিস্তৃত নেটওয়ার্ক'
    },
    {
      icon: <Trophy className="h-12 w-12" />,
      number: '৯৫%',
      label: 'সাফল্যের হার',
      description: 'ভর্তি পরীক্ষায় উত্তীর্ণ'
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      number: '২০+',
      label: 'বছরের অভিজ্ঞতা',
      description: 'শিক্ষা ক্ষেত্রে দীর্ঘ পথচলা'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            আমাদের <span className="text-yellow-300">অর্জনসমূহ</span>
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            সংখ্যায় আমাদের সাফল্যের গল্প
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <div className="text-yellow-300 flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-yellow-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-red-100 text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;