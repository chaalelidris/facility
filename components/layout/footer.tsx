import React from "react";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 max-w-screen-2xl mx-auto">
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Tagline */}
          <div>
            <Logo src="/images/logo-white.svg" className="h-16 w-auto" />
            <p className="mt-4 text-sm text-gray-400">
              Your trusted partner in quality products.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400">
              TEL: ...
              <br />
              EMAIL: info@facility.com <br />
              8 Mai 1945, Bab Ezzouar, Alger <br />
              ALGERIE
            </p>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  File to Provide Taksit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  General Conditions of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  Personal Data Protection Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  Conditions of Use of Our Services
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition"
              >
                {/* Facebook SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.596 0 0 .592 0 1.324v21.351C0 23.406.596 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.406 24 22.675V1.324C24 .592 23.404 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          ©2025 FACILITY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
