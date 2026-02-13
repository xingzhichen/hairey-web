# Hairey 牙科品牌官网复刻规范 (hairey_site_spec.md)

## 1. 概览

### 1.1. 品牌风格、体验基调与受众
- **品牌风格**：专业、亲和、洁净、值得信赖。作为一家现代牙科品牌，网站视觉语言应简洁、明亮，并富有健康感。通过高质量的诊所环境照片、真实的客户微笑、清晰的信息层级，传递其专业、贴心的服务理念。
- **体验基调**：清晰引导、安心舒适。网站核心目标是服务于潜在患者，解答疑问并引导预约。因此，体验上强调信息的易于理解与快速触达，导航简单直接，内容实用友好，移动端优先，避免给用户带来任何认知负担。
- **目标受众**：
  - **有明确牙科需求的患者**：寻找如洗牙、补牙、正畸、种植牙等特定服务。
  - **寻求长期口腔护理的家庭**：了解诊所的全面服务能力、医生资质和儿童牙科等。
  - **周边社区居民**：查询诊所位置、营业时间，并进行初次咨询。

### 1.2. 核心信息架构
网站信息架构极致简化，围绕**“我是谁” (关于我们)**、**“我提供什么” (服务/产品)**、**“如何找到我” (联系我们)** 展开，旨在实现最高效的信息传递和最低的维护成本。

- **主导航 (Top Bar)**:
  - **Home**: 网站入口与品牌第一印象。
  - **About Us**: 建立信任，展示专业实力。
  - **Product**: (可选) 展示品牌销售的周边口腔护理产品。
  - **Service**: 核心业务，清晰列出所有牙科服务。
  - **Contact Us**: 提供所有联系方式和预约入口。
- **页脚 (Footer)**: 提供核心导航的重复入口、版权信息和隐私政策链接。

---

## 2. 路由与页面蓝图

### 2.1. 站点地图 (Sitemap)
该站点为纯粹的单页应用 (SPA) 或静态站点 (SSG)，结构扁平。

- **`/` (首页)**: `(Marketing Page)`
  - **内容**: Hero Banner (品牌口号 + CTA 预约)、简短的品牌介绍、核心服务入口 (卡片式)、诊所独特优势 (如：无痛治疗、先进设备)、客户评价 (Testimonials)、再次引导至预约的 CTA 区块。
- **`/about-us` (关于我们)**: `(Generic Content Page)`
  - **内容**: 品牌故事、医生团队介绍 (头像、姓名、资历)、专业资质与荣誉证书、诊所环境与先进设备展示。
- **`/product` (产品中心)**: `(Listing Page)`
  - **内容**: 口腔护理相关产品的卡片列表 (如电动牙刷、冲牙器、专用牙膏等)。
  - **模板 (可选)**: `/product/[slug]` `(Detail Page)` - 产品详情页，包含产品大图、描述、规格、价格和购买链接。
- **`/service` (服务项目)**: `(Listing Page)`
  - **内容**: 核心牙科服务的卡片列表 (如：洗牙、补牙、牙齿美白、牙齿矫正、种植牙、儿童牙科)。
  - **模板 (可选)**: `/service/[slug]` `(Detail Page)` - 服务详情页，详细介绍服务流程、适用人群、注意事项和费用范围。
- **`/contact-us` (联系我们)**: `(Form & Info Page)`
  - **内容**: 地址 (嵌入式地图)、营业时间、联系电话、在线预约/咨询表单、简化的隐私政策提示或 Cookie Banner。

### 2.2. 页面类型与模板
- **营销页 (Marketing Page)**: 首页，由多个精心设计的组件灵活组合，以视觉和情感叙事为主。
- **列表页 (Listing Page)**: 服务和产品页，采用卡片网格布局，清晰展示多个项目。
- **详情页 (Detail Page)**: 单个服务或产品的介绍页面，结构简单，图文并茂。
- **信息/表单页 (Info/Form Page)**: 关于我们和联系我们，以信息陈述和表单提交为核心。

---

## 3. 设计令牌 (Design Tokens)

**[注意]** 以下令牌为通用建议，可根据 Hairey 最终的 VI (视觉识别) 系统进行替换。

### 3.1. 颜色 (Colors)
- **品牌色 (Brand Colors)**
  - `brand-primary`: `#4A9D9C` (柔和的蓝绿色，用于主 CTA、链接、高亮状态)
  - `brand-secondary`: `#82C4C3` (更浅的蓝绿色，用于辅助元素、悬停状态)
- **灰度与背景 (Greyscale & Backgrounds)**
  - `light-bg`: `#F7FDFD` (极浅的蓝绿色背景，用于页面或区块背景)
  - `white`: `#FFFFFF` (白色，用于卡片、内容背景)
  - `gray-100`: `#F0F0F0` (用于边框、分割线)
  - `gray-400`: `#A0A0A0` (用于次要文本、占位符文本)
  - `gray-800`: `#333333` (用于主标题、正文)
