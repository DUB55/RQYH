# Ruqiyah voor Kinderen PWA - Project Plan

## 📋 Project Overzicht
- **App Naam**: Ruqiyah voor Kinderen
- **Platform**: iOS PWA via Expo Go
- **Taal**: Nederlands (primaire)
- **Type**: Progressive Web App
- **Doel**: Islamitische smeekbeden lezen en beluisteren voor kinderen

## 🎯 Kernfunctionaliteiten
1. ✅ 6 authentieke ruqiyah smeekbeden weergeven
2. ✅ Arabische tekst met Noto Naskh Arabic font
3. ✅ Nederlandse vertaling prominent
4. ✅ Fonetiche uitspraak (Nederlands)
5. ✅ Audio afspelen per smeekbede
6. ✅ Scrollbare interface
7. ✅ iOS PWA installatie

## 🏗️ Technische Stack
- **Framework**: Expo SDK 50+ (React Native)
- **Taal**: TypeScript
- **Styling**: StyleSheet (React Native)
- **Audio**: expo-av
- **Fonts**: @expo-google-fonts/noto-naskh-arabic
- **PWA**: expo-pwa

## 📁 Project Structuur
```
ruquiyah-children/
├── app.json                    # Expo configuratie
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript
├── public/
│   ├── manifest.json          # PWA manifest
│   ├── favicon.png            # 192x192
│   └── icon-512.png           # 512x512
├── src/
│   ├── data/
│   │   └── supplications.ts    # Smeekbeden data
│   ├── components/
│   │   ├── SupplicationCard.tsx
│   │   ├── ArabicText.tsx
│   │   ├── AudioPlayer.tsx
│   │   └── Header.tsx
│   ├── hooks/
│   │   └── useAudio.ts
│   ├── types/
│   │   └── index.ts
│   └── styles/
│       └── theme.ts
└── App.tsx                     # Hoofd component
```

## 🎨 UI/UX Specificaties
- **Kleurenschema**: Groen thema (#1a5f3a primair)
- **Typography**: Arabisch 28pt, Nederlands 16pt
- **Cards**: Wit, rounded corners, shadow
- **Audio knop**: Rond, 60x60px, groen

## 🔧 Implementatie Stappen
1. ✅ Planning en specificaties
2. ⏳ Expo project opzetten
3. ⏳ TypeScript types definieren
4. ⏳ Components bouwen
5. ⏳ Main App implementeren
6. ⏳ PWA configuratie
7. ⏳ Testing en fixes

## 📱 iOS PWA Vereisten
- Safe area support
- Status bar configuratie
- PWA manifest
- App icon en splash screen
- Standalone display mode

## 🎵 Audio Specificaties
- **Bron**: duaandazkar.com
- **Format**: MP3
- **URL**: https://www.duaandazkar.com/audio_new/CH6DUA1.mp3
- **Features**: Play/pause, loading states, error handling

## ✅ Succes Criteria
- Alle smeekbeden correct weergeven
- Audio soepel afspelen
- Arabische tekst duidelijk leesbaar
- PWA installeerbaar op iOS
- Professionele uitstraling
- Geen crashes
- Snelle laadtijden
