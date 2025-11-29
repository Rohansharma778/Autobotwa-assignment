import Contact from "./component/Contact";
import Hero_Section from "./component/Hero_Section";
import Feature from "./component/Feature";
import Testimonial from "./component/Testimonial";
import Footer from "./component/Footer"

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-background p-4 md:p-8">
    <div className="max-w-6xl mx-auto">
    <Hero_Section />
    <Feature />
    <Testimonial />
    <Contact />
    </div>
    </div>
    <Footer />
    </>
  );
}
