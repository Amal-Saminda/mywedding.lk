import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Reviews from "@/components/home/Reviews";
import ProfileGrid from "@/components/profiles/ProfileGrid";
import { topProfiles, recentPosts } from "@/lib/sample-profiles";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProfileGrid title="Top Profile" profiles={topProfiles} />
        <ProfileGrid title="Recent Posts" profiles={recentPosts} totalPages={3} />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
