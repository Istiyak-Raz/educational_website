import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'ঠিকানা',
      details: '৭৮, গ্রিন রোড (৩য় তলা), ফার্মগেট, তেজগাঁও, ঢাকা-১২০৫'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'হটলাইন',
      details: '০৯৬৬৬৭৭৫৫৬৬'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'ইমেইল',
      details: 'info@udvash.com'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'অফিস সময়',
      details: 'সকাল ৮টা - রাত ১০টা (সপ্তাহের সব দিন)'
    }
  ];

  const programs = [
    'মেডিকেল ভর্তি প্রস্তুতি',
    'ইঞ্জিনিয়ারিং ভর্তি প্রস্তুতি',
    'বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি',
    'এইচএসসি একাডেমিক প্রোগ্রাম',
    'ভোকেশনাল ভর্তি প্রস্তুতি',
    'অন্যান্য'
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            আমাদের সাথে <span className="text-red-600">যোগাযোগ</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            যেকোনো প্রশ্ন বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">যোগাযোগের তথ্য</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                    <div className="text-red-500 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">দ্রুত যোগাযোগ</h3>
              <div className="space-y-4">
                <a
                  href="tel:09666775566"
                  className="flex items-center space-x-3 bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <span>সরাসরি কল করুন</span>
                </a>
                <a
                  href="mailto:info@udvash.com"
                  className="flex items-center space-x-3 bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                  <span>ইমেইল পাঠান</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-colors duration-200"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>লাইভ চ্যাট</span>
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">জরুরি যোগাযোগ</h4>
              <p className="text-yellow-700 text-sm">
                জরুরি কোনো সমস্যার জন্য ২৪ ঘন্টা হটলাইনে যোগাযোগ করুন
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">আমাদের কাছে বার্তা পাঠান</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    আপনার নাম *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    মোবাইল নম্বর *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                    placeholder="০১xxxxxxxxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  ইমেইল ঠিকানা
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                  আগ্রহের প্রোগ্রাম *
                </label>
                <select
                  id="program"
                  name="program"
                  required
                  value={formData.program}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">প্রোগ্রাম নির্বাচন করুন</option>
                  {programs.map((program, index) => (
                    <option key={index} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  আপনার বার্তা
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="আপনার প্রশ্ন বা মন্তব্য লিখুন..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>বার্তা পাঠান</span>
                <Send className="h-5 w-5" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                আমরা ২৪ ঘন্টার মধ্যে আপনার বার্তার উত্তর দেওয়ার চেষ্টা করি
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            সচরাচর জিজ্ঞাসিত <span className="text-red-600">প্রশ্নসমূহ</span>
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">ভর্তির জন্য কী কী প্রয়োজন?</h3>
                  <p className="text-gray-600 text-sm">শিক্ষাগত যোগ্যতার সার্টিফিকেট, ফটোকপি এবং রেজিস্ট্রেশন ফি।</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">অনলাইন ক্লাসের মান কেমন?</h3>
                  <p className="text-gray-600 text-sm">অনলাইন ক্লাসের মান অফলাইনের মতোই। লাইভ ইন্টারঅ্যাকশন এবং রেকর্ডেড ক্লাস সুবিধা।</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">ফি কিস্তিতে দেওয়া যায়?</h3>
                  <p className="text-gray-600 text-sm">হ্যাঁ, আমাদের নমনীয় পেমেন্ট সিস্টেম রয়েছে।</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">মিস করা ক্লাস রিকভার করা যায়?</h3>
                  <p className="text-gray-600 text-sm">হ্যাঁ, সকল ক্লাস রেকর্ড করা হয় এবং পরে দেখার সুবিধা রয়েছে।</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">শিক্ষকদের যোগ্যতা কেমন?</h3>
                  <p className="text-gray-600 text-sm">আমাদের সকল শিক্ষক বিশ্ববিদ্যালয়ের গ্র্যাজুয়েট এবং অভিজ্ঞ।</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">সাফল্যের হার কত?</h3>
                  <p className="text-gray-600 text-sm">আমাদের শিক্ষার্থীদের সাফল্যের হার ৯৫% এর উপরে।</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;