- **状态色 (Status Colors)**
  - `success`: `#5CB85C` (成功状态，如表单提交成功)
  - `error`: `#D9534F` (错误状态，如表单字段验证失败)

### 3.2. 字体与排版 (Typography)
- **字体家族 (Font Family)**
  - `font-family-sans-serif`: `"Noto Sans SC", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` (优先使用免费可商用的思源黑体和 Inter)
- **排版阶梯 (Type Scale)**
  - `h1`: `font-size: 2.25rem` (36px), `font-weight: 700`
  - `h2`: `font-size: 1.75rem` (28px), `font-weight: 700`
  - `h3`: `font-size: 1.25rem` (20px), `font-weight: 600`
  - `p (body)`: `font-size: 1rem` (16px), `line-height: 1.7`
  - `small`: `font-size: 0.875rem` (14px)
- **字重 (Font Weight)**
  - `font-weight-normal`: `400`
  - `font-weight-semibold`: `600`
  - `font-weight-bold`: `700`

### 3.3. 布局与间距 (Layout & Spacing)
- **断点 (Breakpoints)**
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
- **容器宽度 (Container Width)**
  - `max-width`: `1200px` (页面内容最大宽度)
- **间距体系 (Spacing Scale)**
  - `space-1`: 4px
  - `space-2`: 8px
  - `space-3`: 16px
  - `space-4`: 24px
  - `space-5`: 32px
  - `space-6`: 48px

### 3.4. 效果 (Effects)
- **圆角 (Border Radius)**
  - `rounded-sm`: `4px`
  - `rounded-md`: `8px` (用于卡片和按钮)
  - `rounded-lg`: `16px`
  - `rounded-full`: `9999px`
- **阴影 (Box Shadow)**
  - `shadow-md`: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)` (柔和的卡片阴影)

### 3.5. 动效 (Motion)
- **过渡 (Transition)**
  - `transition-base`: `all .25s cubic-bezier(0.4, 0, 0.2, 1)` (用于所有交互元素的平滑过渡)

---

## 4. 组件与模式 (Components & Patterns)

### 4.1. 导航栏 (NavBar)
- **用途**: 全局导航，展示品牌 Logo 和核心页面入口。
- **结构 (伪代码)**:
  ```html
  <header class="navbar sticky top-0 z-50 bg-white/80 backdrop-blur-md">
    <div class="container mx-auto flex justify-between items-center h-16">
      <a href="/"><img src="/logo.svg" alt="Hairey"></a>
      <!-- Desktop Nav -->
      <nav class="hidden md:flex space-x-8">
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        ...
      </nav>
      <!-- Mobile Nav Toggle -->
      <button class="md:hidden">...</button>
    </div>
    <!-- Mobile Drawer Menu (hidden by default) -->
  </header>
  ```
- **交互行为**:
  - **桌面端**: 页面向下滚动时，导航栏背景从透明（或半透明）变为带有模糊效果的白色，并固定在顶部。
  - **移动端**: 菜单项收起到一个汉堡菜单按钮中。点击按钮，从屏幕右侧滑出抽屉式导航菜单。

### 4.2. Hero Banner
- **用途**: 首页首屏，用简洁有力的口号和视觉吸引用户，并提供首要的预约 CTA。
- **结构 (伪代码)**:
  ```html
  <section class="flex items-center min-h-[500px] bg-cover bg-center" style="background-image: url(...)">
    <div class="container mx-auto text-left text-white">
      <h1 class="text-4xl font-bold">专业、温暖，守护您的灿烂微笑。</h1>
      <p class="mt-4 text-lg">即刻在线预约，开启您的健康牙齿之旅。</p>
      <a href="/contact-us" class="btn btn-primary mt-8">立即预约</a>
    </div>
  </section>
  ```

### 4.3. 卡片 (Card)
- **用途**: 用于在列表页中展示服务、产品或医生团队成员。
- **变体**:
  - **服务/产品卡片**: 图片 + 标题 + 简短描述 + “了解更多”链接。
  - **医生团队卡片**: 圆形头像 + 姓名 + 职称/专长。
- **交互行为**: 鼠标悬停时，卡片有轻微上浮和阴影加深的效果。

### 4.4. 客户评价 (Testimonials)
- **用途**: 展示真实客户的正面反馈，建立信任感。
- **结构**: 通常使用轮播 (Carousel/Swiper) 组件，每个 slide 包含客户头像、姓名、评价内容。

### 4.5. 常见问答 (FAQ)
- **用途**: 在服务详情页或联系我们页面，用手风琴 (Accordion) 形式解答常见问题。
- **交互**: 点击问题标题，平滑展开答案，同时右侧的 `+` 图标变为 `-`。

### 4.6. 页脚 (Footer)
- **结构**: 简洁的两到三列布局。左侧为 Logo 和版权信息，中间为核心页面链接，右侧为诊所地址和联系电话。

---

## 5. SEO、可访问性与性能

### 5.1. SEO (搜索引擎优化)
- **元数据**:
  - `<title>`: `[页面核心内容] - Hairey 牙科诊所`
  - `meta description`: 150-160 字符，包含核心服务、地理位置和品牌名。
- **结构化数据 (JSON-LD)**: 至关重要，尤其是对于本地业务。
  - **JSON-LD 模板 (`Organization` + `LocalBusiness/Dentist`)**:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Hairey 牙科诊所",
      "image": "https://www.hairey.com/logo.png",
      "@id": "https://www.hairey.com/",
      "url": "https://www.hairey.com/",
      "telephone": "+86-010-12345678",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "某某市某某区某某街道 123 号",
        "addressLocality": "某某市",
        "postalCode": "100000",
        "addressCountry": "CN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.9042,
        "longitude": 116.4074
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "16:00"
        }
      ],
      "sameAs": [
        "https://www.wechat.com/your-page",
        "https://www.xiaohongshu.com/your-page"
      ]
    }
    ```
