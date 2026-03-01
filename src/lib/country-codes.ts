export type CountryOption = {
  name: string
  code: string // ISO 2-letter
  dial: string
  flag: string
}

// Keep it manageable; you can expand later.
// (You can paste a full list later without changing the component.)
export const COUNTRIES: CountryOption[] = [
  { name: 'Nigeria', code: 'NG', dial: '+234', flag: '🇳🇬' },
  { name: 'Ghana', code: 'GH', dial: '+233', flag: '🇬🇭' },
  { name: 'Kenya', code: 'KE', dial: '+254', flag: '🇰🇪' },
  { name: 'South Africa', code: 'ZA', dial: '+27', flag: '🇿🇦' },
  { name: 'United States', code: 'US', dial: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', code: 'GB', dial: '+44', flag: '🇬🇧' },
  { name: 'Canada', code: 'CA', dial: '+1', flag: '🇨🇦' },
  { name: 'France', code: 'FR', dial: '+33', flag: '🇫🇷' },
  { name: 'Germany', code: 'DE', dial: '+49', flag: '🇩🇪' },
  { name: 'UAE', code: 'AE', dial: '+971', flag: '🇦🇪' },
]