# Structura - Portfolio Creator

This is a Next.js project that serves as a feature-rich, accessible, and modular skeleton for a personal portfolio website. It is based on the structure of the "Portfolio Creator" Webflow template.

The project is built with Next.js, React, and Tailwind CSS, using ShadCN components for UI elements. It is designed to be easily extensible and ready for Firebase integration.

## Project Structure

The application is organized into several key directories:

-   `src/app/`: Contains the main page layout (`layout.tsx`) and the entry point for the landing page (`page.tsx`).
-   `src/components/ui/`: Contains generic, reusable UI components provided by ShadCN.
-   `src/components/structura/`: Contains components specific to the "Structura" portfolio page, such as `Header`, `HeroSection`, `ProjectCard`, etc. These components are modular and assembled in `src/app/page.tsx`.
-   `src/lib/`: Contains utility functions and mock data (`data.ts`).
-   `public/`: For static assets like images. (Currently using placeholders).

## Running the Project

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## TODOs for Full Production Readiness

### 1. Styling and Content

-   **Replace Placeholder Content:** All text and images are currently placeholders. Replace them with your own content.
-   **Replace Placeholder Images:** The project uses `https://placehold.co` for images. Upload your own assets to the `/public` directory and update the `src` attributes in the components.
-   **Review and Refine Styling:** The basic color theme and typography are set in `src/app/globals.css` and `tailwind.config.ts`. You can fine-tune the styling further by modifying Tailwind CSS classes in the components.

### 2. Firebase Integration

The project is set up with stubs for Firestore integration. To connect to a real Firebase backend, follow these steps:

1.  **Create a Firebase Project:** Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.

2.  **Set up Firestore:** In your Firebase project, create a Firestore database.

3.  **Create Collections:** Create the following collections in Firestore to match the data structure:
    -   `projects`
    -   `posts`
    -   `testimonials`
    -   `faqs`
    -   `resume` (or separate `education` and `workExperience` collections)

4.  **Populate Data:** Add documents to your collections with fields matching those in `src/lib/data.ts`.

5.  **Connect the App to Firebase:**
    -   Install the Firebase SDK: `npm install firebase`.
    -   Create a Firebase configuration file (e.g., `src/lib/firebase.ts`). Add your Firebase project's configuration keys.
    -   **Important:** Use environment variables to store your Firebase API keys securely.

6.  **Implement Data Fetching:**
    -   In the server components (`ProjectsSection.tsx`, `BlogSection.tsx`, etc.), you will find `TODO` comments.
    -   Replace the mock data imports with asynchronous calls to fetch data from your Firestore collections.

    **Example for `ProjectsSection.tsx`:**

    ```typescript
    // import { getFirestore, collection, getDocs } from 'firebase/firestore';
    // import { app } from '@/lib/firebase'; // Your firebase config

    // const db = getFirestore(app);

    // async function getProjects() {
    //   const projectsCol = collection(db, 'projects');
    //   const projectSnapshot = await getDocs(projectsCol);
    //   const projectList = projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //   return projectList;
    // }

    export default async function ProjectsSection() {
      // const projects = await getProjects(); // Fetch from Firestore
      const projects = mockProjects; // Currently using mock data

      return (
        // ... JSX
      );
    }
    ```
