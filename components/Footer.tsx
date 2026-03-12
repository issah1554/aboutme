export default function Footer() {
  return (
    <footer className="w-full bg-main-200 border-t-2 border-main-300 text-main-700 py-6 mt-auto">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-main-800 uppercase tracking-wide">
              Contacts
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="mailto:hello@issah.dev" className="hover:text-primary-600">
                  hello@issah.dev
                </a>
              </li>
              <li>
                <a href="tel:+255700000000" className="hover:text-primary-600">
                  +255 700 000 000
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/issa-h-700814259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-main-800 uppercase tracking-wide">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#projects" className="hover:text-primary-600">
                  Project Delivery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-600">
                  Product Strategy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-600">
                  Collaboration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-main-800 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-primary-600">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-600">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-main-300 pt-6 text-center text-sm text-main-600">
          &copy; {new Date().getFullYear()} issah1554. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