- **技术 SEO**:
  - **语义化 HTML**: 正确使用 `<h1>`-`<h6>`, `<nav>`, `<main>`, `<footer>` 等。图片必须包含描述性的 `alt` 文本。
  - **`sitemap.xml`**: 生成并提交，包含所有公开页面。

### 5.2. 可访问性 (Accessibility - a11y)
- **键盘可达性**: 所有链接、按钮、表单控件都可通过 `Tab` 键聚焦。
- **对比度**: 确保文本与背景色对比度符合 WCAG AA 级别。
- **表单标签**: 所有表单输入框都有明确的 `<label>`。

### 5.3. 性能 (Performance)
- **图片优化**:
  - **格式**: 优先使用 `.webp`。
  - **懒加载**: 所有非首屏图片使用 `loading="lazy"`。
  - **预加载**: 首页 Hero 背景图使用 `<link rel="preload">`。
- **脚本**: JS 脚本使用 `defer` 或 `async` 加载，避免阻塞渲染。
- **CDN**: 将网站部署在支持全球 CDN 的平台 (如 Vercel, Netlify)。

---

## 6. 实现蓝图

### 6.1. 技术选型建议
- **框架**: **Next.js** (推荐) 或 **Vite + React/Vue**。Next.js 的 SSG (静态站点生成) 能力非常适合此类网站，能提供最佳的 SEO 和性能。
- **CSS**: **Tailwind CSS**。其原子化 CSS 方法能快速、一致地实现设计系统。
- **数据驱动**: 导航和页脚链接应由一个集中的配置文件 (如 `lib/navigation.json`) 生成，而不是在代码中硬编码。
  ```json
  // lib/navigation.json
  {
    "mainNav": [
      { "title": "首页", "href": "/" },
      { "title": "关于我们", "href": "/about-us" },
      ...
    ]
  }
  ```

### 6.2. 目录结构 (以 Next.js 为例)
```
/src
|-- /app
|   |-- / (首页)
|   |   |-- page.tsx
|   |-- /about-us
|   |   |-- page.tsx
|   |-- /service
|   |   |-- /[slug]
|   |   |   |-- page.tsx
|   |   |-- page.tsx
|   |-- layout.tsx
|-- /components
|   |-- /ui (Button.tsx, Card.tsx)
|   |-- /layout (Navbar.tsx, Footer.tsx)
|-- /lib
|   |-- navigation.json (导航数据)
|   |-- services.ts (服务内容数据)
|-- /public
|   |-- /images
```

### 6.3. 预约表单建议字段
- **姓名** (必填)
- **手机号** (必填，带格式验证)
- **咨询/预约的服务项目** (下拉选择，可多选)
- **期望的预约日期** (日期选择器)
- **备注** (选填，文本域)

---

## 7. 复刻执行步骤

另一个 AI 或开发者可按此步骤高效复刻：

1.  **项目初始化**:
    - 使用 `create-next-app` 并集成 Tailwind CSS。
    - 根据第 3 节 (设计令牌)，配置 `tailwind.config.js`。
2.  **组件与布局构建**:
    - 在 `/components` 目录中，创建 `Navbar` 和 `Footer` 布局组件。
    - 从 `lib/navigation.json` 读取数据，动态生成导航链接。
    - 创建 `Card`, `Button` 等通用 UI 组件。
3.  **页面内容注入**:
    - 创建 `/app` 下的各个路由页面 (`page.tsx`)。
    - 将服务、产品等内容抽象为数据文件 (如 `lib/services.ts`)，页面组件读取数据并循环渲染 `Card` 组件。
4.  **应用交互与优化**:
    - 在 `Navbar` 中实现滚动粘性和移动端抽屉菜单逻辑。
    - 为卡片和按钮添加 `:hover` 伪类样式。
    - 检查并确保所有图片都已优化并使用懒加载。
5.  **部署与验证**:
    - 将代码推送到 GitHub，并连接到 Vercel/Netlify 进行自动部署。
    - 部署后，使用 Google PageSpeed Insights 和 Lighthouse 检查性能、SEO 和可访问性得分。
    - 验证 JSON-LD 结构化数据是否正确。
