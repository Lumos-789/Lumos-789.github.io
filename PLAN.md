# 简历个人项目 — 完整执行计划

## 总览

4 个新 GitHub 仓库 + 1 个已有仓库 → 简历个人项目板块展开

| # | 仓库 | 分支策略 | 状态 |
|---|------|---------|------|
| 1 | `Lumos-789/Guster` | orphan `public` 分支 | 新建 |
| 2 | `Lumos-789/AutoGoods` | orphan `public` 分支 | 新建 |
| 3 | `Lumos-789/EasyCC` | 新仓库，从 DFPP-513 拷贝 | 新建 |
| 4 | `Lumos-789/agent-skills` | 直接推，纯框架 | 新建 |
| 5 | `Lumos-789/VoiceTranser` | 已有，不动 | ✅ |
| 6 | `Lumos-789/Lumos-789.github.io` | 已有，最后更新简历 | ✅ |

---

## Phase 1: 建仓库

### 1.1 Guster

```
gh repo create Lumos-789/Guster --public --description "AI-powered project management hub — personal agent framework built on Claude Code"
```

**分支策略**: orphan `public` 分支推到 GitHub，本地 `main` 不推

**推送文件清单**:

| 推 ✅ | 不推 ❌ |
|-------|---------|
| `README.md`（新建，给 GitHub 受众） | `projects/` 所有实际项目卡片（ducky.md 等） |
| `CLAUDE.md`（脱敏：去掉管理项目一览表中的具体公司名，保留框架定义） | `reports/`（日报、收工报告） |
| `core/CLAUDE.md`（skill/tool/store 清单 + 数据流） | `handoff/`（交接队列） |
| `strategy.md`（脱敏：去掉具体项目名） | `ideas/`（个人想法） |
| `incubator/` 全部（README + 模板 + 方法论） | `self-drive/experiences/2026-*`（实际经验） |
| `knowledge/README.md` + `knowledge/general/*.md` | `self-drive/reflections/` 实际反思文件 |
| `knowledge/projects/template.md` | `self-drive/insights/` 实际洞察文件 |
| `self-drive/README.md` | `self-drive/dashboard.md`（实际评分） |
| `self-drive/experiences/README.md` | `knowledge/projects/` 实际项目知识 |
| `self-drive/insights/README.md` | `provision/tracker.md`（含服务凭证信息） |
| `self-drive/reflections/README.md` | `provision/chrome-takeover-setup.md` |
| `provision/README.md` | `.claude/`（session 数据） |
| `projects/_registry.md`（脱敏：只留表头和一行示例） | `scripts/`（个人工具脚本） |
| `projects/archive.md`（脱敏：清空实际条目） | `plans/`（生成的计划文档） |
| `.gitignore`（新建） | `logo*.png`、`logo.svg`（个人 branding） |
| `LICENSE`（MIT） | `self-drive/dashboard.md`（实际评分 — 推一个重置模板版） |

**新建文件**:
- `README.md`: 项目介绍 + 截图占位 + 功能列表 + 快速开始 + 目录结构说明
- `.gitignore`: 排除 reports/, handoff/, ideas/, .claude/, plans/, *.png, *.svg, scripts/ 等
- `projects/_registry.md`: 只留表头 + 一行示例
- `self-drive/dashboard.md`: 重置为空模板（评分清零）

---

### 1.2 AutoGoods

```
gh repo create Lumos-789/AutoGoods --public --description "Automated content publishing to Zhihu/Xiaohongshu/Bilibili — CDP-driven multi-platform pipeline"
```

**分支策略**: orphan `public` 分支

**推送文件清单**:

| 推 ✅ | 不推 ❌ |
|-------|---------|
| `README.md`（新建） | `content/`（个人草稿、截图） |
| `CLAUDE.md`（脱敏：去掉凭据相关描述） | `config.yaml`（含 Cookie 和 API Key） |
| `main.py` | `.claude/` |
| `requirements.txt` | |
| `src/` 全部（publisher/、content/、config.py） | |
| `config.yaml.example`（新建，脱敏模板） | |

**新建文件**:
- `README.md`: 项目介绍 + 支持平台表 + 使用方式 + 技术栈
- `config.yaml.example`: 模板配置，所有凭据字段用 `your-xxx-here` 占位
- `.gitignore`: content/, config.yaml, .claude/, screenshots/

---

