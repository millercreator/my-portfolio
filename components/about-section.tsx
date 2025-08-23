import { mockData } from "@/app/data/mock-data";

export function AboutSection() {
  return (
    <section className="space-y-4 text-lg text-muted-foreground mb-16">
      {mockData.aboutText.main}
      <br />
      <br />
      {mockData.aboutText.secondary}
    </section>
  );
}
