'use client'

import { useState, FormEvent } from 'react';
import CountrySelect from '@/components/ui/CountrySelect';
import { siteConfig } from '@/config/site.config'
import { COUNTRIES } from '@/lib/country-codes';

export default function MembershipForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const [unlockedFields, setUnlockedFields] = useState<Record<string, boolean>>({})
  const [country, setCountry] = useState(COUNTRIES[0]) // Nigeria default
  const MAX_CHARS = 120

  function unlockField(field: string) {
    setUnlockedFields((prev) => (prev[field] ? prev : { ...prev, [field]: true }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)

    if (formData.get('website')) {
      setLoading(false)
      return
    }

    const data = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      state: formData.get('state') as string,
      occupation: formData.get('occupation') as string,
    }

    try {
      const res = await fetch('/api/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const result = await res.json()
        throw new Error(result.error || 'Registration failed')
      }

      setSuccess(true)
      form.reset()
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhoneNumber('')
      setMessage('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="heading-display text-base text-charcoal mb-2">WELCOME TO RIGO!</h3>
        <p className="text-charcoal/40 text-sm">Your membership registration was successful. Check your email for a welcome message.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="fullName" className=" font-display block text-[11px] font-bold text-charcoal/50 uppercase tracking-[0.12em] mb-1.5">First Name</label>
          <input
            type="text"
            name="firstName"
            required
            placeholder="First name"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none  focus:border-teal transition-all bg-white"
          />
        </div>
        <div>
          <label htmlFor="fullName" className=" font-display block text-[11px] font-bold text-charcoal/50 uppercase tracking-[0.12em] mb-1.5">Last Name</label>
          <input
            type="text"
            name="lastName"
            required
            placeholder="Last name"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none  focus:border-teal transition-all bg-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-[11px] font-bold text-charcoal/50 uppercase tracking-[0.12em] mb-1.5">Email Address</label>
        <div className="relative">
          <div className="pointer-events-none absolute left-4 mt-5 -translate-y-1/2 text-charcoal/30">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <input
            type="text"
            required
            inputMode="email"
            pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
            title="Please enter a valid email address"
            autoComplete="new-password"
            autoCorrect="on"
            autoCapitalize="off"
            spellCheck={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly={!unlockedFields.cf_email_address}
            onFocus={() => unlockField('cf_email_address')}
            onMouseDown={() => unlockField('cf_email_address')}
            onTouchStart={() => unlockField('cf_email_address')}
            placeholder="Your email"
            className="w-full pl-11 pr-2 py-2.5 border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none  focus:border-teal transition-all bg-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-[11px] font-bold text-charcoal/50 uppercase tracking-[0.12em] mb-1.5">Phone Number</label>
        <input
          type="text"
          autoComplete="new-password"
          inputMode="tel"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          readOnly={!unlockedFields.cf_phone_number}
          onFocus={() => unlockField('cf_phone_number')}
          onMouseDown={() => unlockField('cf_phone_number')}
          onTouchStart={() => unlockField('cf_phone_number')}
          placeholder="+234"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-teal transition-all bg-white"
        />
      </div>

      <div>
        <label htmlFor="state" className="block text-[11px] font-bold text-charcoal/50 uppercase tracking-[0.12em] mb-1.5">State</label>
        <select
          id="state"
          name="state"
          required
          style={{ height: '40px' }}
          className="w-full !h-[72px] px-5 border border-gray-200 rounded-xl text-base text-charcoal bg-white focus:outline-none focus:border-teal"
        >
          <option value="">Select your state</option>
          {siteConfig.nigerianStates.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="occupation" className="block text-[11px] font-bold text-charcoal/50 uppercase tracking-[0.12em] mb-1.5">Occupation</label>

        <input type="text" id="occupation" name="occupation" required className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-teal transition-all bg-white" placeholder="Student, Engineer, etc." />
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-2.5 rounded-xl text-sm">{error}</div>
      )}

      <button type="submit" disabled={loading} className="w-full mt-4 btn-pill btn-pill-primary disabled:opacity-60 mt-1">
        {loading ? 'Registering...' : 'Register as Member'}
      </button>
    </form>
  )
}
