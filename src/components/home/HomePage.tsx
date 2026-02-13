'use client';

import React from 'react';
import { ArrowRight, Activity, Shield, Zap, Microscope, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import BannerImage from '../../../public/images/banner.avif'
export const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <img 
            src={BannerImage} 
            alt="Dental Biotechnology"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="max-w-3xl"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Next-Gen Dental Biotechnology</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-secondary leading-[1.1] mb-8">
              We Design <br />
              <span className="text-gradient">Precision</span> <br />
              Dentistry
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Hairey 正在重新定义牙科数字化工作流。通过合成材料与精密工程的结合，我们为全球诊所提供高性能的数字化修复解决方案。
            </p>
            <div className="flex flex-wrap gap-5">
              <Link 
                href="/product" 
                className="bg-primary text-white px-10 py-5 rounded-full font-bold flex items-center hover:bg-secondary transition-all shadow-lg hover:shadow-primary/30 group"
              >
                开始探索 <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
              <Link 
                href="/about" 
                className="bg-white/50 backdrop-blur-sm text-secondary border-2 border-primary/20 px-10 py-5 rounded-full font-bold hover:bg-white transition-all"
              >
                了解我们的使命
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute right-[10%] top-[20%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute right-[5%] bottom-[15%] w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Trust & Stats Section */}
      <section className="py-32 bg-white/50 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12"
          >
            {[
              { icon: Microscope, title: '精密研发', desc: '基于分子生物学的牙科材料创新。', color: 'text-primary' },
              { icon: Zap, title: '极速交付', desc: '全数字化流程，缩短 50% 的诊疗周期。', color: 'text-accent' },
              { icon: Shield, title: '国际认证', desc: '符合最高标准的医疗器械安全验证。', color: 'text-blue-500' },
              { icon: Activity, title: '临床优化', desc: '专为提升患者舒适度与长期稳固性而设计。', color: 'text-emerald-500' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group relative p-8 rounded-3xl hover:bg-white transition-colors duration-500 border border-transparent hover:border-primary/10"
              >
                <div className={`w-16 h-16 rounded-2xl bg-white shadow-lg shadow-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${item.color}`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="mt-6 flex items-center text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  了解更多 <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Innovation Section */}
      <section className="py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-gradient-tech rounded-[2.5rem] blur-2xl opacity-10" />
              <img 
                src="/images/banner.avif" 
                alt="Digital Dentistry"
                className="relative rounded-[2rem] shadow-2xl z-10"
              />
              <div className="absolute -bottom-10 -right-10 glass-effect p-8 rounded-3xl shadow-xl z-20 max-w-xs hidden md:block">
                <div className="text-4xl font-black text-primary mb-2">99.9%</div>
                <div className="text-sm font-bold text-secondary uppercase tracking-wider">修复成功率</div>
                <div className="text-xs text-muted-foreground mt-2">基于全球 50,000+ 临床案例追踪。</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 space-y-10"
            >
              <h2 className="text-5xl font-black text-secondary">赋予牙科科学<br />无限可能</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Hairey 不仅仅是一家材料供应商，我们是数字化转型的合伙人。我们通过专有的生物合成技术，开发出具有自然美学与极高耐磨性的新型材料。
              </p>
              
              <div className="space-y-6">
                {[
                  { t: '数字化扫描集成', d: '无缝对接主流口内扫描设备。' },
                  { t: '生物活性修复体', d: '促进软组织整合，减少炎症风险。' },
                  { t: '云端协同设计', d: '全球顶级牙技师实时在线协作。' }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-primary/5 transition-all"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={14} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">{feature.t}</h4>
                      <p className="text-muted-foreground">{feature.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link href="/service" className="inline-flex items-center text-primary font-black text-lg group">
                探索我们的服务流程 <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-12">
              开启您的数字化<br /><span className="text-primary">牙科实验室</span>之旅
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="bg-accent text-white px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-accent/40">
                立即咨询专家
              </Link>
              <Link href="/product" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-6 rounded-full font-black text-xl hover:bg-white/20 transition-all">
                产品手册下载
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
