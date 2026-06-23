#!/usr/bin/env node
// HTML → PDF 导出脚本
// 用法: node scripts/export-pdf.mjs
// 依赖: puppeteer-core (全局安装)，本地 Chrome

import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const htmlPath = path.join(root, 'index.html');

// Chrome 路径 (macOS)
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
if (!fs.existsSync(chromePath)) {
  console.error('Chrome not found at:', chromePath);
  process.exit(1);
}
if (!fs.existsSync(htmlPath)) {
  console.error('index.html not found at:', htmlPath);
  process.exit(1);
}

const today = new Date();
const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;
const outputPath = path.join(root, `李孟雷_简历_${dateStr}.pdf`);

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
});

const page = await browser.newPage();
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

await page.pdf({
  path: outputPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '10mm', bottom: '10mm', left: '0', right: '0' },
  displayHeaderFooter: false,
});

await browser.close();

console.log(`✅ PDF 已生成: ${outputPath}`);
