# AI Prompting Guide for Firebase Studio Development

## 🎯 **Core Prompting Framework**

### **The SPEC Method (Structure-Purpose-Example-Constraints)**

```
[STRUCTURE] + [PURPOSE] + [EXAMPLE] + [CONSTRAINTS] = Effective Prompt
```

**Template:**
```
In my Next.js project, modify/create [SPECIFIC FILE PATH] to [CLEAR PURPOSE]. 
Here's the current structure: [CONTEXT]. 
I want it to look/behave like: [EXAMPLE]. 
Requirements: [CONSTRAINTS].
```

---

## 📁 **File Path Specifications**

### **Always Be Specific with Paths:**

❌ **Vague:** "Update the hero section"
✅ **Precise:** "Modify `src/components/structure/Hero.tsx` to add a call-to-action button"

### **Path Pattern Templates:**

```
• Components: "In `src/components/ui/[ComponentName].tsx`"
• Pages: "In `src/app/[page-name]/page.tsx`"
• Data: "In `src/lib/data.ts`"
• Styles: "In `src/app/globals.css`"
• Types: "In `src/lib/types.ts`"
```

---

## 🏗️ **Layout Structure Prompts**

### **Layout Modifications:**

```
Modify `src/app/layout.tsx` to include a sticky navigation bar with:
- Logo on the left
- Navigation menu in center (Home, Projects, Contact)
- Dark mode toggle on right
- Mobile hamburger menu for screens < 768px
- Use Tailwind classes: sticky top-0 bg-white/80 backdrop-blur-md
```

### **Page Structure Prompts:**

```
In `src/app/page.tsx`, restructure the landing page with these sections:
1. Hero section (full viewport height)
2. Projects showcase (3-column grid on desktop, 1-column mobile)
3. About section (2-column: image left, text right)
4. Contact CTA (centered, max-width container)

Use semantic HTML and Tailwind responsive utilities.
```

---

## 🧩 **Component-Specific Prompts**

### **UI Component Creation:**

```
Create a new component `src/components/ui/ProjectCard.tsx` with:
- Props: title (string), description (string), image (string), tags (string[])
- Layout: Image top, title/description middle, tags bottom
- Styling: Rounded corners, subtle shadow, hover effects
- TypeScript interface for props
- Export as default
```

### **Component Modification:**

```
In `src/components/structure/Projects.tsx`:
- Import ProjectCard from '../ui/ProjectCard'
- Map over projects array from data.ts
- Display in responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Add loading state while data fetches
- Include error boundary for failed renders
```

---

## 📊 **Data-Driven Prompts**

### **Data Structure Prompts:**

```
In `src/lib/data.ts`, create a projects array with TypeScript interface:
- Each project: id, title, description, image, technologies[], liveUrl?, githubUrl?
- Add 3 sample projects with realistic data
- Export as named export: export const projects = [...]
- Include type definitions
```

### **Dynamic Content Prompts:**

```
Modify `src/components/structure/Hero.tsx` to:
- Import personal data from `src/lib/data.ts`
- Display dynamic name, tagline, and bio
- Include social links array mapping to icon components
- Add typing animation effect for the tagline
- Ensure all text content comes from data file, not hardcoded
```

---

## 🎨 **Styling & Design Prompts**

### **Tailwind-Specific Prompts:**

```
Apply these Tailwind styles to `src/components/ui/Button.tsx`:
- Base: px-6 py-3 rounded-lg font-medium transition-all duration-200
- Primary variant: bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200
- Secondary variant: border border-gray-300 text-gray-700 hover:bg-gray-50
- Disabled state: opacity-50 cursor-not-allowed
- Support size variants: sm, md, lg
```

### **Responsive Design Prompts:**

```
Make `src/components/structure/Header.tsx` fully responsive:
- Mobile (< 768px): Hamburger menu, logo centered, full-width mobile menu overlay
- Tablet (768px - 1024px): Horizontal menu, logo left, menu right
- Desktop (> 1024px): Full navigation, centered container max-width-6xl
- Use Tailwind breakpoint prefixes: sm:, md:, lg:, xl:
```

