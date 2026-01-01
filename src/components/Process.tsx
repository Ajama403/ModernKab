import { ClipboardList, PhoneCall, Wrench, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import site from "@/content/siteConfig";

const Process = () => {
  const iconMap = [ClipboardList, PhoneCall, Wrench];
  const steps = site.process.map((step, index) => ({
    icon: iconMap[index] || CheckCircle,
    step: `0${index + 1}`,
    title: step.title,
    description: step.desc,
  }));

  return (
    <section
      id="process"
      className="py-24 text-primary-foreground relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 35%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.06), transparent 30%), linear-gradient(to bottom, #0d7fb3 0%, #1ea2e2 50%, #5ad2f3 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/3 to-white/5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4 mb-6 text-white">
            A Simple Path to
            <span className="text-secondary font-semibold"> Quality Construction</span>
          </h2>
          <p className="text-white/90 text-lg">
            Clear steps from first call to final walkthrough, so you know what to expect at every milestone.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-px bg-white/25" />
              )}

              <div className="bg-white/95 rounded-2xl p-8 border border-slate-900/6 shadow-[0_10px_30px_rgba(2,8,23,0.12)] transition-colors h-full">
                {/* Step Number */}
                <span className="text-5xl font-bold text-[#1ea2e2]/20">{step.step}</span>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mt-4 mb-6 bg-[linear-gradient(135deg,#1ea2e2,#f05a28)] shadow-md shadow-slate-900/20">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-[#0b1220]">{step.title}</h3>
                <p className="text-[#475569] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            className="bg-[#f05a28] hover:bg-[#d94f22] text-white shadow-lg shadow-slate-900/20 font-semibold h-12 px-8 transition duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#f05a28] focus-visible:ring-offset-white/10"
            asChild
          >
            <a href={`tel:${site.phoneTel}`}>{site.contact.button}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
