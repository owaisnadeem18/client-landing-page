import { Button } from "./ui/button";

// Hero Section
export function Hero() {
return (
<section id="home" className="py-20 text-center bg-rose-50" style={{ minHeight: "calc(100vh - 133.5px)" }} >
<h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
Relax, Refresh & Rejuvenate
</h1>
<p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
Experience the art of massage therapy designed to heal your body and calm your mind.
</p>
<div className="mt-6 flex justify-center gap-3">
<Button>Book Appointment</Button>
<a
href="#services"
className="px-4 py-2 border rounded-md text-sm hover:bg-gray-100"
>
View Services
</a>
</div>
</section>
);
}