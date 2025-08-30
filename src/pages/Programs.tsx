import React, { useState } from 'react';
import { Search, Filter, Clock, Users, Star, Calendar } from 'lucide-react';

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const programs = [
    {
      id: 1,
      title: 'মেডিকেল + ভার্সিটি ম্যাথ ভর্তি প্রোগ্রাম ২০২৫',
      category: 'medical',
      type: 'Combo',
      duration: '১২ মাস',
      students: '৫০০০+',
      rating: 4.9,
      price: '৩৫,০০০ টাকা',
      features: [
        'লাইভ ম্যারাথন ক্লাস',
        '৫০০+ মডেল টেস্ট',
        'প্রশ্ন ব্যাংক অ্যাক্সেস',
        '২৪/৭ প্রশ্নোত্তর সাপোর্ট',
        'SMS রেজাল্ট সিস্টেম',
        'বিস্তারিত এনালাইসিস রিপোর্ট'
      ],
      image: 'https://images.pexels.com/photos/5427673/pexels-photo-5427673.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 2,
      title: 'ইঞ্জিনিয়ারিং + বায়োলজি ভর্তি প্রোগ্রাম ২০২৫',
      category: 'engineering',
      type: 'Online/Offline',
      duration: '১০ মাস',
      students: '৩০০০+',
      rating: 4.8,
      price: '৩০,০০০ টাকা',
      features: [
        'সাপ্তাহিক মডেল টেস্ট',
        'বিশেষজ্ঞ শিক্ষকমণ্ডলী',
        'সমাধান ভিডিও ক্লাস',
        'পার্সোনাল কাউন্সেলিং',
        'ক্যারিয়ার গাইডেন্স',
        'ইন্ডাস্ট্রি এক্সপার্ট সেশন'
      ],
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 3,
      title: 'এইচএসসি একাডেমিক প্রোগ্রাম ২০২৫',
      category: 'academic',
      type: 'Offline',
      duration: '২ বছর',
      students: '৮০০০+',
      rating: 4.9,
      price: '২৫,০০০ টাকা',
      features: [
        'সম্পূর্ণ সিলেবাস কভারেজ',
        'নিয়মিত অধ্যায়ভিত্তিক পরীক্ষা',
        'রেজাল্ট এনালাইসিস',
        'অভিভাবক মিটিং',
        'ক্লাস নোটস প্রদান',
        'হোম অ্যাসাইনমেন্ট'
      ],
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 4,
      title: 'ভার্সিটি A ও গুচ্ছ ভর্তি প্রোগ্রাম ২০২৫',
      category: 'university',
      type: 'Online',
      duration: '৮ মাস',
      students: '৪০০০+',
      rating: 4.7,
      price: '২৮,০০০ টাকা',
      features: [
        'লাইভ ইন্টারঅ্যাক্টিভ ক্লাস',
        'রিয়েল টাইম প্রশ্নোত্তর',
        'গুচ্ছ স্পেশাল প্রিপারেশন',
        'ইউনিভার্সিটি ওয়াইজ গাইড',
        'সাবজেক্ট চয়েস কাউন্সেলিং',
        'ক্যারিয়ার প্ল্যানিং'
      ],
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 5,
      title: 'বিনামূল্যে এসএসসি মডেল টেস্ট ২০২৫',
      category: 'free',
      type: 'Free',
      duration: '৩ মাস',
      students: '১০,০০০+',
      rating: 4.6,
      price: 'বিনামূল্যে',
      features: [
        'সম্পূর্ণ বিনামূল্যে পরীক্ষা',
        'বৃত্তির সুযোগ',
        'মেরিট লিস্ট প্রকাশ',
        'পুরস্কার বিতরণী',
        'ভবিষ্যৎ গাইডেন্স',
        'ক্যারিয়ার কাউন্সেলিং'
      ],
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 6,
      title: 'ভোকেশনাল ভর্তি প্রস্তুতি ২০২৫',
      category: 'vocational',
      type: 'Combo',
      duration: '৬ মাস',
      students: '২০০০+',
      rating: 4.5,
      price: '২০,০০০ টাকা',
      features: [
        'ভোকেশনাল স্পেশাল ক্লাস',
        'ট্রেড ভিত্তিক প্রিপারেশন',
        'প্র্যাক্টিক্যাল গাইডেন্স',
        'ইন্ডাস্ট্রি এক্সপোজার',
        'জব প্লেসমেন্ট সাপোর্ট',
        'স্কিল ডেভেলপমেন্ট'
      ],
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  const categories = [
    { id: 'all', name: 'সব প্রোগ্রাম' },
    { id: 'medical', name: 'মেডিকেল' },
    { id: 'engineering', name: 'ইঞ্জিনিয়ারিং' },
    { id: 'university', name: 'বিশ্ববিদ্যালয়' },
    { id: 'academic', name: 'একাডেমিক' },
    { id: 'free', name: 'বিনামূল্যে' },
    { id: 'vocational', name: 'ভোকেশনাল' }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            আমাদের <span className="text-red-600">প্রোগ্রামসমূহ</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            আপনার স্বপ্নের ক্যারিয়ার গড়তে বেছে নিন উপযুক্ত প্রোগ্রাম
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="প্রোগ্রাম খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    {program.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {program.price}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {program.title}
                </h3>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
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
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-medium text-gray-700">{program.rating}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {program.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105">
                    ভর্তি হন
                  </button>
                  <button className="flex-1 border-2 border-red-500 text-red-500 py-3 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-all duration-200">
                    বিস্তারিত দেখুন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">কোনো প্রোগ্রাম পাওয়া যায়নি</h3>
            <p className="text-gray-500">অন্য কিওয়ার্ড দিয়ে খোঁজ করুন বা ফিল্টার পরিবর্তন করুন</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;