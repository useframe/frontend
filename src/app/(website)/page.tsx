"use client";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Target,
  Zap,
  Users,
  Brain,
  Shield,
  TrendingUp,
  CheckCircle,
  Star,
  Play,
  ChevronRight,
  Globe,
  Lock,
  Award,
  Sparkles,
  MessageSquare,
  FileText,
  Search,
  Send,
  Calendar,
  BarChart3,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Cloud,
  GitBranch,
  Zap as Lightning,
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col ">
      {/* Header */}
      {/* <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <Rocket className="h-8 w-8 text-blue-600" />
              <div className="absolute -top-1 -right-1 h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
              Rapidhyre AI
            </span>
          </motion.div>

          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              Features
            </Link>
            <Link
              href="#solutions"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              Solutions
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              About
            </Link>
          </nav>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/sign-in">
              <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started Free
              </Button>
            </Link>
          </motion.div>
        </div>
      </header> */}

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              className="mx-auto max-w-4xl text-center"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="mb-6 inline-flex items-center space-x-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Sparkles className="h-4 w-4" />
                <span>AI-Powered Hiring Platform</span>
              </motion.div>

              <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-7xl">
                The AI Toolkit for
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  {" "}
                  Modern Hiring
                </span>
              </h1>

              <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600 lg:text-2xl">
                Rapidhyre AI combines{" "}
                <strong>Rapidhyre's candidate automation</strong> and{" "}
                <strong>Juicebox.ai's recruiter intelligence</strong>
                to create a dual-sided AI hiring platform that transforms both
                job hunting and talent acquisition.
              </p>

              <motion.div
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="h-auto bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-lg hover:from-blue-700 hover:to-purple-700"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-auto border-2 px-8 py-6 text-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </motion.div>

              <motion.div
                className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 hidden lg:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="rounded-xl border bg-white/80 p-4 shadow-lg backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">AI Agent Active</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-40 right-20 hidden lg:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="rounded-xl border bg-white/80 p-4 shadow-lg backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <Brain className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Smart Matching</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-2 gap-8 md:grid-cols-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div className="text-center" variants={fadeInUp}>
                <div className="mb-2 text-3xl font-bold text-blue-600 md:text-4xl">
                  10x
                </div>
                <div className="text-gray-600">Faster Hiring</div>
              </motion.div>
              <motion.div className="text-center" variants={fadeInUp}>
                <div className="mb-2 text-3xl font-bold text-purple-600 md:text-4xl">
                  95%
                </div>
                <div className="text-gray-600">Accuracy Rate</div>
              </motion.div>
              <motion.div className="text-center" variants={fadeInUp}>
                <div className="mb-2 text-3xl font-bold text-green-600 md:text-4xl">
                  50%
                </div>
                <div className="text-gray-600">Cost Reduction</div>
              </motion.div>
              <motion.div className="text-center" variants={fadeInUp}>
                <div className="mb-2 text-3xl font-bold text-orange-600 md:text-4xl">
                  24/7
                </div>
                <div className="text-gray-600">AI Availability</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="bg-gradient-to-br from-slate-50 to-blue-50 py-20"
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
                An End-to-End Platform for
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  AI-Powered Hiring
                </span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Designed for HR teams, recruiters, and job seekers. Rapidhyre AI
                provides intelligent automation for every step of the hiring
                process.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* For Candidates */}
              <motion.div
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                variants={scaleIn}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">For Candidates</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>AI-powered job automation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Resume optimization & ATS scoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Interview coaching & simulation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Career path prediction</span>
                  </li>
                </ul>
              </motion.div>

              {/* For Recruiters */}
              <motion.div
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                variants={scaleIn}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">For Recruiters</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Natural language candidate search</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>AI candidate ranking & scoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Smart email outreach automation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Autonomous AI agents</span>
                  </li>
                </ul>
              </motion.div>

              {/* Unified AI Engine */}
              <motion.div
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                variants={scaleIn}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">Unified AI Engine</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Self-optimizing hiring ecosystem</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Shared intelligence across platforms</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Real-time analytics & insights</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Continuous learning & improvement</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
                Designed for Your Industry,
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Built for Success
                </span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Our powerful AI solutions are tailored to the unique needs and
                workflows of every industry.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Globe className="h-8 w-8" />,
                  title: "Technology",
                  description:
                    "Scale engineering teams with AI-powered technical assessments and culture fit matching.",
                  features: [
                    "Technical skill evaluation",
                    "Culture fit analysis",
                    "Team compatibility scoring",
                  ],
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Finance",
                  description:
                    "Find top financial talent with compliance-focused screening and risk assessment.",
                  features: [
                    "Compliance verification",
                    "Risk assessment",
                    "Regulatory knowledge testing",
                  ],
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Healthcare",
                  description:
                    "Recruit healthcare professionals with specialized credential verification and patient care focus.",
                  features: [
                    "Credential verification",
                    "Patient care simulation",
                    "Medical knowledge assessment",
                  ],
                },
                {
                  icon: <Lightbulb className="h-8 w-8" />,
                  title: "Education",
                  description:
                    "Build exceptional educational teams with teaching methodology and student engagement evaluation.",
                  features: [
                    "Teaching methodology",
                    "Student engagement",
                    "Curriculum alignment",
                  ],
                },
                {
                  icon: <Database className="h-8 w-8" />,
                  title: "Government",
                  description:
                    "Navigate complex hiring requirements with security clearance and policy compliance automation.",
                  features: [
                    "Security clearance",
                    "Policy compliance",
                    "Public service orientation",
                  ],
                },
                {
                  icon: <Cloud className="h-8 w-8" />,
                  title: "Startups",
                  description:
                    "Scale rapidly with flexible hiring solutions that grow with your company.",
                  features: [
                    "Rapid scaling",
                    "Flexible solutions",
                    "Growth alignment",
                  ],
                },
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-blue-50 p-8 transition-all duration-300 hover:border-blue-300"
                  variants={scaleIn}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm">
                    <div className="text-blue-600">{solution.icon}</div>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">{solution.title}</h3>
                  <p className="mb-6 text-gray-600">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
                How Rapidhyre AI
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Works
                </span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Our intelligent platform streamlines the entire hiring process
                with AI-powered automation.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-8 lg:grid-cols-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  step: "01",
                  title: "Upload & Analyze",
                  description:
                    "Upload resumes or job descriptions. Our AI analyzes content and extracts key insights.",
                  icon: <FileText className="h-8 w-8" />,
                },
                {
                  step: "02",
                  title: "AI Matching",
                  description:
                    "Advanced algorithms match candidates to positions based on skills, experience, and culture fit.",
                  icon: <Search className="h-8 w-8" />,
                },
                {
                  step: "03",
                  title: "Smart Communication",
                  description:
                    "Automated outreach with personalized messaging and intelligent follow-up scheduling.",
                  icon: <MessageSquare className="h-8 w-8" />,
                },
                {
                  step: "04",
                  title: "Track & Optimize",
                  description:
                    "Real-time analytics and continuous optimization for better hiring outcomes.",
                  icon: <BarChart3 className="h-8 w-8" />,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={fadeInUp}
                >
                  <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-bold text-white">
                      {step.step}
                    </div>
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-50">
                      <div className="text-blue-600">{step.icon}</div>
                    </div>
                    <h3 className="mb-4 text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="absolute top-1/2 -right-4 hidden -translate-y-1/2 transform lg:block">
                      <ChevronRight className="h-8 w-8 text-gray-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
                Loved by Teams
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Worldwide
                </span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                See how Rapidhyre AI is transforming hiring for companies of all
                sizes.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  quote:
                    "Rapidhyre AI helped us reduce our time-to-hire by 70% while improving candidate quality. The AI agents are incredibly intelligent.",
                  author: "Sarah Chen",
                  role: "Head of Talent Acquisition",
                  company: "TechFlow Inc.",
                  rating: 5,
                },
                {
                  quote:
                    "The natural language search is a game-changer. We can find perfect candidates in seconds, not hours.",
                  author: "Michael Rodriguez",
                  role: "VP of Engineering",
                  company: "ScaleUp Solutions",
                  rating: 5,
                },
                {
                  quote:
                    "Rapidhyre AI's resume optimization helped me land my dream job. The AI coaching was incredibly helpful.",
                  author: "Emily Johnson",
                  role: "Software Engineer",
                  company: "Fortune 500",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-blue-50 p-8"
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-current text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="mb-6 text-gray-700 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 font-bold text-white">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Showcase */}
        {/* <FeaturesShowcase /> */}

        {/* Pricing Section */}
        {/* <PricingSection /> */}

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
                Ready to Transform Your Hiring?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
                Join thousands of companies using Rapidhyre AI to hire faster,
                smarter, and more efficiently.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="h-auto bg-white px-8 py-6 text-lg text-blue-600 hover:bg-gray-100"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-auto border-white px-8 py-6 text-lg text-white hover:bg-white hover:text-blue-600"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <Rocket className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Rapidhyre AI</span>
              </div>
              <p className="mb-4 text-gray-400">
                The AI toolkit for modern hiring. Transform your recruitment
                process with intelligent automation.
              </p>
              <div className="flex space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-gray-700">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-gray-700">
                  <MessageSquare className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
            <p className="text-sm text-gray-400">
              © 2024 Rapidhyre AI Labs. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
