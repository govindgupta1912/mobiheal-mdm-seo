import React from "react";
import { Link } from "react-router-dom";

const AcceptableUsePolicy = () => {
  return (
    <div className="bg-white text-gray-900  min-h-screen py-12 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 border-r border-gray-300 pr-4">
          <h3 className="text-lg font-semibold mb-4">Our Policies</h3>
          <nav className="space-y-2">
            <Link
              to="/cookies-policy"
              className="block text-primary hover:underline"
            >
              Cookies Policy
            </Link>
            <Link
              to="/terms-services"
              className="block text-primary hover:underline"
            >
              Terms of Services
            </Link>
            <Link
              to="/privacy-policy"
              className="block text-primary hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/acceptable-use-policy"
              className="block text-primary font-medium underline"
            >
              Acceptable Use Policy
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl">
          <header className="mb-10 text-center">
            <h1 className="text-3xl font-bold mb-2">Acceptable Use Policy</h1>
            <p className="text-sm">
              Last updated:{" "}
              <span className="font-medium">November 14, 2023</span>
            </p>
          </header>

          <article className="space-y-6 leading-7 text-justify">
            <p>
              This Acceptable Use Policy ("Policy") is part of our ("Legal
              Terms") and should therefore be read alongside our main Legal
              Terms. If you do not agree with these Legal Terms, please refrain
              from using our Services. Your continued use of our Services
              implies acceptance of these Legal Terms.
            </p>

            <p>
              Please carefully review this Policy which applies to any and all:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>a. Uses of our Services (as defined in "Legal Terms") and</li>
              <li>
                b. Forms, materials, consent tools, comments, post, and all
                other content available on the Services ("Content")
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Who We Are</h2>
            <p>
              We are <strong>Mobisec Technologies Pvt. Ltd</strong> ("Company,"
              "we," "us," or "our") a company registered in India at F-200, FF,
              Phase-1, New Palam Vihar, Sec-110, Gurugram, Haryana 122017.
            </p>
            <p>
              We operate the website (the "Site"), as well as any other related
              products and services that refer or link to this Policy
              (collectively, the "Services").
            </p>

            <h2 className="text-xl font-semibold mt-6">Use of the Services</h2>
            <p>
              When you use the Services, you warrant that you will comply with
              this Policy and with all applicable laws. You also acknowledge
              that you may not:
            </p>

            <ul className="list-disc list-inside space-y-1">
              <li>
                Systematically retrieve data or other content from the Services
                to create or compile, directly or indirectly, a collection,
                compilation, database, or directory without written permission
                from us.
              </li>
              <li>
                Make any unauthorized use of the Services, including collecting
                usernames and/or email addresses of users by electronic or other
                means for the purpose of sending unsolicited email, or creating
                user accounts by automated means or under false pretenses.
              </li>
              <li>
                Circumvent, disable, or otherwise interfere with
                security-related features of the Services, including features
                that prevent or restrict the use or copying of any Content or
                enforce limitations on the use of the Services and/or the
                Content contained therein.
              </li>
              <li>
                Engage in unauthorized framing of or linking to the Services.
              </li>
              <li>
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information such as user
                passwords.
              </li>
              <li>
                Make improper use of our Services, including our support
                services or submit false reports of abuse or misconduct.
              </li>
              <li>
                Engage in any automated use of the Services, such as using
                scripts to send comments or messages, or using any data mining,
                robots, or similar data gathering and extraction tools.
              </li>
              <li>
                Interfere with, disrupt, or create an undue burden on the
                Services or the networks or the Services connected.
              </li>
              <li>
                Attempt to impersonate another user or person or use the
                username of another user.
              </li>
              <li>
                Use any information obtained from the Services in order to
                harass, abuse, or harm another person.
              </li>
              <li>
                Use the Services as part of any effort to compete with us or
                otherwise use the Services and/or the Content for any
                revenue-generating endeavor or commercial enterprise.
              </li>
              <li>
                Decipher, decompile, disassemble, or reverse engineer any of the
                software comprising or in any way making up a part of the
                Services, except as expressly permitted by applicable law.
              </li>
              <li>
                Attempt to bypass any measures of the Services designed to
                prevent or restrict access to the Services, or any portion of
                the Services.
              </li>
              <li>
                Harass, annoy, intimidate, or threaten any of our employees or
                agents Engaged in providing any portion of the Services to you.
              </li>
              <li>
                Delete the copyright or other proprietary rights notice from any
                Content.
              </li>
              <li>
                Copy or adapt the Services' software, including but not limited
                to Flash, PHP, HTML, JavaScript, or other code.
              </li>
              <li>
                Upload or transmit (or attempt to upload or to transmit)
                viruses, Trojan horses, or other material, including excessive
                use of capital letters and spamming (continuous posting of
                repetitive text), that interferes with any party's uninterrupted
                use and enjoyment of the Services or modifies, impairs,
                disrupts, alters, or interferes with the use, features,
                functions, operation, or maintenance of the Services.
              </li>
              <li>
                Upload or transmit (or attempt to upload or to transmit) any
                material that acts as a passive or active information collection
                or transmission mechanism, including without limitation, clear
                graphics interchange formats ("gifs"), 1x1 pixels, web bugs,
                cookies, or other similar devices (sometimes referred to as
                "spyware" or "passive collection mechanisms" or "pcms").
              </li>
              <li>
                Except as may be the result of standard search engine or
                Internet browser usage, use, launch, develop, or distribute any
                automated system, including without limitation, any spider,
                robot, cheat utility, scraper, or offline reader that accesses
                the Services, or using or launching any unauthorized script or
                other software.
              </li>
              <li>
                Disparage, tarnish, or otherwise harm, in our opinion, us and/or
                the Services.
              </li>
              <li>
                Use the Services in a manner inconsistent with any applicable
                laws or regulations.
              </li>
              <li>Sell or otherwise transfer your profile.</li>
              <li>
                Use a buying agent or purchasing agent to make purchases on the
                Services.
              </li>
            </ul>

            <p className="mt-4">
              If you subscribe to our Services, you understand, acknowledge, and
              agree that you may not, except if expressly permitted:
            </p>

            <ul className="list-disc list-inside space-y-1">
              <li>
                Engage in any use, including modification, copying,
                redistribution, publication, display, performance, or
                retransmission, of any portions of any Services, other than as
                expressly permitted by this Policy, without the prior written
                consent of Mobisec Technologies Pvt. Ltd, which consent Mobisec
                Technologies Pvt. Ltd may grant or refuse in its sole and
                absolute discretion.
              </li>
              <li>
                Reconstruct or attempt to discover any source code or algorithms
                of the Services, or any portion thereof, by any means
                whatsoever.
              </li>
              <li>
                Provide, or otherwise make available, the Services to any third
                party.
              </li>
              <li>Intercept any data not intended for you.</li>
              <li>
                Damage, reveal, or alter any user's data, or any other hardware,
                software, or information relating to another person or entity.
              </li>
              <li>
                Do not share login credentials with unauthorized entities.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">
              Consequences of breaching this policy
            </h2>
            <p>
              The consequences for violating our Policy will vary depending on
              the severity of the breach and the user's history on the Services,
              by way of example:
            </p>
            <p>
              We may, in some cases, give you a warning, however, if your breach
              is serious or if you continue to breach our Legal Terms and this
              Policy, we have the right to suspend or terminate your access to
              and use of our Services and, if applicable, disable your account.
              We may also notify law enforcement or issue legal proceedings
              against you when we believe that there is a genuine risk to an
              individual or a threat to public safety. We exclude our liability
              for all action we may take in response to any of your breaches of
              this Policy.
            </p>

            <h2 className="text-xl font-semibold mt-6">
              How can you contact us about this policy?
            </h2>
            <p>
              If you have any further questions or comments, you may contact us
              by:
            </p>

            <ul className="list-disc list-inside pl-4">
              <li>
                Phone:{" "}
                <a
                  href="tel:+91-11-6926-8029"
                  className="text-primary hover:underline"
                >
                  +91-11-6926-8029
                </a>
              </li>
              <li>
                By Email:{" "}
                <a
                  href="mailto:contact@mobisec.in"
                  className="text-primary hover:underline"
                >
                  contact@mobisec.in
                </a>
              </li>
            </ul>
          </article>
        </main>
      </div>
    </div>
  );
};

export default AcceptableUsePolicy;
