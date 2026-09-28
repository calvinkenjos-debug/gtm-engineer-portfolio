import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Services } from "@/components/Services";
import { Stages } from "@/components/Stages";
import { Systems } from "@/components/Systems";
import { Proof } from "@/components/Proof";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Stages />
        <Systems />
        <Proof />
        <Process />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}