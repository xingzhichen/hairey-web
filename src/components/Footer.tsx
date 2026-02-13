import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl">H</span>
              </div>
              <span className="text-2xl font-black tracking-tighter">HAIREY</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              通过精密生物材料与全数字化工作流，赋能全球牙科专业人士，创造更完美的笑容。
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold">快速导航</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/about" className="hover:text-primary transition-colors flex items-center">关于我们 <ArrowUpRight size={14} className="ml-1" /></Link></li>
              <li><Link href="/product" className="hover:text-primary transition-colors flex items-center">创新产品 <ArrowUpRight size={14} className="ml-1" /></Link></li>
              <li><Link href="/service" className="hover:text-primary transition-colors flex items-center">专业服务 <ArrowUpRight size={14} className="ml-1" /></Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center">联系我们 <ArrowUpRight size={14} className="ml-1" /></Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold">解决方案</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">数字化种植修复</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">美学贴面系统</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI 辅助临床诊断</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">材料定制开发</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold">联络信息</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary flex-shrink-0" />
                <span>上海市浦东新区张江高科<br />科苑路创新园</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span>400-888-HAIREY</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span>info@hairey-dental.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-500 font-medium">
          <p>© {currentYear} Hairey Dental Technology Co., Ltd. 保留所有权利。</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-primary transition-colors">隐私政策</a>
            <a href="#" className="hover:text-primary transition-colors">服务条款</a>
            <a href="#" className="hover:text-primary transition-colors">沪ICP备12345678号</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
