import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Services from '../components/Services';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Statistics />
      <Services />
      <WorkProcess />
      <Testimonials />

      <a
        href="https://wa.me/6282744675"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-slate-900/20 transition-transform duration-200 hover:-translate-y-1"
      >
        <span className="sr-only">Chat on WhatsApp</span>
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.149-.198.297-.768.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.611-.921-2.206-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.088 1.758-.719 2.006-1.412.248-.694.248-1.289.173-1.412-.074-.123-.272-.198-.57-.347z" />
          <path d="M12.004 2.001C6.477 2.001 2 6.478 2 12.005c0 2.122.657 4.088 1.794 5.747L2 22l4.438-1.161A9.97 9.97 0 0012.004 22c5.526 0 10.003-4.477 10.003-9.995S17.53 2.001 12.004 2.001zm0 18.23c-1.781 0-3.44-.486-4.88-1.329l-.35-.205-2.632.688.7-2.565-.228-.37A8.002 8.002 0 013.998 12.01c0-4.417 3.587-8.006 8.005-8.006 4.417 0 8.005 3.589 8.005 8.006 0 4.418-3.588 8.005-8.005 8.005z" />
        </svg>
      </a>
    </div>
  );
}
