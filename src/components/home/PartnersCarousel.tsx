import type { Partner } from "../../data/partners";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  partners: Partner[];
  className?: string;
  slidesToShowDesktop?: number; // tweakable
  autoplaySpeed?: number;       // tweakable
};

export default function PartnersCarousel({
  partners,
  className = "",
  slidesToShowDesktop = 6,
  autoplaySpeed = 1500,
}: Props) {
  const settings = {
    slidesToShow: slidesToShowDesktop,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: Math.min(5, slidesToShowDesktop) } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768,  settings: { slidesToShow: 3 } },
      { breakpoint: 480,  settings: { slidesToShow: 1 } },
    ],
  } as const;

  if (!partners?.length) {
    return <p className="text-center">No sponsors available</p>;
  }

  return (
    <div className={className}>
      <Slider {...settings}>
        {partners.map((p, i) => (
          <a
            key={`${p.name}-${i}`}
            href={p.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between px-5 py-4 text-center rounded-lg min-h-[200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20"
          >
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              src={p.logo.trim()}                // trims accidental space in "/GSI.png "
              alt={`Partner: ${p.name}`}
              loading="lazy"
              className="border border-[#E62B1E]/60 mx-auto rounded-lg mb-4 px-2 py-2 
                         w-32 h-24 sm:w-36 sm:h-28 md:w-40 md:h-32 lg:w-44 lg:h-36 object-contain"
            />
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-black">
              {p.name}
            </h3>
          </a>
        ))}
      </Slider>
    </div>
  );
}
