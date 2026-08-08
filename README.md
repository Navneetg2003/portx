## NekoNexus Portfolio

# Welcome to the repository for my personal portfolio website, NekoNexus. This website showcases my skills, projects, and professional journey.

🚀 Features

Personal Introduction: About me, skills, and experience.

Projects Showcase: Featured projects with links to repositories.

Skills Display: Technologies and tools I work with.

Resume Download: Easy access to my resume.

Contact Form: Get in touch via email.

Professional Experience: Detailed work history and internships.

AI Chatbot: Ask questions about my background, powered by the Gemini API.

Responsive Design: Mobile-first design with smooth animations.

🛠️ Tech Stack

Frontend: React.js, Vite

Styling: Tailwind CSS (with custom scrollbar)

Icons: Material Symbols (Google Fonts)

Analytics: Vercel Analytics

Form Handling: Getform.io

AI: Google Gemini API (via a Vercel serverless function in /api)

Deployment: Vercel

📦 Installation & Setup

Clone the Repository:

git clone https://github.com/Navneetg2003/portx.git
cd portx

Install Dependencies:

npm install

Set up the chatbot (required for the AI chatbot to respond):

cp .env.example .env

Then get a free key at https://aistudio.google.com/apikey and put it in .env as GEMINI_API_KEY.
Note: plain `npm run dev` does not run the /api function — use `vercel dev` locally, or test the chatbot after deploying.

Run the Development Server:

npm run dev

Open http://localhost:5173 to view it in the browser.

Build for Production:

npm run build
npm run preview

📁 Project Structure

portfolio/
│── api/
│   └── chat.js      # Gemini-backed serverless function for the chatbot
│── public/
│   └── assets/      # Images, PDF resume, icons
│── src/
│   ├── components/  # Reusable UI components
│   ├── App.jsx       # Root component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
│── .env.example
│── .gitignore
│── package.json
│── README.md

🚀 Deployment

The website is deployed on Vercel. To deploy your own version:

vercel

Follow the setup steps to deploy it, then add GEMINI_API_KEY under Project Settings → Environment Variables and redeploy so the chatbot can respond.

📧 Contact

If you have any questions, feel free to reach out!

Website: navneetg.vercel.app

Email: navneetgupta1302@gmail.com

LinkedIn: linkedin.com/in/navneetg

Made with ❤️ by Navneet Gupta
