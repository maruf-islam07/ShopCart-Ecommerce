import React from "react";
import Wrapperr from "../wrapper/Wrapperr";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pb-20 md:pb-0 lg:pb-0 bg-white text-zinc-800">
      <Wrapperr>
        <footer className="footer sm:footer-horizontal p-10">
          <aside>
            <p>
              <br />
            </p>
          </aside>

          <nav>
            <h6 className="footer-title">ShopCraft</h6>
            <Link href="/" className="hover:text-orange-500">
              About Us
            </Link>
            <Link href="/" className="hover:text-orange-500">
              ShopCraft Blog
            </Link>
            <Link href="/" className="hover:text-orange-500">
              Join the ShopCraft Affiliate Program
            </Link>
            <Link href="/" className="hover:text-orange-500">
              Cookies Policy
            </Link>
            <Link href="/" className="hover:text-orange-500">
              Sell with ShopCraft
            </Link>
          </nav>

          <nav>
            <h6 className="footer-title">Customer Care</h6>
            <Link href="/" className="hover:text-orange-500">
              Return & Refund Policy
            </Link>
            <Link href="/" className="hover:text-orange-500">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-orange-500">
              Warranty Policy
            </Link>
            <Link href="/" className="hover:text-orange-500">
              Help Center
            </Link>
            <Link href="/" className="hover:text-orange-500">
              Terms & Conditions
            </Link>
            <Link href="/" className="hover:text-orange-500">
              EMI Policy
            </Link>
          </nav>

          <nav className=" px-3">
            <h6 className="footer-title">Payment Methods</h6>
            <div className="w-80 grid grid-cols-3 gap-5  relative">
              <Link
                href="/"
                className="h-12 hover:scale-105 transition-transform duration-300 relative"
              >
                <Image
                  src="/payment/americanExpress.png"
                  alt="American Express"
                  fill
                  sizes="100px" // লোগো ছোট তাই ১০০ পিক্সেল দিলেই হবে
                  style={{ objectFit: "contain" }}
                  className="w-auto h-auto" // অথবা global CSS এ height: auto নিশ্চিত করুন
                />
              </Link>
              <Link
                href="/"
                className="h-12 col-span-2 hover:scale-105 transition-transform duration-300 relative"
              >
                <Image
                  src="/payment/creditDebitCard.svg"
                  alt="American Express"
                  fill
                  sizes="100px"
                  style={{ objectFit: "contain" }}
                  className="w-auto h-auto" //
                />
              </Link>
              <Link
                href="/"
                className="h-12 hover:scale-105 transition-transform duration-300  relative "
              >
                <Image
                  src="/payment/bkash.png"
                  alt="American Express"
                  fill
                  sizes="100px"
                  style={{ objectFit: "contain" }}
                  className="w-auto h-auto"
                />
              </Link>
              <Link
                href="/"
                className="h-12 hover:scale-105 transition-transform duration-300 relative"
              >
                <Image
                  src="/payment/nagad.png"
                  alt="American Express"
                  fill
                  sizes="100px"
                  style={{ objectFit: "contain" }}
                  className="w-auto h-auto" //
                />
              </Link>
              <Link
                href="/"
                className="h-12 hover:scale-105 transition-transform duration-300  relative"
              >
                <Image
                  src="/payment/upay2.svg"
                  alt="American Express"
                  fill
                  sizes="100px"
                  style={{ objectFit: "contain" }}
                  className="w-auto h-auto" //
                />
              </Link>
              <Link
                href="/"
                className="h-12 hover:scale-105 transition-transform duration-300  relative"
              >
                <Image
                  src="/payment/cod.png"
                  alt="American Express"
                  fill
                  sizes="100px"
                  style={{ objectFit: "contain" }}
                  className="w-auto h-auto" //
                />
              </Link>
              <Link
                href="/"
                className="h-12  hover:scale-105 transition-transform duration-300 relative"
              >
                <Image
                  src="/payment/ssl.png"
                  alt="American Express"
                  fill
                  sizes="100px"
                  style={{ objectFit: "contain" }}
                  className="w-auto h-auto" //
                />
              </Link>
            </div>
          </nav>
        </footer>
        <div className="border-t border-gray-300 py-3  hover:scale-105 transition-transform duration-300">
          <p className="text-center mb-10 md:mb-0 ">
            © Copyright 2026 ShopCraft All Rights are Reserved.
          </p>
        </div>
      </Wrapperr>
    </div>
  );
};

export default Footer;
