# ProductApp

## Tech Stack

- **Framework**: [Expo](https://expo.dev/) (React Native)
- **Styling**: [Styled Components](https://styled-components.com/) (CSS-in-JS)
- **Navigation**: [@react-navigation/native](https://reactnavigation.org/)
- **API Communication**: [Axios](https://axios-http.com/)
- **State/Hooks**: Custom React Hooks for API integration
- **Icons**: @expo/vector-icons

## Project Structure

```text
ProductApp/
├── src/
│   ├── api/          # API service layers
│   ├── components/   # Reusable UI components
│   ├── hooks/        # Custom React hooks (API, state)
│   ├── navigation/   # Navigation configuration
│   ├── screens/      # Application screens (logic & UI separation)
│   ├── theme/        # Global theme and color tokens
│   └── types/        # TypeScript interfaces and types
├── assets/           # Static assets (images, icons)
├── package.json      # Dependencies and scripts
└── app.json          # Expo configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- [Expo Go](https://expo.dev/expo-go) app on your mobile device (for testing)

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd ProductApp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the Expo development server:

```bash
npx expo start
```

- Scan the QR code with **Expo Go** (Android) or the **Camera app** (iOS).
- Press `i` for iOS simulator or `a` for Android emulator.