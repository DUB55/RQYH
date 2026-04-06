import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SupplicationCardProps } from '../types';
import { ArabicText } from './ArabicText';
import { AudioPlayer } from './AudioPlayer';
import { theme } from '../styles/theme';

export const SupplicationCard: React.FC<SupplicationCardProps> = ({ data }) => {
  const dutchMeaningArray = Array.isArray(data.dutchMeaning) 
    ? data.dutchMeaning 
    : [data.dutchMeaning];

  return (
    <View style={styles.card}>
      {/* Bron */}
      <View style={styles.sourceContainer}>
        <Text style={styles.sourceText}>📖 {data.source}</Text>
      </View>

      {/* Arabische tekst */}
      <ArabicText text={data.arabicText} fontSize={theme.fontSize.arabic} />

      {/* Audio speler */}
      <AudioPlayer 
        audioUrl={data.audioUrl} 
        supplicationId={data.id} 
      />

      {/* Nederlandse vertaling */}
      <View style={styles.translationContainer}>
        <Text style={styles.sectionTitle}>🇳🇱 Nederlandse Vertaling:</Text>
        {dutchMeaningArray.map((meaning, index) => (
          <Text key={index} style={styles.translationText}>
            {meaning}
          </Text>
        ))}
      </View>

      {/* Fonetiche uitspraak */}
      <View style={styles.phoneticContainer}>
        <Text style={styles.sectionTitle}>🔊 Uitspraak (Fonetisch):</Text>
        <Text style={styles.phoneticText}>{data.dutchPhonetic}</Text>
      </View>

      {/* Engelse vertaling (optioneel, kleiner) */}
      <View style={styles.englishContainer}>
        <Text style={styles.englishTitle}>English:</Text>
        <Text style={styles.englishText}>
          {Array.isArray(data.englishMeaning) 
            ? data.englishMeaning.join(' ') 
            : data.englishMeaning}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginHorizontal: theme.spacing.md,
    marginVertical: theme.spacing.sm,
    ...theme.shadows.medium,
    borderWidth: 1,
    borderColor: theme.colors.border
  },
  sourceContainer: {
    backgroundColor: theme.colors.primaryLight,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: theme.spacing.md
  },
  sourceText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.sm,
    fontWeight: '600'
  },
  translationContainer: {
    marginTop: theme.spacing.md,
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0'
  },
  sectionTitle: {
    fontSize: theme.fontSize.md,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm
  },
  translationText: {
    fontSize: theme.fontSize.md,
    lineHeight: 24,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm
  },
  phoneticContainer: {
    marginTop: theme.spacing.md,
    backgroundColor: '#f5f5f5',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm
  },
  phoneticText: {
    fontSize: 15,
    lineHeight: 22,
    color: theme.colors.textLight,
    fontStyle: 'italic'
  },
  englishContainer: {
    marginTop: theme.spacing.md,
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0'
  },
  englishTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.textMuted,
    marginBottom: theme.spacing.xs
  },
  englishText: {
    fontSize: theme.fontSize.sm,
    lineHeight: 20,
    color: theme.colors.textMuted
  }
});
