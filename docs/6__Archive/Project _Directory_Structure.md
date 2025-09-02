🎯 Executive Summary (L1)  
Your portfolio is a modern Next.js application with a modular structure, designed to be scalable and easy to maintain. It’s configured for Firebase hosting and uses reusable components.

📁 Portfolio Anatomy - Novice-Friendly Explanation  
1. Entry Point (src/app/)  
src/app/ → Brain of the application  
├── layout.tsx → Base template (header, footer, global styles)  
├── page.tsx → Your main page (landing)  
└── globals.css → Styles that affect the whole site  
Think of it as your house skeleton – layout is the base structure, page is the living room.

2. Section Components (src/components/structure/)  
src/components/structure/ → Building blocks  
├── Header → Top navigation  
├── Hero → Welcome section ("Hi, I’m Federico")  
├── Projects → Project gallery  
├── FAQ → Frequently asked questions  
└── etc.  
Like prefabricated rooms you can connect like LEGO.

3. UI Components (src/components/ui/)  
src/components/ui/ → Small reusable pieces  
├── Button → Consistent buttons  
├── Dialog → Modal windows  
├── Toast → Notifications  
└── Accordion → Expandable sections  
Like furniture you reuse in many rooms (buttons, windows, etc.).

4. Utilities (src/lib/)  
src/lib/ → Tools and data  
├── utils.ts → Helper functions  
└── data.ts → Your project information  
Like a toolbox and a data file.

⚡ How Does Your VibeCoding Workflow Work?  
Typical Workflow:  
- Modify data.ts → Change text, projects, links  
- Adjust components → Change colors, layout in components/  
- Preview → `npm run dev` to see changes  
- Deploy → Firebase uploads automatically  

Most Touched Files:  
- src/lib/data.ts → YOUR CONTENT (projects, bio, links)  
- src/components/structure/Hero.tsx → Your personal intro  
- src/components/structure/Projects.tsx → Work gallery  
- globals.css → Colors and global styles  

🛠 Technical Setup (Simplified)  
Root configs (root files):  
- tailwind.config.ts → Custom styles and colors  
- tsconfig.json → TypeScript configuration  
- package.json → Dependency list  
- next.config.js → Next.js configuration  

Firebase Hosting:  
- apphosting.yaml → Tells Firebase how to upload your site  

🎨 Advantages of This Structure for You:  
✅ Pros:  
- Modular → Change one section without breaking others  
- Scalable → Easy to add new sections  
- Reusable → UI components used in multiple places  
- AI-Friendly → Easy to modify with specific prompts  

📝 Practical Example:  
Prompt for AI: *"Modify the Hero component to add a CV download button"*  
→ Only touch src/components/structure/Hero.tsx  
→ Use the existing Button component  
→ Doesn’t affect the rest of the site
