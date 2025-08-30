import React from 'react';
import { 
  Users, 
  BookOpen, 
  Award, 
  Clock, 
  MessageCircle, 
  Smartphone,
  BarChart,
  Globe
} from 'lucide-react';

const USPSection = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'অনলাইন/অফলাইন ক্লাস',
      description: 'যেকোনো জায়গা থেকে মানসম্পন্ন শিক্ষা'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'অভিজ্ঞ শিক্ষকমণ্ডলী',
      description: 'দেশের সেরা শিক্ষকদের নিয়ে গঠিত টিম'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'মানসম্পন্ন উপকরণ',
      description: 'আপডেটেড বই এবং নোট'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'কনসেপ্ট বেসড ক্লাস',
      description: 'মৌলিক ধারণা থেকে শুরু'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'অনন্য পরীক্ষা পদ্ধতি',
      description: 'নিয়মিত মূল্যায়ন ও ফিডব্যাক'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: '২৪/৭ প্রশ্নোত্তর',
      description: 'যেকোনো সময় সমাধান পেয়ে যান'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'SMS ফলাফল',
      description: 'তাৎক্ষণিক ফলাফল প্রাপ্তি'
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: 'বিশ্লেষণ রিপোর্ট',
      description: 'বিস্তারিত পারফরম্যান্স রিপোর্ট'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            কেন <span className="text-red-600">উদ্ভাস</span> বেছে নেবেন?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            আমাদের অনন্য বৈশিষ্ট্যগুলি যা আপনার সাফল্যকে নিশ্চিত করে
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-500"
            >
              <div className="text-red-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;