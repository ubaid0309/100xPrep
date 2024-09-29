import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="items-center   py-12">
      <div className="px-4 flex flex-col">
        <div className="flex justify-between flex-wrap gap-4  px-8 ">
          {/* Logo and Branding */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className=" text-3xl font-bold ">
                100x<span className="text-blue-primary">Prep</span>
              </span>
            </Link>
            <p className="text-sm">Empowering Students Through Knowledge</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Terms & Condition", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 ">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:support@engilearn.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  ubaidskms@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-gray-200 self-center">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex space-x-4">
              {[
                { Icon: Twitter, href: "https://x.com/ubaidwebdev" },
                { Icon: Instagram, href: "https://instagram.com/ubaid0309" },
                { Icon: Linkedin, href: "https://linkedin.com/ubaid0309" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Icon className="h-6 w-6" />
                  <span className="sr-only">{Icon.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm ">
          © {new Date().getFullYear()} 100xPrep All rights reserved.
        </div>
      </div>
    </footer>
  );
}
