import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { NotoNaskhArabic_400Regular } from '@expo-google-fonts/noto-naskh-arabic';
import { ArabicTextProps } from '../types';
import { theme } from '../styles/theme';

export const ArabicText: React.FC<ArabicTextProps> = ({ 
  text, 
  fontSize = theme.fontSize.arabic 
}) => {
  const [fontsLoaded] = useFonts({
    NotoNaskhArabic_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  const textArray = Array.isArray(text) ? text : [text];

  return (
    <View style={styles.container}>
      {textArray.map((line, index) => (
        <Text 
          key={index}
          style={[
            styles.arabicText,
            { fontSize }
          ]}
        >
          {line}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: theme.spacing.md
  },
  arabicText: {
    fontFamily: 'NotoNaskhArabic_400Regular',
    textAlign: 'right',
    lineHeight: 40,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
    writingDirection: 'rtl'
  }
});
