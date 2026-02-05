import { Trash2, Sprout, X, Check } from "lucide-react"

export default function Comparison() {
    return (
        <section className="py-20 px-4 md:px-6 bg-white/30" id="impact">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-earth">
                        Why Change?
                    </h2>
                    <p className="text-brand-earth/70 max-w-2xl mx-auto">
                        We didn't just change the material. We changed the lifecycle.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Old Way Card */}
                    <div className="group p-8 rounded-3xl bg-white/40 border border-brand-earth/5 hover:border-red-200 transition-colors">
                        <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6">
                            <Trash2 className="w-6 h-6 text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold font-montserrat mb-6 text-brand-earth/80">Standard Plastic</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-brand-earth/70">
                                <X className="w-5 h-5 text-red-400 shrink-0" />
                                400 years to decompose
                            </li>
                            <li className="flex items-center gap-3 text-brand-earth/70">
                                <X className="w-5 h-5 text-red-400 shrink-0" />
                                Microplastics risk
                            </li>
                            <li className="flex items-center gap-3 text-brand-earth/70">
                                <X className="w-5 h-5 text-red-400 shrink-0" />
                                Toxic production waste
                            </li>
                        </ul>
                    </div>

                    {/* Terra Way Card */}
                    <div className="relative p-8 rounded-3xl bg-white border-2 border-brand-teal/20 shadow-xl shadow-brand-teal/5 ring-1 ring-brand-teal/10">
                        <div className="absolute -top-4 right-8 bg-brand-teal text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            The Solution
                        </div>
                        <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mb-6">
                            <Sprout className="w-6 h-6 text-brand-teal" />
                        </div>
                        <h3 className="text-2xl font-bold font-montserrat mb-6 text-brand-earth">The Terra Bottle</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 font-medium text-brand-earth">
                                <Check className="w-5 h-5 text-brand-teal shrink-0" />
                                180 days to decompose
                            </li>
                            <li className="flex items-center gap-3 font-medium text-brand-earth">
                                <Check className="w-5 h-5 text-brand-teal shrink-0" />
                                100% Plant-based
                            </li>
                            <li className="flex items-center gap-3 font-medium text-brand-earth">
                                <Check className="w-5 h-5 text-brand-teal shrink-0" />
                                ₹20 (Same price point)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