### 1.3 EasyCC

```
gh repo create Lumos-789/EasyCC --public --description "AI workflow desktop app — Electron + React + Claude Code CLI, plugin-based flow system"
```

**策略**: 全新仓库，从 DFPP-513 拷贝后清理

**执行步骤**:
1. 创建临时目录 `/tmp/easycc-public`
2. `git init` + orphan 方式（直接新仓库，无历史）
3. 从 DFPP-513 拷贝以下内容：

| 拷贝 ✅ | 不拷贝 ❌ |
|---------|----------|
| `packages/` 全部（core/main/preload/renderer） | `node_modules/` |
| `shared/`（types.ts 等） | `dist/`、`dist-electron/` |
| `flows/` 全部（Demo/SysSnap/DailyNote） | `.env` 文件 |
| `CLAUDE.md` | `build/` 产物 |
| `README.md`（已有，质量不错） | `package-lock.json`（太大，用户重新 npm install） |
| `LICENSE`（MIT） | |
| `package.json` | |
| `electron-builder.yml` | |
| `tsconfig.base.json` | |
| `vitest.config.ts` | |
| `.gitignore`（已有） | |
| `EASYCC_FRAMEWORK_BRIEF.md`（可选，设计文档） | |

**注意**: README.md 里的 `YOUR_USER` 占位要改成 `Lumos-789`

---

### 1.4 agent-skills

```
gh repo create Lumos-789/agent-skills --public --description "Reusable Claude Code skills — handoff queue, daily wrap-up, design interrogation, self-evolution loop"
```

**策略**: 新仓库，纯框架，直接推 main

**推送文件清单**:

```
agent-skills/
├── README.md                    # 新建：完整介绍 + 使用方式
├── LICENSE                      # MIT
├── .gitignore
└── skills/
    ├── 完事/SKILL.md
    ├── 收工/SKILL.md
    ├── 下班/SKILL.md
    ├── 整理现状/SKILL.md
    ├── 审问/
    │   ├── SKILL.md
    │   ├── ADR-FORMAT.md
    │   └── CONTEXT-GUIDE.md
    ├── 转手/SKILL.md
    ├── 接手/SKILL.md
    ├── 记忆盘点/SKILL.md
    ├── 复盘/SKILL.md
    ├── 自驱/SKILL.md
    └── 看看/SKILL.md             # 从 Guster .claude/skills/ 拷贝
```

**Skill 脱敏处理**:
- 每个 skill 文件中的具体项目路径（如 `../Ducky/`）→ 改为通用占位如 `your-project/`
- Guster 特有的 store 引用（如 `projects/_registry.md`）→ 加注释说明用户可自行适配
- 保留 skill 的核心逻辑和流程

**README.md 内容规划**:
- 项目介绍：个人 Agent 框架的可复用 Skill 合集
- 设计理念：markdown 即 skill，Claude 读懂就执行
- Skill 一览表：名称 + 触发 + 一句话说明
- 使用方式：copy 到 `~/.claude/skills/` 即可
- 依赖说明：哪些 skill 需要 Guster 目录结构，哪些独立可用
- 分类标注：独立可用 vs 需要 Guster 环境

---

## Phase 2: 更新简历

### 2.1 个人项目板块展开

从 inline 格式升级为 `proj-item`（带 detail），每个项目结构：

```
标题行：时间 + 项目名 + GitHub 链接 pill
detail:
  - 定位/背景
  - 技术栈
  - 核心亮点（2-3 条）
```

**每个项目具体内容**:

#### Guster
```
标题: Guster · 多项目 AI Agent 中枢
链接: github.com/Lumos-789/Guster

- 定位：以 Agent 角色统筹 8+ 项目的进度追踪、规划决策与新项目孵化
- 技术栈：Claude Code CLI + Markdown DSL
- 核心能力：
  - Skill 工作流体系（三级收工、审问、转手/接手等 11 个标准化流程）
  - Knowledge + Memory 双层知识管理，自动加载退化
  - OODA 闭环自驱进化：经验提取 → 反思 → 洞察 → 行动
  - 从需求发现到项目孵化的完整链路
```

