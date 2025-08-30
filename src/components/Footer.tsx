import React from 'react';
import { Phone, Mail, MapPin, Facebook, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-400">উদ্ভাস</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              বাংলাদেশের অগ্রণী শিক্ষা প্রতিষ্ঠান। গুণগত শিক্ষার মাধ্যমে শিক্ষার্থীদের 
              স্বপ্ন পূরণে সহায়তা করছি গত ২০ বছর ধরে।
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">দ্রুত লিংক</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">হোম</a></li>
              <li><a href="/programs" className="text-gray-300 hover:text-white transition-colors duration-200">প্রোগ্রামসমূহ</a></li>
              <li><a href="/branches" className="text-gray-300 hover:text-white transition-colors duration-200">শাখাসমূহ</a></li>
              <li><a href="/testimonials" className="text-gray-300 hover:text-white transition-colors duration-200">সাফল্যের গল্প</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">যোগাযোগ</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">জনপ্রিয় প্রোগ্রাম</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">মেডিকেল ভর্তি প্রস্তুতি</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">ইঞ্জিনিয়ারিং ভর্তি</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">বিশ্ববিদ্যালয় ভর্তি</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">এইচএসসি একাডেমিক</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">যোগাযোগ</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  ৭৮, গ্রিন রোড (৩য় তলা), ফার্মগেট, তেজগাঁও, ঢাকা-১২০৫
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">০৯৬৬৬৭৭৫৫৬৬</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@udvash.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © ২০২৫ উদ্ভাস একাডেমিক এন্ড এডমিশন কেয়ার। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                গোপনীয়তা নীতি
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                নিয়মাবলী
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;