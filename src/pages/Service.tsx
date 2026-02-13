/**
 * Service page detailing Hairey's professional services.
 */
import React from 'react';
import { Laptop, GraduationCap, Headphones, Settings, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Service = () => {
  const services = [
    {
      title: '全链路数字化集成',
      desc: '我们将您的传统诊所平滑转型为全数字化工作流。从口扫、CAD设计到3D打印，提供一站式技术支持。',
      icon: Laptop,
      features: ['硬件兼容性评估', '系统安装与调试', '工作流优化建议']
    },
    {
      title: 'Hairey 牙科学院',
      desc: '定期的专业培训课程，由国际顶级牙科专家授课，涵盖最新的数字化临床操作与材料应用技巧。',
      icon: GraduationCap,
      features: ['初级数字化课程', '高级修复体设计', '临床案例研讨会']
    },
    {
      title: '7x24 全球技术支持',
      desc: '无论您身处何地，我们的工程师团队都能通过远程协助或上门服务，确保您的设备始终处于最佳状态。',
      icon: Headphones,
      features: ['远程实时诊断', '快速配件更换', '系统在线更新']
    },
    {
      title: '定制化材料研发',
      desc: '针对特殊的临床需求，我们的实验室提供定制化的生物材料研发服务，满足对力学和美学的极限追求。',
      icon: Settings,
      features: ['材料配方调整', '特定颜色匹配', '生物力学测试']
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Service hero"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black mb-8"
          >
            专业服务与支持
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            我们不仅提供卓越的产品，更通过全方位的技术服务，助力牙科机构提升诊疗效率与患者满意度。
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-start justify-between mb-10">
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <service.icon size={40} />
                  </div>
                  <div className="text-slate-100 text-6xl font-black">0{idx + 1}</div>
                </div>
                <h3 className="text-3xl font-black text-secondary mb-6">{service.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-10">{service.desc}</p>
                <div className="space-y-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3 text-secondary font-bold">
                      <CheckCircle2 size={20} className="text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 text-center mb-20">
          <h2 className="text-4xl font-black text-secondary">服务实施流程</h2>
          <p className="text-slate-500 mt-4">标准化的服务体系，确保每一个环节的精准落地</p>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/10 -translate-y-1/2 hidden md:block" />
            {[
              { t: '需求沟通', d: '深入了解机构现状' },
              { t: '方案设计', d: '定制数字化蓝图' },
              { t: '安装培训', d: '全员技能转产' },
              { t: '持续维护', d: '定期回访与升级' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-black text-2xl mb-6 shadow-xl shadow-primary/30">
                  {i + 1}
                </div>
                <h4 className="font-black text-secondary mb-2">{step.t}</h4>
                <p className="text-sm text-slate-500 max-w-[150px]">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
