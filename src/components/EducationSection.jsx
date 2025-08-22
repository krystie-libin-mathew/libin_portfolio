import React from 'react'

import EducationCard from './EducationCard'

export default function EducationSection() {
  const educationData = [
    {
      logo: "/src/images/golden_gate_university_logo.jpeg",
      degree: "MBA, Business Analytics",
      university: "Golden Gate University",
      website: "https://www.ggu.edu",
      period: "2022-2024",
      gpa: "3.957/4",
      description: "Focus on data-driven decision making and analytics.",
      badges: ["Honors", "Data Analytics"]
    },
    {
      logo: "/src/images/karunya_university_logo.png",
      degree: "MCA, Software Engineering",
      university: "Karunya University",
      website: "https://karunya.edu/",
      period: "2011-2014",
      gpa: "8.4/10",
      description: "Major projects in backend systems and database management.",
      badges: ["Backend Development", "Database Management"]
    },
    {
      logo: "/src/images/mohanlal_sukhadia_logo.png",
      degree: "BCA",
      university: "Mohanlal Sukhadia University",
      website: "https://mlsu.ac.in/",
      period: "2008-2011",
      gpa: "8.38/10",
      description: "Major projects in backend systems and database management.",
      badges: ["Backend Development", "Database Management"]
    }
    // Add more entries as needed
  ]

  return (
    <section id="education" className="py-12 px-6 lg:px-24 bg-slate-50 dark:bg-slate-900">
      <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
      <div className="grid gap-6 lg:grid-cols-2 auto-rows-fr">
        {educationData.map((edu, idx) => (
          <EducationCard key={idx} {...edu} />
        ))}
      </div>
    </section>
  )
}
