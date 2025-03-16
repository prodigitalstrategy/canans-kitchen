import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CateringMenuNew } from "../components/Catering/CateringMenuNew";

export function CateringPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <CateringMenuNew />
      </main>
      <Footer />
    </div>
  );
}
