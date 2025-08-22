import React, { useState } from 'react'

export default function Tabs({ tabs, initial = 0 }) {
    const [active, setActive] = useState(initial)
    return (
        <div>
            <div className="flex flex-wrap gap-2">
                {tabs.map((t, i) => (
                    <button
                        key={t.label}
                        onClick={() => setActive(i)}
                        className={
                            'rounded-xl border px-3 py-1.5 text-sm transition ' +
                            (active === i
                                ? 'border-slate-400 dark:border-slate-600 bg-slate-100 dark:bg-slate-900'
                                : 'border-slate-200 dark:border-slate-800 hover:bg-slate-100/60 dark:hover:bg-slate-900/60')
                        }
                    >
                        {t.label}
                    </button>
                ))}
            </div>
            <div className="mt-4">
                {tabs[active]?.content}
            </div>
        </div>
    )
}
