const categories = [
  { label: "Luxury", href: "/collections/og-luxury" },
  { label: "Natural", href: "/collections/og-naturals" },
  { label: "Science", href: "/collections/og-science" },
  { label: "Cosmetics", href: "/collections/og-beauty" },
  { label: "Wellness", href: "/collections/og-wellness" },
  { label: "Crazy Deals", href: "/pages/buy-2-at-899-100-ml" },
];

const orders = [
  { label: "Account", href: "/account/login" },
  { label: "Track Order", href: "/account/login" },
  { label: "Shipping Policy", href: "/pages/shipping-policy" },
];

const importantLinks = [
  { label: "About Us", href: "/pages/about-us" },
  { label: "Contact Us", href: "/pages/contact-us" },
  { label: "Terms & Conditions", href: "/pages/terms-and-conditions" },
  { label: "Coupon T&C", href: "/pages/coupon-terms-condition" },
  { label: "Privacy Policy", href: "/pages/privacy-policy" },
  { label: "Return & Refund Policy", href: "/pages/return-and-refund-policy" },
  { label: "Blogs", href: "/blogs/news" },
];

export default function Footer() {
  return (
    <footer className="section-bg site-footer" style={{ ["--section_bg" as string]: "#000000" }}>
      <div className="container">
        <div className="section-radius">
          <div className="footer-top border-bottom-0">
            <div className="row">
              <div className="col-lg-12 text-block-content footer-block text-center pb-6">
                <a
                  className="d-flex footer-logo align-items-center justify-content-center gap-5 pb-xl-0 pb-5"
                  href="/"
                  aria-label="logo"
                >
                  <img
                    src="/images/OG_Luxury_Logo_White.png"
                    alt=""
                    width={5500}
                    height={4415}
                    loading="lazy"
                    style={{ maxWidth: 105 }}
                  />
                </a>
                <div className="custom-content d-block d-lg-none col-9 m-auto">
                  OWN THE ORIGINAL. At OG, we design products that combine performance and
                  purity, delivering results you can rely on—because originality belongs to all.
                </div>
              </div>

              <div className="col-6 col-lg-4 footer-block informaiton d-xl-block d-none">
                <h6 className="block-heading">Who we are</h6>
                <div className="custom-content">
                  Bringing you the best of Beauty with the best of results of Naturals at the
                  best prices guaranteed with Quality.
                </div>
              </div>

              <div className="col-6 col-xl-2 col-lg-3 footer-block mobile-wrapper pb-lg-0 pb-4">
                <h6 className="block-heading">Categories</h6>
                <ul className="footer-menu-link">
                  {categories.map((c) => (
                    <li key={c.href + c.label} className="menu-item custom-content">
                      <a className="navigation-links hover-underline" href={c.href} aria-label="menu">
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-6 col-xl-2 col-lg-3 footer-block mobile-wrapper pb-lg-0 pb-4">
                <h6 className="block-heading">Orders</h6>
                <ul className="footer-menu-link">
                  {orders.map((o) => (
                    <li key={o.href + o.label} className="menu-item custom-content">
                      <a className="navigation-links hover-underline" href={o.href} aria-label="menu">
                        {o.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-6 col-xl-2 col-lg-3 footer-block mobile-wrapper pb-lg-0 pb-4">
                <h6 className="block-heading">Important Links</h6>
                <ul className="footer-menu-link">
                  {importantLinks.map((l) => (
                    <li key={l.href} className="menu-item custom-content">
                      <a className="navigation-links hover-underline" href={l.href} aria-label="menu">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-6 col-xl-2 col-lg-3 social-media footer-block">
                <h6 className="block-heading">Follow us on:</h6>
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/ogluxuryofficial/"
                      className="facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                      </svg>
                      <span />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ogluxuryofficial/"
                      className="instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                      <span />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="row align-items-center justify-content-md-between justify-content-center copyright">
              <div className="col-md-6 d-flex gap-3 footer-policy-links justify-content-md-start justify-content-center">
                <a href="/pages/terms-and-conditions" className="hover-underline">
                  Terms &amp; Conditions
                </a>
                <a href="/pages/privacy-policy" className="hover-underline">
                  Privacy Policy
                </a>
              </div>
              <div className="col-md-6 text-md-end text-center copyright-text">
                <p>©OGbeauty Private Limited 2026. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .block-heading, .footer-newsletter h5, .informaiton h4, a.footer-logo { color: #ffffff; }
        .footer-top { border-color: #e4e4e4; }
      `}</style>
    </footer>
  );
}
