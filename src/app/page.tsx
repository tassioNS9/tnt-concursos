import LandingCta from "@/app/components/landing/landing-cta";
import LandingFeatures from "@/app/components/landing/landing-features";
import LandingHeader from "@/app/components/landing/landing-header";
import LandingHero from "@/app/components/landing/landing-hero";
import LandingPricing from "@/app/components/landing/landing-pricing";
import LandingTestimonials from "@/app/components/landing/landing-testimonials";

export default function Home() {
  return (
    <main className="bg-background relative min-h-screen overflow-hidden">
      <div className="landing-grid-pattern pointer-events-none absolute inset-0 opacity-50" />

      <LandingHeader />
      <LandingHero />
      <LandingFeatures />
      <LandingTestimonials />
      <LandingPricing />
      <LandingCta />
    </main>
  );
}
