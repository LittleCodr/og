"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/products";
import { useCart } from "@/context/CartContext";

import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalCount } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header id="hongo-header" className="header-layout-style-1">
      <style>{`
        .og-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          max-width: 1310px;
          margin: 0 auto;
          padding: 14px 16px;
        }
        .og-header-side {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .og-nav-toggle {
          display: inline-flex;
          border: 0;
          background: none;
          font-size: 22px;
          line-height: 1;
          padding: 4px;
          cursor: pointer;
        }
        .og-nav-desktop {
          display: none;
        }
        .og-nav-mobile {
          display: block;
          border-top: 1px solid var(--extra-medium-gray, #e4e4e4);
          background: #fff;
        }
        .og-nav-mobile[data-open="false"] {
          display: none;
        }
        .og-nav-mobile ul {
          list-style: none;
          margin: 0;
          padding: 8px 16px 16px;
          display: flex;
          flex-direction: column;
        }
        .og-nav-mobile a {
          display: block;
          padding: 12px 4px;
          border-bottom: 1px solid var(--extra-medium-gray, #eee);
          font-weight: 500;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 0.02em;
        }
        @media (min-width: 992px) {
          .og-nav-toggle {
            display: none;
          }
          .og-nav-mobile {
            display: none !important;
          }
          .og-nav-desktop {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 28px;
            flex: 1;
          }
          .og-nav-desktop a {
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.02em;
            white-space: nowrap;
          }
        }
      `}</style>

      <div className="og-header-bar">
        <button
          type="button"
          className="og-nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <Link href="/" aria-label="logo" style={{ display: "inline-flex" }}>
          <img
            src="/images/OG_Luxury_White_BG_2.jpg"
            alt="OG Luxury"
            width={1000}
            height={1000}
            loading="lazy"
            style={{ height: 44, width: "auto" }}
          />
        </Link>

        <nav className="og-nav-desktop" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="og-header-side">
          <div className="search text-capitalize" data-minisearch-trigger="true" aria-label="search">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.5306 20.4693L16.8365 15.7762C18.1971 14.1428 18.8755 12.0478 18.7307 9.92691C18.5859 7.80604 17.629 5.82265 16.0591 4.38932C14.4892 2.95599 12.4271 2.18308 10.3019 2.23138C8.17663 2.27968 6.15181 3.14547 4.64864 4.64864C3.14547 6.15181 2.27968 8.17663 2.23138 10.3019C2.18308 12.4271 2.95599 14.4892 4.38932 16.0591C5.82265 17.629 7.80604 18.5859 9.92691 18.7307C12.0478 18.8755 14.1428 18.1971 15.7762 16.8365L20.4693 21.5306C20.539 21.6003 20.6218 21.6556 20.7128 21.6933C20.8038 21.731 20.9014 21.7504 21 21.7504C21.0985 21.7504 21.1961 21.731 21.2871 21.6933C21.3782 21.6556 21.4609 21.6003 21.5306 21.5306C21.6003 21.4609 21.6556 21.3782 21.6933 21.2871C21.731 21.1961 21.7504 21.0985 21.7504 21C21.7504 20.9014 21.731 20.8038 21.6933 20.7128C21.6556 20.6218 21.6003 20.539 21.5306 20.4693ZM3.74997 10.5C3.74997 9.16495 4.14585 7.8599 4.88755 6.74987C5.62925 5.63984 6.68346 4.77467 7.91686 4.26378C9.15026 3.75289 10.5075 3.61922 11.8168 3.87967C13.1262 4.14012 14.3289 4.78299 15.2729 5.727C16.2169 6.671 16.8598 7.87374 17.1203 9.18311C17.3807 10.4925 17.2471 11.8497 16.7362 13.0831C16.2253 14.3165 15.3601 15.3707 14.2501 16.1124C13.14 16.8541 11.835 17.25 10.5 17.25C8.71037 17.248 6.99463 16.5362 5.72919 15.2708C4.46375 14.0053 3.75195 12.2896 3.74997 10.5Z"
                fill="#272727"
              />
            </svg>
          </div>

          <Link href={user ? "/account" : "/account/login"} className="account cursor-pointer text-capitalize" aria-label="account">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.6488 19.875C20.2209 17.4065 18.0206 15.6365 15.4528 14.7975C16.723 14.0414 17.7098 12.8892 18.2618 11.5179C18.8137 10.1467 18.9003 8.63211 18.5082 7.20688C18.1161 5.78165 17.267 4.52454 16.0912 3.6286C14.9155 2.73266 13.4782 2.24744 12 2.24744C10.5218 2.24744 9.08451 2.73266 7.90878 3.6286C6.73306 4.52454 5.88394 5.78165 5.49183 7.20688C5.09971 8.63211 5.18629 10.1467 5.73825 11.5179C6.29021 12.8892 7.27704 14.0414 8.5472 14.7975C5.97938 15.6356 3.77907 17.4056 2.35126 19.875C2.2989 19.9604 2.26417 20.0554 2.24912 20.1544C2.23407 20.2534 2.239 20.3544 2.26363 20.4515C2.28825 20.5486 2.33207 20.6397 2.3925 20.7196C2.45293 20.7995 2.52874 20.8664 2.61547 20.9165C2.7022 20.9666 2.79808 20.9988 2.89745 21.0113C2.99683 21.0237 3.0977 21.0161 3.19409 20.989C3.29049 20.9618 3.38047 20.9156 3.45872 20.8531C3.53697 20.7906 3.6019 20.713 3.6497 20.625C5.41595 17.5725 8.53782 15.75 12 15.75C15.4622 15.75 18.5841 17.5725 20.3503 20.625C20.3981 20.713 20.4631 20.7906 20.5413 20.8531C20.6196 20.9156 20.7095 20.9618 20.8059 20.989C20.9023 21.0161 21.0032 21.0237 21.1026 21.0113C21.2019 20.9988 21.2978 20.9666 21.3845 20.9165C21.4713 20.8664 21.5471 20.7995 21.6075 20.7196C21.6679 20.6397 21.7118 20.5486 21.7364 20.4515C21.761 20.3544 21.766 20.2534 21.7509 20.1544C21.7358 20.0554 21.7011 19.9604 21.6488 19.875ZM6.75001 8.99999C6.75001 7.96164 7.05792 6.9466 7.63479 6.08324C8.21167 5.21989 9.03161 4.54698 9.99092 4.14962C10.9502 3.75226 12.0058 3.64829 13.0242 3.85086C14.0426 4.05344 14.9781 4.55345 15.7123 5.28768C16.4465 6.0219 16.9466 6.95736 17.1491 7.97576C17.3517 8.99416 17.2477 10.0498 16.8504 11.0091C16.453 11.9684 15.7801 12.7883 14.9168 13.3652C14.0534 13.9421 13.0384 14.25 12 14.25C10.6081 14.2485 9.27359 13.6949 8.28934 12.7107C7.3051 11.7264 6.7515 10.3919 6.75001 8.99999Z"
                fill="#272727"
              />
            </svg>
          </Link>

          <Link href="/cart" style={{ cursor: "pointer", position: "relative", display: "inline-flex" }} className="cart text-capitalize" aria-label="cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.25 3.75H3.75C3.35218 3.75 2.97064 3.90804 2.68934 4.18934C2.40804 4.47064 2.25 4.85218 2.25 5.25V18.75C2.25 19.1478 2.40804 19.5294 2.68934 19.8107C2.97064 20.092 3.35218 20.25 3.75 20.25H20.25C20.6478 20.25 21.0294 20.092 21.3107 19.8107C21.592 19.5294 21.75 19.1478 21.75 18.75V5.25C21.75 4.85218 21.592 4.47064 21.3107 4.18934C21.0294 3.90804 20.6478 3.75 20.25 3.75ZM20.25 18.75H3.75V5.25H20.25V18.75ZM16.5 8.25C16.5 9.44347 16.0259 10.5881 15.182 11.432C14.3381 12.2759 13.1935 12.75 12 12.75C10.8065 12.75 9.66193 12.2759 8.81802 11.432C7.97411 10.5881 7.5 9.44347 7.5 8.25C7.5 8.05109 7.57902 7.86032 7.71967 7.71967C7.86032 7.57902 8.05109 7.5 8.25 7.5C8.44891 7.5 8.63968 7.57902 8.78033 7.71967C8.92098 7.86032 9 8.05109 9 8.25C9 9.04565 9.31607 9.80871 9.87868 10.3713C10.4413 10.9339 11.2044 11.25 12 11.25C12.7956 11.25 13.5587 10.9339 14.1213 10.3713C14.6839 9.80871 15 9.04565 15 8.25C15 8.05109 15.079 7.86032 15.2197 7.71967C15.3603 7.57902 15.5511 7.5 15.75 7.5C15.9489 7.5 16.1397 7.57902 16.2803 7.71967C16.421 7.86032 16.5 8.05109 16.5 8.25Z"
                fill="#272727"
              />
            </svg>
            {totalCount > 0 && (
              <span
                className="count"
                style={{
                  position: "absolute",
                  top: -6,
                  right: -6,
                  background: "var(--base-color)",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 18,
                  height: 18,
                  fontSize: 11,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {totalCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      <div className="og-nav-mobile" data-open={menuOpen}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
