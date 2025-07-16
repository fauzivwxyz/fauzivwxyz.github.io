// src/pages/Work.jsx
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainWork from '../components/MainWork'

export default function Work() {
  return (
    <div className="bg-white text-black dark:bg-[#0a0a0a] dark:text-gray-200 font-sans min-h-screen flex flex-col animate-fadeIn">
      <Header type="work" />
      <MainWork />
      <Footer />
    </div>
  )
}
