import React from 'react'

export default function ThemeToggle({ dark, setDark }) {
    return (
        <button
            onClick={() => setDark((d) => !d)}
            className="rounded-xl border border-slate-300/60 dark:border-slate-700/60 px-3 py-2 text-sm"
            aria-label="Toggle dark mode"
        >
            {dark ? 'Light' : 'Dark'}
        </button>
    )
}
