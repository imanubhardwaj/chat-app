/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: '#16F36F',
        primary: '#09ad4b',
        primaryDark: '#033a19',
        secondaryLight: '#6B7280',
        secondary: '#374151',
        secondaryDark: '#111827',
      },
    },
  },
};
