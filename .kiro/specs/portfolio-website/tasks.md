# Implementation Plan

- [x] 1. Set up component directory structure and create public assets folder


  - Create src/components/ directory
  - Create public/assets/ directory for resume PDFs
  - _Requirements: 1.1, 6.2, 6.3_



- [ ] 2. Extract Hero component from App.tsx
  - Create src/components/Hero.jsx with hero section code
  - Extract hero-related data and pass as props
  - Update App.jsx to import and use Hero component
  - Test hero section renders correctly with existing styling


  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [ ] 3. Extract About component from App.tsx
  - Create src/components/About.jsx with about section code
  - Extract personal information data and pass as props


  - Maintain grid layout and profile image functionality
  - Update App.jsx to import and use About component
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 4. Extract Skills component from App.tsx


  - Create src/components/Skills.jsx with skills section code
  - Extract skills data object and skillIcons mapping
  - Maintain categorized skill display and card layout
  - Update App.jsx to import and use Skills component
  - _Requirements: 3.1, 3.2, 3.3, 3.4_



- [ ] 5. Extract Projects component from App.tsx
  - Create src/components/Projects.jsx with projects section code
  - Extract projects array data and pass as props
  - Maintain project card layout and technology tags


  - Update App.jsx to import and use Projects component
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [ ] 6. Extract Experience component from App.tsx
  - Create src/components/Experience.jsx with experience section code


  - Extract experience data and pass as props
  - Maintain timeline-style layout and styling
  - Update App.jsx to import and use Experience component
  - _Requirements: 5.1, 5.2, 5.3, 5.4_



- [ ] 7. Create Resume component for download functionality
  - Create src/components/Resume.jsx for resume download section
  - Implement download links for three resume versions (AI/ML, Full-stack, AI-focused)
  - Create resume data structure with labels and filenames
  - Update App.jsx to import and use Resume component


  - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [ ] 8. Extract Education component from App.tsx
  - Create src/components/Education.jsx with education section code
  - Extract education data array and pass as props


  - Maintain card-based layout for multiple education entries
  - Update App.jsx to import and use Education component
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [ ] 9. Extract Certifications component from App.tsx
  - Create src/components/Certifications.jsx with certifications section code


  - Extract certifications data and pass as props
  - Maintain grid layout for certification cards
  - Update App.jsx to import and use Certifications component
  - _Requirements: 8.1, 8.2, 8.3, 8.4_




- [ ] 10. Extract Contact component from App.tsx
  - Create src/components/Contact.jsx with contact section code
  - Extract contact information and social media links
  - Maintain dark theme styling and contact card layout
  - Update App.jsx to import and use Contact component
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [ ] 11. Update App.jsx to orchestrate all components
  - Remove all extracted section code from App.tsx
  - Import all created components
  - Organize data structures for passing as props
  - Maintain navigation, header, and footer in App.jsx
  - Convert App.tsx to App.jsx as specified
  - _Requirements: All requirements - integration_

- [ ] 12. Create and organize resume PDF assets
  - Add resume-aiml.pdf to public/assets/ directory
  - Add resume-fullstack.pdf to public/assets/ directory  
  - Add resume-aifocus.pdf to public/assets/ directory
  - Update all resume download links to use /assets/ paths
  - _Requirements: 6.2, 6.3_

- [ ] 13. Test and validate component integration
  - Verify all components render correctly with extracted code
  - Test responsive design across all components
  - Validate all download links and external links work
  - Ensure styling and animations are preserved
  - Test navigation between sections
  - _Requirements: All requirements - validation_