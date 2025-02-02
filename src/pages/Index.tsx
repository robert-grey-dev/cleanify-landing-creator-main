import { Suspense, lazy, useEffect } from 'react';
import Hero from "@/components/Hero";
import { Skeleton } from "@/components/ui/skeleton";
import { Helmet } from "react-helmet";

// Lazy load components that are below the fold
const Services = lazy(() => import("@/components/Services"));
const Statistics = lazy(() => import("@/components/Statistics"));
const Features = lazy(() => import("@/components/Features"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const CallToAction = lazy(() => import("@/components/CallToAction"));

// Loading fallbacks
const ComponentLoader = () => (
  <div className="w-full space-y-4 p-8">
    <Skeleton className="h-8 w-3/4 mx-auto" />
    <Skeleton className="h-4 w-1/2 mx-auto" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} className="h-48 w-full" />
      ))}
    </div>
  </div>
);

const Index = () => {
  useEffect(() => {
    // Prefetch components that are likely to be needed
    const prefetchComponents = async () => {
      const [ServicesComponent, StatisticsComponent] = await Promise.all([
        import("@/components/Services"),
        import("@/components/Statistics")
      ]);
    };
    prefetchComponents();
  }, []);

  return (
    <>
      <Helmet>
        <title>Professional Cleaning Services | Modern Living Solutions</title>
        <meta name="description" content="Professional cleaning services tailored to your lifestyle. Book instantly and experience top-quality home cleaning services." />
        <meta name="keywords" content="cleaning services, home cleaning, professional cleaners, house cleaning, maid service" />
        <meta property="og:title" content="Professional Cleaning Services | Modern Living Solutions" />
        <meta property="og:description" content="Professional cleaning services tailored to your lifestyle. Book instantly and experience top-quality home cleaning services." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-domain.com" />
      </Helmet>

      <main className="min-h-screen">
        <Hero />
        
        <Suspense fallback={<ComponentLoader />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <Statistics />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <Features />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <CallToAction />
        </Suspense>
      </main>
    </>
  );
};

export default Index;