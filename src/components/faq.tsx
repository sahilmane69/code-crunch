const questions = [
  ["What is Code Crunch?", "Code Crunch is a student-led technology community in Maharashtra that helps students discover and participate in the wider technology ecosystem."],
  ["Who can join the community?", "Students interested in technology, learning opportunities, workshops, and developer communities can join the Code Crunch WhatsApp community."],
  ["What kinds of opportunities are shared?", "The community shares hackathons, developer programs, technology events, workshops, and AI learning opportunities."],
  ["How can I participate in workshops?", "Join the community to discover current workshop and initiative updates, then follow the participation details shared there."],
  ["Is this relevant to students from rural colleges?", "Yes. Code Crunch connects students from colleges in and around rural areas of Maharashtra with broader technology opportunities."],
] as const;

export function Faq() {
  return <div className="divide-y divide-border border-y border-border">{questions.map(([question, answer], index) => <details key={question} className="group py-5 sm:py-6" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading text-lg font-medium tracking-[-0.025em] text-foreground marker:content-none sm:text-xl">{question}<span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-muted transition-transform group-open:rotate-45 group-open:text-primary-soft" aria-hidden="true">+</span></summary><p className="max-w-2xl pt-4 pr-10 text-sm leading-6 text-muted sm:text-base">{answer}</p></details>)}</div>;
}
