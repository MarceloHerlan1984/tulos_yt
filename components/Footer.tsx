import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { Input } from "./ui/input";
import Link from "next/link";

const quickLinkData = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
  { title: "FAQ", href: "/faq" },
];

const linkData = [
  { title: "Workshops", href: "/lessons" },
  { title: "Parties", href: "/parties" },
  { title: "Online", href: "/online" },
  { title: "Private Lessons", href: "/private-lesson" },
];

function Footer() {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div className="space-y-4">
            <Logo>Amor Del Tango</Logo>
            <p className="text-sm text-gray-600">
              Argentine Tango classes & events. Bringing connection, elegance
              and creativity to every step.
            </p>
            <SocialMedia
              className="text-darkColor"
              iconClassName="border-darkColor hover:text-darkColor hover:border-darkColor"
              tooltipClassName="bg-darkColor text-white "
            />
          </div>
          <div>
            <h3 className="font-semibold text-darkColor mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {quickLinkData?.map((item, i) => (
                <Link
                  key={i}
                  href={item?.href}
                  className="text-gray-600 hover:text-darkColor text-sm font-medium hoverEffect"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-darkColor mb-4">Book now</h3>
            <div className="flex flex-col gap-2">
              {linkData?.map((item, i) => (
                <Link
                  key={i}
                  href={item?.href}
                  className="text-gray-600 hover:text-darkColor text-sm font-medium hoverEffect"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-darkColor mb-4">Subscribe</h3>
            <p className="text-sm text-gray-600 mb-4">
              Stay connected — join our newsletter for updates on classes,
              events, and special offers.
            </p>
            <form>
              <Input
                type="email"
                placeholder="Enter your email required"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              ></Input>
              <button
                type="submit"
                className="w-full cursor-pointer bg-darkColor text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
