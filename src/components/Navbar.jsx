import React from 'react'
import ThemeToggle from './ThemeToggle.jsx'

const LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
]

export default function Navbar({ dark, setDark }) {
    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-slate-950/70 border-b border-slate-200/60 dark:border-slate-800/60">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <a href="#hero" className="group inline-flex items-center gap-2 font-semibold tracking-tight">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white shadow">LM</span>
                    <span className="text-base">Libin Mathew</span>
                </a>
                <div className="hidden md:flex items-center gap-6 text-sm">
                    {LINKS.map((l) => (
                        <a key={l.href} href={l.href} className="hover:opacity-80 transition-opacity">{l.label}</a>
                    ))}
                    <ThemeToggle dark={dark} setDark={setDark} />
                </div>
                <div className="md:hidden">
                    <ThemeToggle dark={dark} setDark={setDark} />
                </div>
            </nav>
        </header>
    )
}
