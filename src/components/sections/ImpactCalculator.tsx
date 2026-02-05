import { useState } from "react"
import { Calculator } from "lucide-react"

export default function ImpactCalculator() {
    const [bottlesPerWeek, setBottlesPerWeek] = useState(5)
    const plasticSavedKv = (bottlesPerWeek * 52 * 0.02).toFixed(1)

    return (
        <section className="py-20 px-4 md:px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-brand-teal rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 p-24 bg-brand-earth/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 space-y-8">
                        <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm">
                            <Calculator className="w-4 h-4" /> Impact Calculator
                        </div>

                        <h2 className="text-3xl md:text-5xl font-montserrat font-bold">
                            See Your Impact
                        </h2>

                        <div className="space-y-12">
                            {/* Output Display */}
                            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-md border border-white/10">
                                <p className="text-6xl md:text-8xl font-bold font-montserrat tracking-tight">
                                    {plasticSavedKv} <span className="text-3xl md:text-5xl opacity-50">kg</span>
                                </p>
                                <p className="text-lg md:text-xl opacity-80 mt-2">of plastic saved per year</p>
                            </div>

                            {/* Input Control */}
                            <div className="max-w-xl mx-auto space-y-4">
                                <label htmlFor="bottle-slider" className="block text-lg font-medium opacity-90">
                                    I drink <span className="font-bold text-2xl mx-1">{bottlesPerWeek}</span> plastic bottles per week
                                </label>
                                <input
                                    type="range"
                                    id="bottle-slider"
                                    min="1"
                                    max="50"
                                    value={bottlesPerWeek}
                                    onChange={(e) => setBottlesPerWeek(parseInt(e.target.value))}
                                    className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                                />
                                <div className="flex justify-between text-xs opacity-50 font-medium px-1">
                                    <span>1 Bottle</span>
                                    <span>50 Bottles</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
