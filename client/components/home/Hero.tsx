import BannerSlideshow from "./BannerSlideshow";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <BannerSlideshow>
      {/* <h1 className="font-sinhala text-4xl font-bold leading-tight text-white sm:text-5xl">
        එන්න, වේදින්න <span className="text-gold-light">ජීවිතය</span>
      </h1>
      <p className="mt-4 max-w-md text-sm text-white/80">
        දහස් ගණන් ශ්‍රී ලාංකීය පවුල් විශ්වාස කරන විවාහ ගැලපීමේ වේදිකාව
      </p> */}

      <div className="mt-10 w-full max-w-3xl">
        <SearchBar />
      </div>
    </BannerSlideshow>
  );
}
