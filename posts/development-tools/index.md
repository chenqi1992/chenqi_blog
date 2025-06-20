# 开发工具专栏

提升开发效率的工具集合，涵盖编辑器配置、调试技巧、自动化工具等实用内容。

## 📚 文章目录

### 编辑器与 IDE
- [VS Code 插件开发指南](./vscode-plugins-guide.md)
  - 插件开发环境搭建
  - 核心 API 和扩展点
  - 实战案例：开发自定义插件
  - 发布和维护最佳实践

## 🎯 工具分类

### 🔧 编辑器配置
- **VS Code** - 前端开发首选编辑器
- **WebStorm** - 功能强大的 IDE
- **Sublime Text** - 轻量级文本编辑器
- **Vim/Neovim** - 高效的命令行编辑器

### 🐛 调试工具
- **Chrome DevTools** - 浏览器调试神器
- **React DevTools** - React 专用调试工具
- **Vue DevTools** - Vue.js 调试扩展
- **Redux DevTools** - 状态管理调试

### 📦 包管理工具
- **npm** - Node.js 默认包管理器
- **yarn** - 快速、可靠的包管理器
- **pnpm** - 高效的磁盘空间利用
- **ni** - 通用包管理器接口

### 🚀 构建与部署
- **Vite** - 现代前端构建工具
- **Webpack** - 模块打包器
- **Rollup** - JavaScript 模块打包器
- **Parcel** - 零配置构建工具

## 🛠️ 推荐工具链

### 基础开发环境
```bash
# 必备工具安装
npm install -g @vue/cli          # Vue CLI
npm install -g create-react-app  # React 脚手架
npm install -g typescript        # TypeScript 编译器
npm install -g eslint            # 代码检查
npm install -g prettier          # 代码格式化
```

### VS Code 必备插件
- **Auto Rename Tag** - 自动重命名标签
- **Bracket Pair Colorizer** - 括号配对着色
- **ES7+ React/Redux/React-Native snippets** - React 代码片段
- **GitLens** - Git 增强工具
- **Live Server** - 本地开发服务器
- **Prettier** - 代码格式化
- **ESLint** - 代码质量检查
- **Thunder Client** - API 测试工具

### 命令行工具
- **oh-my-zsh** - Zsh 配置框架
- **nvm** - Node.js 版本管理
- **git** - 版本控制系统
- **curl** - 网络请求工具
- **jq** - JSON 处理工具

## 🎨 配置文件模板

### .vscode/settings.json
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "files.associations": {
    "*.jsx": "javascriptreact",
    "*.tsx": "typescriptreact"
  }
}
```

### .eslintrc.js
```javascript
module.exports = {
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
```

### .prettierrc
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
```

## 🚀 效率提升技巧

### 快捷键大全
- **Ctrl/Cmd + P** - 快速打开文件
- **Ctrl/Cmd + Shift + P** - 命令面板
- **Ctrl/Cmd + D** - 选择相同单词
- **Alt + Click** - 多光标编辑
- **Ctrl/Cmd + /** - 切换注释

### 代码片段 (Snippets)
```json
{
  "React Functional Component": {
    "prefix": "rfc",
    "body": [
      "import React from 'react'",
      "",
      "const ${1:ComponentName} = () => {",
      "  return (",
      "    <div>",
      "      $0",
      "    </div>",
      "  )",
      "}",
      "",
      "export default ${1:ComponentName}"
    ]
  }
}
```

### Git 工作流
```bash
# 常用 Git 命令
git add .                    # 暂存所有更改
git commit -m "feat: 新功能"  # 提交更改
git push origin main         # 推送到远程
git pull origin main         # 拉取最新代码
git checkout -b feature/xxx  # 创建新分支
```

## 📖 相关资源

- [前端工程化](../frontend-engineering/) - 构建工具深度解析
- [React 系列](../react/) - React 开发工具配置
- [TypeScript 系列](../ts/) - TypeScript 开发环境
- [性能优化](../performance/) - 性能分析工具

## 💡 工具选择建议

### 新手开发者
1. **VS Code** + 基础插件包
2. **Chrome DevTools** 基础调试
3. **npm** 包管理
4. **Git** 版本控制基础

### 进阶开发者
1. 自定义 **VS Code** 配置和插件
2. 掌握 **Chrome DevTools** 高级功能
3. 使用 **yarn** 或 **pnpm** 优化包管理
4. **Git** 分支管理和协作流程

### 高级开发者
1. 开发自定义 **VS Code** 插件
2. 性能分析和优化工具
3. **CI/CD** 自动化部署
4. 团队工具链标准化

---

*工欲善其事，必先利其器*
