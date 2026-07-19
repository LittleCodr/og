"use client";

export default function Newsletter() {
  return (
    <section className="overflow-hidden section-bg section-newsletter" style={{ ["--section_bg" as string]: "#272727" }}>
      <div className="bg-img" style={{ backgroundImage: "url(/images/Frame_1000004122.png)" }}>
        <div className="section-bg newsletter-box">
          <div className="container">
            <div className="row m-0 justify-content-center">
              <div className="col-12 row m-0 p-0 justify-content-center align-items-center gap-lg-0 gap-md-4 gap-3 px-md-0 px-2">
                <div className="col-xl-6 col-lg-5 p-0 newsletter-heading text-center text-md-start d-flex flex-column flex-lg-row justify-content-center align-items-center">
                  <h3 className="widget-title alt-font">Subscribe to Our Newsletter</h3>
                </div>
                <div className="col-xl-6 col-lg-7 p-0 newsletter-form newsletter-wrap">
                  <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group row m-0 justify-content-center gap-3">
                      <input
                        type="email"
                        className="mb-0"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className="btn alt-font">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
