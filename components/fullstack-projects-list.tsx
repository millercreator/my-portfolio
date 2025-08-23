import { ProductProjectCard } from "./product-project-card";
import { mockData } from "@/app/data/mock-data";

export function FullstackProjectsList() {
    return (
        <section className="space-y-2">
            {mockData.fullstackProjects.map((project) => (
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
