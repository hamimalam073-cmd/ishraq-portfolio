import { useState } from 'react';

const VERTICALS = [
  'Insurance',
  'Home Improvement',
  'SaaS',
  'IT Procurement',
  'Care / Health Tech',
  'Other',
];

export default function EnterpriseForm() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.preventDefault();
      setError('Please fill in your name, work email, and a short message.');
      form.reportValidity();
      return;
    }
    setError(null);
    // Valid form submits natively so Netlify Forms can capture it.
  };

  return (
    <form
      name="enterprise-inquiry"
      method="POST"
      action="/thanks/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="hidden" name="form-name" value="enterprise-inquiry" />
      <p hidden>
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>

      <div className="form-field">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" autoComplete="organization" />
      </div>

      <div className="form-field">
        <label htmlFor="email">Work email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="form-field">
        <label htmlFor="vertical">Campaign vertical</label>
        <select id="vertical" name="vertical" defaultValue="SaaS">
          {VERTICALS.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="message">What are you looking to run?</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Campaign goals, target market, volume, timeline…"
          required
        />
      </div>

      {error && (
        <p role="alert" style={{ color: '#f87171', fontSize: '0.9rem' }}>
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary">
        Send inquiry
      </button>
    </form>
  );
}
