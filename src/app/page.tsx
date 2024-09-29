import Features from "@/components/Features";
import PopularCourses from "@/components/PopularCourses";
import FooterCta from "@/components/FooterCta";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <Hero />
      <div className="flex flex-col gap-4">
        <Features />

        <PopularCourses />

        <FooterCta />
      </div>
    </main>
  );
}
