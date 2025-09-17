# 🌍 World Clock Website


![CI/CD Pipeline](https://github.com/wulukewu/clock-website-2025/actions/workflows/ci-cd.yml/badge.svg)
![Quality & Security Checks](https://github.com/wulukewu/clock-website-2025/actions/workflows/quality.yml/badge.svg)

A beautiful, responsive React-based world clock website that displays real-time clocks for different timezones around the world. Users can interactively select and deselect timezones to customize their view.

## ✨ Features

- **🌐 Multiple Timezone Support**: Display clocks for major cities worldwide
- **🎨 Interactive Interface**: Click to add/remove timezone clocks
- **⏰ Real-time Updates**: All clocks update every second
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🎯 Modern UI**: Beautiful glass morphism design with animations
- **⚡ Performance**: Fast loading and optimized React components

## 🏗️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: CSS3 with modern features (backdrop-filter, gradients)
- **Date/Time**: Native JavaScript Intl API for timezone handling
- **Testing**: Jest + React Testing Library
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages

## 🚀 Live Demo

Visit the live website: [https://wulukewu.github.io/clock-website-2025](https://wulukewu.github.io/clock-website-2025)

## 📱 Screenshots

![World Clock Interface](https://github.com/user-attachments/assets/a979f392-19e8-4b39-89cc-47aea868a42e)

## 🛠️ Installation & Development

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/wulukewu/clock-website-2025.git
   cd clock-website-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Run tests**
   ```bash
   npm test
   ```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Clock.tsx              # Individual clock component
│   ├── Clock.css              # Clock styling
│   ├── TimezoneSelector.tsx   # Timezone selection interface
│   └── TimezoneSelector.css   # Selector styling
├── App.tsx                    # Main application component
├── App.css                    # Global app styling
└── App.test.tsx              # Application tests
```

## 🌍 Supported Timezones

- New York (EST/EDT)
- Los Angeles (PST/PDT)
- Chicago (CST/CDT)
- London (GMT/BST)
- Paris (CET/CEST)
- Tokyo (JST)
- Shanghai (CST)
- Dubai (GST)
- Sydney (AEST/AEDT)
- UTC

## 🔧 Configuration

The application uses native JavaScript `Intl.DateTimeFormat` for timezone handling, ensuring accurate time display without external dependencies.

## 🧪 Testing

The project includes comprehensive tests for:
- Component rendering
- User interactions
- Timezone functionality
- UI state management

Run tests with coverage:
```bash
npm test -- --coverage --watchAll=false
```

## 🚀 CI/CD Pipeline

The project includes automated GitHub Actions workflows for:

### Continuous Integration
- **Linting**: Code style checks
- **Testing**: Automated test execution with coverage
- **Building**: Production build verification
- **Security**: Dependency vulnerability scanning

### Continuous Deployment
- **GitHub Pages**: Automatic deployment on main branch
- **Quality Gates**: Deploy only after all checks pass

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Contributors to the timezone data standards
- GitHub for providing free hosting via GitHub Pages

---

Built with ❤️ by [wulukewu](https://github.com/wulukewu)
