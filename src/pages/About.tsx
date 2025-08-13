import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Users, Award, Globe, Recycle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability First",
      description: "Every decision we make prioritizes the health of our planet, from material sourcing to packaging."
    },
    {
      icon: Heart,
      title: "Ethical Production",
      description: "We partner only with suppliers who share our commitment to fair wages and safe working conditions."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Supporting local artisans and communities while building a global movement for positive change."
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Timeless designs built to last, reducing waste through durability and classic appeal."
    }
  ];

  const milestones = [
    { year: "2019", event: "Founded EcoLux with a vision for sustainable fashion" },
    { year: "2020", event: "Planted our first 1,000 trees" },
    { year: "2021", event: "Achieved carbon-neutral shipping" },
    { year: "2022", event: "Reached 50,000 trees planted milestone" },
    { year: "2023", event: "Launched our circular fashion program" },
    { year: "2024", event: "127,000+ trees planted, 2.8M gallons water saved" }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      bio: "Former fashion executive turned sustainability advocate, Sarah founded EcoLux to prove luxury and ethics can coexist."
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Sustainability",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      bio: "Environmental scientist with 15+ years in sustainable manufacturing, leading our zero-waste initiatives."
    },
    {
      name: "Priya Patel",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      bio: "Award-winning designer creating timeless pieces that blend contemporary aesthetics with sustainable materials."
    }
  ];

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#2A5C94] to-[#1e4066] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fashion with
              <span className="block text-[#E9B949]">Purpose</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We believe that luxury fashion should elevate both your style and the world around us. 
              Every piece tells a story of sustainability, ethics, and craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  EcoLux was born from a simple yet powerful realization: the fashion industry 
                  needed to change. As consumers became more conscious of their environmental 
                  impact, we saw an opportunity to create luxury fashion that aligned with these values.
                </p>
                <p>
                  Founded in 2019, we started with a mission to prove that sustainable doesn't 
                  mean sacrificing style or quality. We partnered with artisans and suppliers 
                  who shared our vision, creating a supply chain built on transparency and ethics.
                </p>
                <p>
                  Today, we're proud to be part of a movement that's transforming fashion. 
                  Every purchase supports reforestation, fair trade practices, and the development 
                  of innovative sustainable materials.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
                alt="Sustainable fashion production"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#E9B949] text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">127K+</div>
                <div className="text-sm">Trees Planted</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                  <div className="bg-[#2A5C94] p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measurable Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that represent real change in the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center bg-green-50 rounded-xl p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-600 mb-2">127,892</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Trees Planted</div>
              <div className="text-gray-600 text-sm">2.1M lbs CO₂ absorbed</div>
            </motion.div>

            <motion.div 
              className="text-center bg-blue-50 rounded-xl p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Recycle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-600 mb-2">2.8M</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Gallons Saved</div>
              <div className="text-gray-600 text-sm">Water conservation</div>
            </motion.div>

            <motion.div 
              className="text-center bg-purple-50 rounded-xl p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-600 mb-2">45,000</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Jobs Supported</div>
              <div className="text-gray-600 text-sm">Fair wage employment</div>
            </motion.div>

            <motion.div 
              className="text-center bg-orange-50 rounded-xl p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Sustainable</div>
              <div className="text-gray-600 text-sm">Materials used</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our sustainability mission
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#2A5C94]"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="relative flex items-center mb-8 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 w-8 h-8 bg-[#2A5C94] rounded-full flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="ml-16 bg-white p-6 rounded-xl shadow-md">
                  <div className="text-[#E9B949] font-bold text-lg mb-2">{milestone.year}</div>
                  <div className="text-gray-900 font-medium">{milestone.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people driving our mission forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 mx-auto rounded-full object-cover shadow-xl group-hover:shadow-2xl transition-shadow"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-[#2A5C94] font-semibold mb-4">{member.role}</div>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;