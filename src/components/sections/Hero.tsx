import { ArrowRight, Leaf } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import heroBottle from "@/assets/hero-bottle-user.jpg"

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-12 md:pt-24 pb-20 md:pb-32 px-4 md:px-6">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-bold tracking-wide uppercase">
                            <Leaf className="w-4 h-4" />
                            <span>Coming Soon to Ahmedabad</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-brand-earth leading-[1.1]">
                                Guilt-Free <br />
                                <span className="text-brand-teal">Hydration.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-brand-earth/80 font-lato max-w-lg leading-relaxed">
                                The durability of plastic. The price of plastic.
                                <br className="hidden md:block" />
                                But it returns to the earth when you're done.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                            <Input
                                placeholder="Enter email for early access"
                                className="bg-white/50 border-brand-earth/20"
                            />
                            <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white shrink-0">
                                Join Waitlist
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-brand-earth/60 font-medium">
                            <span className="flex items-center gap-1">
                                <ArrowRight className="w-4 h-4 text-brand-teal" /> 180-Day Decomposition
                            </span>
                            <span className="flex items-center gap-1">
                                <ArrowRight className="w-4 h-4 text-brand-teal" /> ₹20 Price Point
                            </span>
                        </div>
                    </div>

                    {/* Visual Asset */}
                    <div className="relative aspect-square md:aspect-[4/3] w-full animate-in fade-in zoom-in duration-1000 delay-200">
                        {/* Main Image Placeholder */}
                        {/* Main Image */}
                        <div className="absolute inset-0 bg-brand-earth/5 rounded-3xl border-2 border-brand-earth/10 flex items-center justify-center overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl" />
                            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl" />

                            <img
                                src={heroBottle}
                                alt="Terra Biodegradable Bottle on Soil"
                                className="relative z-10 w-full h-full object-cover mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-brand-earth/5 animate-bounce-slow z-20">
                            <div className="flex items-center gap-3">
                                <div className="bg-brand-teal/10 p-2 rounded-full">
                                    <Leaf className="w-6 h-6 text-brand-teal" />
                                </div>
                                <div>
                                    <p className="text-xs text-brand-earth/50 font-bold uppercase tracking-wider">Material</p>
                                    <p className="text-brand-earth font-bold">100% Plant Based</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
