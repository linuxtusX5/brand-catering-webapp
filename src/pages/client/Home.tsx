import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";

const Home = ({ onContactClick }: { onContactClick: () => void }) => (
  <div className="space-y-12">
    <section className="relative h-96 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Exquisite Catering
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Elevating your events with exceptional cuisine
        </p>
        <button
          onClick={onContactClick}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-full"
        >
          Book Your Event
        </button>
      </div>
    </section>
    <Services />
    <Testimonials />
  </div>
);
export default Home;
