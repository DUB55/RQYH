import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Ruqiyah voor Kinderen</Text>
      <Text style={styles.subtitle}>Deel 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.lg,
    paddingTop: 60, // Voor iOS status bar
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: theme.colors.primaryDark
  },
  title: {
    fontSize: theme.fontSize.xxl,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: theme.spacing.xs
  },
  subtitle: {
    fontSize: theme.fontSize.md,
    color: '#e0f0e5',
    fontWeight: '500'
  }
});
