import { Linkedin, Twitter, Facebook, Github, Mail } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-brandRed">Job</span>Sewa
            </h3>
            <p className="text-gray-400">
              Connecting talent with opportunity. Find your dream job or the
              perfect candidate with our platform.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-brandRed transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandRed transition-colors">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandRed transition-colors">
                  Companies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandRed transition-colors">
                  Career Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandRed transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Job Seekers</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-brandRed transition-colors">
                  Create Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandRed transition-colors">
                  Job Alerts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandRed transition-colors">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandRed transition-colors">
                  Career Advice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandRed transition-colors">
                  Salary Calculator
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Employers</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-brandRed transition-colors">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandRed transition-colors">
                  Browse Candidates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandRed transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandRed transition-colors">
                  Recruitment Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandRed transition-colors">
                  Employer Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-white mb-4">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-gray-400 mb-6">
              Get the latest job openings and career advice delivered to your
              inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brandRed focus:border-transparent text-white"
              />
              <Button className="bg-brandRed hover:bg-brandRed/90 whitespace-nowrap">
                <Mail className="h-5 w-5 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} JobSewa. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Cookie Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
