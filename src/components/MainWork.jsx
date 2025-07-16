import React from 'react'

const projects = [
  {
    title: 'Wedding Invitation Website',
    image: '/img/xanxav.png',
    description:
      'Responsive WordPress site with RSVP form, built using WeddingSaaS for quick event publishing.',
    delay: '100ms',
  },
  {
    title: 'E-Kantin App',
    image: '/img/ekantin.png',
    description:
      'Internal Laravel-based web app for digital canteen ordering with menu, cart, and role access.',
    delay: '200ms',
  },
  {
    title: 'D2 Creative Website Profile',
    image: '/img/d2web.png',
    description:
      'Company site built with WordPress & Elementor, featuring highlights and contact form.',
    delay: '300ms',
  },
  {
    title: 'Inventory App – BPN Sintang',
    image: '/img/inventory.png',
    description:
      'Mobile app with React Native to track stock & inventory logs on the field.',
    delay: '400ms',
  },
  {
    title: 'Research CMS – Balitbang Jatim',
    image: '/img/balitbang.png',
    description:
      'Laravel CMS for research publication & profile management for internal admin.',
    delay: '500ms',
  },
  {
    title: 'Portfolio Website',
    image: '/img/persona.png',
    description:
      'This site itself — responsive, clean, animated with Tailwind CSS, and built using React for a component-based architecture.',
    delay: '600ms',
  },
]

export default function MainWork() {
  return (
    <main className="flex-grow max-w-5xl w-full mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group bg-white dark:bg-[#101720] p-6 rounded-xl shadow-md hover:scale-[1.02] transition-all duration-300 opacity-0 animate-popIn delay-[${project.delay}]`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4 transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <h2 className="font-bold text-lg mb-1 text-black dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
