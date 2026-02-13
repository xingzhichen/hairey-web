/**
 * Contact page with form and contact details.
 */
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-primary rounded-full" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border-4 border-primary rounded-full" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-secondary mb-8"
          >
            联系 <span className="text-primary">HAIREY</span>
          </motion.h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            无论是技术咨询、产品订购还是寻求合作，我们的专家团队都将为您提供即时响应。
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <h2 className="text-4xl font-black text-secondary">快速联络方式</h2>
              <p className="text-lg text-slate-600">
                我们致力于在 24 小时内回复您的咨询。您可以直接拨打电话，或通过下方的在线表单发送信息。
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Phone, title: '全国咨询热线', content: '400-888-HAIREY (424739)', sub: '周一至周五 9:00 - 18:00' },
                  { icon: Mail, title: '技术支持邮箱', content: 'support@hairey-dental.com', sub: '针对临床技术问题的专业解答' },
                  { icon: MapPin, title: '全球总部', content: '上海市浦东新区张江高科技园区', sub: '创新研发中心' },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-6 group"
                  >
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-lg mb-1">{item.title}</h4>
                      <p className="text-xl font-black text-secondary">{item.content}</p>
                      <p className="text-sm text-slate-500 mt-1">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-8 rounded-[2rem] bg-accent/5 border border-accent/10">
                <div className="flex items-center space-x-3 text-accent font-black mb-4">
                  <Clock size={20} />
                  <span>服务承诺</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  作为您的数字化伙伴，我们深知临床工作的紧迫性。针对设备故障，我们承诺在主要城市实现 12 小时内上门修复服务。
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100"
            >
              <h3 className="text-3xl font-black text-secondary mb-10">发送在线咨询</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary uppercase tracking-wider">姓名</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="您的姓名" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary uppercase tracking-wider">机构名称</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="诊所/医院名称" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-wider">电子邮箱</label>
                  <input type="email" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-wider">咨询类别</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all">
                    <option>产品订购</option>
                    <option>技术支持</option>
                    <option>商务合作</option>
                    <option>其他</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-wider">咨询详情</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="请描述您的具体需求..." />
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg hover:bg-secondary transition-all shadow-xl shadow-primary/20 flex items-center justify-center space-x-2">
                  <span>立即发送消息</span>
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
