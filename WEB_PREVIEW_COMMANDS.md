# Web Preview Commands for Ruqiyah Project

## 🌐 Primary Methods (Always Work)

### Method 1: Direct HTML (Easiest)
```bash
start index.html
```
✅ Pros: Simple, no dependencies
⚠️ Cons: Limited PWA features

### Method 2: HTTP Server (Recommended)
```bash
# Option A: Python
python -m http.server 8080

# Option B: Node.js Serve
npx serve -s . -p 8080

# Option C: VS Code Live Server
# Install "Live Server" extension, right-click index.html
```
✅ Pros: Full PWA features, better testing
🌐 URL: http://localhost:8080

## ❌ NOT Working: Expo Web
```bash
# This will FAIL on Windows due to path issue
npx expo start --web
```
Error: `node:sea` path issue on Windows

## 🚀 Online Development (Best Alternative)
1. Push to GitHub
2. Deploy to Vercel/Netlify
3. Get instant live preview

## 📱 Testing Checklist
- [ ] Load in Chrome/Firefox
- [ ] Test audio playback
- [ ] Test on mobile browser
- [ ] Check PWA installation (mobile)
- [ ] Test offline functionality

## 🎯 For Future Projects
Use these methods instead of `expo start --web` on Windows:
- Direct HTML for quick testing
- HTTP server for full features
- Online platforms for collaboration
