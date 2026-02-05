import { useState } from "react"
import { Building2, Train, PartyPopper } from "lucide-react"
import { cn } from "@/lib/utils"

export default function UseCases() {
    const [activeTab, setActiveTab] = useState(0)

    const cases = [
        {
            title: "Daily Commute",
            icon: Train,
            desc: "Grab one at the station. Toss it in the compost when you're done. No empty bottle to carry around.",
            quote: "Convenience without the guilt.",
        },
        {
            title: "Weddings & Events",
            icon: PartyPopper,
            desc: "Hosting a wedding? Don't leave a mountain of plastic behind for future generations.",
            quote: "The eco-friendly statement for your big day.",
        },
        {
            title: "Corporate Campuses",
            icon: Building2,
            desc: "Meet your Green Mandates. Switch your office pantry to 100% biodegradable hydration.",
            quote: "Sustainability at scale.",
        },
    ]

    return (
        <section className="py-20 px-4" id="use-cases">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-earth mb-12">
                    Made for Real Life
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {cases.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={cn(
                                "px-6 py-3 rounded-full text-sm font-bold transition-all ring-1 ring-inset",
                                activeTab === idx
                                    ? "bg-brand-earth text-brand-beige ring-brand-earth"
                                    : "bg-transparent text-brand-earth/60 hover:bg-brand-earth/5 ring-brand-earth/10"
                            )}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-2 border-brand-earth/5 transition-all duration-300">
                    {cases.map((item, idx) => (
                        activeTab === idx && (
                            <div key={idx} className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4">
                                <div className="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6 text-brand-teal">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold font-montserrat mb-4 text-brand-earth">{item.title}</h3>
                                <p className="text-xl text-brand-earth/70 max-w-lg mb-8 leading-relaxed">
                                    "{item.desc}"
                                </p>
                                <p className="font-bold text-brand-teal uppercase tracking-widest text-sm">
                                    {item.quote}
                                </p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    )
}
