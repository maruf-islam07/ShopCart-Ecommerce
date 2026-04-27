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
              <Link href="/" className="hover:text-orange-500 h-13.5 ">
                <Image
                  src="/payment/americanExpress.png"
                  width={60}
                  height={1}
                  alt="amirican"
                />
              </Link>
              <Link
                href="/"
                className="hover:text-orange-500 w- h-13.5 col-span-2"
              >
                <Image
                  src="/payment/creditDebitCard.svg"
                  width={90}
                  height={2}
                  alt="amirican"
                />
              </Link>
              <Link href="/" className="hover:text-orange-500 h-13.5  ">
                <Image
                  src="/payment/bkash.png"
                  width={80}
                  height={2}
                  alt="amirican"
                />
              </Link>
              <Link href="/" className="hover:text-orange-500 h-13.5 ">
                <Image
                  src="/payment/nagad.png"
                  width={80}
                  height={2}
                  alt="amirican"
                />
              </Link>
              <Link href="/" className="hover:text-orange-500 h-13.5 ">
                <Image
                  src="/payment/upay2.svg"
                  width={80}
                  height={2}
                  alt="amirican"
                />
              </Link>
              <Link href="/" className="hover:text-orange-500 h-13.5 ">
                <Image
                  src="/payment/cod.png"
                  width={80}
                  height={2}
                  alt="amirican"
                />
              </Link>
              <Link href="/" className="hover:text-orange-500 h-13.5">
                <Image
                  src="/payment/ssl.png"
                  width={80}
                  height={2}
                  alt="amirican"
                />
              </Link>
            </div>
          </nav>
        </footer>
        <div className="border-t border-gray-300 py-3">
          <p className="text-center mb-10 md:mb-0 ">
            © Copyright 2026 ShopCraft All Rights are Reserved.
          </p>
        </div>
      </Wrapperr>
    </div>
  );
};

export default Footer;
