import HeroSection from '@/app/components/Landing_page/home/page';
import ContactSection from '@/app/components/Landing_page/contact/page';
import CategorySection from '@/app/components/Landing_page/category/page';
import AboutSection from '@/app/components/Landing_page/about/page';

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <CategorySection />
      <ContactSection />
    </div>
  );
}
