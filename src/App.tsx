import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import TrustBar from "@/components/sections/TrustBar"
import Comparison from "@/components/sections/Comparison"
import Lifecycle from "@/components/sections/Lifecycle"
import ImpactCalculator from "@/components/sections/ImpactCalculator"
import UseCases from "@/components/sections/UseCases"

function App() {
    return (
        <div className="min-h-screen bg-brand-beige flex flex-col font-lato text-brand-earth selection:bg-brand-teal selection:text-white">
            <Navbar />
            <main className="flex-grow pt-20">
                <Hero />
                <TrustBar />
                <Comparison />
                <Lifecycle />
                <ImpactCalculator />
                <UseCases />
            </main>
            <Footer />
        </div>
    )
}

export default App
