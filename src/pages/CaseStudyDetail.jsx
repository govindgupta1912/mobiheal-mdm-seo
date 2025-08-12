import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  TrendingUp,
  Shield,
  Clock,
  MapPin,
  Smartphone,
  Lock,
  Key,
  ClipboardCheck,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import { caseStudyDetails } from "../lib/caseStudyDetails";
import { Suspense } from "react";
import { Helmet } from "react-helmet-async";
//import BlogSEO from "@/components/common/BlogSEO";

const iconMap = {
  "map-pin": MapPin,
  shield: Shield,
  smartphone: Smartphone,
  lock: Lock,
  key: Key,
  "clipboard-check": ClipboardCheck,
};

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = caseStudyDetails[slug || ""];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies">
            <Button>Back to Case Studies</Button>
          </Link>
        </div>
      </div>
    );
  }
console.log("caseStudies",study.seoTitle);

  return (
    <>
      {/* SEO */}
      {/* <BlogSEO title={study.seoTitle} description={study.seoDescription} /> */}
      {/* <Helmet>
      <title>{`${study.seoTitle}`}</title>

        <meta name="description" content={study.seoDescription} />
        <meta name="keywords" content={[study.primaryKeyword, ...study.secondaryKeywords].join(', ')} />

      </Helmet> */}

      <Helmet>
  {/* ✅ Basic SEO */}
  <title>{study.seoTitle}</title>
  <meta name="description" content={study.seoDescription} />
  {study.primaryKeyword && (
    <meta
      name="keywords"
      content={[study.primaryKeyword, ...(study.secondaryKeywords || [])].join(", ")}
    />
  )}

  {/* ✅ Canonical */}
  {study.canonicalUrl && (
    <link rel="canonical" href={study.canonicalUrl} />
  )}

  {/* ✅ Open Graph */}
  {study.ogTitle && <meta property="og:title" content={study.ogTitle} />}
  {study.ogDescription && <meta property="og:description" content={study.ogDescription} />}
  {study.ogType && <meta property="og:type" content={study.ogType} />}
  {study.ogUrl && <meta property="og:url" content={study.ogUrl} />}
  {study.ogImage && <meta property="og:image" content={study.ogImage} />}
  {study.ogLocale && <meta property="og:locale" content={study.ogLocale} />}
  {study.ogSiteName && <meta property="og:site_name" content={study.ogSiteName} />}

  {/* ✅ Article-specific OG tags */}
  {study.articleAuthor && <meta property="article:author" content={study.articleAuthor} />}
  {study.articlePublishedTime && (
    <meta property="article:published_time" content={study.articlePublishedTime} />
  )}
  {study.articleModifiedTime && (
    <meta property="article:modified_time" content={study.articleModifiedTime} />
  )}
  {Array.isArray(study.articleTags) &&
    study.articleTags.map((tag, index) => (
      <meta key={`article-tag-${index}`} property="article:tag" content={tag} />
    ))}

  {/* ✅ Twitter */}
  {study.twitterCard && <meta name="twitter:card" content={study.twitterCard} />}
  {study.twitterTitle && <meta name="twitter:title" content={study.twitterTitle} />}
  {study.twitterDescription && (
    <meta name="twitter:description" content={study.twitterDescription} />
  )}
  {study.twitterImage && <meta name="twitter:image" content={study.twitterImage} />}
  {study.twitterSite && <meta name="twitter:site" content={study.twitterSite} />}
  {study.twitterCreator && <meta name="twitter:creator" content={study.twitterCreator} />}
</Helmet>


      {/* Hero Section */}
     <section className="relative bg-gradient text-white py-18 px-4 overflow-hidden shadow-lg">
  <div className="container mx-auto relative z-10 px-6 sm:px-6 lg:px-8">
        
    <Link to="/case-studies">
      <Button variant="ghost" className="text-white mb-3">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Button>
    </Link>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left: Text */}
      <div className="text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg tracking-tight">
          {study.title}
        </h1>

        <div className="flex flex-wrap gap-2 mt-3">
          {study.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/20 rounded-full text-sm md:text-lg font-medium shadow hover:bg-white/30 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full flex justify-center lg:justify-end">
        <Suspense>
          <img
            src={study.imageSrc}
            alt="Case Study"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover border-2 border-white/30
                       max-h-[320px] sm:max-h-[400px] md:max-h-[520px] lg:max-h-[500px]"
          />
        </Suspense>
      </div>
    </div>
  </div>
</section>

      {/* Executive Summary */}
      <section className="py-10 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="items-center bg-neutral-50/80 rounded-2xl shadow-lg p-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-800 text-left">Executive Summary</h2>
              <p className="text-lg text-neutral-600 leading-relaxed text-left">{study.summary}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Overview & Challenges */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/80 rounded-2xl shadow p-8">
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">Client Overview</h2>
              <p className="text-lg text-neutral-700 mb-4">
                <span className="font-semibold">Industry:</span> {study.clientOverview?.industry}
              </p>
              {study.clientOverview?.keyChallenges?.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-neutral-800">Key Challenges</h3>
                  <ul className="list-disc list-inside space-y-2 text-neutral-700">
                    {study.clientOverview.keyChallenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="bg-white/80 rounded-2xl shadow p-8">
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">Challenges</h2>
              <ul className="space-y-5">
                {study.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-7 w-7 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <span className="text-red-600 font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-800">{challenge.title}</h3>
                      <p className="text-neutral-600">{challenge.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MDM Solutions */}
      <section className="py-10 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-neutral-800">MobiHeal MDM Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {study.solution.map((solution, index) => {
                const Icon = iconMap[solution.icon];
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:scale-[1.02] transition-transform duration-200"
                  >
                    <div className="flex items-center mb-4">
                      {Icon && <Icon className="h-6 w-6 text-primary mr-2" />}
                      <h3 className="text-xl font-semibold text-neutral-800">{solution.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 min-w-[20px] text-primary mr-2 mt-1" />
                          <span className="text-neutral-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-neutral-800 text-center">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-centers">
            {study.results.map((result, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 shadow hover:shadow-lg transition-all duration-200 w-full max-w-sm"
              >
                <div className="flex items-center mb-3">
                  <BarChart3 className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-lg font-semibold text-neutral-800">{result.label}</h3>
                </div>
                <p className="text-2xl font-bold text-primary">{result.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Table */}
      <section className="py-10 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-neutral-800 text-center">Before & After Metrics</h2>
          <div className="overflow-auto">
            <table className="min-w-full bg-white border border-blue-100 rounded-2xl overflow-hidden shadow">
              <thead className="bg-gradient text-white">
                <tr>
                  {study.metricsTable.headers.map((header, i) => (
                    <th key={i} className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {study.metricsTable.rows.map((row, i) => (
                  <tr key={i} className="border-t">
                    {row.map((cell, j) => (
                      <td key={j} className="px-6 py-4 text-sm text-neutral-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Best Practices + Industry Recognition */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/80 rounded-2xl shadow p-8">
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">Best Practices</h2>
              <ul className="space-y-3 list-disc list-inside text-neutral-700">
                {study.bestPractices.map((practice, index) => (
                  <li key={index}>{practice}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/80 rounded-2xl shadow p-8">
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">Industry Recognition</h2>
              <ul className="space-y-4 text-neutral-700">
                {study.industryRecognition.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 min-w-[20px] text-primary mr-2 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-6xl shadow border-neutral-200">
          <h2 className="text-3xl font-bold mb-4 text-neutral-800">Conclusion</h2>
          <p className="text-neutral-700 leading-relaxed">{study.conclusion}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
            Ready to Secure Your Mobile Infrastructure?
          </h2>
          <p className="text-lg mb-8">
            Explore how MobiHeal MDM can protect your organization against evolving mobile threats.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-white hover:bg-blue-100 shadow">
                Schedule a Demo
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg"  className="bg-white text-primary hover:bg-neutral-100">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetail;
