import HomeMain from "@/components/homeMain";
import RecentPostSection from "@/components/recentPostSection";
import PopularPost from "@/components/popularPost"

export default function Home() {
  return (
    <main className="w-full">
    <HomeMain/>
    <RecentPostSection/>
    <PopularPost/>
   
    </main>  );
}
