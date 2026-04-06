import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { AudioPlayerProps } from '../types';
import { theme } from '../styles/theme';

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  audioUrl, 
  supplicationId 
}) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const playSound = async () => {
    try {
      setIsLoading(true);
      
      if (sound) {
        await sound.unloadAsync();
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: audioUrl },
        { shouldPlay: true }
      );
      
      setSound(newSound);
      setIsPlaying(true);
      
      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && !status.isPlaying) {
          setIsPlaying(false);
        }
      });
      
    } catch (error) {
      console.error('Fout bij afspelen:', error);
      Alert.alert(
        'Audio niet beschikbaar',
        'De audio kan momenteel niet worden afgespeeld. Probeer het later opnieuw.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const togglePlayback = () => {
    if (isPlaying) {
      pauseSound();
    } else {
      playSound();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[
          styles.playButton,
          isPlaying && styles.playButtonActive
        ]}
        onPress={togglePlayback}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#ffffff" size="small" />
        ) : (
          <Ionicons 
            name={isPlaying ? 'pause' : 'play'} 
            size={24} 
            color="#ffffff" 
          />
        )}
      </TouchableOpacity>
      <Text style={styles.playText}>
        {isPlaying ? 'Pauzeren' : 'Afspelen'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm
  },
  playButton: {
    backgroundColor: theme.colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.shadows.medium
  },
  playButtonActive: {
    backgroundColor: theme.colors.primaryDark,
    transform: [{ scale: 0.95 }]
  },
  playText: {
    marginTop: theme.spacing.xs,
    fontSize: theme.fontSize.sm,
    color: theme.colors.primary,
    fontWeight: '600'
  }
});
