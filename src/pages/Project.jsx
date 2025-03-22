import React, { useState } from "react";

const projects = [
    {
        title: "ECommerce Website",
        description: "An online store using FakeStoreAPI, built with HTML, CSS, and JavaScript.",
        link: "#",
        image: "/src/assets/images/Ecommerce.png" // Replace with actual image URL
    },
    {
        title: "Text Editor",
        description: "A React and Tailwind-based text editor with various text transformation features.",
        link: "#",
        image: "/src/assets/images/texteditor.png" // Replace with actual image URL
    },
    {
        title: "Password Generator",
        description: "A password generator built with React and Tailwind CSS, allowing users to generate secure passwords ranging from 8 to 100 characters with options for numbers, symbols, and a copy button.",
        link: "#",
        image:  "/src/assets/images/Password.png"// Replace with actual image URL
    },
    {
        title: "News Webiste",
        description: "A news website built with React and Tailwind CSS, fetching real-time news from an API and displaying category-wise news for a better browsing experience.",
        link: "#",
        image: "/src/assets/images/news.png" // Replace with actual image URL
    },
    {
        title: "Bg-Color-Changer",
        description: "A background color converter built with React and Tailwind CSS, allowing users to change the background dynamically by clicking different color buttons.",
        link: "#",
        image: "/src/assets/images/bg-color.png" // Replace with actual image URL
    },
    {
        title: "Currency Convertor",
        description: "A currency converter built with React and Tailwind CSS, using an API for real-time exchange rates.",
        link: "#",
        image: "/src/assets/images/currencyconvertor.png" // Replace with actual image URL
    }
];

const ProjectsPage = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="text-black min-h-screen">
            <header className="text-center py-6">
                <h1 className="text-4xl font-bold">My Projects</h1>
            </header>
            <main className="container mx-auto py-10 px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 ${hoveredIndex !== null && hoveredIndex !== index ? 'blur-sm' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
                            <h2 className="text-2xl font-semibold mt-4">{project.title}</h2>
                            <p className="mt-2 text-gray-100">{project.description}</p>
                            <a href={project.link} className="mt-4 inline-block text-indigo-950 transition-all duration-300 hover:scale-110 after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center items-center">View Project</a>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ProjectsPage;
