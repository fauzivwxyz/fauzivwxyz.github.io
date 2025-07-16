import { CloudMoon, CloudSun, GithubLogo, LinkedinLogo, ThreadsLogo, XLogo } from '@phosphor-icons/react'

export default function Main() {
  return (
    <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row items-center justify-center gap-12 px-6 max-w-5xl w-full">
      {/* Kiri */}
      <div className="w-full md:w-1/3 text-center md:text-left space-y-4 md:translate-y-1/2 opacity-0 animate-fadeIn delay-[100ms]">
        <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
          Hi, I'm Fauzi — a <span className="line-through">web developer</span> who enjoys shaping small details into simple, functional websites.
        </p>
        <div className="flex justify-center md:justify-start text-xl md:text-2xl gap-4 mt-2">
          <SocialLink icon={<ThreadsLogo />} label="Threads" href="https://threads.com/@xx.fauzi" />
          <SocialLink icon={<XLogo />} label="X" href="https://x.com/seulginot" />
          <SocialLink icon={<GithubLogo />} label="GitHub" href="https://github.com/fauzivwxyz" />
          <SocialLink icon={<LinkedinLogo />} label="LinkedIn" href="https://linkedin.com/in/fauzivwxyz" />
        </div>
      </div>

      {/* Tengah (Foto) */}
      <div className="w-full md:w-1/3 flex justify-center relative opacity-0 animate-popIn delay-[200ms]">
        <div className="absolute rounded-full bg-gray-200 dark:bg-[#101720] z-0 w-48 h-48 md:w-60 md:h-60 translate-x-[-10px] translate-y-[10px]"></div>
        <img
          src="/img/profile.jpg"
          alt="Profile"
          className="relative z-10 w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-gray-300 dark:border-[#101720] transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Kanan */}
      <div className="w-full md:w-1/3 text-center md:text-left md:-translate-y-1/2 opacity-0 animate-fadeIn delay-[300ms]">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">Achmad Fauzi</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">(yes, I sleep a lot)</p>
      </div>
    </main>
  )
}

function SocialLink({ icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="group relative hover:scale-110 transition duration-300"
      rel="noreferrer"
    >
      {icon}
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
        {label}
      </span>
    </a>
  )
}
