export const theme = {
  colors: {
    primary: '#6C63FF',
    background: '#F8F9FA',
    surface: '#FFFFFF',
    text: '#1A1A2E',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    accent: '#FF6584',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    shadow: 'rgba(0,0,0,0.08)',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    full: 999,
  },
  fontSize: {
    xs: 11,
    sm: 13,
    md: 15,
    lg: 18,
    xl: 22,
    xxl: 28,
  },
};

export type Theme = typeof theme;
