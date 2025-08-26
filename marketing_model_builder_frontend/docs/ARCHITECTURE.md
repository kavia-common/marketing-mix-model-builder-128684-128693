# Project Implementation Plan: Marketing Model Builder Frontend

## Introduction

### Brief Summary
This plan outlines the implementation process for the React-based Marketing Model Builder application—a multi-step wizard UI/UX focused on a clean, minimal, and modern design using TailwindCSS and shadcn/ui. All backend and logic will be mocked to deliver a static but interactive UI demonstration that highlights key flows such as channel assignment, data visualization, event addition, calibration, and insights.

## Implementation

### 1) Initialize Styling Stack (TailwindCSS + shadcn/ui) and Base Theme
The project will start by establishing a consistent design system using TailwindCSS and shadcn/ui. Tailwind will be added with PostCSS and Autoprefixer, ensuring a scalable utility-first approach. The shadcn/ui token configuration will be customized to reflect the project palette with primary (#2563eb), secondary (#64748b), and accent (#fbbf24) colors. Global styles will be streamlined to rely predominantly on utility classes, minimizing bespoke CSS.

### 2) Add Core Dependencies
To support the UI/UX flows, the following dependencies will be introduced:
- recharts for chart components (line, bar, pie)
- framer-motion for smooth transitions and animations
- lucide-react for iconography
- react-dropzone for a mock file upload experience
- date-fns for date manipulation
- classnames (optional) to simplify conditional class logic

These libraries will enable expressive visuals and interactions while keeping the application responsive and lightweight.

### 3) App Structure and Global State
A simple global state will be managed using React Context and a reducer. The WizardContext will hold key state domains such as the current step, input data, channel mapping, events, calibration settings, and generated insights. A steps.js file will define the step metadata (ids, labels, icons) to drive navigation and the stepper UI, while mockData.js will provide sample datasets that each component can reference during rendering. The App.js will be rebuilt to wrap screens in a wizard layout, positioning a stepper at the top, a central card containing the current step body, and a navigation bar at the bottom. Framer Motion will provide subtle transitions between steps for a polished experience.

### 4) Shared UI Components
To promote reuse and consistency, several shared components will be created:
- Stepper: a responsive progress indicator that reflects the user’s journey across steps
- FileDropzone: a mock upload area powered by react-dropzone to simulate data ingestion
- DataTable: an accessible and responsive table for data previews
- ChartCard: a component that wraps recharts and provides a consistent chart frame and title
- WizardLayout and Navigation: layout primitives that standardize page structure and navigation controls

These components will be designed to be composable and easy to customize with Tailwind utility classes.

### 5) Wizard Step Screens (Mocked)
The application will ship with a sequence of mocked screens that align with the marketing model builder workflow:
- UploadStep: provides a file input and displays basic sample detection after a mock upload
- ChannelAssignmentStep: enables assigning detected columns to marketing channels
- DataPreviewStep: shows a table preview and small summary statistics
- VisualizationStep: displays charts and channel breakdowns for visual exploration
- EventTimelineStep: lists or calendars events and holidays with add/edit interactions
- CalibrationStep: offers sliders to simulate calibration, with live chart updates
- InsightsStep: showcases insights as cards with supporting charts and text
- ExportStep: provides mock download actions and a summary of selections and results

All screens use mock data and deterministic UI logic to illustrate the expected workflow.

### 6) Navigation and Validation Logic
Each step will define a simple canProceed rule to determine whether the Next button is enabled. Navigation will be guarded until required inputs are present (e.g., upload completed, channels mapped). The layout will include a Reset action to clear the wizard state and return to the first step.

### 7) Animations and Responsiveness
Framer Motion will be used for transitions between steps, hover effects on cards, and subtle element entrances. Layouts will be responsive for desktop and tablet form factors, ensuring consistent usability and readability.

### 8) Documentation
In addition to this implementation plan, the README will be updated with instructions to run the app and a brief feature tour. This ensures contributors and reviewers can quickly set up, run, and understand the prototype’s scope and behavior.

### 9) Optional Improvements
If time allows, the experience can be enhanced with:
- ToastProvider or shadcn toast notifications for user feedback
- A LocalStorage-based persistence mechanism to retain wizard state across reloads

## Architecture

### Component Structure
The app follows a single-page layout with a wizard architecture. The core elements are:
- App: initializes context providers and renders the wizard layout
- WizardContext: holds state for step progression and all per-step data
- Shared Components: Stepper, FileDropzone, DataTable, ChartCard, and layout primitives
- Step Screens: modular, self-contained pages for each workflow stage

This structure promotes clarity and incremental development, allowing each step to be built and validated independently while maintaining a coherent overall experience.

### Data Flow
Data flows through the WizardContext. User actions within steps dispatch reducer actions to update relevant state segments. Screens read from context to render the latest state. Since there is no backend integration, all inputs and outputs are mocked, and any “processing” is simulated via deterministic transformations and static assets.

### Theming
Theming is handled chiefly through Tailwind utility classes with shadcn/ui primitives. The color tokens are aligned to the specified primary, secondary, and accent hues to ensure a consistent brand look throughout the application.

## Issues and Notes

- Tailwind/shadcn and visualization dependencies (Recharts, Framer Motion) are not yet present in package.json and must be installed before implementing the corresponding features.
- All data and interactivity are mocked; there is no backend integration in this prototype.
- The application uses a single-page approach and does not require react-router.
- Minimal custom CSS is encouraged, favoring Tailwind utility classes and shadcn/ui components for consistency and maintainability.

## Conclusion

### Summary
This plan provides a step-by-step, file-by-file implementation map to build the requested marketing model builder prototype. By structuring the application around a wizard layout with reusable components, mocked data, and clear navigation logic, the team can deliver a polished UI/UX that demonstrates the full workflow. Refer to the project README for setup instructions and a quick feature tour.
