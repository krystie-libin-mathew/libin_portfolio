import React from 'react'

export default function Section({ id, title, icon, children }) {
    return (
        <section id={id} className="mx-auto max-w-6xl px-4 py-16">
            <div className="mb-6 flex items-center gap-3">
                {icon && (
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900">
                        {icon}
                    </span>
                )}
                <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            </div>
            {children}
        </section>
    )
}
