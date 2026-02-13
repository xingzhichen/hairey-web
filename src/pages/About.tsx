/**
 * About Us page component describing company history and mission.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Globe, Award, ChevronRight } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: '成立年份', value: '2015', icon: Globe },
    { label: '专利技术', value: '45+', icon: Award },
    { label: '合作诊所', value: '2,000+', icon: Users },
    { label: '研发占比', value: '35%', icon: Target },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-32 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1532187878403-219d9327042f?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Scientific background"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8"
          >
            关于 <span className="text-primary">HAIREY</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            我们致力于打破生物科学与数字技术的边界，为牙科行业提供最具创新力的材料与系统解决方案。
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-black text-secondary">我们的使命</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                在 Hairey，我们相信每位患者都值得拥有更精准、更快速、更美观的牙科修复。我们的团队由顶尖的生物工程师、牙科专家和软件开发人员组成，共同探索口腔健康的未来。
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50">
                    <item.icon className="text-primary mb-4" size={24} />
                    <div className="text-3xl font-black text-secondary">{item.value}</div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Lab"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 text-center mb-20">
          <h2 className="text-4xl font-black text-secondary mb-6">我们的核心价值观</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t: '极度精密', d: '对每一微米的执着，确保临床适配的完美。' },
              { t: '持续创新', d: '每年将收入的 35% 投入研发，探索未知领域。' },
              { t: '以人为本', d: '提升医生的效率，减轻患者的病痛感。' }
            ].map((v, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="text-primary font-black text-4xl mb-6">0{i+1}</div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{v.t}</h3>
                <p className="text-slate-500 leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
