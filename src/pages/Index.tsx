
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import QuickTabs from '../components/QuickTabs';
import DropshipCollection from '../components/DropshipCollection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
            <main>
        <section className="py-8 px-4 ">
          <div className="max-w-7xl mx-auto">
            <HeroSlider />
            <QuickTabs />
          </div>
        </section>

        {/* Quick Tabs Section */}

        {/* Dropship Collection Section */}
        <DropshipCollection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
