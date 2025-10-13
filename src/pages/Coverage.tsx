import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const Coverage = () => {
  const { coverageAreas } = useAppContext();
  const [filteredAreas, setFilteredAreas] = useState<any[]>([]);

  useEffect(() => {
    // Filter active areas
    const activeAreas = coverageAreas.filter(area => area.active);
    setFilteredAreas(activeAreas);
  }, [coverageAreas]);

  // Additional areas to display
  const additionalAreas = [
    { area_name: "Patna", pin_code: "800001" },
    { area_name: "NCR", pin_code: "110001" },
    { area_name: "Noida", pin_code: "201301" },
    { area_name: "Gurgaon", pin_code: "122001" },
    { area_name: "Delhi", pin_code: "110001" },
    { area_name: "Ranchi", pin_code: "834001" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Coverage Areas</h1>
          <p className="text-xl text-muted-foreground">We serve Hyderabad, Patna, NCR, Noida, Gurgaon, Delhi, Ranchi and nearby areas</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 mb-12">
          {filteredAreas.map((area) => (
            <div key={area.id} className="glass-panel p-4 rounded-xl flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold">{area.name}</div>
                <div className="text-sm text-muted-foreground">{area.pincode}</div>
              </div>
            </div>
          ))}
          
          {/* Additional areas */}
          {additionalAreas.map((area, index) => (
            <div key={index} className="glass-panel p-4 rounded-xl flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold">{area.area_name}</div>
                <div className="text-sm text-muted-foreground">{area.pin_code}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="mb-4 text-muted-foreground">Don't see your area? Show your love and trust!</p>
          <a href="https://wa.me/919515850682?text=Hello%20Qubex,%20do%20you%20deliver%20to%20my%20area?">
            <Button className="gradient-gold font-bold text-gray-900">Request Coverage</Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Coverage;