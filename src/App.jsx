import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "@formspree/react";
import LogoLoop from "./components/LogoLoop";
import Hyperspeed from "./components/Hyperspeed";
import {
  Code2,
  Shield,
  Server,
  ExternalLink,
  X,
  Menu,
  MousePointerClick,
  Bot,
  Package,
  Activity,
  Bus,
  GraduationCap,
  Briefcase,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import {
  SiSupabase,
  SiPostgresql,
  SiGithub,
  SiGrafana,
  SiWireshark,
  SiDocker,
  SiPrometheus,
  SiPython,
  SiLinux,
  SiUbuntu,
  SiMysql,
} from "react-icons/si";

const CONTACT = {
  name: "Syed Muhammad Elias Bin Syed Ahamed",
  shortName: "Syed Muhammad Elias",
  title: "Cybersecurity Graduate | Junior SOC / Infrastructure",
  location: "Jitra, Kedah, Malaysia",
  phone: "+60 11 1097 7098",
  email: "jahabarnishasyed@gmail.com",
  linkedin: "https://linkedin.com/in/syed-muhammad-elias-bin-syed-ahamed-52631a171",
};

const experience = [
  {
    company: "Aafiyat Marketing SDN.BHD",
    role: "Intern Infra",
    period: "August 2025 – February 2026",
    highlights: [
      "Configured solutions to resolve server downtime and crash issues while maintaining KPI targets.",
      "Led project coordination with documentation templates and timeline tracking, achieving 50–70% project completion.",
      "Developed technical support guidelines that reduced intern onboarding from one week to 3–5 days.",
      "Built a smart attendance system using Cursor AI and Supabase, later presented at university.",
      "Led a network project enabling roaming and RSSI to resolve sticky client issues, improving WiFi uptime by ~70%.",
      "Monitored network and server uptime daily using Grafana dashboards for KPI reporting.",
    ],
  },
  {
    company: "Albukhary International University — Corporate Communications Unit",
    role: "Office Assistant",
    period: "August 2024 – May 2025",
    highlights: [
      "Conducted outbound calls to prospective applicants with an 85% success rate in securing leads.",
      "Maintained accurate customer interaction records in Microsoft Excel for operational efficiency.",
      "Supported campus initiatives and visitor events with logistical coordination for executives.",
    ],
  },
  {
    company: "PERKESO",
    role: "Office Assistant",
    period: "November 2021 – April 2022",
    highlights: [
      "Completed weekly reports using Excel, Word, and PowerPoint in a full-time placement environment.",
      "Completed 60 hours of PERKESO-approved training, improving personal task completion efficiency by 20%.",
      "Built teamwork and interpersonal skills while meeting employer standards in a real work setting.",
    ],
  },
];

const education = [
  {
    school: "Albukhary International University",
    degree: "Bachelor of Computer Science (Cybersecurity)",
    period: "October 2022 – April 2026",
    detail: "CGPA 3.48 / 4.00",
    notes:
      "Coursework includes Computer Organization and Architecture, Artificial Intelligence, Data Communication and Networking, Problem Solving and Programming, and Vulnerability Assessment and Penetration Testing.",
  },
  {
    school: "Politeknik Sultan Abdul Halim Muadzam Shah",
    degree: "Diploma in Electronic Communication",
    period: "June 2018 – December 2020",
    detail: "Diploma completed",
    notes:
      "Built a technical foundation in electronics, communication systems, and digital technology through lab work and projects.",
  },
];

const projects = [
  {
    title: "Smart Attendance System",
    type: "Full-Stack Attendance Platform",
    description:
      "Designed and implemented a Smart Attendance Management System using Supabase (PostgreSQL) for backend management and AI-assisted development tools (Cursor AI) to automate attendance recording and reporting.",
    tech: ["Supabase", "PostgreSQL", "Cursor AI", "Automation"],
    icon: Server,
    left: "2%",
    top: "58%",
    color: "from-orange-400 to-red-600",
  },
  {
    title: "Smart Parcel Box",
    type: "IoT Secure Delivery System",
    description:
      "IoT-based smart box using ESP8266 with email notifications on access — ideal for secure school use such as assignment submissions or document exchange. Improves parcel security and reduces physical contact.",
    tech: ["ESP8266", "IoT", "Email Alerts", "Security"],
    icon: Package,
    left: "20%",
    top: "68%",
    color: "from-violet-400 to-purple-700",
  },
  {
    title: "Earthquake Detector",
    type: "IoT Vibration Monitoring",
    description:
      "Developed an IoT-based system to detect ground vibrations and send real-time earthquake alerts for early awareness and monitoring.",
    tech: ["IoT", "Sensors", "Real-time Alerts", "Embedded"],
    icon: Activity,
    left: "38%",
    top: "58%",
    color: "from-emerald-400 to-green-700",
  },
  {
    title: "AI Voice Assistant",
    type: "Python Chatbot",
    description:
      "Built a Python-based chatbot to automate responses and streamline communication for a student organization.",
    tech: ["Python", "Chatbot", "Automation", "NLP"],
    icon: Bot,
    left: "56%",
    top: "68%",
    color: "from-cyan-400 to-blue-600",
  },
  {
    title: "Bus Booking System",
    type: "C-Based Ticket Management",
    description:
      "Developed a C-based program to manage ticket bookings, reducing manual errors and enhancing usability.",
    tech: ["C", "CLI", "Booking Logic", "Data Management"],
    icon: Bus,
    left: "74%",
    top: "58%",
    color: "from-amber-400 to-orange-600",
  },
];

const techLogos = [
  { node: <SiWireshark />, title: "Wireshark", href: "https://www.wireshark.org" },
  { node: <SiGrafana />, title: "Grafana", href: "https://grafana.com" },
  { node: <SiPrometheus />, title: "Prometheus", href: "https://prometheus.io" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiLinux />, title: "Linux", href: "https://www.linux.org" },
  { node: <SiUbuntu />, title: "Ubuntu Server", href: "https://ubuntu.com/server" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <Shield className="h-[34px] w-[34px]" />, title: "Burp Suite" },
];

const techLogoRows = [
  techLogos,
  [...techLogos.slice(4), ...techLogos.slice(0, 4)],
  [...techLogos.slice(8), ...techLogos.slice(0, 8)],
];

function FloatingProject({ project, index, onSelect }) {
  const Icon = project.icon;
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(project)}
      className="absolute group w-53 rounded-3xl border border-white/15 bg-white/10 p-4 text-left shadow-2xl backdrop-blur-xl transition hover:border-white/35"
      style={{
        left: project.left,
        top: project.top,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 30, rotateY: index % 2 === 0 ? -16 : 16 }}
      animate={{
        opacity: 1,
        y: [0, -16, 0],
        rotateY: index % 2 === 0 ? -8 : 8,
      }}
      transition={{
        opacity: { duration: 0.6, delay: index * 0.12 },
        y: { duration: 4 + index, repeat: Infinity, ease: "easeInOut" },
        rotateY: { duration: 0.8 },
      }}
      whileHover={{ scale: 1.08, z: 60 }}
      whileTap={{ scale: 0.95 }}
    >
<div
  className={`mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} shadow-lg`}
>
  <Icon className="h-4 w-4 text-white" />
</div>
      <h3 className="text-base font-bold text-white">{project.title}</h3>
      <p className="mt-1 text-xs text-slate-300">{project.type}</p>
      <div className="mt-3 flex items-center gap-1 text-xs text-cyan-200 opacity-0 transition group-hover:opacity-100">
        <MousePointerClick className="h-3 w-3" /> Click to view
      </div>
    </motion.button>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full max-w-xl rounded-[2rem] border border-white/15 bg-slate-950 p-6 text-white shadow-2xl"
          initial={{ scale: 0.88, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.88, y: 30, opacity: 0 }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-cyan-300">{project.type}</p>
              <h2 className="mt-1 text-3xl font-black">{project.title}</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 bg-white/10 p-2 hover:bg-white/20"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-5 leading-7 text-slate-300">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 font-semibold text-slate-950 hover:bg-slate-200">
              <Code2 className="h-4 w-4" /> GitHub
            </button>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-2 font-semibold text-white hover:bg-white/10">
              <ExternalLink className="h-4 w-4" /> Live Demo
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ThreeDPortfolioTemplate() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hyperActive, setHyperActive] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const updateIsMobile = () => setIsMobileScreen(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const hyperspeedOptions = useMemo(
    () => ({
      distortion: "turbulentDistortion",
      length: 400,
      roadWidth: 10,
      islandWidth: 2,
      lanesPerRoad: 4,
      fov: 90,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.4,
      totalSideLightSticks: 20,
      lightPairsPerRoadWay: 40,
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,
      lightStickWidth: [0.12, 0.5],
      lightStickHeight: [1.3, 1.7],
      movingAwaySpeed: [60, 80],
      movingCloserSpeed: [-120, -160],
      carLightsLength: [12, 80],
      carLightsRadius: [0.05, 0.14],
      carWidthPercentage: [0.3, 0.5],
      carShiftX: [-0.8, 0.8],
      carFloorSeparation: [0, 5],
      colors: {
        roadColor: 0x080808,
        islandColor: 0x0a0a0a,
        background: 0x000000,
        shoulderLines: 0xffffff,
        brokenLines: 0xffffff,
        leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
        rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
        sticks: 0x03b3c3,
      },
    }),
    []
  );

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -18;
    setTilt({ x, y });
  };

  function SecureContactForm() {
    const [state, handleSubmit] = useForm("xqejoodz");
    const [step, setStep] = useState(0);
    const [error, setError] = useState("");

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
      return emailRegex.test(email);
    };

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    });

    const steps = [
      {
        title: "What is your name?",
        field: "name",
        type: "text",
        placeholder: "Enter your name",
      },
      {
        title: "What is your email?",
        field: "email",
        type: "email",
        placeholder: "Enter your email",
      },
      {
        title: "What is this inquiry about?",
        field: "projectType",
        type: "select",
        placeholder: "Select inquiry type",
        options: [
          "Job / Internship Opportunity",
          "SOC / Security Collaboration",
          "Infrastructure Support",
          "Project Collaboration",
          "Technical Consultation",
          "Other",
        ],
      },
      {
        title: "What is your budget range?",
        field: "budget",
        type: "text",
        placeholder: "Example: RM200 - RM500",
      },
      {
        title: "What would you like to discuss?",
        field: "message",
        type: "textarea",
        placeholder:
          "Share details about the role, collaboration, or opportunity you'd like to discuss.",
      },
    ];

    const currentStep = steps[step];
    const isLastStep = step === steps.length - 1;

    const handleChange = (event) => {
      setFormData({
        ...formData,
        [currentStep.field]: event.target.value,
      });
    };

    const goNext = () => {
      const value = formData[currentStep.field].trim();

      setError("");

      if (!value && currentStep.field !== "budget") {
        setError("Please fill in this field first.");
        return;
      }

      if (currentStep.field === "email" && !isValidEmail(value)) {
        setError("Please enter a valid email address. Example: name@example.com");
        return;
      }

      if (currentStep.field === "message" && value.length < 20) {
        setError("Project description must be at least 20 characters.");
        return;
      }

      setStep((prev) => prev + 1);
    };

    const goBack = () => {
      setStep((prev) => prev - 1);
    };

    const handleFinalSubmit = (event) => {
      setError("");

      if (!formData.name.trim()) {
        event.preventDefault();
        setStep(0);
        setError("Please enter your name.");
        return;
      }

      if (!isValidEmail(formData.email.trim())) {
        event.preventDefault();
        setStep(1);
        setError("Please enter a valid email address. Example: name@example.com");
        return;
      }

      if (!formData.projectType.trim()) {
        event.preventDefault();
        setStep(2);
        setError("Please select a project type.");
        return;
      }

      if (!formData.message.trim() || formData.message.trim().length < 20) {
        event.preventDefault();
        setStep(4);
        setError("Please provide a project description with at least 20 characters.");
        return;
      }

      handleSubmit(event);
    };

    if (state.succeeded) {
      return (
        <div className="rounded-[2rem] border border-green-400/20 bg-green-400/10 p-6 text-center">
          <p className="text-xl font-bold text-green-300">
            Request sent successfully.
          </p>

          <p className="mt-2 text-slate-300">
            Thank you. I received your message and will reply through email.
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Notification sent to portfolio owner.
          </p>
        </div>
      );
    }

    return (
      <form onSubmit={handleFinalSubmit} className="space-y-4">
        {/* Hidden fields submitted to Formspree */}
        <input type="hidden" name="name" value={formData.name} />
        <input type="hidden" name="email" value={formData.email} />
        <input type="hidden" name="projectType" value={formData.projectType} />
        <input type="hidden" name="budget" value={formData.budget} />
        <input type="hidden" name="message" value={formData.message} />

        {/* Honeypot field for spam bots */}
        <input
          type="text"
          name="_gotcha"
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-cyan-200">
              Question {step + 1} of {steps.length}
            </p>
            <p className="text-xs text-cyan-300">
              {Math.round(((step + 1) / steps.length) * 100)}%
            </p>
          </div>

          <div className="mt-2 h-1 overflow-hidden rounded-full bg-cyan-300/20">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300 transition-all duration-300"
              style={{
                width: `${((step + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">
              {currentStep.title}
            </h3>

            {currentStep.type === "select" ? (
              <select
                value={formData[currentStep.field]}
                onChange={handleChange}
                className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
              >
                <option value="">{currentStep.placeholder}</option>

                {currentStep.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : currentStep.type === "textarea" ? (
              <textarea
                value={formData[currentStep.field]}
                onChange={handleChange}
                placeholder={currentStep.placeholder}
                rows="5"
                className="mt-4 w-full resize-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
              />
            ) : (
              <input
                type={currentStep.type}
                value={formData[currentStep.field]}
                onChange={handleChange}
                placeholder={currentStep.placeholder}
                className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
              />
            )}

            {error ? (
              <p className="mt-4 text-xs text-rose-300">{error}</p>
            ) : (
              <p className="mt-4 text-xs text-slate-400">Press Next to continue.</p>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm leading-6 text-slate-300">
          <p className="font-semibold text-cyan-200">Secure request notice</p>
          <p className="mt-1">
            Please avoid sending passwords, bank details, API keys, or private
            credentials through this form.
          </p>
        </div>

        <div className="flex gap-3">
          {step > 0 && (
            <button
              type="button"
              onClick={goBack}
              className="rounded-2xl border border-white/15 px-5 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Back
            </button>
          )}

          {!isLastStep ? (
            <button
              type="button"
              onClick={goNext}
              className="flex-1 rounded-2xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200 hover:shadow-xl hover:shadow-cyan-500/20 active:scale-95"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={state.submitting}
              className="flex-1 rounded-2xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200 hover:shadow-xl hover:shadow-cyan-500/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          )}
        </div>
      </form>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[20%] h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[30%] h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <header className="relative z-40 mx-auto mt-5 flex w-[95%] max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-slate-950/60 px-6 py-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500 to-blue-700 shadow-lg">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold tracking-wide">{CONTACT.shortName}</h1>
            <p className="text-xs text-slate-400">{CONTACT.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-2 text-sm backdrop-blur-xl md:flex">
            <a href="#about" className="rounded-xl px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white hover:shadow-lg">About</a>
            <a href="#experience" className="rounded-xl px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white hover:shadow-lg">Experience</a>
            <a href="#projects" className="rounded-xl px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white hover:shadow-lg">Projects</a>
            <a href="#skills" className=" rounded-xl px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white hover:shadow-lg">Skills</a>
            <a href="#education" className="rounded-xl px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white hover:shadow-lg">Education</a>
            <a href="#contact" className="rounded-xl px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white hover:shadow-lg">Contact</a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl md:hidden"
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {mobileNavOpen && (
          <div className="absolute inset-x-6 top-full z-50 mt-3 rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-3">
              {[
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "education", label: "Education" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileNavOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
      <main className="relative z-10">
        <section className="relative overflow-hidden">
          {/* Hyperspeed background */}
          <div className="absolute inset-0 pointer-events-none opacity-90">
            <Hyperspeed effectOptions={hyperspeedOptions} isActive={hyperActive} />
          </div>

          {/* Light overlay only, so animation is still visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/95 via-[#050816]/60 to-[#050816]/20" />

          <div className="relative mx-auto flex min-h-[calc(100vh-92px)] flex-col gap-10 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">
            {/* Left text */}
            <motion.div
              className="max-w-2xl space-y-8 text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.h1
                className="text-5xl font-black leading-tight md:text-7xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                Hi, I&apos;m Syed
              </motion.h1>

              <motion.p
                className="text-xl font-semibold text-cyan-300"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
              >
                {CONTACT.title}
              </motion.p>

              <motion.p
                className="max-w-xl text-lg leading-8 text-slate-300"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Recent Bachelor of Computer Science (Cybersecurity) graduate with hands-on
                experience in infrastructure monitoring, network troubleshooting, and secure
                system support. Eager to build a career in Security Operations, threat
                monitoring, and incident response.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 text-sm text-slate-300"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cyan-300" /> {CONTACT.location}
                </span>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 transition hover:text-white">
                  <Phone className="h-4 w-4 text-cyan-300" /> {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 transition hover:text-white">
                  <Mail className="h-4 w-4 text-cyan-300" /> {CONTACT.email}
                </a>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  type="button"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  onPointerDown={() => setHyperActive(true)}
                  onPointerUp={() => setHyperActive(false)}
                  onPointerLeave={() => setHyperActive(false)}
                  onTouchEnd={() => setHyperActive(false)}
                  className="rounded-2xl bg-white px-5 py-3 font-bold text-slate-950 shadow-lg transition hover:bg-slate-200 active:scale-95"
                >
                  View Projects
                </button>

                <button
                  type="button"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  onPointerDown={() => setHyperActive(true)}
                  onPointerUp={() => setHyperActive(false)}
                  onPointerLeave={() => setHyperActive(false)}
                  onTouchEnd={() => setHyperActive(false)}
                  className="rounded-2xl border border-white/15 px-5 py-3 font-bold text-white transition hover:bg-white/10 active:scale-95"
                >
                  Get In Touch
                </button>

                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/30 px-5 py-3 font-bold text-cyan-200 transition hover:bg-cyan-300/10 active:scale-95"
                >
                  <ExternalLink className="h-4 w-4" /> LinkedIn
                </a>
              </motion.div>
            </motion.div>

          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl lg:col-span-2">
              <p className="text-sm font-semibold text-cyan-300">About Me</p>
              <h2 className="mt-2 text-3xl font-black">Cybersecurity graduate focused on SOC and infrastructure.</h2>
              <p className="mt-4 leading-8 text-slate-300">
                I am a recent Bachelor of Computer Science (Cybersecurity) graduate with practical
                experience in infrastructure monitoring, network troubleshooting, and secure system
                support. I am familiar with tools including Wireshark, Burp Suite, Kali Linux,
                Nessus, Grafana, Prometheus, and Docker.
              </p>
              <p className="mt-4 leading-8 text-slate-300">
                I support resilient IT environments through proactive monitoring, technical
                troubleshooting, and clear documentation. Analytical, adaptable, and actively
                developing skills as a CTF player with a strong interest in threat monitoring and
                incident response.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <Shield className="h-9 w-9 text-cyan-300" />
              <h3 className="mt-4 text-xl font-bold">Core Focus</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                <li>• Security Operations &amp; threat monitoring</li>
                <li>• Infrastructure &amp; server monitoring</li>
                <li>• Network troubleshooting &amp; documentation</li>
                <li>• Incident detection &amp; basic response</li>
                <li>• Secure software development principles</li>
              </ul>
              <p className="mt-4 text-sm text-slate-400">
                Languages: Malay, English, Tamil
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold text-cyan-300">Professional Experience</p>
          <h2 className="mt-2 text-3xl font-black">Where I&apos;ve worked</h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            Hands-on roles spanning infrastructure support, network operations, technical
            documentation, and office administration.
          </p>

          <div className="mt-8 space-y-6">
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.period}`}
                className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <p className="mt-1 text-cyan-200">{job.company}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-1 text-sm text-slate-300">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-2 pl-4 text-sm leading-7 text-slate-300">
                  {job.highlights.map((item) => (
                    <li key={item} className="list-disc">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

<section id="skills" className="mx-auto max-w-7xl px-6 py-16">
  <p className="text-sm font-semibold text-cyan-300">Technical Skills</p>

  <h2 className="mt-2 text-3xl font-black">
    Tools &amp; platforms I use
  </h2>

  <p className="mt-4 max-w-4xl leading-8 text-slate-300">
    Security, networking, monitoring, and development tools from coursework, internships,
    and hands-on projects — including Metasploit, Nmap, OWASP ZAP, Burp Suite, Kali Linux,
    Grafana, Prometheus, Docker, Ghidra, and Taiga.
  </p>

  <div className="mt-8 grid gap-4 md:grid-cols-2">
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
      <h3 className="text-lg font-bold text-white">Cybersecurity &amp; Infrastructure</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">
        Network security, infrastructure monitoring, digital forensics basics, Linux security,
        incident detection, IT support troubleshooting, and technical documentation.
      </p>
    </div>
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
      <h3 className="text-lg font-bold text-white">Soft Skills</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">
        Problem-solving, critical thinking, ethical mindset, adaptability, teamwork, time
        management, attention to detail, analytical thinking, communication, and CTF participation.
      </p>
    </div>
  </div>

<div className="relative mt-8 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6  shadow-2xl shadow-cyan-500/5 backdrop-blur-xl">
    <div className="h-[70px]">
      <LogoLoop
        logos={techLogoRows[0]}
        speed={45}
        direction="right"
        logoHeight={34}
        gap={60}
        hoverSpeed={10}
        scaleOnHover
        fadeOut
        fadeOutColor="#020617"
        ariaLabel="Technology stack row one"
      />
    </div>

    <div className="h-[70px]">
      <LogoLoop
        logos={techLogoRows[1]}
        speed={45}
        direction="left"
        logoHeight={34}
        gap={60}
        hoverSpeed={10}
        scaleOnHover
        fadeOut
        fadeOutColor="#020617"
        ariaLabel="Technology stack row two"
      />
    </div>

    <div className="h-[70px]">
      <LogoLoop
        logos={techLogoRows[2]}
        speed={45}
        direction="right"
        logoHeight={34}
        gap={60}
        hoverSpeed={10}
        scaleOnHover
        fadeOut
        fadeOutColor="#020617"
        ariaLabel="Technology stack row three"
      />
    </div>
  </div>
</section>

<section id="education" className="mx-auto max-w-7xl px-6 py-16">
  <p className="text-sm font-semibold text-cyan-300">Education</p>
  <h2 className="mt-2 text-3xl font-black">Academic background</h2>

  <div className="mt-8 grid gap-6 lg:grid-cols-2">
    {education.map((item) => (
      <div
        key={`${item.school}-${item.degree}`}
        className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{item.degree}</h3>
            <p className="mt-1 text-cyan-200">{item.school}</p>
            <p className="mt-2 text-sm text-slate-400">{item.period}</p>
            <p className="mt-3 inline-flex rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-sm text-slate-200">
              {item.detail}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.notes}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
<section id="projects" className="mx-auto max-w-7xl px-6 py-16" onMouseMove={handleMouseMove}>
  <p className="text-sm font-semibold text-cyan-300">Projects</p>
  <h2 className="mt-2 text-3xl font-black">Featured projects</h2>

  <div className={`relative mt-8 ${isMobileScreen ? "" : "h-[560px] min-h-[520px] perspective-[1200px]"}`}>
    {isMobileScreen ? (
      <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-sm">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <button
              key={project.title}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="group w-full rounded-3xl border border-white/15 bg-white/10 p-4 text-left shadow-2xl backdrop-blur-xl transition hover:border-white/35"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} shadow-lg`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{project.type}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
            </button>
          );
        })}
      </div>
    ) : (
      <motion.div
        className="absolute inset-0 rounded-[3rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-sm"
        animate={{ rotateX: tilt.y, rotateY: tilt.x }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute left-1/2 top-1/2 h-72 w-96 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/15 bg-slate-900/90 p-5 shadow-2xl" style={{ transform: "translateZ(80px)" }}>
          <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Featured Work</p>
            <p className="text-5xl font-black text-white">{projects.length}</p>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Projects</p>
          </div>
        </div>

        {projects.map((project, index) => (
          <FloatingProject
            key={project.title}
            project={project}
            index={index}
            onSelect={setSelectedProject}
          />
        ))}
      </motion.div>
    )}
  </div>
</section>
<section id="contact" className="mx-auto max-w-7xl px-6 py-16 pb-24">
  <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr]">
    <div>
      <p className="text-sm font-semibold text-cyan-300">
        Contact
      </p>

      <h2 className="mt-2 text-3xl font-black">
        Open to SOC, infrastructure, and security roles
      </h2>

      <p className="mt-4 leading-8 text-slate-300">
        Interested in graduate roles, internships, or collaborations in Security Operations,
        infrastructure monitoring, network support, and incident response. Reach out via the
        form or connect directly.
      </p>

      <div className="mt-6 space-y-3">
        <a
          href={`mailto:${CONTACT.email}`}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-300/30"
        >
          <Mail className="h-5 w-5 text-cyan-300" />
          <span className="text-sm text-slate-200">{CONTACT.email}</span>
        </a>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-300/30"
        >
          <ExternalLink className="h-5 w-5 text-cyan-300" />
          <span className="text-sm text-slate-200">LinkedIn Profile</span>
        </a>
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
        <p className="font-semibold text-cyan-200">
          References available
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          Muhammad Hamiduddin bin Ismail (Head of Technology Enablement) and Muhammad Zahir bin
          Halim (Head of Infrastructure) — available upon request via LinkedIn or email.
        </p>
      </div>
    </div>

    <SecureContactForm />
  </div>
</section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500">
        © {currentYear} {CONTACT.shortName}. Cybersecurity Portfolio.
      </footer>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
