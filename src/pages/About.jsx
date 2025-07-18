// src/pages/About.jsx
import React from 'react';
import { FaGem, FaHandsHelping, FaAward, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-amber-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafting timeless jewelry with passion and purpose since 2010
          </p>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Our Story Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Jewelry workshop"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Humble Beginnings</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What began as a small boutique in New York City's Diamond District has blossomed into 
                Jewelry Luxe — a renowned name in fine jewelry. Founder Sarah Johnson started with just 
                a workbench and a dream to create pieces that tell meaningful stories.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Today, our team of master jewelers continues Sarah's legacy, combining traditional 
                techniques with contemporary design to create heirloom-quality pieces.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="italic text-gray-700">
                  "Jewelry is not just adornment — it's a wearable story of love, milestones, 
                  and personal expression."
                </p>
                <p className="mt-2 font-medium">— Sarah Johnson, Founder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaGem className="text-3xl text-amber-600 mb-4" />,
                title: "Exceptional Quality",
                description: "We use only the finest materials and gemstones, rigorously inspected for perfection."
              },
              {
                icon: <FaHandsHelping className="text-3xl text-amber-600 mb-4" />,
                title: "Ethical Sourcing",
                description: "All our materials are responsibly sourced with full traceability."
              },
              {
                icon: <FaAward className="text-3xl text-amber-600 mb-4" />,
                title: "Master Craftsmanship",
                description: "Each piece is handcrafted by our team of skilled artisans."
              },
              {
                icon: <FaHeart className="text-3xl text-amber-600 mb-4" />,
                title: "Customer Love",
                description: "We treat every customer like family, with personalized service."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="mb-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">The Art of Jewelry Making</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our jewelry creation process is a meticulous journey from sketch to finished piece. 
                Each design undergoes dozens of quality checks before reaching your hands.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-gray-600">Design conceptualization with our in-house artists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-gray-600">Hand-selection of gemstones and metals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-gray-600">Precision crafting by master jewelers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-gray-600">Final quality inspection and polishing</span>
                </li>
              </ul>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition">
                Meet Our Artisans
              </button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Jewelry making process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & Creative Director",
                bio: "With over 25 years in the jewelry industry, Sarah's designs have won multiple international awards.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              },
              {
                name: "Michael Chen",
                role: "Co-Founder & Master Jeweler",
                bio: "A third-generation jeweler, Michael brings traditional techniques to modern designs.",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-amber-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;