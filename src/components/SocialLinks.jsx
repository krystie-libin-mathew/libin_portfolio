import React from 'react'

export default function SocialLinks() {
    return (
        <div className="flex items-center gap-4 text-sm opacity-90">
            <a href="https://github.com/YOUR_GITHUB" target="_blank" className="hover:opacity-80">GitHub</a>
            <a href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank" className="hover:opacity-80">LinkedIn</a>
            <a href="#contact" className="hover:opacity-80">Email</a>
        </div>
    )
}