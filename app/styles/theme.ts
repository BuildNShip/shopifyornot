// Theme configuration based on Shopify's design system
export const theme = {
  colors: {
    brand: {
      primary: '#008060',
      primaryAccent: '#00A56A',
      dark: '#003E2F',
    },
    neutral: {
      black: '#1A1A1A',
      darkGray: '#424242',
      midGray: '#999999',
      border: '#DCDCDC',
      lightGray: '#F6F6F6',
      white: '#FFFFFF',
    },
    states: {
      success: '#00A56A',
      warning: '#FFC453',
      error: '#D72C0D',
      info: '#2C6ECB',
    },
    accents: {
      blue: '#006EFF',
      yellow: '#FFD95A',
      red: '#E34850',
      mint: '#E6F7F1',
    },
  },
  typography: {
    fontFamily: {
      primary: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'].join(','),
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      displayXL: '4.5rem',    // 72px
      displayL: '4rem',       // 64px
      displayM: '3rem',       // 48px
      h1: '2.5rem',          // 40px
      h2: '2rem',            // 32px
      h3: '1.5rem',          // 24px
      h4: '1.25rem',         // 20px
      bodyL: '1.125rem',     // 18px
      bodyM: '1rem',         // 16px
      bodyS: '0.875rem',     // 14px
      caption: '0.75rem',    // 12px
    },
    lineHeight: {
      display: '1.1',
      heading: '1.2',
      body: '1.55',
    },
  },
  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '0.75rem',  // 12px
    lg: '1rem',     // 16px
    xl: '1.5rem',   // 24px
    '2xl': '2rem',  // 32px
    '3xl': '2.5rem', // 40px
    '4xl': '3rem',  // 48px
    '5xl': '4rem',  // 64px
    '6xl': '5rem',  // 80px
    '7xl': '7.5rem', // 120px
  },
  radius: {
    sm: '0.25rem',  // 4px
    md: '0.5rem',   // 8px
    lg: '0.75rem',  // 12px
    xl: '1rem',     // 16px
    full: '9999px',
  },
  elevation: {
    none: 'none',
    sm: '0px 2px 6px rgba(0,0,0,0.08)',
    md: '0px 6px 20px rgba(0,0,0,0.10)',
    lg: '0px 12px 32px rgba(0,0,0,0.15)',
  },
  gradients: {
    greenSoft: 'linear-gradient(135deg, #E6F7F1 0%, #FFFFFF 100%)',
    blueSoft: 'linear-gradient(135deg, #E3F0FF 0%, #FFFFFF 100%)',
    primary: 'linear-gradient(135deg, #008060 0%, #00A56A 100%)',
  },
  breakpoints: {
    mobile: '640px',
    tablet: '1024px',
    desktop: '1440px',
    widescreen: '1920px',
  },
  animation: {
    timing: {
      fast: '120ms',
      medium: '180ms',
      slow: '260ms',
    },
    easing: {
      standard: 'cubic-bezier(0.25,0.1,0.25,1)',
      accelerate: 'cubic-bezier(0.0,0.0,0.2,1)',
      decelerate: 'cubic-bezier(0.4,0.0,1,1)',
      spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
  },
} as const;

export type Theme = typeof theme;