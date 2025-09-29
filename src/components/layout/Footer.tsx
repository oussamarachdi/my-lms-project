import Section from "./Section";
import { Mail, Phone, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white">
      <Section className="py-10 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-semibold"><div className="h-7 w-7 rounded-lg bg-gray-900" /> TechConf</div>
            <p className="mt-3 text-gray-600">Building the future together since 2019.</p>
            <div className="mt-4 flex items-center gap-3 text-gray-600">
              <Mail className="h-4 w-4" /> contact@techconf.io
            </div>
            <div className="mt-2 flex items-center gap-3 text-gray-600">
              <Phone className="h-4 w-4" /> +33 1 23 45 67 89
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Event</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a className="hover:text-gray-900" href="#editions">Past Editions</a></li>
              <li><a className="hover:text-gray-900" href="#why">Why Attend</a></li>
              <li><a className="hover:text-gray-900" href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a className="hover:text-gray-900" href="#">Code of Conduct</a></li>
              <li><a className="hover:text-gray-900" href="#">Accessibility</a></li>
              <li><a className="hover:text-gray-900" href="#">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Follow us</h4>
            <div className="mt-3 flex gap-3 text-gray-600">
              <a aria-label="Facebook" href="#" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Facebook className="h-4 w-4" /></a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Twitter className="h-4 w-4" /></a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Linkedin className="h-4 w-4" /></a>
              <a aria-label="YouTube" href="#" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600">
          <p>© {new Date().getFullYear()} TechConf. All rights reserved.</p>
          <p className="text-xs">Made with ❤ for developers & creators.</p>
        </div>
      </Section>
    </footer>
  );
}