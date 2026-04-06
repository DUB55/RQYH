# Data Structure - Ruqiyah voor Kinderen

## 📋 Smeekbeden Data Specificatie

### TypeScript Interface
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

### 📖 Complete Smeekbeden Dataset

#### 1. Eerste Smeekbede
- **ID**: 1
- **Bron**: Bukhari 4/119
- **Arabisch**: أَعُوذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ
- **Engels**: I seek refuge for the two of you in the Perfect Words of Allah, from every devil and every poisonous pest, and from every harmful eye.
- **Nederlands**: Ik zoek bescherming voor jullie beiden in de Volmaakte Woorden van Allah, tegen elke duivel, elk giftig wezen en elk kwaadaardig oog.
- **Fonetisch**: a\'oedhu-kumaa biekalimaat allaahie at-taammah min kul-lie shai-thaanin wa haammah wa min kul-lie dhurriyyaatinaa qurrata a\'yun
- **Audio**: https://www.duaandazkar.com/audio_new/CH6DUA1.mp3

#### 2. Tweede Smeekbede
- **ID**: 2
- **Bron**: Ahmed 2/290
- **Arabisch**: أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
- **Engels**: I seek refuge in the Perfect Words of Allah from the evil of what He has created.
- **Nederlands**: Ik zoek mijn toevlucht in de Volmaakte Woorden van Allah, tegen het kwaad van wat Hij heeft geschapen.
- **Fonetisch**: a\'oedhu biekalimaat allaahie at-taammaat min sharri maa khalaq
- **Audio**: https://www.duaandazkar.com/audio_new/CH6DUA1.mp3

#### 3. Derde Smeekbede
- **ID**: 3
- **Bron**: Abu Dawood 4/323
- **Arabisch**: بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ
- **Engels**: In the Name of Allah with Whose Name there is protection against every kind of harm in the earth or in the heaven, and He is the All-Hearing and All-Knowing.
- **Nederlands**: In de Naam van Allah, met Wiens Naam niets schade kan toebrengen op aarde of in de hemel, en Hij is de Alhorende, de Alwetende.
- **Fonetisch**: bismie allaahie alladhee laa yadhoerru ma\'a ismihie shai\'un fi al-ardhie wa laa fi as-samaa ie wa huwa as-samieoe al-alim
- **Audio**: https://www.duaandazkar.com/audio_new/CH6DUA1.mp3

#### 4. Vierde Smeekbede
- **ID**: 4
- **Bron**: Al Furkan: 74
- **Arabisch**: رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
- **Engels**: Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.
- **Nederlands**: Onze Heer, schenk ons uit onze echtgenoten en nageslacht troost voor onze ogen, en maak ons tot een voorbeeld voor de godvruchtigen.
- **Fonetisch**: rabbanaa hab lanaa min azwaajinaa wa dhurriyyaatinaa qurrata a\'yun wa dj\'alnaa lilmuttaqieena imaamaa
- **Audio**: https://www.duaandazkar.com/audio_new/CH6DUA1.mp3

#### 5. Vijfde Smeekbede (Speciaal - 3 regels)
- **ID**: 5
- **Bron**: Abu Dawood 3/437
- **Arabisch**: ['بِسْمِ اللَّهِ', 'بِسْمِ اللَّهِ', 'بِسْمِ اللَّهِ']
- **Engels**: ['In the Name of Allah', 'In the Name of Allah', 'In the Name of Allah']
- **Nederlands**: ['In de Naam van Allah', 'In de Naam van Allah', 'In de Naam van Allah']
- **Fonetisch**: bismie allaahie bismie allaahie bismie allaahie
- **Audio**: https://www.duaandazkar.com/audio_new/CH6DUA1.mp3

#### 6. Zesde Smeekbede
- **ID**: 6
- **Bron**: Muslim 1/209
- **Arabisch**: بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ
- **Engels**: I begin with the Name of Allah; I trust in Allah; there is no altering of conditions but by the Power of Allah.
- **Nederlands**: In de Naam van Allah begin ik; ik vertrouw op Allah; en er is geen kracht en geen macht dan met Allah.
- **Fonetisch**: bismie allaahie tawakkaltu \'alaa allaahie wa laa hawla wa laa quwwata illaa billaahie
- **Audio**: https://www.duaandazkar.com/audio_new/CH6DUA1.mp3

## 🎯 Audio Bron
**Website**: duaandazkar.com
**URL**: https://www.duaandazkar.com/audio_new/CH6DUA1.mp3
**Attributie**: Alle audio is eigendom van duaandazkar.com

## 📊 Data Validatie
- ✅ Alle 6 smeekbeden compleet
- ✅ Arabische tekst met harakaat
- ✅ Nederlandse vertaling aanwezig
- ✅ Fonetiche uitspraak beschikbaar
- ✅ Engelse vertaling als backup
- ✅ Bron vermelding per smeekbede
- ✅ Audio URL toegankelijk

## 🔧 Data Structuur Features
- **Flexibel**: Ondersteunt enkele en meerdere regels
- **Typed**: Volledige TypeScript support
- **Extensible**: Makkelijk nieuwe smeekbeden toevoegen
- **Consistent**: Uniforme data structuur
