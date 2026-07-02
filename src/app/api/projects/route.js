export async function GET() {
  const projects = [
    {
      id: 1,
      title: 'Startup Forge',
      slug: 'startup-forge',
      stack: 'Full Stack',
      image: 'https://i.ibb.co/5VHNxsF/image.png',
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Stripe', 'REST API', 'Vercel', 'Railway'],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'JWT', 'Stripe', 'Express', 'Tailwind', 'Vercel', 'Railway'],
      liveUrl: 'https://startup-forge-ivory.vercel.app/',
      githubUrl: 'https://github.com/rj-roy/startup-forge',

      description: 'A modern full-stack platform for connecting founders, collaborators, and admins in a startup ecosystem.',
      projectDetails: "Startup Forge is a multi-role marketplace built to simplify how early-stage startups discover talent and how collaborators discover meaningful opportunities. The experience spans a polished public website, secure authentication, role-based dashboards, and a REST API that powers startup, opportunity, application, and subscription workflows.",
      keyFeatures: [
        'Role-based user flows for founders, collaborators, and admins',
        'Secure authentication with Better Auth and session handling',
        "Protected dashboards and route-based access control",
        "Startup and opportunity discovery pages",
        "Application submission and tracking",
        "Subscription and plan management flows",
        "Cloudinary image upload support",
        "Modern theme support with light/dark switching",
      ]
    },
    {
      id: 2,
      title: 'Hire Loop',
      slug: 'hire-loop',
      stack: 'Full Stack',
      image: 'https://i.ibb.co/ccSk5p2W/image.png',
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Stripe', 'REST API', 'Vercel', 'Railway'],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'JWT', 'Stripe', 'Express', 'Tailwind', 'Vercel', 'Railway'],
      liveUrl: 'https://hire-loop-ten.vercel.app/',
      githubUrl: 'https://github.com/rj-roy/hire-loop',

      description: 'A full-stack modern AI-powered recruitment and career platform',
      projectDetails: "HireLoop is a modern AI-powered recruitment and career platform that bridges the gap between job seekers, startups, recruiters, collaborators, and administrators. Rather than functioning as a traditional job board, HireLoop creates an ecosystem where talent discovery, startup hiring, collaboration, and opportunity management happen within one centralized platform. The platform is built with scalability and role- based architecture in mind, allowing different users to access specialized dashboards and workflows according to their responsibilities.Whether someone is searching for employment, building a startup team, recruiting skilled professionals, or managing platform operations, HireLoop provides dedicated tools that simplify the entire recruitment lifecycle. Designed with performance, security, and user experience as core priorities, HireLoop incorporates authentication, subscription plans, opportunity management, intelligent search, and administrative controls into a single seamless application.",
      keyFeatures: [
        "HireLoop supports multiple user roles, each with its own dashboard and permissions.",
        "The platform provides secure authentication using JWT, Protected Routes, Role based authentication",
        "Every user accesses a customized dashboard designed specifically for their workflow.",
        "Users can create and manage hiring opportunities with detailed information",
        "Startup owners can create professional startup pages",
        "HireLoop includes a flexible subscription model supporting different user needs.",
        "Users maintain complete professional profiles",
        "Powerful search functionality allows users to find quickly",
      ]
    },
    {
      id: 3,
      title: 'Medi Queue',
      slug: 'medi-queue',
      stack: 'Full Stack',
      image: 'https://i.ibb.co.com/CsXRD6wg/image.png',
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'REST API', 'Vercel'],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'Vercel'],
      liveUrl: 'https://medi-queue-by-rj.vercel.app/',
      githubUrl: 'https://github.com/rj-roy/medi-queue-client',

      description: 'A full-stack education platform connecting rural classrooms.',
      projectDetails: "Tutor Booking Platform is a full-stack web application that connects students with qualified tutors through an intuitive booking system. Users can browse available tutors, view detailed profiles including expertise and experience, book tutoring sessions, manage their bookings, and leave reviews. Tutors can create and manage their profiles, while authenticated users can track their booked sessions through a personalized dashboard. The platform provides a seamless experience for discovering educational support and scheduling learning sessions online.",
      keyFeatures: [
        "Browse and search tutors by subject or expertise",
        "View detailed tutor profiles with qualifications and experience",
        "Book tutoring sessions with available tutors",
        "User authentication and protected routes",
        "Add and manage tutor listings",
        "View and manage booked sessions",
        "Personal dashboard for users and tutors",
        "Tutor reviews and ratings system",
        "Responsive design for mobile, tablet, and desktop devices",
        "Secure backend API with database integration",
        "Real-time booking count and session tracking",
        "Dynamic tutor management with CRUD operations"
      ]
    },
    {
      id: 4,
      title: 'Keen Keeper',
      slug: 'keen-keeper',
      stack: 'Front-End',
      image: 'https://i.ibb.co.com/BVSCRVQ7/image.png',
      tags: ['React', 'Next.js', 'JavaScript', 'Tailwind', 'Vercel'],
      technologies: ['React', 'Next.js', 'JavaScript', 'Vercel', 'Tailwind'],
      liveUrl: 'https://keen-keeper-gules-six.vercel.app/',
      githubUrl: 'https://github.com/rj-roy/keen-keeper',

      description: 'our personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.',
      projectDetails: "A modern Next.js 16 application for tracking and managing personal interactions, check-ins, and timelines. Built with a focus on simplicity, clarity, and fast performance using server-side rendering and component-based architecture.",
      keyFeatures: [
        "Manage friends / contacts data",
        "Track interaction timelines (Call, Text, Meet, etc.)",
        "Detailed interaction history view",
        "Status tracking (on-track, inactive, etc.)",
        "Fast server-rendered pages with Next.js App Router",
        "Clean UI built with Tailwind CSS",
        "Static JSON-based data handling (no external DB required)",
      ]
    },
    {
      id: 5,
      title: 'Shelf Care',
      slug: 'shelf-care',
      stack: 'Full Stack',
      image: 'https://i.ibb.co.com/yBFwwynN/image.png',
      technologies: ['JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'BetterAuth', 'Vercel', 'JWT'],
      tags: ['JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'BetterAuth', 'Vercel', 'JWT'],
      liveUrl: 'https://shelf-care.vercel.app/',
      githubUrl: 'https://github.com/rj-roy/shelf-care',

      description: 'Find Your Next Read',
      projectDetails: "Shelf Care is a full-stack online library platform designed to revolutionize how readers discover, borrow, and engage with books. Built with Next.js 14, React, and Tailwind CSS on the frontend, and powered by a Node.js/Express backend with BetterAuth for secure authentication, Shelf Care offers a seamless experience for browsing over 12,400+ titles across 40+ genres. Users can search and filter books, view real-time availability, borrow and return titles with due-date tracking, maintain a personal wishlist, and explore their reading history. Beyond core library functionality, the platform fosters community through themed Reading Clubs, member profiles, and book reviews. With a fully responsive, accessible UI enhanced by Framer Motion animations, dark/light mode support, and optimized performance via SSR and image lazy-loading, Shelf Care delivers a modern, engaging digital library experience—whether you're reading on mobile, tablet, or desktop. 📚✨",
      keyFeatures: [
        "User Authentication",
        "Secure sign-up & login with BetterAuth",
        "Book Management",
        "Advanced search & filtering by title, author, category",
        "Book details page with availability status & copy count",
        "Borrow & Return System: Track borrowed books with due dates",
        "Wishlist: Save books to read later",
        "Fully responsive design (Mobile • Tablet • Desktop)",
        "Dark/Light mode support",
        "Server-side rendering (SSR) & Static generation (SSG)",
        "API route caching for faster responses",
        "Lazy loading for book lists & covers"
      ]
    },
    {
      id: 6,
      title: 'Digi Tools',
      slug: 'digi-tools',
      stack: 'Front-End',
      image: 'https://i.ibb.co.com/qL1h9C0x/image.png',
      technologies: ['JavaScript', 'React', 'Tailwind', 'Netlify'],
      tags: ['JavaScript', 'React', 'Tailwind', 'Netlify'],
      liveUrl: 'https://medi-queue-by-rj.vercel.app/',
      githubUrl: 'https://github.com/rj-roy/medi-queue-client',

      description: 'Digital Tools Selling Platform',
      projectDetails: "Digital Tools is a modern, visually appealing dessert website focused on showcasing and selling delicious cheesecakes and baked items. The platform highlights different flavors, trending products, and special deals to attract customers and provide an engaging user experience.",
      keyFeatures: [
        "Product Showcase",
        "Deals of the Day",
        "Order & Call-to-Action Sections",
      ]
    }
  ];

  return Response.json(projects);
}
