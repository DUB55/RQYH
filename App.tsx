import React, { useState, useEffect } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  View, 
  Text,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { Header } from './src/components/Header';
import { SupplicationCard } from './src/components/SupplicationCard';
import { supplications, audioAttribution } from './src/data/supplications';
import { useFonts } from 'expo-font';
import { NotoNaskhArabic_400Regular } from '@expo-google-fonts/noto-naskh-arabic';
import { theme } from './src/styles/theme';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoNaskhArabic_400Regular
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Splash screen prevention would go here
        // await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  if (!fontsLoaded || !isReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={styles.loadingText}>Ruqiyah voor Kinderen</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      <Header />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.introContainer}>
          <Text style={styles.introText}>
            📿 Islamitische Smeekbeden voor Bescherming
          </Text>
          <Text style={styles.introSubtext}>
            Lees en beluister deze ruqiyah voor kinderen
          </Text>
        </View>

        {supplications.map((supplication) => (
          <SupplicationCard 
            key={supplication.id} 
            data={supplication} 
          />
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Moge Allah ons beschermen 🤲
          </Text>
          <Text style={styles.attributionText}>
            Audio bron: {audioAttribution.source}
          </Text>
          <Text style={styles.attributionUrl}>
            {audioAttribution.url}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  loadingText: {
    marginTop: theme.spacing.md,
    fontSize: theme.fontSize.lg,
    color: theme.colors.primary,
    fontWeight: '600'
  },
  scrollView: {
    flex: 1
  },
  scrollContent: {
    paddingVertical: theme.spacing.lg,
    paddingBottom: 40
  },
  introContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg
  },
  introText: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
    textAlign: 'center'
  },
  introSubtext: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textLight,
    textAlign: 'center'
  },
  footer: {
    alignItems: 'center',
    marginTop: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg
  },
  footerText: {
    fontSize: theme.fontSize.md,
    color: theme.colors.primary,
    fontWeight: '500',
    marginBottom: theme.spacing.sm
  },
  attributionText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textMuted,
    marginBottom: theme.spacing.xs
  },
  attributionUrl: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textMuted,
    textDecorationLine: 'underline'
  }
});
