/**
 * Product page showcasing Hairey's dental products.
 */
import React from 'react';
import { Microscope, Activity, Cog, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Product = () => {
  const products = [
    {
      category: '生物材料',
      title: 'Hairey-Resin Gen 4',
      desc: '专为数字化义齿设计的第四代光敏树脂，具有卓越的生物相容性和硬度。',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1583912267550-d44d7a125e7e?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      category: '硬件设备',
      title: 'PrecisionScan X1',
      desc: '微米级精度的口内扫描仪，实现瞬时 3D 建模，无缝对接云端设计平台。',
      icon: Microscope,
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      category: '软件系统',
      title: 'HaireyOS Cloud',
      desc: 'AI 辅助修复设计系统，将设计时间从几小时缩短至几分钟。',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      category: '铣削加工',
      title: 'AuraMill 5-Axis',
      desc: '高精度五轴联动铣削中心，支持全锆、瓷贴面等多材料加工。',
      icon: Cog,
      image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-amber-50 text-amber-600'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Page Header */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-black text-secondary mb-6">产品中心</h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              我们提供覆盖从诊断、设计到生产的全链路数字化牙科产品。每一件产品都经过严格的临床验证，旨在为牙科医生提供最高效的工具。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {products.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
              >
                <div className="md:w-2/5 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="md:w-3/5 p-10 flex flex-col justify-between">
                  <div>
                    <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 ${item.color}`}>
                      {item.category}
                    </div>
                    <h3 className="text-3xl font-black text-secondary mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed mb-8">{item.desc}</p>
                  </div>
                  <button className="flex items-center text-secondary font-bold group/btn">
                    查看技术参数 <ArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform text-primary" size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Banner */}
      <section className="container mx-auto px-4 pb-32">
        <div className="bg-gradient-tech rounded-[3rem] p-16 md:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-8">正在寻找定制化解决方案？</h2>
            <p className="text-xl text-white/80 mb-12">
              我们的 OEM/ODM 团队可以根据您的特定临床需求，定制高性能材料与软件接口。
            </p>
            <button className="bg-white text-primary px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform">
              咨询合作机会
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
