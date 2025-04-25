Creative Hub — A Collaborative Platform for Artists & Designers
Creative Hub is a digital space built to empower creators, designers, and visual storytellers to upload, showcase, and collaborate on creative projects. Whether you're a digital artist, illustrator, or designer, Creative Hub gives you a platform to share your talent, discover others, and now — even accept bids on your artwork.

Features
Artist-focused modern UI, fully responsive across all screen sizes

Upload and preview artwork with images, videos, tags, and categories

Like, comment, and collaborate with fellow creators

Built-in bidding feature to monetize artwork (simulated with dummy data)

AI-based recommendations based on style and tags (mocked)

Dark/Light theme toggle with localStorage support

Smooth animations using Framer Motion and Tailwind transitions

Tech Stack
React.js with functional components and Hooks

Tailwind CSS with Shadcn UI for styling

React Router v6 for navigation

Framer Motion for UI transitions

localStorage for theme persistence

Folder Structure
css
Copy
Edit
src/
│
├── assets/         Images, icons, and other assets
├── components/     Reusable UI components (Navbar, Footer, Cards, Forms)
├── context/        Theme and state context providers
├── hooks/          Custom React hooks (e.g. useLocalStorage)
├── pages/          Core pages like Home, Dashboard, Gallery, etc.
├── App.jsx         Main app with route setup
└── main.jsx        Project entry point
Pages
Home: Hero section with CTA and scroll animations

Login / Register: Validated forms with show/hide password and role select

Dashboard: Creator overview with stats, avatar, and actions

Upload Artwork: Form with live preview and success toast

Gallery: Masonry-style responsive artwork grid with filters and previews

AI Recommendations: Suggested artists and artworks based on dummy tags

Bidding: Simulated bidding system with dummy users and artworks

Profile Settings: Editable profile with image, bio, and save feedback

Installation
Clone the repo
git clone https://github.com/AshleyMathias/creative-hub.git

Navigate to the project directory
cd creative-hub

Install dependencies
npm install

Start the development server
npm run dev

Ensure you have Node.js and npm installed on your system.

Contribution
Contributions are welcome! Fork the repo, make your changes, and open a pull request. Make sure to follow clean coding standards and keep the design responsive and artistic.

Live Website
Visit the live project at: https://creativehub02.netlify.app/

License
This project is licensed under the MIT License.

