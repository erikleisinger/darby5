# Case Study Template - Usage Guide

## Overview
This is a reusable case study page template located at `/src/app/CaseStudy.tsx`. It matches the Figma design exactly at desktop breakpoints and adapts responsively for mobile devices.

## Features
- ✅ Pixel-perfect desktop layout matching Figma frame
- ✅ Responsive mobile layout using Flexbox
- ✅ Sticky navigation menu (activates after hero section, positioned 80px from top-left)
- ✅ Smooth scroll navigation between sections
- ✅ Clear section labeling for easy content replacement
- ✅ Follows existing style guide (colors, fonts, spacing)

## How to Duplicate This Template

### Step 1: Create a New Case Study File
```bash
# Copy the template
cp /src/app/CaseStudy.tsx /src/app/CaseStudy-[project-name].tsx
```

### Step 2: Replace Content

Each section is clearly marked with comments:

#### CASE STUDY: Hero Image
```tsx
// Line ~49
<img 
  alt="" 
  className="w-full h-full object-cover object-center" 
  src={imgVanAiHeaderImage1691} // ← Replace with your hero image
/>
```

#### CASE STUDY: Main Title
```tsx
// Line ~62
<h1>
  The Cost of Competing With Yourself  // ← Replace with your title
</h1>
```

#### CASE STUDY: Subtitle
```tsx
// Line ~67
<p>
  Lack of clear, consistent messaging is a silent killer...  // ← Replace with your subtitle
</p>
```

#### CASE STUDY: Tags
```tsx
// Lines ~72-116
// Replace with your project tags: UX, UI, Content, Research, etc.
```

#### CASE STUDY: Outcome Section
```tsx
// Lines ~177-232
// Update outcome metrics and descriptions
```

#### CASE STUDY: Challenge Section
```tsx
// Lines ~235-281
// Update challenge description and goals
```

#### CASE STUDY: Method Section
```tsx
// Lines ~284-363
// Update methodology steps (currently 5 items)
```

#### CASE STUDY: Examples Section
```tsx
// Lines ~366-434
// Replace images and captions (currently 4 examples in 2x2 grid)
```

### Step 3: Import New Images
```tsx
// Add at top of file
import imgYourHeroImage from "figma:asset/[hash].png";
import imgExample1 from "figma:asset/[hash].png";
import imgExample2 from "figma:asset/[hash].png";
// etc.
```

### Step 4: Update Navigation IDs (if needed)
If you add or remove sections, update the sticky menu:
```tsx
// Lines ~142-173
<button onClick={() => scrollToSection('your-section-id')}>
  Your Section Name
</button>
```

And add corresponding section:
```tsx
<section id="your-section-id">
  {/* Your content */}
</section>
```

## Linking from Landing Page

To link to a case study from the Stories & Case Studies cards:

### Option 1: Using React Router (if implemented)
```tsx
<Link to="/case-study/kinvest">View Case Study</Link>
```

### Option 2: Using Direct Links
```tsx
<a href="/case-study-kinvest.html">View Case Study</a>
```

### Option 3: Using State Management
```tsx
onClick={() => navigate('/case-study', { state: { project: 'kinvest' } })}
```

**Note:** Do NOT modify the landing page card components. Add links/routing logic only.

## Sticky Menu Behavior

The menu becomes sticky when:
- User scrolls past the hero section (~645px from top)
- Positioned at `top: 80px, left: 80px` when sticky
- Hidden on mobile (< 1024px), visible on desktop only

## Mobile Responsiveness

The template uses three breakpoints:
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (mixed layout)
- Desktop: > 1024px (matches Figma exactly)

All layout changes use Flexbox for clean reflow.

## Style Guide Compliance

The template uses:
- **Colors:** #222021, #F1EEE7, #8B9544, #555, #333, #39ff14, #e1c78f
- **Fonts:** Neue Haas Grotesk Display Pro (95 Black, 65 Medium, 55 Roman, 96 Black Italic)
- **Spacing:** 16px, 24px, 40px, 80px (standard tokens)

Do NOT introduce new colors or fonts without updating the style guide.

## Common Customizations

### Change Number of Examples
Currently 2x2 grid (4 items). To add more:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px]">
  {/* Add more example divs here */}
</div>
```

For 3 columns:
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-[40px]">
```

### Change Number of Method Steps
Currently 5 items. Add/remove divs in the Method Section (lines ~284-363).

### Change Outcome Cards
Currently 2 cards. Add more by duplicating the outcome card div structure.

## Validation Checklist

Before publishing:
- [ ] All content replaced (no "Kinvest" references unless intentional)
- [ ] All images imported and displaying correctly
- [ ] Sticky menu works (test by scrolling)
- [ ] Mobile layout looks clean (test at 375px, 768px, 1024px)
- [ ] Links work (back button, pagination, CTA)
- [ ] No console errors
- [ ] Matches brand colors and fonts
- [ ] Landing page untouched

## File Structure
```
/src/app/
  ├── App.tsx              ← Landing page (DO NOT MODIFY)
  ├── CaseStudy.tsx        ← Kinvest case study (template)
  └── CaseStudy-[name].tsx ← Your new case studies
```

## Questions?
If a detail is missing or unclear, add a comment instead of guessing:
```tsx
// TODO: Confirm metric calculation method
// TODO: Get high-res image from client
```
