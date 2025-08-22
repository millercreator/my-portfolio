import { ProductProjectCard } from "./product-project-card";

const fullstackProjects = [
    {
        logo: "/mock-images/12.png",
        title: "Task Manager",
        description: "Plan tasks, track progress, ship features, simple for dev teams",
    },
    {
        logo: "/mock-images/22.png",
        title: "Bill Payment Platform",
        description: "Manage accounts, send money, track spending, secure banking",
    },
    {
        logo: "/mock-images/11.png",
        title: "Team Chat App",
        description: "Real-time chat, fast messaging, reliable, easy for teams",
    },
    {
        logo: "/mock-images/22.png",
        title: "Issue Tracker",
        description: "Track bugs, assign issues, comment, close tickets quickly",
    },
];

export function FullstackProjectsList() {
    return (
        <section className="space-y-4">
            {fullstackProjects.map((project) => (
                <ProductProjectCard
                    key={project.title}
                    logo={project.logo}
                    title={project.title}
                    description={project.description}
                    onViewMore={() => { }}
                />
            ))}
        </section>
    );
}
