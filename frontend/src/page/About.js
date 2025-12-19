import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-semibold text-sm">
                  BARASAT • PIN 700124
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-orange-600">GOUTAM</span> Foods
              </h1>
              <p className="text-2xl text-gray-700 mb-8 font-medium">
                Simple ordering. Fast delivery. Enjoy your favorite meals without leaving home.
              </p>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl">
                Founded in Barasat with PIN 700124, we're revolutionizing campus food delivery 
                with our seamless ordering experience, intuitive platform, and commitment to 
                bringing your favorite campus food quick, easy, and hassle-free.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  Order Now
                </button>
                <button className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
                  Become a Partner
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-orange-200 relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20"></div>
                <div className="relative">
                  <div className="text-center mb-8">
                    <div className="text-7xl mb-6">🚚</div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Fastest Delivery in Barasat</h3>
                    <p className="text-gray-600">PIN: <span className="font-bold text-orange-600">700124</span></p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                      <span className="font-semibold text-gray-700">Phone</span>
                      <span className="font-bold text-orange-600">+91 9933384321</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                      <span className="font-semibold text-gray-700">Delivery Time</span>
                      <span className="font-bold text-red-600">Under 15 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Serving Barasat Community</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">700124</div>
              <div className="text-orange-100 font-medium">PIN Code</div>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-orange-100 font-medium">Restaurant Partners</div>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">15min</div>
              <div className="text-orange-100 font-medium">Avg Delivery Time</div>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-orange-100 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-red-400 to-orange-400 rounded-full opacity-20"></div>
                <div className="relative bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-10 border-4 border-orange-200">
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Journey in Barasat</h2>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700">
                      Founded right here in <span className="font-bold text-orange-600">Barasat (PIN 700124)</span>, 
                      GOUTAM Foods started with a simple mission: to deliver hot, fresh meals to students 
                      faster than anyone else.
                    </p>
                    <p className="text-lg text-gray-700">
                      What began as a small delivery service has grown into Barasat's most trusted 
                      food delivery platform, serving thousands of customers daily with our 
                      seamless ordering experience.
                    </p>
                    <p className="text-lg text-gray-700">
                      Today, we continue to innovate while staying true to our Barasat roots, 
                      partnering with local eateries and delivering happiness one meal at a time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-200">
                  <div className="text-4xl mb-6 text-yellow-600">👨‍🍳</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Local Chefs</h3>
                  <p className="text-gray-600">Partnering with Barasat's best culinary talents</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-2 border-orange-200">
                  <div className="text-4xl mb-6 text-orange-600">⚡</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
                  <p className="text-gray-600">Optimized routes across 700124 and surrounding areas</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-200">
                  <div className="text-4xl mb-6 text-red-600">🔒</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Service</h3>
                  <p className="text-gray-600">Safe transactions and contactless delivery options</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border-2 border-orange-200">
                  <div className="text-4xl mb-6 text-yellow-600">📞</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                  <p className="text-gray-600">Call us anytime at +91 9933384321</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fresh Commitment Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Fresh & Quality Focus</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Committed to delivering the freshest ingredients and highest quality meals
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition duration-300">
              <div className="h-56 bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center relative">
                <div className="text-7xl">🥦</div>
                <div className="absolute top-4 left-4 bg-white/90 text-orange-600 font-bold py-2 px-4 rounded-full text-sm">
                  Fresh Vegetables
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Fresh Produce</h3>
                <p className="text-gray-600">
                  We source vegetables daily from local Barasat markets to ensure maximum freshness 
                  in every meal we deliver.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition duration-300">
              <div className="h-56 bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center relative">
                <div className="text-7xl">👨‍🍳</div>
                <div className="absolute top-4 left-4 bg-white/90 text-red-600 font-bold py-2 px-4 rounded-full text-sm">
                  Expert Chefs
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Culinary Experts</h3>
                <p className="text-gray-600">
                  Our partner chefs are Barasat's finest, preparing meals with care and traditional recipes.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition duration-300">
              <div className="h-56 bg-gradient-to-r from-red-400 to-orange-400 flex items-center justify-center relative">
                <div className="text-7xl">🚚</div>
                <div className="absolute top-4 left-4 bg-white/90 text-orange-600 font-bold py-2 px-4 rounded-full text-sm">
                  Fast Delivery
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Temperature Controlled</h3>
                <p className="text-gray-600">
                  Special packaging ensures your food arrives hot and fresh, exactly as the chef intended.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Get Help & Support</h2>
            <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
              We're here to help you with any questions about orders, delivery, or partnerships.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="font-bold text-white mb-2">Call Us</h3>
                <p className="text-orange-100 font-semibold">+91 9933384321</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="font-bold text-white mb-2">Location</h3>
                <p className="text-orange-100 font-semibold">Barasat, PIN 700124</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="font-bold text-white mb-2">Email</h3>
                <p className="text-orange-100 font-semibold">support@goutamfoods.com</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="font-bold text-white mb-2">Hours</h3>
                <p className="text-orange-100 font-semibold">24/7 Service</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-xl text-lg transition duration-300 shadow-lg">
                Order Status
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-10 rounded-xl text-lg transition duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Career & Partnership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Join the GOUTAM Family</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're growing fast and always looking for talented people to join our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-10 shadow-xl border-4 border-orange-200">
              <div className="text-5xl mb-8 text-center text-orange-500">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Become a Partner</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Join our network of restaurant partners</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Increase your customer reach in Barasat</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Access our delivery infrastructure</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-xl text-lg transition duration-300">
                Partner With Us
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-10 shadow-xl border-4 border-yellow-200">
              <div className="text-5xl mb-8 text-center text-yellow-500">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Career Opportunities</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Delivery drivers and riders needed</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Customer support positions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Tech and development roles</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 rounded-xl text-lg transition duration-300">
                View Careers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white mb-2">
            All Rights Reserved for developer position • Barasat, PIN 700124
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-orange-100 text-sm mt-4">
            <a href="#" className="hover:text-white transition duration-300">Terms of Sale</a>
            <a href="#" className="hover:text-white transition duration-300">Terms of Use</a>
            <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition duration-300">Sustainability</a>
            <a href="#" className="hover:text-white transition duration-300">Investors</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;