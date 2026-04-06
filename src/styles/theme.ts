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
    border: '#e0e0e0',
    success: '#4CAF50',
    error: '#f44336'
  },
  spacing: {
    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 30
  },
  borderRadius: {
    sm: 8,
    md: 15,
    lg: 20,
    full: 9999
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    arabic: 28
  },
  shadows: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4
    }
  }
};

// Responsive design helpers
// Note: Dimensions will be available after React Native installation
export const responsive = {
  isSmallDevice: false, // Will be updated dynamically
  isMediumDevice: true, // Will be updated dynamically
  isLargeDevice: false, // Will be updated dynamically
  screenWidth: 375, // Default iPhone width
  screenHeight: 667 // Default iPhone height
};
