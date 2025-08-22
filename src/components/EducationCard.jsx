import React from 'react'

export default function EducationCard({ logo, degree, university, website, period, gpa, description }) {
    return (
        <div className="flex gap-4 rounded-2xl border border-slate-200/60 p-5 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition">
            {/* Logo */}
            {logo && (
                <a href={website} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                    <img src={logo} alt={university} className="h-16 w-16 rounded-full object-cover" />
                </a>
            )}

            {/* Info */}
            <div className="flex flex-col justify-between">
                <div>
                    <h4 className="text-lg font-semibold">{degree}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                        <a href={website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {university}
                        </a>
                    </p>
                </div>

                <div className="mt-2 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span>{period}</span>
                    {gpa && <span>• GPA: {gpa}</span>}
                </div>

                {description && <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{description}</p>}
            </div>
        </div>
    )
}