#### AutoGoods
```
标题: AutoGoods · 多平台内容自动发布
链接: github.com/Lumos-789/AutoGoods

- 定位：CDP 驱动多平台内容自动化发布，覆盖知乎/小红书/B站
- 技术栈：Python + CDP (websockets) + Draft.js/ProseMirror 注入
- 核心能力：
  - CDP 浏览器自动化，适配无 API 平台（知乎、小红书）
  - AI 辅助内容生成 + 4 轮 Review（格式/调性/AI味/元数据泄漏）
  - 统一 Publisher 抽象层，新增平台只需实现接口
```

#### VoiceTranser
```
标题: VoiceTranser · 语音输入智能精炼
链接: github.com/Lumos-789/VoiceTranser

- 定位：全局热键录音 → 本地转写 → AI 精炼 → 自动粘贴，日常高频使用
- 技术栈：Python + mlx-whisper (Apple Silicon 本地 STT) + MiniMax (AI 精炼)
- 核心能力：
  - 本地 HTTP toggle 服务器，外部快捷键工具触发，零感使用
  - STT 完全本地运行（mlx-whisper large-v3），无网络依赖
  - 开机自启 + 崩溃自动恢复，生产级稳定性
```

#### EasyCC
```
标题: EasyCC · Claude Code UI 增强
链接: github.com/Lumos-789/EasyCC

- 定位：Electron 桌面 App，为 Claude Code CLI 提供 UI 增强和 Flow 插件系统
- 技术栈：Electron + React 18 + TypeScript + Vite + Zustand
- 核心能力：
  - 4 层架构：Renderer → Preload → Main → Core（Core 零 Electron 依赖）
  - Flow 插件系统：目录即插件，FLOW.md frontmatter 定义，动态加载
  - 多 Profile 管理 + API Key 加密 + 跨会话 Memory
```

#### agent-skills
```
标题: Agent Skills · 可复用 Claude Code Skill 合集
链接: github.com/Lumos-789/agent-skills

- 定位：个人 Agent 框架沉淀的可复用 Skill，copy 即用
- 核心技能：
  - 转手/接手 — FIFO 交接队列，跨 session 传递任务（原创设计）
  - 三级收工 — 事项/项目/日终，自动追踪进度与经验提取
  - 审问 — 逼出设计决策，建术语表，记 ADR
  - 自驱/复盘 — OODA 闭环积累经验与反思，驱动自我进化
```

### 2.2 GitHub 链接样式

复用现有 `contact-link` pill 样式（简历 header 里的在线浏览按钮），在项目标题行加一个小 pill：

```html
<span class="name">
  Guster · 多项目 AI Agent 中枢
  <a href="https://github.com/Lumos-789/Guster" target="_blank"
     style="...pill 样式...">
    GitHub
  </a>
</span>
```

如果 pill 样式太突兀，可以简化为标题旁的内联链接。

---

## Phase 3: 执行顺序

```
Step 1: 建仓库
  ├── gh repo create × 4
  │
Step 2: 准备推送内容
  ├── Guster:    创建工作目录，拷贝+脱敏文件
  ├── AutoGoods: 创建工作目录，拷贝+脱敏文件
  ├── EasyCC:    从 DFPP-513 拷贝到临时目录，清理
  ├── agent-skills: 创建目录，拷贝 skill 文件，脱敏
  │
Step 3: 推送
  ├── Guster:    orphan public 分支推送
  ├── AutoGoods: orphan public 分支推送
  ├── EasyCC:    新仓库 main 分支推送
  ├── agent-skills: 新仓库 main 分支推送
  │
Step 4: 更新简历 HTML
  ├── 个人项目板块从 inline 改为 detail 格式
  ├── 加入 GitHub 链接
  ├── 本地预览确认
  │
Step 5: 推送简历
  └── push 到 Lumos-789.github.io
```

---

## 注意事项

1. **脱敏原则**: 只推框架和通用逻辑，个人信息（项目名、凭据、日报、想法）一律不推
2. **orphan 分支**: Guster 和 AutoGoods 用 orphan 分支，确保本地 main 历史不泄露
3. **EasyCC 无历史问题**: 全新仓库从临时目录 init，DFPP-513 的 GitCode 历史完全独立
4. **agent-skills 最干净**: 纯 md 文件，无个人数据，几乎不需要脱敏
5. **后续维护**: 框架更新时切到 public 分支手动同步，日常用 main 不受影响
6. **README 面向受众**: 给开源社区看，不是给自己看的 — 要写清楚是什么、为什么、怎么用
7. **License**: 全部 MIT，EasyCC 已有，其余新建