---

## ⚡ **Firebase Studio Specific Prompts**

### **Integration Prompts:**

```
Configure this Next.js component for Firebase Studio:
- Add Firebase client configuration in `src/lib/firebase.ts`
- Create authentication hook in `src/hooks/useAuth.ts`
- Modify `src/components/structure/Header.tsx` to show login/logout based on auth state
- Include Firebase Auth import and initialization
- Handle loading and error states
```

### **Deployment Prompts:**

```
Prepare `src/app/layout.tsx` for Firebase Studio deployment:
- Add appropriate meta tags for SEO
- Include Open Graph tags for social sharing
- Set up proper favicon references
- Configure viewport meta tag for mobile optimization
- Ensure all static assets use relative paths
```

---

## 🔧 **Advanced Prompting Techniques**

### **1. Context Setting:**
```
I'm working on a TypeScript Next.js portfolio with:
- App Router (not Pages Router)
- Tailwind CSS for styling
- Component-based architecture
- Firebase hosting

Current file structure:
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   └── structure/
└── lib/
    ├── data.ts
    └── utils.ts
```

### **2. Incremental Requests:**
```
Step 1: First, show me the TypeScript interface for a Project type
Step 2: Then create the ProjectCard component using that interface
Step 3: Finally, integrate it into the Projects section with proper grid layout
```

### **3. Constraint Specification:**
```
Requirements:
- Must be TypeScript compatible
- Use only Tailwind CSS (no custom CSS)
- Follow Next.js 14 App Router conventions
- Maintain existing component structure
- Ensure mobile-first responsive design
- Include proper accessibility attributes
```

### **4. Error Prevention:**
```
Before implementing, verify:
- All imports are correctly referenced
- Component props match TypeScript interfaces
- Tailwind classes are valid and responsive
- No console errors or warnings
- Component exports match import statements
```

---

## 🎯 **Prompt Templates by Task**

### **New Feature Addition:**
```
Add a [FEATURE NAME] to my Next.js portfolio:
- Location: `src/components/structure/[ComponentName].tsx`
- Functionality: [SPECIFIC BEHAVIOR]
- Design: [VISUAL REQUIREMENTS]
- Data source: `src/lib/data.ts`
- Integration: Import and use in `src/app/page.tsx`
- Styling: Tailwind classes for [SPECIFIC DESIGN REQUIREMENTS]
```

### **Bug Fix/Modification:**
```
Fix the issue in `src/components/[PATH]` where [SPECIFIC PROBLEM]:
- Current behavior: [WHAT'S HAPPENING]
- Expected behavior: [WHAT SHOULD HAPPEN]  
- Constraints: [REQUIREMENTS]
- Test with: [SPECIFIC SCENARIOS]
```

### **Code Review/Optimization:**
```
Review and optimize `src/[FILE_PATH]` for:
- TypeScript best practices
- Performance (lazy loading, memoization)
- Accessibility (ARIA labels, keyboard navigation)
- Responsive design consistency
- Code readability and maintainability
```

---

## ✅ **Best Practices Summary**

1. **Be Specific**: Always include exact file paths
2. **Provide Context**: Share relevant project structure
3. **Set Constraints**: Specify tech stack requirements
4. **Request Examples**: Ask for sample implementations
5. **Iterate Incrementally**: Break complex changes into steps
6. **Validate Output**: Include testing/verification steps

---

## 🚀 **Quick Reference Commands**

```
// Component Creation
"Create `src/components/ui/[Name].tsx` with [specifications]"

// Data Integration  
"Modify `src/lib/data.ts` to include [data structure]"

// Layout Changes
"Update `src/app/layout.tsx` to implement [layout requirements]"

// Styling Updates
"Apply Tailwind classes to `src/components/[path]` for [design goal]"

// Firebase Integration
"Configure `src/lib/firebase.ts` for [specific Firebase service]"
```