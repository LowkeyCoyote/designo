/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily : {
      sans : ['jost', 'sans-serif']
    },
    colors : {
      'peach' : '#E7816B',
      'black' : '#1D1C1E',
      'light-peach' : '#FFAD9B',
      'dark-grey' : '#333136',
      'white' : '#FFFFFF',
      'light-grey' : '#F1F3F5'
    },
    
    screens: {

      md: { max: "1024px"},
      sm: { max: "640px" }
		},
    extend: {
      lineHeight: {
        '12' : '3rem',
        '6' : '1.625rem'
      },
      fontSize: {
        '4xl' : '2.5rem'
      },
      letterSpacing: {
        'wide' : '0.125rem',
        'wider' : '0.3125rem'
      },
      backgroundImage: {
        'intro-web' : "url('/src/assets/shared/pattern-bg/bg-pattern-intro-web.svg')",
        'intro-app' : "url('/src/assets/shared/pattern-bg/bg-pattern-intro-app.svg')",
        'intro-graphic' : "url('/src/assets/shared/pattern-bg/bg-pattern-intro-graphic.svg')",

        'intro-about' : "url('/src/assets/about/bg-pattern-hero-about-desktop.svg')",
        'intro-about-mobile' : "url('/src/assets/about/bg-pattern-hero-about-mobile.svg')", 

        'intro-contact' : "url('/src/assets/contact/bg-pattern-hero-contact-desktop.svg')",
        'intro-contact-mobile' : "url('/src/assets/contact/bg-pattern-hero-contact-mobile.svg')",
        
        'small-circle' : "url('/src/assets/shared/pattern-bg/bg-pattern-small-circle.svg')",
        'pattern-two-circle' : "url('/src/assets/shared/pattern-bg/bg-pattern-two-circles.svg')",
        'pattern-three-circle' : "url('/src/assets/shared/pattern-bg/bg-pattern-three-circles.svg')",

        'call-to-action' : "url('/src/assets/shared/pattern-bg/bg-pattern-call-to-action.svg')",
      }
      
    },
  },
  plugins: [],
}

