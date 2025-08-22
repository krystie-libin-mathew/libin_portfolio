import React, { useState } from 'react'
import EducationCard from './EducationCard.jsx'

export default function CertificationsSection() {
  const tabs = ["Education", "Certifications",]
  const [activeTab, setActiveTab] = useState("Education")

  const certificationsData = [
    {
      logo: "/images/csm.png",
      degree: "Certified Scrum Master",
      university: "Scrum Alliance",
      website: "https://www.scrumalliance.org",
      period: "2022",
      badges: ["Agile", "Scrum"]
    },
    {
      logo: "/images/pspo.png",
      degree: "PSPO I",
      university: "Scrum.org",
      website: "https://www.scrum.org",
      period: "2023",
      badges: ["Product Owner", "Agile"]
    }
  ]

  const educationData = [
    {
      logo: "/src/images/golden_gate_university_logo.jpeg",
      degree: "MBA, Business Analytics",
      university: "Golden Gate University",
      website: "https://www.ggu.edu",
      period: "2022-2024",
      gpa: "3.957/4",
      badges: ["Honors", "Data Analytics"]
    },
    {
      logo: "/src/images/karunya_university_logo.png",
      degree: "MCA, Software Engineering",
      university: "Kurukshetra University",
      website: "https://karunya.edu/",
      period: "2011-2014",
      gpa: "8.4/10",
      badges: ["Backend Development", "Database Management"]
    },
    {
      logo: "/src/images/mohanlal_sukhadia_logo.png",
      degree: "BCA",
      university: "Mohanlal Sukhadia University",
      website: "https://mlsu.ac.in/",
      period: "2008-2011",
      gpa: "8.38/10",
      badges: ["Backend Development", "Database Management"]
    }
  ]

  const activeData = activeTab === "Certifications" ? certificationsData : educationData

  return (
    <section id="certifications" className="py-12 px-6 lg:px-24 bg-slate-50 dark:bg-slate-900">
      {/* Heading + Tabs inline */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Education & Certifications</h2>
        <div className="flex gap-2">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                activeTab === tab
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              } transition`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 lg:grid-cols-2 auto-rows-fr">
        {activeData.map((item, idx) => (
          <EducationCard key={idx} {...item} />
        ))}
      </div>
    </section>
  )
}
