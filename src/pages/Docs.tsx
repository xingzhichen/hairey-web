/**
 * Documentation page component for Hairey Dental.
 * Mimics a Next.js App Router style documentation site with sidebar navigation.
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  ChevronRight, 
  Search, 
  Cpu, 
  Layers, 
  Settings, 
  HelpCircle, 
  Menu, 
  X,
  FileText,
  Terminal,
  ExternalLink
} from 'lucide-react';

interface DocContent {
  title: string;
  category: string;
  content: React.ReactNode;
}

const docsData: Record<string, DocContent> = {
  'getting-started': {
    title: '入门指南',
    category: '基础',
    content: (
      <div className="prose">
        <h1>欢迎使用 Hairey 数字化生态</h1>
        <p>Hairey 致力于为全球牙科实验室和诊所提供最先进的数字化解决方案。通过我们的集成系统，您可以显著提升工作流效率与精准度。</p>
        
        <h2>核心愿景</h2>
        <p>我们的技术旨在打破传统制造的界限，将生物材料科学与数字化制造完美融合。</p>
        
        <pre>{`// 示例：初始化数字化工作流
const hairey = new HaireyWorkflow({
  scanner: 'Hairey-S3',
  material: 'Hairey-Resin-Pro',
  printer: 'Hairey-Print-X'
});

await hairey.startScan();`}</pre>

        <h2>下一步</h2>
        <ul>
          <li>浏览我们的产品目录</li>
          <li>了解数字化设计流程</li>
          <li>配置您的第一个实验室节点</li>
        </ul>
      </div>
    )
  },
  'core-tech': {
    title: '核心技术',
    category: '技术',
    content: (
      <div className="prose">
        <h1>底层数字化架构</h1>
        <p>Hairey 的技术栈基于高精度三维重建算法和专有的高性能树脂材料。我们称之为 <code>D-Core</code> 架构。</p>
        
        <h2>关键特性</h2>
        <ul>
          <li><strong>亚微米级扫描精度：</strong> 即使是复杂的全口案例也能精准捕捉。</li>
          <li><strong>自适应支撑算法：</strong> 显著减少后处理时间，提高材料利用率。</li>
          <li><strong>云端协同处理：</strong> 无缝对接多点设计任务。</li>
        </ul>

        <div className="my-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
          <p className="font-bold text-primary mb-2">专业提示</p>
          <p className="text-sm italic">确保您的扫描仪固件版本保持在 2.4.0 以上，以获得最佳的边缘检测性能。</p>
        </div>
      </div>
    )
  },
  'product-manual': {
    title: '产品手册',
    category: '资源',
    content: (
      <div className="prose">
        <h1>Hairey Resin Pro 手册</h1>
        <p>本手册详细介绍了 Hairey 各系列树脂的物理特性与打印参数。</p>
        
        <h2>材料参数表</h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-xs font-bold text-gray-500 uppercase">材料名称</th>
                <th className="px-4 py-2 text-left text-xs font-bold text-gray-500 uppercase">弯曲强度</th>
                <th className="px-4 py-2 text-left text-xs font-bold text-gray-500 uppercase">硬度 (Shore D)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 text-sm font-medium">Dental Model V2</td>
                <td className="px-4 py-2 text-sm">90 MPa</td>
                <td className="px-4 py-2 text-sm">85</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm font-medium">Surgical Guide</td>
                <td className="px-4 py-2 text-sm">110 MPa</td>
                <td className="px-4 py-2 text-sm">88</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  'faq': {
    title: '常见问题',
    category: '支持',
    content: (
      <div className="prose">
        <h1>常见问题解答</h1>
        <p>这里收集了用户在使用 Hairey 系统时最常遇到的技术问题。</p>
        
        <h2>Q: 为什么我的打印件表面不够光滑？</h2>
        <p>A: 请检查层厚设置与曝光时间。通常 50 微米层厚配合 2.5s 曝光在我们的打印机上能获得最佳平衡。</p>

        <h2>Q: 系统支持第三方扫描数据吗？</h2>
        <p>A: 是的，Hairey 系统完全开放，支持标准 STL 和 PLY 格式的导入。</p>
      </div>
    )
  }
};

const navigation = [
  {
    title: '入门',
    items: [
      { id: 'getting-started', title: '快速入门', icon: BookOpen },
    ]
  },
  {
    title: '核心技术',
    items: [
      { id: 'core-tech', title: '数字化架构', icon: Cpu },
      { id: 'layers', title: '层级定义', icon: Layers, disabled: true },
    ]
  },
  {
    title: '资源',
    items: [
      { id: 'product-manual', title: '产品手册', icon: FileText },
      { id: 'api', title: 'API 参考', icon: Terminal, disabled: true },
    ]
  },
  {
    title: '支持',
    items: [
      { id: 'faq', title: '常见问题', icon: HelpCircle },
      { id: 'contact', title: '联系支持', icon: ExternalLink, isExternal: true },
    ]
  }
];

export const Docs = () => {
  const [activeTab, setActiveTab] = useState('getting-started');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentDoc = docsData[activeTab] || docsData['getting-started'];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Sidebar Toggle */}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-2xl"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Sidebar */}
          <aside className={`
            lg:w-64 flex-shrink-0 
            ${isSidebarOpen ? 'fixed inset-0 z-40 bg-white p-8 pt-24 overflow-y-auto' : 'hidden lg:block'}
          `}>
            <div className="relative mb-8">
              <input 
                type="text" 
                placeholder="搜索文档..." 
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
              />
              <Search className="absolute left-3 top-3 text-slate-400" size={18} />
            </div>

            <nav className="space-y-8">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">
                    {section.title}
                  </h5>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        disabled={item.disabled}
                        onClick={() => {
                          if (!item.isExternal && !item.disabled) {
                            setActiveTab(item.id);
                            setIsSidebarOpen(false);
                          }
                        }}
                        className={`
                          w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all group
                          ${item.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-primary/5'}
                          ${activeTab === item.id ? 'bg-primary/10 text-primary shadow-sm' : 'text-slate-600'}
                        `}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon size={18} className={activeTab === item.id ? 'text-primary' : 'text-slate-400 group-hover:text-primary'} />
                          <span>{item.title}</span>
                        </div>
                        {activeTab === item.id && <motion.div layoutId="active-doc" className="w-1.5 h-1.5 bg-primary rounded-full" />}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-grow bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 min-h-[70vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-2 text-xs font-bold text-primary mb-6 uppercase tracking-widest">
                  <span>Docs</span>
                  <ChevronRight size={14} />
                  <span>{currentDoc.category}</span>
                </div>
                
                {currentDoc.content}

                {/* Feedback Section */}
                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-sm text-slate-500">
                    最后更新于：2023年10月24日
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-slate-600">文档是否有帮助？</span>
                    <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm hover:bg-slate-50 transition-colors">是</button>
                    <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm hover:bg-slate-50 transition-colors">否</button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>

          {/* TOC - Desktop Only */}
          <aside className="hidden xl:block w-48 flex-shrink-0">
            <div className="sticky top-32">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">
                本页内容
              </h5>
              <ul className="space-y-3 text-sm text-slate-500 border-l border-slate-100 pl-4">
                <li className="hover:text-primary cursor-pointer transition-colors border-l-2 border-primary -ml-[17px] pl-4 font-medium text-primary">标题</li>
                <li className="hover:text-primary cursor-pointer transition-colors">背景介绍</li>
                <li className="hover:text-primary cursor-pointer transition-colors">核心架构</li>
                <li className="hover:text-primary cursor-pointer transition-colors">常见问题</li>
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};
