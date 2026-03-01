'use client'

import { useState, FormEvent } from 'react';
import CountrySelect from '@/components/ui/CountrySelect';
import { COUNTRIES } from '@/lib/country-codes';

export default function ContactForm() {
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
    const phone = phoneNumber ? `${country.dial} ${phoneNumber}` : ''

    if (formData.get('cf_website')) {
      setLoading(false)
      return
    }

    const data = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone,
      message: message.trim(),
      countryCode: country.code,
      dialCode: country.dial,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: `${data.firstName} ${data.lastName}`, ...data }),
      })

      if (!res.ok) throw new Error('Failed to send message')

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
        <div className="w-14 h-14 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-semibold text-charcoal text-lg mb-2 font-display">Message Sent!</h3>
        <p className="text-charcoal/50 text-sm">Thank you for reaching out. We&apos;ll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
      {/* Safari autofill trap: decoy contact fields off-screen */}
      <div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden opacity-0 pointer-events-none" aria-hidden="true">
        <input type="text" name="name" tabIndex={-1} autoComplete="name" />
        <input type="email" name="email" tabIndex={-1} autoComplete="email" />
        <input type="tel" name="phone" tabIndex={-1} autoComplete="tel" />
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="cf_website" tabIndex={-1} autoComplete="off" />
      </div>

      {/* First & Last Name */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <input
            type="text"
            required
            autoComplete="new-password"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            readOnly={!unlockedFields.cf_first_name}
            onFocus={() => unlockField('cf_first_name')}
            onMouseDown={() => unlockField('cf_first_name')}
            onTouchStart={() => unlockField('cf_first_name')}
            placeholder="First name"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none  focus:border-teal transition-all bg-white"
          />
        </div>
        <div>
          <input
            type="text"
            required
            autoComplete="new-password"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            readOnly={!unlockedFields.cf_last_name}
            onFocus={() => unlockField('cf_last_name')}
            onMouseDown={() => unlockField('cf_last_name')}
            onTouchStart={() => unlockField('cf_last_name')}
            placeholder="Last name"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none  focus:border-teal transition-all bg-white"
          />
        </div>
      </div>

      {/* Email */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          readOnly={!unlockedFields.cf_email_address}
          onFocus={() => unlockField('cf_email_address')}
          onMouseDown={() => unlockField('cf_email_address')}
          onTouchStart={() => unlockField('cf_email_address')}
          placeholder="Your email"
          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none  focus:border-teal transition-all bg-white"
        />
      </div>

      {/* Phone with country code */}
<div className="flex gap-2">
  <CountrySelect value={country} onChange={setCountry} />

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
    placeholder="Phone number"
    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-teal transition-all bg-white"
  />
</div>

      {/* Message with character count */}
      <div className="relative">
        <textarea
          rows={4}
          required
          maxLength={MAX_CHARS}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none  focus:border-teal transition-all bg-white resize-none"
        />
        <span className="absolute bottom-3 right-4 text-xs text-charcoal/30">
          {message.length}/{MAX_CHARS}
        </span>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl text-sm">{error}</div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-charcoal hover:bg-charcoal/90 text-white text-sm font-semibold rounded-full transition-all disabled:opacity-60"
      >
        {loading ? 'Sending...' : 'Submit'}
      </button>

      {/* Terms */}
      <p className="text-center text-xs text-charcoal/40 leading-relaxed">
        By contacting us, you agree to our{' '}
        <span className="font-semibold text-charcoal/60 underline underline-offset-2">Terms of Service</span>{' '}
        and{' '}
        <span className="font-semibold text-charcoal/60 underline underline-offset-2">Privacy Policy</span>
      </p>
    </form>
  )
}
