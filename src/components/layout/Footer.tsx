import Section from "./Section";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white">
      <Section className="py-10 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <div className="h-12 w-12 rounded-lg bg-gray-900" >
                <img src="/logo-lms.png" alt="LMS Logo" className="h-full w-full object-contain p-1" />
              </div>
              LMS Hadrumet 2k25
            </div>
            <p className="mt-3 text-gray-600">
              Local Motivational Seminar • Sousse, Tunisia.
            </p>
          </div>

          {/* Event / Site links */}
          <div>
            <h4 className="font-semibold">Pages</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><Link className="hover:text-gray-900" to="/">Home</Link></li>
              <li><Link className="hover:text-gray-900" to="/shop">AIESEC Shop</Link></li>
              <li><Link className="hover:text-gray-900" to="/team">Our Team</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold">Follow us</h4>
            <div className="mt-3 flex gap-3 text-gray-600">
              <a aria-label="Facebook" href="https://www.instagram.com/hadrumetlocalmotivationseminar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50" target="_blank">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600">
          <p>© {new Date().getFullYear()} LMS Hadrumet 2k25. All rights reserved.</p>
          <p className="text-xs">Made with ❤ by the LMS team.</p>
        </div>
      </Section>
    </footer>
  );
}
