'use client'

import { useState, FormEvent } from 'react'
import { siteConfig } from '@/config/site.config'

const volunteerRoles = [
  'Program Facilitator',
  'Mentor',
  'Content Creator',
  'Community Organizer',
  'Tech Volunteer',
  'Administrative Support',
]

const availabilityOptions = [
  'Weekdays (9am–5pm)',
  'Weekday evenings',
  'Weekends only',
  'Flexible / Remote',
]

export default function VolunteerForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])

  function toggleRole(role: string) {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    )
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)

    if (formData.get('company')) {
      setLoading(false)
      return
    }

    if (selectedRoles.length === 0) {
      setError('Please select at least one preferred role.')
      setLoading(false)
      return
    }

    const data = {
      fullName: `${formData.get('firstName')} ${formData.get('lastName')}`,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      state: formData.get('state') as string,
      preferredRole: selectedRoles.join(', '),
      availability: formData.get('availability') as string,
      message: formData.get('message') as string,
    }

    try {
      const res = await fetch('/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const result = await res.json()
        throw new Error(result.error || 'Submission failed')
      }

      setSuccess(true)
      form.reset()
      setSelectedRoles([])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-semibold text-charcoal text-xl mb-2">Application Received!</h3>
        <p className="text-charcoal/50 text-sm max-w-sm mx-auto leading-relaxed">
          Thank you for your interest in volunteering with RIGO. Our team will review your application and reach out within 3–5 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {/* First & Last Name */}
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          name="firstName"
          required
          placeholder="First name"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all bg-white"
        />
        <input
          type="text"
          name="lastName"
          required
          placeholder="Last name"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all bg-white"
        />
      </div>

      {/* Email */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <input
          type="email"
          name="email"
          required
          placeholder="Email address"
          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all bg-white"
        />
      </div>

      {/* Phone with country code */}
      <div className="flex gap-2">
        <div className="flex items-center gap-1.5 px-3 py-3 border border-gray-200 rounded-xl text-sm text-charcoal bg-white shrink-0 min-w-[80px]">
          <span className="text-base leading-none">🇳🇬</span>
          <span className="text-charcoal/60 text-sm">+234</span>
        </div>
        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone number"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all bg-white"
        />
      </div>

      {/* State */}
      <select
        name="state"
        required
        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all bg-white appearance-none"
        defaultValue=""
      >
        <option value="" disabled>Select your state</option>
        {siteConfig.nigerianStates.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>

      {/* Preferred Roles (checkboxes) */}
      <div>
        <p className="text-xs font-bold text-charcoal/50 uppercase tracking-wider mb-3">Preferred Roles</p>
        <div className="grid grid-cols-2 gap-2">
          {volunteerRoles.map((role) => {
            const checked = selectedRoles.includes(role)
            return (
              <label
                key={role}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-sm cursor-pointer transition-all duration-200 ${
                  checked
                    ? 'border-teal bg-teal/5 text-teal font-medium'
                    : 'border-gray-200 text-charcoal/60 hover:border-charcoal/20'
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleRole(role)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all ${
                  checked ? 'bg-teal border-teal' : 'border-gray-300'
                }`}>
                  {checked && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-[13px]">{role}</span>
              </label>
            )
          })}
        </div>
      </div>

      {/* Availability */}
      <select
        name="availability"
        required
        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all bg-white appearance-none"
        defaultValue=""
      >
        <option value="" disabled>Your availability</option>
        {availabilityOptions.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>

      {/* Message */}
      <textarea
        name="message"
        rows={3}
        placeholder="Why do you want to volunteer with RIGO?"
        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all bg-white resize-none"
      />

      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-teal hover:bg-teal-dark text-white text-sm font-semibold rounded-full transition-all disabled:opacity-60"
      >
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  )
}
