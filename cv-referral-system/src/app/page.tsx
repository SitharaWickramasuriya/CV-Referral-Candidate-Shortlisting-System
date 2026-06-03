const jobIntake = [
  "Job title and department capture",
  "JD upload with AI extraction",
  "Required skills, qualifications, and keywords",
  "Location, salary, and deadline controls",
];

const candidateStages = [
  { label: "Highly Recommended", value: "18" },
  { label: "Recommended", value: "34" },
  { label: "Consider", value: "21" },
  { label: "Not Suitable", value: "9" },
];

const scoreBreakdown = [
  { label: "Skill match", value: "94%" },
  { label: "Experience", value: "88%" },
  { label: "Qualification", value: "91%" },
  { label: "Certification", value: "85%" },
];

const topCandidates = [
  {
    name: "Amina Patel",
    role: "Senior Data Analyst",
    score: "96",
    highlight: "Strong SQL, Python, dashboarding, and healthcare analytics experience.",
    status: "Highly Recommended",
  },
  {
    name: "David Kim",
    role: "ML Engineer",
    score: "91",
    highlight: "Matches the role on model deployment, NLP, and cloud tooling.",
    status: "Recommended",
  },
  {
    name: "Sofia Mensah",
    role: "Product Recruiter",
    score: "87",
    highlight: "Excellent stakeholder management and ATS workflow experience.",
    status: "Recommended",
  },
];

const featureGroups = [
  {
    title: "AI job intake",
    items: ["PDF/DOCX/TXT parsing", "Skills and keyword extraction", "Deadline and location fields"],
  },
  {
    title: "Bulk CV analysis",
    items: ["Drag-and-drop uploads", "Resume parsing and enrichment", "Email and phone extraction"],
  },
  {
    title: "Matching intelligence",
    items: ["Weighted scoring controls", "Ranking and explanations", "Gap analysis and recommendations"],
  },
  {
    title: "Automation layer",
    items: ["Email templates", "Interview scheduling", "Referral tracking and analytics"],
  },
];

const workflow = [
  "Create or upload a job posting",
  "Extract requirements with AI",
  "Bulk upload CVs and referrals",
  "Parse, score, and rank candidates",
  "Review shortlist and send emails",
  "Schedule interviews and track analytics",
];

const roles = ["Recruiter", "Hiring Manager", "Referring Employee", "Administrator"];

const complianceItems = [
  "Role-based access control",
  "Encrypted CV data and secure storage",
  "Audit logs and email tracking",
  "GDPR-aware retention policies",
];

export default function Home() {
  return (
    <main className="min-h-screen text-slate-950">
      <section className="hero-shell relative overflow-hidden">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />

        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-10">
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 text-white/90">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-200/90">AI Recruitment Suite</p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                CV Referral & Candidate Shortlisting System
              </h1>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">Next.js</span>
              <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">OpenAI-ready</span>
              <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">RBAC + Audit logs</span>
            </div>
          </header>

          <div className="grid flex-1 items-start gap-8 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:py-14">
            <div className="space-y-8">
              <div className="max-w-3xl space-y-6">
                <p className="inline-flex rounded-full border border-amber-300/30 bg-amber-200/12 px-4 py-2 text-sm font-medium text-amber-100">
                  Automate job intake, CV parsing, candidate scoring, shortlisting, email communication, and interview workflow.
                </p>
                <div className="space-y-4">
                  <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                    Move from manual screening to an AI-assisted hiring pipeline.
                  </h2>
                  <p className="max-w-2xl text-base leading-7 text-slate-200/90 md:text-lg">
                    Upload job descriptions and bulk CVs, let the system extract qualifications and skills, rank candidates by fit,
                    and keep recruiters, hiring managers, and employees aligned with a single workflow.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {candidateStages.map((stage) => (
                  <article key={stage.label} className="glass-card p-5">
                    <p className="text-sm text-slate-300">{stage.label}</p>
                    <p className="mt-3 text-4xl font-semibold text-white">{stage.value}</p>
                    <p className="mt-2 text-sm text-slate-400">candidates</p>
                  </article>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <article className="glass-card p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-amber-100">Job posting management</p>
                      <h3 className="mt-1 text-xl font-semibold text-white">Intake and extract requirements in one step</h3>
                    </div>
                    <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-200">
                      AI extraction ready
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {jobIntake.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </article>

                <article className="glass-card p-6">
                  <p className="text-sm font-medium text-amber-100">AI score breakdown</p>
                  <div className="mt-5 space-y-4">
                    {scoreBreakdown.map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center justify-between text-sm text-slate-300">
                          <span>{item.label}</span>
                          <span className="font-semibold text-white">{item.value}</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-white/10">
                          <div className="h-2 rounded-full bg-linear-to-r from-amber-300 via-orange-400 to-rose-500" style={{ width: item.value }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </div>

            <aside className="space-y-6">
              <article className="glass-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Candidate ranking</p>
                    <h3 className="text-xl font-semibold text-white">Top shortlisted profiles</h3>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">Live shortlist</span>
                </div>

                <div className="mt-5 space-y-4">
                  {topCandidates.map((candidate, index) => (
                    <div key={candidate.name} className="rounded-3xl border border-white/10 bg-slate-950/30 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-amber-300 to-orange-500 text-sm font-bold text-slate-950">
                              {index + 1}
                            </span>
                            <div>
                              <h4 className="font-semibold text-white">{candidate.name}</h4>
                              <p className="text-sm text-slate-400">{candidate.role}</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-semibold text-white">{candidate.score}</p>
                          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">score</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-slate-300">{candidate.highlight}</p>
                      <div className="mt-4 inline-flex rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-200">
                        {candidate.status}
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="glass-card p-6">
                <p className="text-sm font-medium text-amber-100">Recruitment analytics</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {[
                    ["Total applicants", "428"],
                    ["Shortlisted", "74"],
                    ["Referrals", "63"],
                    ["Avg. time-to-hire", "12d"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{label}</p>
                      <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </article>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-(--surface) px-6 py-16 text-slate-900 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.95fr]">
          <article className="space-y-6">
            <div>
              <p className="section-kicker">Platform capabilities</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Everything needed to run an end-to-end recruitment workflow</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {featureGroups.map((group) => (
                <div key={group.title} className="panel-card p-5">
                  <h4 className="text-lg font-semibold text-slate-950">{group.title}</h4>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-(--accent)" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article className="space-y-6">
            <div className="panel-card p-6">
              <p className="section-kicker">Workflow</p>
              <h4 className="mt-3 text-2xl font-semibold text-slate-950">A simple pipeline from job posting to hire decision</h4>
              <ol className="mt-6 space-y-4">
                {workflow.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-(--accent-soft) font-semibold text-(--accent)">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-slate-700">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="panel-card p-6">
                <p className="section-kicker">User roles</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {roles.map((role) => (
                    <span key={role} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="panel-card p-6">
                <p className="section-kicker">Security</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  {complianceItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
