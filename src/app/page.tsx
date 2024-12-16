import { Benefits } from "@/components/Benefits";
import { Customers } from "@/components/Customers";
import { Depoiments } from "@/components/Depoiments";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Sobre } from "@/components/Sobre";

export default function Home() {
  return (
    <main>
      <Header />
      <Sobre />
      <Services />
      <Customers />
      <Projects />
      <Benefits />
      <Depoiments />
      <Footer />
    </main>
  );
}
