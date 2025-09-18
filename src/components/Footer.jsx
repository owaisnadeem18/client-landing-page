

export function Footer() {
return (
<footer className="border-t  border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="text-sm text-slate-600">
© {new Date().getFullYear()} MassageSpa. All rights reserved.
</div>
<div className="flex items-center gap-3">
<a href="#" className="text-sm hover:underline">
Privacy
</a>
<a href="#" className="text-sm hover:underline">
Terms
</a>
</div>
</div>
</footer>
);
}