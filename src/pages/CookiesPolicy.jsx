import React from "react";
import { Link } from "react-router-dom";

const CookiesPolicy = () => {
  return (
    <div className="bg-white text-gray-900 font-serif min-h-screen py-12 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 border-r border-gray-300 pr-4">
          <h3 className="text-lg font-semibold mb-4">Our Policies</h3>
          <nav className="space-y-2">
            <Link to="/cookies-policy" className="block text-blue-700 font-medium underline">
              Cookies Policy
            </Link>
            <Link to="/terms-services" className="block text-blue-700 hover:underline">
              Terms of Services
            </Link>
            <Link to="/privacy-policy" className="block text-blue-700 hover:underline">
              Privacy Policy
            </Link>
            <Link to="/acceptable-policy" className="block text-blue-700 hover:underline">
              Acceptable Use Policy
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl">
          <header className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Cookies Policy</h1>
            <p className="text-sm">
              Last updated: <span className="font-medium">November 14, 2023</span>
            </p>
          </header>

          <article className="space-y-6 leading-7 text-justify">
            <p>
              This Cookies Policy explains what Cookies are and how we use them. You should read this policy so you can understand what type of cookies we use, or the information we collect using Cookies and how that information is used.
            </p>
            <p>
              Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies. For further information on how we use, store, and keep your personal data secure, see our Privacy Policy.
            </p>
            <p>
              We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies we use.
            </p>

            <h2 className="text-xl font-semibold mt-6">Interpretation and Definitions</h2>
            <h3 className="text-lg font-semibold mt-4">Interpretation</h3>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="text-lg font-semibold mt-4">Definitions</h3>
            <p>For the purposes of this Cookies Policy:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to <em>Mobisec Technologies Pvt. Ltd</em>, F-200, FF, Phase-1, New Palam Vihar, Sec-110, Gurugram, Haryana-122017, India.</li>
              <li><strong>Cookies</strong> means small files that are placed on your computer, mobile device or any other device by a website, containing details of your browse history on that website among its many uses.</li>
              <li><strong>Website</strong> refers to Mobiheal website, accessible from <a href="https://mobiheal.in" className="text-blue-700 hover:underline">https://mobiheal.in</a></li>
              <li><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the website, as applicable.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">The Use of the Cookies</h2>
            <h3 className="text-lg font-semibold mt-4">Type of Cookies We Use</h3>
            <p>
              Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when you go offline, while Session Cookies are deleted as soon as you close your web browser.
            </p>
            <p>We use both session and persistent Cookies for the purposes set out below:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>Necessary / Essential Cookies</strong><br/>
                <span className="font-medium">Type:</span> Session Cookies<br/>
                <span className="font-medium">Administered by:</span> Us<br/>
                <span className="font-medium">Purpose:</span> These Cookies are essential to provide you with services available through the Website and to enable you to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that you have asked for cannot be provided, and we only use these Cookies to provide you with those services.
              </li>
              <li>
                <strong>Functionality Cookies</strong><br/>
                <span className="font-medium">Type:</span> Persistent Cookies<br/>
                <span className="font-medium">Administered by:</span> Us<br/>
                <span className="font-medium">Purpose:</span> These Cookies allow us to remember choices you make when you use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid you having to re-enter your preferences every time you use the Website.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Your Choices Regarding Cookies</h2>
            <p>
              If you prefer to avoid the use of Cookies on the Website, first you must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.
            </p>
            <p>
              If you do not accept Our Cookies, you may experience some inconvenience in your use of the Website and some features may not function properly.
            </p>
            <p>
              If you'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Chrome: <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Google Support</a></li>
              <li>Internet Explorer: <a href="http://support.microsoft.com/kb/278835" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Microsoft Support</a></li>
              <li>Firefox: <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Mozilla Support</a></li>
              <li>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Apple Support</a></li>
              <li>Other browsers: Please visit your web browser's official web pages.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">More Information about Cookies</h2>
            <p>
              You can learn more about cookies:{" "}
              <a href="https://www.privacypolicies.com/blog/cookies-what-do-they-do/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                Cookies: What Do They Do?
              </a>.
            </p>

            <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
            <p>If you have any questions about this Cookies Policy, you can contact us:</p>
            <ul className="list-disc list-inside">
              <li>By phone: <a href="tel:+91-11-6926-8029" className="text-blue-700 hover:underline">+91-11-6926-8029</a></li>
              <li>By email: <a href="mailto:contact@mobisec.in" className="text-blue-700 hover:underline">contact@mobisec.in</a></li>
            </ul>
          </article>
        </main>
      </div>
    </div>
  );
};

export default CookiesPolicy;
