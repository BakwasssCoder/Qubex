import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const Coverage = () => {
  const [areas, setAreas] = useState<any[]>([]);

  useEffect(() => {
    const fetchAreas = async () => {
      const { data } = await supabase.from("coverage_areas").select("*").eq("is_active", true);
      setAreas(data || []);
    };
    fetchAreas();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Coverage Areas</h1>
          <p className="text-xl text-muted-foreground">We serve Hyderabad and nearby areas</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 mb-12">
          {areas.map((area) => (
            <div key={area.id} className="glass-panel p-4 rounded-xl flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold">{area.area_name}</div>
                <div className="text-sm text-muted-foreground">{area.pin_code}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="mb-4 text-muted-foreground">Don't see your area?</p>
          <a href="https://wa.me/919515850682?text=Hello%20Qubex,%20do%20you%20deliver%20to%20my%20area?">
            <Button className="gradient-gold text-primary font-semibold">Request Coverage</Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Coverage;
