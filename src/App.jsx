import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Section from './components/Section.jsx'
import Tabs from './components/Tabs.jsx'
import ContactForm from './components/ContactForm.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import EducationSection from './components/EducationSection.jsx'
import CertificationsSection from './components/CertificationsSection.jsx'

export default function App() {
    const [dark, setDark] = useState(true)
    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
    }, [dark])

    return (
        <div>
            {/* Decorative gradient */}
            <div aria-hidden className="pointer-events-none fixed inset-x-0 top-[-10rem] -z-10 blur-3xl [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
                <div className="mx-auto h-[24rem] max-w-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 opacity-40"></div>
            </div>

            <Navbar dark={dark} setDark={setDark} />

            {/* HERO */}
            <section id="hero" className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
                <div className="grid items-center gap-10 md:grid-cols-2">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <p className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-indigo-400">
                            <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500"></span>
                            Open to Global Roles
                        </p>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Technical Architect & Program Lead</h1>
                        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                            I architect scalable platforms and lead high-impact programs. Focused on resilient systems, business-aligned architecture, and mentoring teams.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">View Projects →</a>
                            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-300/60 px-4 py-2 text-sm dark:border-slate-700/60">Contact Me</a>
                        </div>
                        <div className="mt-6">
                            <SocialLinks />
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="relative">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/60 shadow-xl dark:border-slate-800/60">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 opacity-20"></div>
                            <div className="absolute inset-0 grid place-items-center p-6">
                                <div className="text-center">
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white shadow-lg">
                                        <span className="text-2xl font-bold">LM</span>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">Building resilient platforms for millions of users</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ABOUT */}
            <Section id="about" title="About Me">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="md:col-span-2 space-y-4">
                        <p className="text-slate-700 dark:text-slate-300">
                            From backend debugging to architecting digital ecosystems, I drive Abu Dhabi's TAMM platform transformation (600+ citizen services) while mentoring 30+ squads and aligning roadmaps to measurable outcomes.
                        </p>
                        <ul className="grid gap-3 sm:grid-cols-2">
                            {["Agile leadership across 30+ squads", "Cloud-native, microservices, event-driven", "Data-driven roadmaps & KPIs", "Security, compliance, reliability by design"].map((p) => (
                                <li key={p} className="flex items-start gap-2 rounded-xl border border-slate-200/60 p-3 text-sm dark:border-slate-800/60 bg-indigo-500/10">
                                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500"></span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-200/60 p-5 dark:border-slate-800/60 bg-indigo-500/10">
                        <h4 className="mb-2 font-semibold">Quick Info</h4>
                        <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                            <p>📍 Abu Dhabi, UAE</p>
                            <p>✉️ you@example.com</p>
                            <p>📞 +971-XX-XXXX-XXX</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* SKILLS */}
            <Section id="skills" title="Skills & Tech Stack">
                <div className="grid gap-4 md:grid-cols-3">
                    {[
                        { title: 'Frontend', items: ['React', 'Tailwind', 'TypeScript', 'Framer Motion'] },
                        { title: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Microservices'] },
                        { title: 'Tools', items: ['Docker', 'Kubernetes', 'JIRA', 'Git', 'CI/CD'] }
                    ].map((g) => (
                        <div key={g.title} className="rounded-2xl border border-slate-200/60 p-5 dark:border-slate-800/60">
                            <h4 className="font-semibold">{g.title}</h4>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {g.items.map((i) => (
                                    <span key={i} className="rounded-full border border-slate-200/60 px-2 py-0.5 text-xs dark:border-slate-800/60 bg-indigo-500/10">{i}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* EXPERIENCE with tabs */}
            <Section id="experience" title="Experience">
                <Tabs
                    tabs={[
                        {
                            label: 'TAMM / DGE Abu Dhabi',
                            content: (
                                <div className="rounded-2xl border border-slate-200/60 p-5 dark:border-slate-800/60">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <div>
                                            <h4 className="text-lg font-semibold leading-tight">Technical Architect & Program Lead</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-300">2022 — Present</p>
                                        </div>
                                        <span className="inline-flex items-center rounded-full bg-indigo-500/15 px-3 py-1 text-xs text-indigo-300">Public Sector • 600+ services</span>
                                    </div>
                                    <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                        <li>• Led architecture & delivery for UAE citizen services platform (600+ services)</li>
                                        <li>• Mentored 30+ squads; improved lead time & deployment frequency</li>
                                        <li>• Event-driven design for reliability & cost optimization</li>
                                    </ul>
                                </div>
                            ),
                        },
                        {
                            label: 'KPMG',
                            content: (
                                <div className="rounded-2xl border border-slate-200/60 p-5 dark:border-slate-800/60">
                                    <h4 className="text-lg font-semibold leading-tight">Manager — Digital & Customer Transformation</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">2019 — 2022</p>
                                    <ul className="mt-3 space-y-2 text-sm">
                                        <li>• Solution architecture for omni-channel journeys</li>
                                        <li>• Introduced data-led KPIs to prioritize backlog</li>
                                    </ul>
                                </div>
                            ),
                        },
                        {
                            label: 'Earlier Roles',
                            content: (
                                <div className="rounded-2xl border border-slate-200/60 p-5 dark:border-slate-800/60">
                                    <ul className="space-y-2 text-sm">
                                        <li>• Xebia — Lead Consultant</li>
                                        <li>• Utthunga — Software Engineer</li>
                                        <li>• Edgeverve (Infosys) — Technology Analyst</li>
                                        <li>• Infosys — Systems Engineer</li>
                                    </ul>
                                </div>
                            ),
                        },
                    ]}
                />
            </Section>

            {/* PROJECTS with tabs by category */}
            <Section id="projects" title="Featured Projects">
                <Tabs
                    tabs={[
                        {
                            label: 'Platforms',
                            content: (
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {[
                                        { title: 'Citizen Services Platform', desc: 'Unified 600+ services using micro frontends & event-driven architecture.', tags: ['React', 'Node', 'Kafka'] },
                                        { title: 'Scalable AuthN/Z', desc: 'SSO, RBAC, policy enforcement at scale.', tags: ['Security', 'SSO', 'IAM'] },
                                        { title: 'Data-driven Roadmap', desc: 'Telemetry + KPIs to prioritize deliveries & measure impact.', tags: ['Analytics', 'DX', 'Product'] },
                                    ].map((p) => (
                                        <a key={p.title} href="#" className="group relative overflow-hidden rounded-2xl border border-slate-200/60 p-5 shadow-sm transition dark:border-slate-800/60 hover:shadow-lg">
                                            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 opacity-15 blur-2xl"></div>
                                            <h4 className="text-lg font-semibold">{p.title}</h4>
                                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {p.tags.map((t) => (
                                                    <span key={t} className="rounded-full border border-slate-200/60 px-2 py-0.5 text-xs dark:border-slate-800/60 bg-indigo-500/10">{t}</span>
                                                ))}
                                            </div>
                                            <div className="mt-4 inline-flex items-center gap-1 text-sm opacity-80 group-hover:opacity-100">View case study →</div>
                                        </a>
                                    ))}
                                </div>
                            )
                        },
                        {
                            label: 'Tools & Utilities',
                            content: (
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {[
                                        { title: 'Release Insights', desc: 'Release metrics dashboard: DORA, lead time, change fail rate.', tags: ['Node', 'React', 'Chart'] },
                                        { title: 'Dev Portal POC', desc: 'Service catalog & templates for internal squads.', tags: ['Backstage', 'K8s'] },
                                    ].map((p) => (
                                        <div key={p.title} className="rounded-2xl border border-slate-200/60 p-5 dark:border-slate-800/60">
                                            <h4 className="text-lg font-semibold">{p.title}</h4>
                                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {p.tags.map((t) => (
                                                    <span key={t} className="rounded-full border border-slate-200/60 px-2 py-0.5 text-xs dark:border-slate-800/60 bg-indigo-500/10">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    ]}
                />
            </Section>

            {/* EDUCATION */}
            {/* <Section id="education" title="Education & Certifications">
                <div className="grid gap-4 lg:grid-cols-2">
                    {[
                        { title: 'MBA, Business Analytics', org: 'Golden Gate University', period: '2021' },
                        { title: 'MCA, Software Engineering', org: 'Kurukshetra University', period: '2014' },
                        { title: 'CSM, CSPO; PSM I/II; PSPO I', org: 'Scrum Alliance / Scrum.org', period: '2018–2024' }
                    ].map((e) => (
                        <div key={e.title} className="rounded-2xl border border-slate-200/60 p-5 dark:border-slate-800/60">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-semibold">{e.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">{e.org}</p>
                                </div>
                                <span className="inline-flex items-center rounded-full bg-indigo-500/15 px-3 py-1 text-xs text-indigo-300">{e.period}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Section> */}

            {/* <EducationSection /> */}
            <CertificationsSection />

            {/* <Section id="education" title="Education & Certifications">
                <div className="grid gap-4 lg:grid-cols-2">
                    <EducationCard
                        logo="/src/images/golden_gate_university_logo.jpeg"
                        degree="MBA, Business Analytics"
                        university="Golden Gate University"
                        website="https://www.ggu.edu"
                        period="2022-2024"
                        gpa="3.957/4"
                        description=""
                    />
                    <EducationCard
                        logo="/src/images/karunya_university_logo.png"
                        degree="MCA, Software Engineering"
                        university="Karunya University"
                        website=
                        period="2011-2014"
                        gpa="8.4/10"
                        description=""
                    />
                    <EducationCard
                        logo="/src/images/mohanlal_sukhadia_logo.png"
                        degree="BCA"
                        university="Mohanlal Sukhadia University"
                        website="https://mlsu.ac.in/"
                        period="2008-2011"
                        gpa="8.38/10"
                        description=""
                    />
                </div>
            </Section> */}

            {/* CONTACT */}
            <Section id="contact" title="Contact">
                <div className="grid gap-8 md:grid-cols-2">
                    <ContactForm />
                    <div className="rounded-2xl border border-slate-200/60 p-5 dark:border-slate-800/60 bg-indigo-500/10">
                        <h4 className="mb-3 font-semibold">Prefer direct contact?</h4>
                        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                            <p>✉️ you@example.com</p>
                            <p>📞 +971-XX-XXXX-XXX</p>
                            <p>📍 Abu Dhabi, UAE</p>
                        </div>
                        <div className="mt-4">
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </Section>

            {/* FOOTER */}
            <footer className="mx-auto mt-16 max-w-6xl px-4 pb-10">
                <div className="rounded-2xl border border-slate-200/60 p-5 text-sm dark:border-slate-800/60">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <p className="text-center sm:text-left">© {new Date().getFullYear()} Libin Mathew. All rights reserved.</p>
                        <div className="flex items-center gap-4">
                            <a href="#about" className="hover:opacity-80">About</a>
                            <a href="#projects" className="hover:opacity-80">Projects</a>
                            <a href="#contact" className="hover:opacity-80">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
