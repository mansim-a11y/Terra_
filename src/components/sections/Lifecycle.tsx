import { RefreshCw, Sprout, GlassWater } from "lucide-react"

export default function Lifecycle() {
    const steps = [
        {
            step: 1,
            title: "Sourced from Nature",
            desc: "Made from corn and starch-based PLA.",
            icon: Sprout,
        },
        {
            step: 2,
            title: "Used for Hydration",
            desc: "Durable, heat resistant up to 45°C. Leak-proof.",
            icon: GlassWater,
        },
        {
            step: 3,
            title: "Returned to Earth",
            desc: "Decomposes in soil within 180 days.",
            icon: RefreshCw,
        },
    ]

    return (
        <section className="py-20 md:py-32 bg-brand-earth text-brand-beige" id="how-it-works">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-16">
                    From Nature, Back to Nature.
                </h2>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-brand-beige/20 -z-0" />

                    {steps.map((item) => (
                        <div key={item.step} className="relative z-10 flex flex-col items-center group">
                            <div className="w-24 h-24 rounded-full bg-brand-beige text-brand-earth flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold font-montserrat mb-3">{item.title}</h3>
                            <p className="text-brand-beige/60 max-w-xs">{item.desc}</p>

                            <div className="md:hidden mt-8 text-brand-beige/20">
                                <div className="w-0.5 h-12 bg-current mx-auto" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
