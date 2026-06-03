import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import LogoLoop from "./components/LogoLoop";
import Hyperspeed from "./components/Hyperspeed";
import profileImage from "./assets/syed-profile.png";
import FadeContent from "./components/FadeContent";
import {
  Code2,
  Shield,
  Smartphone,
  Server,
  FileText,
  Mail,
  ExternalLink,
  X,
  Menu,
  MousePointerClick,
} from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiGithub,
  SiFigma,
  SiGrafana,
  SiWireshark,
} from "react-icons/si";

const Github = Code2;
const Linkedin = ExternalLink;
const projects = [
  {
    title: "BoraScan",
    type: "Flutter PDF Scanner App",
    description:
      "Offline Android-first scanner app that converts images into clean PDF documents with filters, preview, and secure local storage.",
    tech: ["Flutter", "Dart", "PDF", "Local Storage"],
    icon: FileText,
    left: "4%",
    top: "64%",
    color: "from-cyan-400 to-blue-600",
  },
  {
    title: "SMART MES",
    type: "Parcel QR Scanning App",
    description:
      "Delivery verification app with parcel QR scanning, item status tracking, REST API integration, and proof image upload.",
    tech: ["Flutter", "REST API", "QR Scanner", "MockAPI"],
    icon: Smartphone,
    left: "28%",
    top: "64%",
    color: "from-violet-400 to-purple-700",
  },
  {
    title: "IOT system",
    type: "earth detector detector",
    description:
      "IoT-based prototype to detect ground vibration and send real-time earthquake alerts.",
    tech: [ "Dashboard", "Database", "Reports"],
    icon: Code2,
    left: "52%",
    top: "64%",
    color: "from-emerald-400 to-green-700",
  },
  {
    title: "Smart Attendance Management System",
    type: "IOT based notify system",
    description:
      "Server monitoring dashboard using Grafana, Prometheus, Windows Exporter, and visual threshold panels.",
    tech: ["Grafana", "Prometheus", "Monitoring", "Exporter"],
    icon: Server,
    left: "76%",
    top: "64%",
    color: "from-orange-400 to-red-600",
  },
];

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev" },
  { node: <SiDart />, title: "Dart", href: "https://dart.dev" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
  { node: <SiGrafana />, title: "Grafana", href: "https://grafana.com" },
  { node: <SiWireshark />, title: "Wireshark", href: "https://www.wireshark.org" },
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
  const [isProfileOpen, setIsProfileOpen] = useState(false);
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
        title: "What type of project do you need?",
        field: "projectType",
        type: "select",
        placeholder: "Select project type",
        options: [
          "Portfolio Website",
          "Flutter Mobile App",
          "Web System",
          "Dashboard",
          "UI Improvement",
          "Cybersecurity Consultation",
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
        title: "Tell me about your project",
        field: "message",
        type: "textarea",
        placeholder:
          "Describe your project idea, features, deadline, and any reference website/app.",
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
            Thank you. I received your project request and will reply through email.
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
              {state.submitting ? "Sending..." : "Send Secure Project Request"}
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
          <button
            type="button"
            onClick={() => setIsProfileOpen((prev) => !prev)}
            onContextMenu={(event) => event.preventDefault()}
            onDragStart={(event) => event.preventDefault()}
            className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            aria-label="Syed profile icon"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${profileImage})` }}
              aria-hidden="true"
            />
            <span className="sr-only">Syed Developer Space profile picture</span>
          </button>
          <div>
            <h1 className="font-bold tracking-wide">Syed Developer Space</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-2 text-sm backdrop-blur-xl md:flex">
            <a href="#about" className="rounded-xl px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white hover:shadow-lg">About</a>
            <a href="#projects" className="rounded-xl px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white hover:shadow-lg">Projects</a>
            <a href="#skills" className=" rounded-xl px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white hover:shadow-lg">Skills</a>
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
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
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
                className="max-w-xl text-lg leading-8 text-slate-300"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                A portfolio concept for showcasing Flutter projects, cybersecurity skills,
                FYP work, and infrastructure monitoring experience in a 3D-style
                workspace.
              </motion.p>

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
                  Contact Me
                </button>
              </motion.div>
            </motion.div>

          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl lg:col-span-2">
              <p className="text-sm font-semibold text-cyan-300">About Me</p>
              <h2 className="mt-2 text-3xl font-black">Security-aware developer focused on practical apps.</h2>
              <p className="mt-4 leading-8 text-slate-300">
                I am a Computer Science student majoring in Cybersecurity. My work focuses on Flutter app development, REST API integration, secure app design, and monitoring systems using tools like Grafana and Prometheus.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <Shield className="h-9 w-9 text-cyan-300" />
              <h3 className="mt-4 text-xl font-bold">Portfolio Angle</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Show that you are not just a coder, but a developer who understands security, monitoring, and real-world systems.
              </p>
            </div>
          </div>
        </section>

<section id="skills" className="mx-auto max-w-7xl px-6 py-16">
  <p className="text-sm font-semibold text-cyan-300">Code Knowledge</p>

  <h2 className="mt-2 text-3xl font-black">
    Technologies I work with
  </h2>

  <p className="mt-4 max-w-4xl leading-8 text-slate-300">
    A quick view of the tools, frameworks, and platforms I use for software
    development, mobile apps, cybersecurity, and infrastructure monitoring.
  </p>

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
        Project Request
      </p>

      <h2 className="mt-2 text-3xl font-black">
        Need a website, app, or system?
      </h2>

      <p className="mt-4 leading-8 text-slate-300">
        Send your project details here. I can help with portfolio websites,
        Flutter apps, dashboards, UI improvements, QR scanner apps, PDF scanner
        apps, and basic web systems.
      </p>

      <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
        <p className="font-semibold text-cyan-200">
          Email notification enabled
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          When a client submits this form, Formspree will send the project
          request to your email.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
        <p className="font-semibold text-white">
          Security features
        </p>

        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          <li>• Secure form endpoint through Formspree</li>
          <li>• Input validation with required fields and length limits</li>
          <li>• Honeypot field to reduce spam bots</li>
          <li>• No passwords or API secrets stored in frontend code</li>
          <li>• Warning for users not to submit private credentials</li>
          <li>• HTTPS-ready when deployed on Vercel or Netlify</li>
        </ul>
      </div>
    </div>

    <SecureContactForm />
  </div>
</section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500">
        © {currentYear} Syed Developer Space. Portfolio template preview.
      </footer>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
