import React, { useState } from 'react';
import { MapPin, Phone, Clock, Search } from 'lucide-react';

const Branches = () => {
  const [selectedDivision, setSelectedDivision] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const branches = [
    {
      id: 1,
      name: 'ঢাকা (ফার্মগেট)',
      division: 'dhaka',
      district: 'ঢাকা',
      address: '৭৮, গ্রিন রোড (৩য় তলা), ফার্মগেট, তেজগাঁও, ঢাকা-১২০৫',
      phone: '০৯৬৬৬৭৭৫৫৬৬',
      timing: 'সকাল ৮টা - রাত ১০টা',
      isMain: true
    },
    {
      id: 2,
      name: 'চট্টগ্রাম (কাজীর দেউড়ি)',
      division: 'chittagong',
      district: 'চট্টগ্রাম',
      address: 'কাজীর দেউড়ি, চট্টগ্রাম',
      phone: '০৩১-২৮৫৪৭৬৩',
      timing: 'সকাল ৮টা - রাত ৯টা',
      isMain: false
    },
    {
      id: 3,
      name: 'সিলেট (জিন্দাবাজার)',
      division: 'sylhet',
      district: 'সিলেট',
      address: 'জিন্দাবাজার, সিলেট',
      phone: '০৮২১-৭২৮৪৫৬',
      timing: 'সকাল ৮টা - রাত ৯টা',
      isMain: false
    },
    {
      id: 4,
      name: 'রাজশাহী (সাহেব বাজার)',
      division: 'rajshahi',
      district: 'রাজশাহী',
      address: 'সাহেব বাজার, রাজশাহী',
      phone: '০৭২১-৮৫৬৭৪৩',
      timing: 'সকাল ৮টা - রাত ৯টা',
      isMain: false
    },
    {
      id: 5,
      name: 'খুলনা (দৌলতপুর)',
      division: 'khulna',
      district: 'খুলনা',
      address: 'দৌলতপুর, খুলনা',
      phone: '০৪১-৭৬৩৮৯৫',
      timing: 'সকাল ৮টা - রাত ৯টা',
      isMain: false
    },
    {
      id: 6,
      name: 'বরিশাল (বন্দর রোড)',
      division: 'barisal',
      district: 'বরিশাল',
      address: 'বন্দর রোড, বরিশাল',
      phone: '০৪৩১-৬৪৮৭৩৯',
      timing: 'সকাল ৮টা - রাত ৯টা',
      isMain: false
    },
    {
      id: 7,
      name: 'রংপুর (স্টেশন রোড)',
      division: 'rangpur',
      district: 'রংপুর',
      address: 'স্টেশন রোড, রংপুর',
      phone: '০৫২১-৬৪৭৮৩৯',
      timing: 'সকাল ৮টা - রাত ৯টা',
      isMain: false
    },
    {
      id: 8,
      name: 'ময়মনসিংহ (চৌরাস্তা)',
      division: 'mymensingh',
      district: 'ময়মনসিংহ',
      address: 'চৌরাস্তা, ময়মনসিংহ',
      phone: '০৯১-৬৭৪৮৩৯',
      timing: 'সকাল ৮টা - রাত ৯টা',
      isMain: false
    }
  ];

  const divisions = [
    { id: 'all', name: 'সকল বিভাগ' },
    { id: 'dhaka', name: 'ঢাকা' },
    { id: 'chittagong', name: 'চট্টগ্রাম' },
    { id: 'sylhet', name: 'সিলেট' },
    { id: 'rajshahi', name: 'রাজশাহী' },
    { id: 'khulna', name: 'খুলনা' },
    { id: 'barisal', name: 'বরিশাল' },
    { id: 'rangpur', name: 'রংপুর' },
    { id: 'mymensingh', name: 'ময়মনসিংহ' }
  ];

  const filteredBranches = branches.filter(branch => {
    const matchesSearch = branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         branch.district.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDivision = selectedDivision === 'all' || branch.division === selectedDivision;
    return matchesSearch && matchesDivision;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            আমাদের <span className="text-red-600">শাখাসমূহ</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            সারাদেশে ১১০+ শাখার মাধ্যমে পৌঁছে যাচ্ছি আপনার দোরগোড়ায়
          </p>

          {/* Stats Banner */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">১১০+</div>
                <div className="text-red-100">শাখা</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">৬৪</div>
                <div className="text-red-100">জেলায়</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">৮</div>
                <div className="text-red-100">বিভাগে</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="শাখার নাম বা জেলা খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedDivision}
              onChange={(e) => setSelectedDivision(e.target.value)}
              className="px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {divisions.map((division) => (
                <option key={division.id} value={division.id}>
                  {division.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${
                branch.isMain ? 'border-2 border-yellow-400' : ''
              }`}
            >
              {branch.isMain && (
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-center py-2 font-bold text-sm">
                  প্রধান শাখা
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {branch.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {branch.address}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{branch.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{branch.timing}</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 text-sm">
                    যোগাযোগ করুন
                  </button>
                  <button className="flex-1 border border-red-500 text-red-500 py-2 rounded-lg font-medium hover:bg-red-50 transition-all duration-200 text-sm">
                    ম্যাপে দেখুন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBranches.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <MapPin className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">কোনো শাখা পাওয়া যায়নি</h3>
            <p className="text-gray-500">অন্য অঞ্চল বা নাম দিয়ে খোঁজ করুন</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-2xl p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            আপনার এলাকায় শাখা খুঁজে পাচ্ছেন না?
          </h3>
          <p className="text-gray-800 mb-6">
            আমাদের সাথে যোগাযোগ করুন। আমরা শীঘ্রই নতুন শাখা খোলার পরিকল্পনা রয়েছে।
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
            যোগাযোগ করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Branches;