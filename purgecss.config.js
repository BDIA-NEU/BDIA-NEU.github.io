// 在根目录新建 purgecss.config.js
module.exports = {
  // 告诉 PurgeCSS 扫描哪些文件以查找正在使用的 CSS 类
  content: ["_site/**/*.html", "_site/**/*.js"],
  // 你的原始 CSS 文件路径（Jekyll 编译后通常在 _site/assets/css/）
  css: ["_site/assets/css/*.css"],
  // 优化后的 CSS 输出路径
  output: "_site/assets/css/",
  // 如果某些类名被动态加载，可以在这里添加白名单
  safelist: [/fallback-/, /is-active/] 
};