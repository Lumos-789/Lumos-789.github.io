# lumos-resume — 个人简历

## 定位

个人简历 HTML 模板，同时服务于两个场景：
- **PDF 简历**：面试/投递用，A4 排版，自动导出
- **在线简历**：GitHub Pages 持续更新，随时可分享链接

## 文件结构

```
lumos-resume/
├── index.html              # 唯一源文件（HTML + 内联 CSS，933 行）
├── scripts/
│   ├── export-pdf.mjs      # HTML→PDF 自动转换（puppeteer-core + Chrome）
│   └── package.json        # puppeteer-core 本地依赖
├── 李孟雷_简历_*.pdf        # PDF 产物（日期命名）
├── PLAN.md                 # GitHub 推送计划（一次性，已执行）
├── CLAUDE.md
└── .gitignore
```

## 技术栈

纯 HTML + 内联 CSS，无框架/依赖。CSS 使用 `@media print` 适配打印。

## 内容分区

| 区块 | HTML 标识 | 说明 |
|------|-----------|------|
| 头部 | `.header` | 姓名、联系方式、GitHub Pages 链接 |
| 教育 | `.section` 教育经历 | 北理工+澳国立 双学位、澳国立硕士 |
| 工作经历 | `.section` 工作经历 | 京东→快手→独立→网易有道 |
| 项目经历 | `.section` 项目经历 | 古法时期 + AI 时期的工作项目 |
| 个人项目 | `.section` 个人项目 | Guster/AutoGoods/VoiceTranser 等 |
| 个人概述 | `.section` 个人概述 | 自我评价 |

## 工作流

1. **编辑内容** → 修改 `index.html`
2. **生成 PDF** → `node scripts/export-pdf.mjs`（自动用当天日期命名）
3. **发布在线** → `git push origin main`，GitHub Pages 自动更新
4. **清理旧 PDF** → 手动删除旧版 PDF 文件

## HTML→PDF 注意事项

- `@page { size: A4 }` 控制纸张大小
- `@media print` 块调整打印样式（去背景、调 padding）
- `break-inside: avoid` 防止项目条目跨页断裂
- 内容变动后务必检查 PDF 分页效果
- 导出脚本 margin 设为 top/bottom 10mm，left/right 0（HTML 自带 padding）

## 远程仓库

- GitHub: `Lumos-789/Lumos-789.github.io`
- Pages: `https://lumos-789.github.io/`
- 分支: `main`
