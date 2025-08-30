import React from 'react';
import { Star, Quote, GraduationCap, Award } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'রাহুল আহমেদ',
      achievement: 'বুয়েট ১ম স্থান অধিকারী',
      year: '২০২৪',
      quote: 'উদ্ভাসের শিক্ষকদের অসাধারণ গাইডেন্স এবং মানসম্পন্ন প্রশ্ন ব্যাংক আমাকে বুয়েটে টপ পজিশন পেতে সাহায্য করেছে। তাদের অনলাইন ক্লাসগুলো অত্যন্ত ইন্টারঅ্যাক্টিভ ছিল।',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      university: 'বুয়েট'
    },
    {
      id: 2,
      name: 'সারা খাতুন',
      achievement: 'ঢাকা বিশ্ববিদ্যালয় A ইউনিট',
      year: '২০২৪',
      quote: 'উদ্ভাস একটি চমৎকার শিক্ষা প্ল্যাটফর্ম। তারা প্রতিটি অধ্যায় শেষে পরীক্ষা নেয় যা আমার প্রস্তুতিকে আরো শক্তিশালী করেছে। তাদের মডেল টেস্ট প্রোগ্রাম অসাধারণ।',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      university: 'ঢাকা বিশ্ববিদ্যালয়'
    },
    {
      id: 3,
      name: 'মাহমুদ হাসান',
      achievement: 'মেডিকেল কলেজে ভর্তি',
      year: '২০২৩',
      quote: 'উদ্ভাসের বায়োলজি ও কেমিস্ট্রির ক্লাসগুলো ছিল অসাধারণ। শিক্ষকরা প্রতিটি টপিক খুব সহজভাবে বুঝিয়ে দিতেন। তাদের ২৪/৭ সাপোর্ট সিস্টেম দুর্দান্ত।',
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      university: 'ঢাকা মেডিকেল কলেজ'
    },
    {
      id: 4,
      name: 'ফাতিমা আক্তার',
      achievement: 'চুয়েট ইঞ্জিনিয়ারিং',
      year: '২০২৩',
      quote: 'উদ্ভাসের ম্যাথ এবং ফিজিক্স ক্লাসগুলো আমার দুর্বলতা কাটিয়ে উঠতে সাহায্য করেছে। নিয়মিত পরীক্ষা ও ফিডব্যাক আমার আত্মবিশ্বাস বাড়িয়েছে।',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      university: 'চুয়েট'
    },
    {
      id: 5,
      name: 'তানভীর রহমান',
      achievement: 'জাহাঙ্গীরনগর বিশ্ববিদ্যালয়',
      year: '২০২৪',
      quote: 'উদ্ভাসের কনসেপ্ট বেসড টিচিং মেথড আমার বিষয়গুলো গভীরভাবে বুঝতে সাহায্য করেছে। অনলাইন ক্লাসের মান অফলাইনের মতোই ভালো ছিল।',
      image: 'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      university: 'জাহাঙ্গীরনগর বিশ্ববিদ্যালয়'
    },
    {
      id: 6,
      name: 'নুসরাত জাহান',
      achievement: 'সিএমওএস মেডিকেল',
      year: '২০২৩',
      quote: 'উদ্ভাসের সাথে পড়াশোনা করে আমি আমার স্বপ্নের মেডিকেল কলেজে ভর্তি হতে পেরেছি। তাদের শিক্ষা পদ্ধতি এবং সাপোর্ট সিস্টেম চমৎকার।',
      image: 'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      university: 'সিএমওএস'
    }
  ];

  const achievements = [
    { title: 'বুয়েট টপ ১০', count: '২৮ জন' },
    { title: 'মেডিকেল পাস', count: '১,২৮৫ জন' },
    { title: 'ঢাবি A ইউনিট', count: '৫৬৭ জন' },
    { title: 'ইঞ্জিনিয়ারিং পাস', count: '২,৩৪৫ জন' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            সাফল্যের <span className="text-red-600">গল্পসমূহ</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            আমাদের শিক্ষার্থীদের অর্জনই আমাদের গর্ব
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">২০২৪ সালের অর্জন</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  {achievement.count}
                </div>
                <div className="text-red-100 font-medium">
                  {achievement.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8"
            >
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-yellow-400"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-red-600 font-medium">{testimonial.achievement}</p>
                  <p className="text-gray-500 text-sm">{testimonial.university} • {testimonial.year}</p>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <div className="relative">
                <Quote className="h-8 w-8 text-red-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed italic pl-6">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-yellow-600">
                  <Award className="h-5 w-5" />
                  <span className="font-medium text-sm">ভেরিফাইড সাফল্য</span>
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonial.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl p-12 mt-16 text-center">
          <GraduationCap className="h-16 w-16 text-gray-900 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            আপনিও হতে পারেন পরবর্তী সাফল্যের গল্প
          </h3>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            আজই যোগ দিন উদ্ভাসে এবং শুরু করুন আপনার সাফল্যের যাত্রা
          </p>
          <button className="bg-red-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-xl">
            এখনই নিবন্ধন করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;