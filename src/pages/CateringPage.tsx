import { CateringMenuNew } from "../components/Catering/CateringMenuNew";
import { useSEO } from "../utils/seo";

export function CateringPage() {
  useSEO({
    title: "Turkish Breakfast Catering in Orange County",
    description:
      "Bring authentic Turkish breakfast to your event. Fresh simit, börek, sarma, menemen, and desserts catered across Orange County by Canan's Kitchen, Fountain Valley. Call (949) 394-6318.",
    path: "/catering",
  });
  return (
    <div className="min-h-screen bg-cream">
      <main className="pt-4">
        <CateringMenuNew standalone />
      </main>
    </div>
  );
}
