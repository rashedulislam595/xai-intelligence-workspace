export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-semibold tracking-tight">Xai</a>
        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#flow" className="hover:text-white">Flow</a>
          <a href="#dashboard" className="hover:text-white">Dashboard</a>
          <a href="#wow" className="hover:text-white">Interaction</a>
        </div>
        <a href="#dashboard" className="rounded-full border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/10">
          View Workspace
        </a>
      </nav>
    </header>
  );
}
