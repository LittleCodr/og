import type { Banner } from "@/data/banners";

export default function HomeBanners({ banners }: { banners: Banner[] }) {
  return (
    <>
      {banners.map((b, i) => (
        <div key={b.image + i} className="w-100 overflow-hidden">
          <a href={b.href}>
            <div className="desktop-image d-md-block d-none">
              <img src={b.image} alt="" style={{ width: "100%" }} />
            </div>
            <div className="mobile-image d-md-none">
              <img src={b.image} alt="" style={{ width: "100%" }} />
            </div>
          </a>
        </div>
      ))}
    </>
  );
}
