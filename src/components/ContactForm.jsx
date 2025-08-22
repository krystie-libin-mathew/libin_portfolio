import React, { useState } from 'react'

/**
 * Two options supported:
 * 1) Formspree (simplest): replace ACTION_URL with your Formspree form action.
 *    - Create form at https://formspree.io/forms, copy the action URL.
 * 2) EmailJS (client-side): uncomment emailjs logic and add your IDs.
 */

export default function ContactForm() {
    const [status, setStatus] = useState('')

    // ---- OPTION 1: FORMSPREE (recommended for Pages) ----
    const FORMSPREE = true
    const ACTION_URL = 'https://formspree.io/f/YOUR_FORMSPREE_ID'

    const handleFormspree = (e) => {
        if (!FORMSPREE) return
        // Let the browser submit normally to Formspree
    }

    // ---- OPTION 2: EMAILJS (uncomment to use) ----
    // import emailjs from '@emailjs/browser'
    // const handleEmailJS = async (e) => {
    //   e.preventDefault()
    //   setStatus('Sending…')
    //   try {
    //     const form = e.currentTarget
    //     const result = await emailjs.sendForm('SERVICE_ID','TEMPLATE_ID', form, { publicKey: 'PUBLIC_KEY' })
    //     if (result.status === 200) setStatus('Sent!')
    //   } catch (err) {
    //     setStatus('Failed — check console')
    //     console.error(err)
    //   }
    // }

    return (
        <form
            action={FORMSPREE ? ACTION_URL : undefined}
            method={FORMSPREE ? 'POST' : undefined}
            onSubmit={handleFormspree}
            className="rounded-2xl border border-slate-200/60 p-5 dark:border-slate-800/60"
        >
            <div className="grid gap-4">
                <div>
                    <label className="mb-1 block text-sm">Your Name</label>
                    <input name="name" className="w-full rounded-xl border border-slate-300/60 bg-white px-3 py-2 text-sm dark:border-slate-700/60 dark:bg-slate-900" placeholder="Jane Doe" required />
                </div>
                <div>
                    <label className="mb-1 block text-sm">Email</label>
                    <input type="email" name="email" className="w-full rounded-xl border border-slate-300/60 bg-white px-3 py-2 text-sm dark:border-slate-700/60 dark:bg-slate-900" placeholder="jane@company.com" required />
                </div>
                <div>
                    <label className="mb-1 block text-sm">Subject</label>
                    <input name="subject" className="w-full rounded-xl border border-slate-300/60 bg-white px-3 py-2 text-sm dark:border-slate-700/60 dark:bg-slate-900" placeholder="Let's collaborate" />
                </div>
                <div>
                    <label className="mb-1 block text-sm">Message</label>
                    <textarea name="message" className="h-28 w-full rounded-xl border border-slate-300/60 bg-white p-3 text-sm dark:border-slate-700/60 dark:bg-slate-900" placeholder="Tell me about your project..." required></textarea>
                </div>
                <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">Send Message</button>
                {status && <p className="text-sm">{status}</p>}
            </div>
        </form>
    )
}
