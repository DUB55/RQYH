# Component Specifications - Ruqiyah voor Kinderen

## 🎨 Component Architectuur Overzicht

### 1. Header Component
**Bestand**: `src/components/Header.tsx`

**Props**: Geen props nodig

**Styling**:
- Achtergrond: #1a5f3a (donkergroen)
- Padding: 20px
- Top padding: 60px (iOS status bar)
- Text align: center
- Border bottom: 3px solid #0d3d1f

**Content**:
- Titel: "Ruqiyah voor Kinderen" (24pt, bold, wit)
- Subtitel: "Deel 1" (16pt, #e0f0e5)

---

### 2. ArabicText Component
**Bestand**: `src/components/ArabicText.tsx`

**Props**:
```typescript
interface ArabicTextProps {
  text: string | string[];
  fontSize?: number;
}
```

**Features**:
- Noto Naskh Arabic font loading
- RTL text direction
- Ondersteuning voor meerdere regels
- Font size: default 26pt

**Styling**:
- Font family: NotoNaskhArabic_400Regular
- Text align: right
- Line height: 40px
- Color: #1a1a1a
- Margin: 15px vertical

---

### 3. AudioPlayer Component
**Bestand**: `src/components/AudioPlayer.tsx`

**Props**:
```typescript
interface AudioPlayerProps {
  audioUrl: string;
  supplicationId: number;
}
```

**Features**:
- Play/pause toggle
- Loading state met ActivityIndicator
- Error handling
- Audio cleanup
- Visual feedback

**Styling**:
- Knop: 60x60px, rond, #1a5f3a
- Icon: wit, 24px
- Shadow effect
- Active state: #0d3d1f, scale 0.95

**States**:
- Loading: ActivityIndicator
- Playing: Pause icon
- Paused: Play icon

---

### 4. SupplicationCard Component
**Bestand**: `src/components/SupplicationCard.tsx`

**Props**:
```typescript
interface SupplicationCardProps {
  data: Supplication;
}
```

**Structuur**:
1. **Bron Badge** (📖 Bron)
2. **Arabische Tekst** (ArabicText component)
3. **Audio Player** (AudioPlayer component)
4. **Nederlandse Vertaling** (prominent)
5. **Fonetiche Uitspraak** (italic, achtergrond)
6. **Engelse Vertaling** (kleiner, optioneel)

**Styling**:
- Achtergrond: wit
- Border radius: 15px
- Shadow: subtle
- Padding: 20px
- Margin: 15px horizontal, 10px vertical

---

### 5. Main App Component
**Bestand**: `App.tsx`

**Features**:
- SafeAreaView voor iOS
- ScrollView voor verticaal scrollen
- Status bar configuratie
- Font loading
- Introductie tekst
- Footer

**Layout**:
```
SafeAreaView
├── StatusBar (light content)
├── Header
├── ScrollView
│   ├── Intro Container
│   ├── SupplicationCard 1
│   ├── SupplicationCard 2
│   ├── ... (6 totaal)
│   └── Footer
└── (einde)
```

---

## 🪝 Custom Hooks

### useAudio Hook
**Bestand**: `src/hooks/useAudio.ts`

**Return values**:
```typescript
{
  isPlaying: boolean;
  isLoading: boolean;
  error: string | null;
  play: () => void;
  pause: () => void;
  toggle: () => void;
}
```

**Features**:
- Audio lifecycle management
- Error handling
- State management
- Cleanup on unmount

---

## 🎯 Styling Guidelines

### Kleurenpalet
- **Primary**: #1a5f3a (donkergroen)
- **Primary Dark**: #0d3d1f (zeer donkergroen)
- **Primary Light**: #e8f5e9 (lichtgroen)
- **Background**: #f5f5f5 (lichtgrijs)
- **Card**: #ffffff (wit)
- **Text**: #333333 (donkergrijs)
- **Text Light**: #666666 (medium grijs)
- **Text Muted**: #999999 (licht grijs)

### Typography
- **Titels**: Bold, 20-24pt
- **Body**: Regular, 16pt
- **Arabisch**: Noto Naskh Arabic, 28pt
- **Fonetisch**: Italic, 15pt
- **Klein**: 14pt

### Spacing
- **XS**: 5px
- **SM**: 10px
- **MD**: 15px
- **LG**: 20px
- **XL**: 30px

### Border Radius
- **Small**: 8px
- **Medium**: 15px
- **Large**: 20px
- **Full**: 9999px (cirkel)

---

## 📱 Responsive Design

### Breakpoints
- **Small**: < 375px (iPhone SE)
- **Medium**: 375px - 768px (meeste iPhones)
- **Large**: > 768px (iPads)

### Anpassingen
- Kleinere padding op small devices
- Kleinere font sizes indien nodig
- Touch targets minimaal 44x44px

---

## 🔧 Performance Optimalisatie

### Memoization
- SupplicationCard component memoized
- Audio hook callback optimization
- Font loading states

### Cleanup
- Audio unloading
- Event listeners
- Memory management

### Loading States
- Font loading indicator
- Audio loading states
- Error boundaries

---

## 🐛 Error Handling

### Audio Errors
- Network connectivity check
- Audio loading fallback
- User feedback via alerts

### Font Errors
- Fallback to system fonts
- Error logging
- Graceful degradation

### General Errors
- Error boundaries
- User-friendly messages
- Debug logging
