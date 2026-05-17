---
name: Prestige Corporate Framework
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444650'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#757682'
  outline-variant: '#c5c6d2'
  surface-tint: '#435b9f'
  primary: '#00113a'
  on-primary: '#ffffff'
  primary-container: '#002366'
  on-primary-container: '#758dd5'
  inverse-primary: '#b3c5ff'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#101517'
  on-tertiary: '#ffffff'
  tertiary-container: '#25292b'
  on-tertiary-container: '#8c9093'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00174a'
  on-primary-fixed-variant: '#2a4386'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e0e3e6'
  tertiary-fixed-dim: '#c3c7ca'
  on-tertiary-fixed: '#181c1e'
  on-tertiary-fixed-variant: '#43474a'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system for DMG Consultants is built on the pillars of **Trust, Prestige, and Financial Authority**. It targets a high-net-worth and corporate clientele who value precision, longevity, and professional excellence.

The visual style is **Corporate Minimalism**. It leverages expansive white space to create a "premium" breathing room, ensuring that every piece of information feels intentional and curated. The aesthetic avoids trendy gimmicks in favor of a timeless, architectural structure. It balances the depth of Deep Navy with the warmth of Brushed Gold to evoke a sense of heritage and modern success.

**Key Principles:**
- **Clarity over Complexity:** Use clear hierarchies and avoid cluttered layouts.
- **Precision:** Perfect alignment and consistent spacing to reflect financial accuracy.
- **Sophistication:** Subtle use of gold accents to denote quality without being ostentatious.

## Colors

The palette is anchored by **Deep Navy Blue**, representing stability and corporate intelligence. **Brushed Gold** is used sparingly as a "prestige accent" for calls to action, borders, and significant icons.

- **Primary (Deep Navy):** Use for headers, primary text, and heavy structural elements.
- **Secondary (Brushed Gold):** Use for highlights, buttons, and decorative separators.
- **Tertiary (Cloud Grey):** A soft background tint used to differentiate sections without losing the minimalist feel.
- **Neutral (Onyx):** Reserved for body text and high-contrast labels to ensure maximum legibility.
- **Background:** Primary background remains Pure White (#FFFFFF) to maintain the premium, airy feel requested.

## Typography

The typography system uses **Hanken Grotesk** for headlines to provide a sharp, contemporary corporate look, and **Work Sans** for body copy due to its exceptional legibility and professional neutrality.

- **Scale:** Large display sizes are used to create "editorial" impact on landing pages.
- **Weight:** Headlines use SemiBold (600) and Bold (700) to establish authority. Body text remains at Regular (400) for effortless reading.
- **Letter Spacing:** Labels and small captions use increased letter spacing and uppercase styling to evoke a refined, architectural feel.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model for desktop to ensure content remains centered and prestigious, moving to a fluid model for mobile devices.

- **Grid:** A 12-column grid is standard. Large "Hero" sections should utilize the full width, while informational content is often restricted to the center 8 columns to increase white space.
- **Section Gaps:** Vertical spacing between major sections is intentionally large (120px+) to prevent the interface from feeling crowded.
- **Mobile Reflow:** On mobile, margins reduce to 16px, and the section gap compresses to 64px. Multi-column cards stack vertically.

## Elevation & Depth

To maintain a minimalist and professional look, the design system avoids heavy shadows. Depth is communicated through **Tonal Layers** and **Hairline Outlines**.

- **Surface Layers:** White surfaces sit on top of very light grey (Tertiary) backgrounds to create a subtle sense of "stacking."
- **Outlines:** Use 1px solid borders in Light Grey (#E5E5E5) or Gold (Secondary) for interactive elements.
- **Shadows:** When necessary (e.g., dropdowns or modals), use an extremely diffused "Ambient" shadow: `0px 10px 30px rgba(0, 35, 102, 0.05)`. Note the subtle navy tint in the shadow to keep it on-brand.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a modern, approachable touch to an otherwise rigid corporate structure. 

- **Standard Elements:** Buttons, input fields, and cards use a 4px corner radius.
- **Containers:** Large background sections and hero areas remain sharp (0px) to maintain a sense of architectural strength and stability.
- **Icons:** Should be linear and use a consistent 1.5px or 2px stroke weight.

## Components

### Buttons
- **Primary:** Deep Navy background with White text. No border.
- **Secondary (Prestige):** Brushed Gold background with Navy text for high-importance CTAs.
- **Ghost:** Transparent background with Navy or Gold hairline border.

### Input Fields
- Understated design. Uses a 1px bottom border by default, or a full 1px light grey border with a 4px radius. 
- Focus state: Border changes to Brushed Gold.

### Cards
- Pure white background with a subtle hairline border or a very soft ambient shadow. 
- Avoid "heavy" cards; use white space within the card to separate content.

### Lists & Tables
- Financial data should be presented in clean tables with minimal row separators. 
- Use the **Work Sans** font for numerical data, ensuring tabular lining is active for vertical alignment of digits.

### Professional Accents
- **Dividers:** Use thin (1px) lines in Brushed Gold to separate major narrative sections.
- **Badges:** Use Navy or Gold tints for CBA/AAT certification marks to ensure they look like integrated stamps of quality rather than aftermarket additions.