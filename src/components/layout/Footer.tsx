import { Facebook, Instagram, Linkedin, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

type FormData = {
    email: string
    isOrganizer: boolean
}

export default function Footer() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log("Form submitted:", data)
        alert("Thanks for joining the waitlist! (Mock)")
    }

    return (
        <footer className="bg-brand-earth text-brand-beige py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

                    {/* Brand & Socials */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="font-montserrat text-3xl font-bold">TERRA</h3>
                            <p className="text-brand-beige/80 max-w-sm">
                                Drinking Water, Returned to Earth.
                                <br />
                                Coming soon to Ahmedabad.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Lead Capture Form */}
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 className="font-montserrat text-xl font-bold mb-2">Join the Waitlist</h4>
                        <p className="text-sm text-brand-beige/60 mb-6">
                            Be the first to know when we launch in your college or office.
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-white/10 border-white/20 text-brand-beige placeholder:text-brand-beige/40 focus-visible:ring-brand-teal"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className="text-xs text-red-400 mt-1">Email is required</span>}
                                </div>
                                <Button type="submit" size="icon" className="shrink-0 bg-brand-teal text-white hover:bg-brand-teal/90">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="organizer"
                                    className="w-4 h-4 rounded border-white/20 bg-white/10 text-brand-teal focus:ring-brand-teal"
                                    {...register("isOrganizer")}
                                />
                                <label htmlFor="organizer" className="text-sm text-brand-beige/80 cursor-pointer select-none">
                                    I am an event organizer interested in bulk orders
                                </label>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-beige/40">
                    <p>© 2024 Terra. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-brand-beige">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-beige">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
