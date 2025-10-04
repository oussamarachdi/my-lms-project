import Section from "./Section";
import { Mail, Phone, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

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
            <div className="mt-4 flex items-center gap-3 text-gray-600">
              <Mail className="h-4 w-4" />
              <a href="mailto:contact@lms.example" className="hover:text-gray-900">
                contact@lms.example
              </a>
            </div>
            <div className="mt-2 flex items-center gap-3 text-gray-600">
              <Phone className="h-4 w-4" />
              <a href="tel:+21600000000" className="hover:text-gray-900">
                +216 00 000 000
              </a>
            </div>
          </div>

          {/* Event / Site links */}
          <div>
            <h4 className="font-semibold">Pages</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a className="hover:text-gray-900" href="#home">Home</a></li>
              <li><a className="hover:text-gray-900" href="#shop">AIESEC Shop</a></li>
              <li><a className="hover:text-gray-900" href="#team">Our Team</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold">Follow us</h4>
            <div className="mt-3 flex gap-3 text-gray-600">
              <a aria-label="Facebook" href="#" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                <Facebook className="h-4 w-4" />
              </a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                <Twitter className="h-4 w-4" />
              </a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                <Linkedin className="h-4 w-4" />
              </a>
              <a aria-label="YouTube" href="#" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                <Youtube className="h-4 w-4" />
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
