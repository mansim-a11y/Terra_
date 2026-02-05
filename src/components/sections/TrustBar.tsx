import { ShieldCheck, Award, MapPin } from "lucide-react"

export default function TrustBar() {
    const badges = [
        { icon: ShieldCheck, label: "FSSAI Compliant" },
        { icon: Award, label: "100% Biodegradable" },
        { icon: MapPin, label: "Made in India" },
    ]

    return (
        <section className="py-10 border-y border-brand-earth/5 bg-brand-earth/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-70">
                    <p className="text-sm font-bold uppercase tracking-widest text-brand-earth/60">
                        Engineered by Students
                    </p>
                    <div className="h-4 w-px bg-brand-earth/20 hidden md:block" />
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {badges.map((Badge) => (
                            <div key={Badge.label} className="flex items-center gap-2 text-brand-earth">
                                <Badge.icon className="w-5 h-5" />
                                <span className="font-semibold text-sm md:text-base">{Badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
