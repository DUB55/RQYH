# PWA Configuration - Ruqiyah voor Kinderen

## 📱 iOS PWA Specificaties

### app.json Configuratie
```json
{
  "expo": {
    "name": "Ruqiyah voor Kinderen",
    "slug": "ruquiyah-kinderen",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./public/icon-512.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./public/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#1a5f3a"
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.ruqiyah.kinderen"
    },
    "web": {
      "favicon": "./public/favicon.png",
      "output": "static",
      "bundler": "metro"
    },
    "plugins": [
      [
        "expo-font",
        {
          "fonts": [
            "@expo-google-fonts/noto-naskh-arabic/NotoNaskhArabic_400Regular.ttf"
          ]
        }
      ]
    ]
  }
}
```

### manifest.json Configuratie
```json
{
  "short_name": "Ruqiyah Kids",
  "name": "Ruqiyah voor Kinderen - Islamitische Smeekbeden",
  "description": "Lees en beluister ruqiyah smeekbeden voor kinderen met Arabische tekst, Nederlandse vertaling en uitspraak",
  "icons": [
    {
      "src": "favicon.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "icon-512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#1a5f3a",
  "background_color": "#f5f5f5",
  "orientation": "portrait",
  "lang": "nl",
  "dir": "ltr"
}
```

## 🎨 Assets Specificaties

### App Icon (icon-512.png)
- **Formaat**: 512x512px
- **Achtergrond**: #1a5f3a (donkergroen)
- **Icoon**: Boek of moskee symbool
- **Style**: Clean, minimalistisch
- **Kleur**: Wit of goud

### Favicon (favicon.png)
- **Formaat**: 192x192px
- **Design**: Zelfde als app icon
- **Transparantie**: Ondersteund
- **Optimalisatie**: Web-geoptimaliseerd

### Splash Screen (splash.png)
- **Formaat**: 1242x2436px (iPhone X+ ratio)
- **Achtergrond**: #1a5f3a
- **Logo**: Gecentreerd app icon
- **Text**: Optioneel "Ruqiyah voor Kinderen"
- **Style**: Clean en professioneel

## 🚀 PWA Features

### Installatie Prompts
```typescript
// Installation guide component
const InstallationGuide = () => (
  <View style={styles.modal}>
    <Text style={styles.modalTitle}>📲 Installeer deze App</Text>
    <Text style={styles.modalText}>
      1. Tik op de Deel knop (📤) in Safari{'\n'}
      2. Scroll naar beneden{'\n'}
      3. Tik op "Zet op beginscherm"{'\n'}
      4. Tik op "Voeg toe"
    </Text>
  </View>
);
```

### Service Worker (Optioneel)
- Offline support voor basis functionaliteit
- Cache van fonts en static assets
- Audio streaming vereist internet

## 📋 iOS PWA Vereisten

### Safari Compatibility
- **iOS 11.3+**: Basis PWA support
- **iOS 12.2+**: Verbeterde installatie
- **iOS 13.0+**: Full standalone mode

### Browser Features
- Safe area support
- Status bar configuratie
- Home indicator support
- Notch handling

### Installatie Process
1. Open website in Safari
2. Tik op Deel knop (📤)
3. Scroll naar "Zet op beginscherm"
4. Tik op "Voeg toe"
5. App verschijnt op beginscherm

## 🔧 Technical Implementation

### Expo PWA Plugin
```bash
npx expo install expo-pwa
```

### Build Configuration
```bash
# Development
npx expo start --web

# Production build
npx expo export -p web

# Local testing
npx serve dist
```

### Environment Settings
- **NODE_ENV**: production
- **EXPO_PUBLIC_***: Environment variables
- **HTTPS**: Required voor PWA features

## 📊 Performance Requirements

### Loading Times
- **First Load**: < 3 seconden
- **Font Loading**: < 1 seconde
- **Audio Start**: < 1 seconde
- **Scroll Performance**: 60fps

### Bundle Size
- **JavaScript**: < 1MB (gzipped)
- **Fonts**: ~200KB (Noto Naskh Arabic)
- **Images**: < 100KB totaal
- **Audio**: Streaming (niet gebundeld)

## 🎯 User Experience

### App Launch
- Splash screen met branding
- Snelle transition naar main app
- Font loading states
- Smooth animations

### Navigation
- Single page, scrollable
- Intuitive audio controls
- Clear visual hierarchy
- Consistent styling

### Feedback
- Loading indicators
- Audio playback states
- Error messages
- Success confirmations

## 🔍 Testing Checklist

### PWA Installation
- [ ] Installeer op iOS Safari
- [ ] Opens in standalone mode
- [ ] Icon correct weergegeven
- [ ] Splash screen werkt
- [ ] Status bar correct

### Functionality
- [ ] Alle smeekbeden toegankelijk
- [ ] Audio afspelen werkt
- [ ] Scrollen soepel
- [ ] Fonts laden correct
- [ ] Responsive design

### Performance
- [ ] Laadtijd < 3 seconden
- [ ] Scroll 60fps
- [ ] Geen memory leaks
- [ ] Efficient audio handling
- [ ] Proper cleanup

## 🚨 Troubleshooting

### Common Issues
- **PWA niet installeerbaar**: Check HTTPS en manifest
- **Audio laadt niet**: Check network en CORS
- **Fonts niet zichtbaar**: Check font loading
- **Scroll niet soepel**: Check performance optimization

### Debug Tools
- Safari Web Inspector
- Expo DevTools
- Console logging
- Network tab
- Performance profiling
