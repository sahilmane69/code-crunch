import Image from "next/image";
import TechText from "@/components/TechText";
import { Faq } from "@/components/faq";
import { ArrowUpRight } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { SiteMotion } from "@/components/site-motion";

const whatsappUrl = "https://chat.whatsapp.com/IYPgE60zCrt3O7h5z0CPzN?mode=gi_t";
const linkedInUrl = "https://www.linkedin.com/company/code-crunch-28/";
const organizerUrl = "https://www.linkedin.com/in/govind-panchal/";

const initiatives = [
  ["01", "Find the right signal", "Hackathons, developer programs, technology events, workshops, and AI learning opportunities—gathered for students to explore."],
  ["02", "Learn in public", "Community initiatives create practical ways to discuss technology, exchange ideas, and stay close to what is changing."],
  ["03", "Bridge the distance", "Code Crunch connects students around rural Maharashtra with the broader technology ecosystem."],
];

export default function Home() {
  return (
    <main id="top" className="relative isolate overflow-hidden bg-background">
      <SiteMotion>
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[80] border-[10px] border-black sm:border-[14px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[78rem] overflow-hidden" aria-hidden="true">
          <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_52%_28%_at_50%_17%,rgba(139,92,246,0.16),transparent_70%)]" />
        </div>
        <Navbar />

      <section className="mx-auto max-w-[1440px] px-0 pt-0 sm:px-0">
        <div className="hero-canvas relative overflow-hidden rounded-b-[2rem] px-6 pb-0 pt-36 sm:rounded-b-[2.5rem] sm:px-10 sm:pt-40 lg:px-16 lg:pt-44">
          <div className="hero-artwork pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="hero-flow hero-flow-one" />
            <div className="hero-flow hero-flow-two" />
            <div className="hero-flow hero-flow-three" />
            <div className="hero-raster" />
            <div className="hero-contrast" />
          </div>
          <div data-reveal="hero" className="relative mx-auto max-w-4xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary-soft"><span className="h-1.5 w-1.5 rounded-full bg-primary-bright" /> Maharashtra · India</p>
            <div className="hero-tech-headline mt-7">
              <h1 className="sr-only">Bridging the gap from campus to industry.</h1>
              <div aria-hidden="true" className="hero-tech-stack">
                {["Bridging the gap", "from campus to", "industry."].map((line) => (
                  <div key={line} className="hero-tech-row">
                    <TechText
                      text={line}
                      fontWeight={600}
                      fontSize={150}
                      reveal="letter"
                      dashLength={4}
                      dashGap={2}
                      specks={15}
                      intro="none"
                      introDuration={2}
                      clickKick
                      guides={false}
                      fontFamily=""
                      letterSpacing={-0.05}
                      accentColor="currentColor"
                      reach={200}
                      softness={0.7}
                      lineStyle="dashed"
                      strokeWidth={1.5}
                      speed={1}
                      bounce={0.4}
                      selection
                      labels
                      color="currentColor"
                      align="center"
                      draggable
                      sweep
                    />
                  </div>
                ))}
              </div>
            </div>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">Code Crunch helps students discover hackathons, developer programs, technology events, workshops, and AI opportunities worth showing up for.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" style={{ color: "#100b18" }} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-foreground px-5 text-sm font-medium transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Join the community <ArrowUpRight className="h-4 w-4" /></a>
              <a href="#activities" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-black/25 px-5 text-sm font-medium text-foreground transition-colors hover:bg-black/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Explore our work <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div data-reveal="hero" className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-t-[1.5rem] bg-[#0a0a0d] p-3 shadow-[0_-20px_80px_rgba(0,0,0,0.3)] sm:mt-20 sm:rounded-t-[2rem] sm:p-5">
            <div className="rounded-[1rem] bg-[#111116] p-4 sm:p-6">
              <div className="flex items-center justify-between pb-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Code Crunch signal</span><span>Pune · Maharashtra</span></div>
              <div className="grid divide-y divide-white/[0.08] pt-3 sm:grid-cols-3 sm:divide-x sm:divide-y-0">{["Hackathons & programs", "Technology & AI", "Workshops & initiatives"].map((label, index) => <div key={label} className="px-1 py-5 text-left sm:px-5 sm:first:pl-1"><span className="font-mono text-xs text-primary-soft">0{index + 1}</span><p className="mt-7 font-heading text-lg leading-5 tracking-[-0.04em] text-foreground">{label}</p></div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="activities" data-reveal="section" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20"><div><p className="eyebrow">01 / Community activity</p><h2 className="section-title mt-5">Keep opportunity<br />within <em>reach.</em></h2></div><div className="pt-2"><p className="max-w-xl text-lg leading-8 text-muted">The community is designed to make credible technology opportunities easier to find, understand, and act on—without students having to search alone.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary-soft transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Open the WhatsApp community <ArrowUpRight className="h-4 w-4" /></a></div></div>
        <div className="mt-14 grid overflow-hidden rounded-[1.75rem] bg-surface lg:grid-cols-[1.3fr_0.7fr]"><div className="relative min-h-80 p-7 sm:p-10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.26),transparent_32%),linear-gradient(135deg,#17131f,#0e0e12)]" /><div className="relative"><p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary-soft">Documented opportunity archive</p><h3 className="mt-5 max-w-md font-heading text-3xl tracking-[-0.055em] text-foreground sm:text-4xl">Real community posts deserve real source material.</h3><p className="mt-5 max-w-lg leading-7 text-muted">Add authentic announcement captures, event posters, and community activity screenshots here as they become available.</p></div></div><div className="p-7 lg:pl-10 sm:p-10"><p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">Asset checklist</p><ul className="mt-7 grid gap-5 text-sm text-foreground">{["Opportunity announcements", "Event and workshop screenshots", "Community activity captures"].map((item) => <li key={item} className="flex gap-3"><span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary-soft">+</span>{item}</li>)}</ul><p className="mt-10 pt-5 text-sm leading-6 text-muted">No unrelated stock imagery has been used in place of community documentation.</p></div></div>
      </section>

      <section id="initiatives" data-reveal="section" className="scroll-mt-28 bg-[#0e0d13]"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"><p className="eyebrow">02 / What we unlock</p><h2 className="section-title mt-5 max-w-3xl">A clearer way to<br /><em>enter technology.</em></h2><div className="mt-16 divide-y divide-white/10">{initiatives.map(([number, title, copy]) => <article key={number} className="grid gap-5 py-7 sm:grid-cols-[100px_1fr_1.2fr] sm:gap-8 sm:py-10"><span className="font-mono text-xs text-primary-soft">{number}</span><h3 className="font-heading text-2xl tracking-[-0.045em] text-foreground sm:text-3xl">{title}</h3><p className="max-w-lg leading-7 text-muted">{copy}</p></article>)}</div></div></section>

      <section id="impact" data-reveal="section" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32"><div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#15111e,#111116_55%,#171220)] p-7 sm:rounded-[2rem] sm:p-12 lg:p-16"><p className="eyebrow">03 / Community impact</p><div className="mt-12 grid divide-y divide-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">{[["500+", "students reached"], ["100+", "technology opportunities shared"], ["3", "colleges connected in and around rural Maharashtra"]].map(([metric, label]) => <div key={metric} className="py-7 first:pt-0 lg:px-9 lg:py-0 lg:first:pl-0"><p className="font-heading text-6xl tracking-[-0.07em] text-primary-soft sm:text-7xl">{metric}</p><p className="mt-4 max-w-52 text-sm leading-6 text-muted">{label}</p></div>)}</div></div></section>

      <section id="workshops" data-reveal="section" className="scroll-mt-28 bg-surface-secondary"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">04 / Initiatives</p><h2 className="section-title mt-5">Make room for<br /><em>curiosity.</em></h2></div><p className="max-w-xl self-end text-lg leading-8 text-muted">Community initiatives create focused spaces for students to explore ideas and participate in technology conversations.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2"><article className="overflow-hidden rounded-[1.5rem] bg-background"><div className="relative aspect-[4/3]"><Image src="/images/code-crunch-event-workshop.jpeg" alt="Students taking part in a Code Crunch learning session" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div><div className="p-6 sm:p-8"><span className="font-mono text-xs text-primary-soft">01 / In person</span><h3 className="mt-5 font-heading text-3xl tracking-[-0.05em] text-foreground">A room full of curiosity.</h3><p className="mt-4 max-w-sm text-sm leading-6 text-muted">Students gathered with their laptops for a practical Code Crunch learning session.</p></div></article><article className="overflow-hidden rounded-[1.5rem] bg-background"><div className="relative aspect-[4/3]"><Image src="/images/code-crunch-event-session.webp" alt="Code Crunch presentation shared during a live online session" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div><div className="p-6 sm:p-8"><span className="font-mono text-xs text-primary-soft">02 / Live session</span><h3 className="mt-5 font-heading text-3xl tracking-[-0.05em] text-foreground">Ideas, shared live.</h3><p className="mt-4 max-w-sm text-sm leading-6 text-muted">A community presentation brought workshop guidance into the conversation in real time.</p></div></article></div></div></section>

      <section id="stories" data-reveal="section" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow">05 / Community highlights</p><h2 className="section-title mt-5">Momentum is<br /><em>shared.</em></h2></div><div className="border-l border-primary pl-6 sm:pl-10"><p className="font-heading text-3xl leading-[1.08] tracking-[-0.055em] text-foreground sm:text-5xl">“More students can see a path into technology when opportunities are shared openly and close to campus.”</p><p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-muted">Code Crunch · Pune, Maharashtra</p><p className="mt-8 max-w-2xl leading-7 text-muted">This section replaces unverified testimonials with documented community context: students reached, opportunities shared, and colleges connected.</p></div></div></section>

      <section id="participate" data-reveal="section" className="scroll-mt-28 bg-[#0e0d13]"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><p className="eyebrow">06 / How to participate</p><h2 className="section-title mt-5">From seeing it<br />to <em>doing it.</em></h2></div><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary-soft hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Join Code Crunch <ArrowUpRight className="h-4 w-4" /></a></div><ol className="mt-14 grid gap-4 md:grid-cols-3">{[["01", "Join the Code Crunch WhatsApp community."], ["02", "Discover relevant opportunities and initiatives."], ["03", "Participate, learn, and explore the tech ecosystem."]].map(([number, copy]) => <li key={number} className="rounded-[1.25rem] bg-background p-6"><span className="font-mono text-xs text-primary-soft">{number}</span><p className="mt-14 max-w-56 font-heading text-2xl leading-7 tracking-[-0.04em] text-foreground">{copy}</p></li>)}</ol></div></section>

      <section id="faq" data-reveal="section" className="mx-auto max-w-5xl scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32"><div className="text-center"><p className="eyebrow">07 / FAQ</p><h2 className="section-title mt-5">Everything you<br /><em>need to know.</em></h2><p className="mx-auto mt-6 max-w-xl leading-7 text-muted">A few clear answers before you join the community.</p></div><div className="mt-14"><Faq /></div></section>

      <section data-reveal="section" className="mx-auto max-w-[1440px] px-0 pb-0 sm:px-0 sm:pb-0"><div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(ellipse_70%_80%_at_70%_0%,rgba(139,92,246,0.42),transparent_68%),#161020] px-6 py-20 text-center sm:rounded-[2.5rem] sm:px-10 sm:py-28"><p className="eyebrow text-primary-soft">Let’s go further</p><h2 className="mx-auto mt-5 max-w-4xl font-heading text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.91] tracking-[-0.07em] text-foreground">The next opportunity could be the one that changes your direction.</h2><p className="mx-auto mt-7 max-w-xl leading-7 text-muted">Join a student community that keeps the wider technology ecosystem within reach.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" style={{ color: "#100b18" }} className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-xl bg-foreground px-5 text-sm font-medium transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Join the community <ArrowUpRight className="h-4 w-4" /></a></div></section>

      <footer data-reveal="section" className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20"><div className="grid gap-12 border-b border-border pb-12 sm:grid-cols-[1.4fr_0.7fr_0.7fr]"><div><p className="font-heading text-2xl font-semibold tracking-[-0.05em] text-foreground">Code Crunch</p><p className="mt-4 max-w-sm text-sm leading-6 text-muted">Bridging the gap from campus to industry for students in Maharashtra.</p></div><div><p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">Explore</p><nav className="mt-4 grid gap-2 text-sm"><a href="#activities">Opportunities</a><a href="#initiatives">Initiatives</a><a href="#impact">Impact</a><a href="#faq">FAQ</a></nav></div><div><p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">Connect</p><nav className="mt-4 grid gap-2 text-sm"><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp community</a><a href={linkedInUrl} target="_blank" rel="noreferrer">Community LinkedIn</a><a href={organizerUrl} target="_blank" rel="noreferrer">Govind Panchal</a></nav></div></div><div className="flex flex-col justify-between gap-3 py-6 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted sm:flex-row"><span>© 2026 Code Crunch</span><span>Organized by Govind Panchal · Pune, Maharashtra</span></div></footer>
      </SiteMotion>
    </main>
  );
}
