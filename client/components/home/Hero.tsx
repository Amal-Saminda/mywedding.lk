import BannerSlideshow from "./BannerSlideshow";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <BannerSlideshow>
      <div className="mt-10 w-full max-w-3xl">
        <SearchBar />
      </div>
    </BannerSlideshow>
  );
}
