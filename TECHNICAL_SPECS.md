# Technical Specifications - Ruqiyah voor Kinderen PWA

## 📋 Dependencies
```json
{
  "dependencies": {
    "expo": "~50.0.0",
    "expo-av": "~13.10.0",
    "expo-font": "~11.10.0",
    "@expo-google-fonts/noto-naskh-arabic": "^0.2.3",
    "expo-status-bar": "~1.11.0",
    "react": "18.2.0",
    "react-native": "0.73.0",
    "react-native-web": "~0.19.6",
    "@expo/vector-icons": "^13.0.0"
  }
}
```

## 🎯 Data Model
```typescript
interface Supplication {
  id: number;
  source: string;
  arabicText: string | string[];
  englishMeaning: string | string[];
  dutchMeaning: string | string[];
  dutchPhonetic: string;
  audioUrl: string;
}
```

## 🎨 Theme Configuration
```typescript
export const theme = {
  colors: {
    primary: '#1a5f3a',
    primaryDark: '#0d3d1f',
    primaryLight: '#e8f5e9',
    background: '#f5f5f5',
    card: '#ffffff',
    text: '#333333',
    textLight: '#666666',
    textMuted: '#999999',
    border: '#e0e0e0'
  },
  spacing: {
    xs: 5, sm: 10, md: 15, lg: 20, xl: 30
  },
  borderRadius: {
    sm: 8, md: 15, lg: 20, full: 9999
  },
  fontSize: {
    xs: 12, sm: 14, md: 16, lg: 18, xl: 20, xxl: 24, arabic: 28
  }
};
```

## 📱 Component Architecture

### Header Component
- Groene achtergrond (#1a5f3a)
- Titel: "Ruqiyah voor Kinderen"
- Subtitel: "Deel 1"
- iOS status bar ruimte

### ArabicText Component
- Noto Naskh Arabic font
- RTL text direction
- Ondersteuning voor meerdere regels
- Font size: 28pt

### AudioPlayer Component
- Play/pause knop (60x60px)
- Loading state
- Error handling
- expo-av integratie

### SupplicationCard Component
- Bron badge
- Arabische tekst
- Audio player
- Nederlandse vertaling
- Fonetiche uitspraak
- Engelse vertaling (optioneel)

## 🔧 Audio Implementation
```typescript
// Audio loading
const { sound } = await Audio.Sound.createAsync(
  { uri: audioUrl },
  { shouldPlay: true }
);

// Cleanup
await sound.unloadAsync();
```

## 📐 Responsive Design
```typescript
const { width, height } = Dimensions.get('window');

export const responsive = {
  isSmallDevice: width < 375,
  isMediumDevice: width >= 375 && width < 768,
  isLargeDevice: width >= 768
};
```

## 🌐 PWA Configuration
### app.json settings
- Name: "Ruqiyah voor Kinderen"
- Orientation: portrait
- Theme color: #1a5f3a
- iOS bundle identifier

### manifest.json settings
- Display: standalone
- Theme color: #1a5f3a
- Language: nl
- Icons: 192x192, 512x512

## 🐛 Error Handling
- Audio loading errors
- Font loading errors
- Network connectivity
- Graceful fallbacks

## ⚡ Performance Optimization
- Component memoization
- Proper cleanup
- Efficient scrolling
- Font preloading
