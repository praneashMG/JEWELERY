import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amber-900/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Grid layout for footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand info */}
          <section>
            <h3 className="font-serif text-xl text-amber-900 font-medium mb-4">
              Praneash M G
            </h3>
            <p className="text-amber-700 text-sm">
              Full Stack Developer specializing in modern web technologies. Passionate about building responsive and elegant digital experiences.
            </p>
          </section>

          {/* Technologies */}
          <section>
            <h4 className="font-medium text-amber-900 mb-4">Technologies</h4>
            <ul className="space-y-2 text-amber-700 text-sm">
              <li><a href="#" className="hover:text-amber-600">React.js</a></li>
              <li><a href="#" className="hover:text-amber-600">Node.js & Express</a></li>
              <li><a href="#" className="hover:text-amber-600">MongoDB</a></li>
              <li><a href="#" className="hover:text-amber-600">Tailwind CSS</a></li>
            </ul>
          </section>

          {/* Services */}
          <section>
            <h4 className="font-medium text-amber-900 mb-4">Services</h4>
            <ul className="space-y-2 text-amber-700 text-sm">
              <li><a href="#" className="hover:text-amber-600">Web Development</a></li>
              <li><a href="#" className="hover:text-amber-600">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-amber-600">API Integration</a></li>
              <li><a href="#" className="hover:text-amber-600">Responsive Design</a></li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h4 className="font-medium text-amber-900 mb-4">Contact</h4>
            <address className="not-italic space-y-2 text-amber-700 text-sm">
              <p>Coimbatore, Tamil Nadu</p>
              <p>+91 9715499118</p>
              <p>
                <a href="mailto:praneashp@gmail.com" className="hover:text-amber-600">
                  praneashp@gmail.com
                </a>
              </p>
              <p>
                <a href="mailto:praneashmg.21msc@kongu.edu" className="hover:text-amber-600">
                  praneashmg.21msc@kongu.edu
                </a>
              </p>
              <p>Mon–Fri: 9AM – 6PM</p>
            </address>
          </section>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-amber-200 text-center text-amber-700 text-sm">
          © 2025 Praneash M G. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
