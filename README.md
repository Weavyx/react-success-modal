# @weavyx/react-success-modal

[![npm version](https://img.shields.io/npm/v/@weavyx/react-success-modal.svg)](https://www.npmjs.com/package/@weavyx/react-success-modal)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@weavyx/react-success-modal)](https://bundlephobia.com/package/@weavyx/react-success-modal)

> 🎉 A beautiful, lightweight and customizable success modal component for React applications with full TypeScript support

## ✨ Features

- 🚀 **Lightweight** - Only ~9.5KB minified (3.7KB CSS + 9.5KB JS) + TypeScript definitions
- 🎨 **Beautiful Design** - Modern gradient background with smooth animations
- 📱 **Responsive** - Works perfectly on desktop and mobile devices
- ⌨️ **Keyboard Support** - ESC key to close, proper focus management
- 🔧 **Easy Integration** - Works with any React routing system
- 🎯 **TypeScript Ready** - Full TypeScript support included
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🎭 **Customizable** - Flexible callback system for custom actions

## 📋 Prerequisites

- **Node.js**: Version 16.0.0 or higher
- **React**: Version 18.0.0 or 19.x
- **Package Manager**: npm, yarn, or pnpm

## 🛠️ Development Environment

**Recommended:**

- **IDE**: VS Code with React extensions
- **Node.js**: v16+ (LTS recommended)
- **Package Manager**: npm v8+ / yarn v1.22+ / pnpm v7+

## 📦 Installation

```bash
npm install @weavyx/react-success-modal
```

```bash
yarn add @weavyx/react-success-modal
```

```bash
pnpm add @weavyx/react-success-modal
```

## � TypeScript Support

This package includes full TypeScript definitions! Even if you're using JavaScript, you'll get:

- ✅ **IntelliSense** - Auto-completion in VS Code
- ✅ **Type hints** - See available props while typing
- ✅ **Error detection** - Catch prop mistakes early
- ✅ **Better docs** - Hover to see prop descriptions

```typescript
// Types are automatically available
import SuccessModal, { EmployeeData } from '@weavyx/react-success-modal';

const employee: EmployeeData = {
  firstName: 'John',
  lastName: 'Doe'
  // VS Code will suggest other available properties!
};
```

> **Note:** TypeScript definitions add only 1.3KB to the package size while providing excellent developer experience.

## �🚀 Quick Start

```jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessModal from '@weavyx/react-success-modal';
import '@weavyx/react-success-modal/dist/index.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const employeeData = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1990-01-15',
    startDate: '2024-01-01',
    department: 'Engineering',
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001'
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show Success Modal
      </button>

      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        employeeData={employeeData}
        onViewEmployees={() => navigate('/employees')}
        onCreateAnother={() => {
          // Reset your form here
          console.log('Creating another employee...');
        }}
      />
    </>
  );
}
```

## 📖 API Reference

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `isOpen` | `boolean` | ✅ | Controls whether the modal is visible |
| `onClose` | `function` | ✅ | Callback function called when modal should be closed |
| `employeeData` | `object` | ✅ | Employee information to display |
| `onViewEmployees` | `function` | ❌ | Callback for "View Employees" button click |
| `onCreateAnother` | `function` | ❌ | Callback for "Create Another Employee" button click |

### Employee Data Object

```typescript
interface EmployeeData {
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  startDate?: string;
  department?: string;
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}
```

## 🎨 Examples

### Basic Usage

```jsx
<SuccessModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  employeeData={{
    firstName: 'Jane',
    lastName: 'Smith',
    department: 'Marketing'
  }}
/>
```

### With Navigation (React Router)

```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  return (
    <SuccessModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      employeeData={employee}
      onViewEmployees={() => {
        navigate('/employees');
        setShowModal(false);
      }}
      onCreateAnother={() => {
        resetForm();
        setShowModal(false);
      }}
    />
  );
}
```

### With Next.js Router

```jsx
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();

  return (
    <SuccessModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      employeeData={employee}
      onViewEmployees={() => {
        router.push('/employees');
        setShowModal(false);
      }}
    />
  );
}
```

## 🎯 Features in Detail

### Keyboard Support

- Press `ESC` to close the modal
- Automatic focus management
- Prevents background scrolling when open

### Mobile Responsive

- Adapts to different screen sizes
- Touch-friendly buttons
- Optimized spacing for mobile devices

### Accessibility

- WCAG 2.1 AA compliant
- Proper ARIA labels and roles
- Screen reader friendly
- Focus trap within modal

## 🎨 Customization

The modal comes with beautiful default styles, but you can customize it by overriding CSS classes:

```css
/* Override modal background */
.success-modal {
  background: linear-gradient(135deg, #your-color-1, #your-color-2);
}

/* Customize button styles */
.success-modal-btn--primary {
  background: #your-primary-color;
}

/* Responsive customization */
@media (max-width: 768px) {
  .success-modal {
    margin: 1rem;
  }
}
```

## 🔧 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+

## 📄 License

MIT © [Maxime Nardelli (Weavyx)](https://github.com/Weavyx)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📊 Bundle Size

| File | Size | Gzipped |
|------|------|---------|
| CSS | 3.7KB | 1.15KB |
| JS (ES) | 19.7KB | 4.65KB |
| JS (UMD) | 9.5KB | 3.45KB |
| Types (TS) | 1.3KB | - |

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/@weavyx/react-success-modal)
- [GitHub Repository](https://github.com/Weavyx/react-success-modal)
- [Issues](https://github.com/Weavyx/react-success-modal/issues)

---

*Built with ❤️ by [Weavyx](https://github.com/Weavyx)*
