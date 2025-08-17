# Design Document

## Overview

This design transforms the existing monolithic React portfolio application into a modular component-based architecture. The current App.tsx contains all portfolio sections in a single file (~400+ lines). The new design will extract each section into dedicated components while maintaining the existing visual design, Tailwind CSS styling, and functionality.

The restructuring will improve code maintainability, reusability, and follows React best practices by separating concerns into focused components.

## Architecture

### Current Architecture
```
src/
├─ App.tsx (monolithic - all sections)
├─ main.tsx
├─ index.css
└─ vite-env.d.ts
```

### Target Architecture
```
src/
├─ App.jsx (main layout and component orchestration)
├─ components/
│   ├─ Hero.jsx
│   ├─ About.jsx
│   ├─ Skills.jsx
│   ├─ Projects.jsx
│   ├─ Experience.jsx
│   ├─ Resume.jsx
│   ├─ Education.jsx
│   ├─ Certifications.jsx
│   └─ Contact.jsx
├─ main.tsx
├─ index.css
└─ vite-env.d.ts

public/
└─ assets/
    ├─ resume-aiml.pdf
    ├─ resume-fullstack.pdf
    └─ resume-aifocus.pdf
```

## Components and Interfaces

### App Component
**Purpose:** Main application container and layout orchestrator
**Responsibilities:**
- Import and render all section components
- Maintain navigation structure
- Handle global state if needed
- Preserve existing gradient backgrounds and layout structure

**Props:** None (root component)

### Hero Component
**Purpose:** Landing section with name, title, and primary CTAs
**Responsibilities:**
- Display name, title, and introduction
- Render call-to-action buttons for resume downloads
- Maintain responsive design and animations

**Props:**
```typescript
interface HeroProps {
  name: string;
  title: string;
  description: string;
}
```

### About Component
**Purpose:** Personal background and story section
**Responsibilities:**
- Display personal description and background
- Show contact information (location, email)
- Render profile image with styling
- Maintain grid layout for desktop/mobile responsiveness

**Props:**
```typescript
interface AboutProps {
  description: string;
  location: string;
  email: string;
  imageUrl: string;
}
```

### Skills Component
**Purpose:** Technical skills showcase with categorization
**Responsibilities:**
- Organize skills by categories (Programming, Web, Databases, etc.)
- Render skill cards with icons
- Display skill tags with hover effects
- Maintain responsive grid layout

**Props:**
```typescript
interface SkillsProps {
  skills: {
    [category: string]: string[];
  };
  skillIcons: {
    [category: string]: React.ComponentType;
  };
}
```

### Projects Component
**Purpose:** Portfolio project showcase
**Responsibilities:**
- Display project cards with descriptions
- Show technology tags for each project
- Maintain responsive grid layout
- Handle project data rendering

**Props:**
```typescript
interface ProjectsProps {
  projects: Array<{
    title: string;
    description: string;
    tech: string[];
  }>;
}
```

### Experience Component
**Purpose:** Work experience and professional history
**Responsibilities:**
- Display work experience entries
- Show company, role, dates, and descriptions
- Maintain timeline-style layout
- Handle multiple experience entries

**Props:**
```typescript
interface ExperienceProps {
  experiences: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
}
```

### Resume Component
**Purpose:** Resume download section with multiple versions
**Responsibilities:**
- Provide download links for different resume versions
- Handle PDF file serving from public/assets/
- Display clear labeling for each resume type
- Maintain consistent button styling

**Props:**
```typescript
interface ResumeProps {
  resumeVersions: Array<{
    label: string;
    filename: string;
    description?: string;
  }>;
}
```

### Education Component
**Purpose:** Academic background and qualifications
**Responsibilities:**
- Display educational institutions and degrees
- Show dates, GPAs, and relevant details
- Maintain card-based layout
- Handle multiple education entries

**Props:**
```typescript
interface EducationProps {
  education: Array<{
    institution: string;
    degree: string;
    period: string;
    gpa?: string;
    details?: string;
  }>;
}
```

### Certifications Component
**Purpose:** Professional certifications and credentials
**Responsibilities:**
- Display certification cards
- Show issuing organizations and dates
- Provide verification links where available
- Maintain responsive grid layout

**Props:**
```typescript
interface CertificationsProps {
  certifications: Array<{
    name: string;
    issuer: string;
    date?: string;
    verificationUrl?: string;
  }>;
}
```

### Contact Component
**Purpose:** Contact information and communication methods
**Responsibilities:**
- Display contact methods (email, phone, social media)
- Render contact cards with icons
- Handle external links and mailto functionality
- Maintain dark theme styling (espresso background)

**Props:**
```typescript
interface ContactProps {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}
```

## Data Models

### Portfolio Data Structure
The current hardcoded data in App.tsx will be extracted and can be passed as props or managed through a data layer:

```typescript
interface PortfolioData {
  personal: {
    name: string;
    title: string;
    description: string;
    location: string;
    email: string;
    phone: string;
    imageUrl: string;
  };
  social: {
    github: string;
    linkedin: string;
  };
  skills: {
    [category: string]: string[];
  };
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  resumeVersions: ResumeVersion[];
}
```

## Error Handling

### Component Error Boundaries
- Implement error boundaries around major sections to prevent cascade failures
- Graceful degradation if individual components fail to render
- Fallback UI for missing data or failed prop validation

### Asset Loading
- Handle missing resume PDFs gracefully
- Provide fallback for missing profile image
- Validate external links before rendering

### Data Validation
- Validate props using TypeScript interfaces
- Provide default values for optional props
- Handle empty or malformed data arrays

## Testing Strategy

### Unit Testing
- Test each component in isolation with mock props
- Verify proper rendering of data
- Test responsive behavior and styling
- Validate prop handling and default values

### Integration Testing
- Test component composition in App.jsx
- Verify data flow between components
- Test navigation and scroll behavior
- Validate asset loading and external links

### Visual Regression Testing
- Ensure visual consistency after component extraction
- Test responsive breakpoints
- Verify color scheme and typography preservation
- Validate animations and hover effects

### Accessibility Testing
- Verify semantic HTML structure
- Test keyboard navigation
- Validate ARIA labels and roles
- Ensure color contrast compliance

## Migration Strategy

### Phase 1: Component Extraction
1. Create component directory structure
2. Extract Hero component first (simplest)
3. Move data to props and test rendering
4. Progressively extract remaining components

### Phase 2: Data Organization
1. Centralize data structures
2. Implement prop interfaces
3. Add TypeScript validation
4. Test data flow

### Phase 3: Asset Organization
1. Create public/assets/ directory
2. Move resume PDFs to assets folder
3. Update file paths and download links
4. Verify asset serving

### Phase 4: Testing and Validation
1. Implement component tests
2. Verify visual consistency
3. Test responsive behavior
4. Validate accessibility compliance

## Technical Considerations

### File Extensions
- Convert from .tsx to .jsx as specified in requirements
- Maintain TypeScript support through prop interfaces
- Ensure compatibility with existing build process

### Styling Preservation
- Maintain all existing Tailwind classes
- Preserve custom color scheme and gradients
- Keep responsive breakpoints and animations
- Maintain hover effects and transitions

### Performance
- Lazy loading for components if needed
- Optimize image loading for profile photo
- Minimize bundle size impact from component splitting
- Maintain fast initial page load

### Maintainability
- Clear component boundaries and responsibilities
- Consistent prop interfaces across components
- Reusable styling patterns
- Documentation for component usage