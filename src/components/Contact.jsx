import { useState } from 'react';
import { toast } from 'sonner';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact = ({ handleSubmit, formStatus, t }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('yaxtibla1@gmail.com');
      setCopied(true);
      toast.success(t.emailCopied || '¡Copiado!', {
        description: 'yaxtibla1@gmail.com',
      });
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // fallback
    }
  };

  return (
    <section id="contacto" tabIndex={-1} className="section-card md:p-10" aria-labelledby="contacto-heading">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="contacto-heading" className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t.title}</h2>
        <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">{t.description}</p>

        {/* Quick Email Chip */}
        <div className="mb-8 flex justify-center">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-panel px-4 py-2 text-xs font-medium text-ink shadow-xs transition-all hover:border-control hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-muted group-hover:text-ink" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="font-mono text-xs">yaxtibla1@gmail.com</span>
            <span className="ml-1 rounded bg-surface px-1.5 py-0.5 text-[10px] font-semibold text-muted border border-line group-hover:text-ink">
              {copied ? (t.emailCopied || '¡Copiado!') : (t.copyEmail || 'Copiar')}
            </span>
          </button>
        </div>

        <form onSubmit={handleSubmit} aria-label={t.formTitle} aria-busy={formStatus.sending} className="mx-auto max-w-xl space-y-5 rounded-2xl border border-line bg-panel p-5 text-left sm:p-7">
          <div>
            <label htmlFor="name" className="eyebrow mb-2 block text-muted">{t.name}</label>
            <input
              type="text"
              id="name"
              name="from_name"
              autoComplete="name"
              maxLength={80}
              required
              readOnly={formStatus.sending}
              className="w-full rounded-lg border border-control bg-surface px-4 py-3 text-base text-ink placeholder:text-muted"
              placeholder={t.placeholderName}
            />
          </div>
          <div>
            <label htmlFor="email" className="eyebrow mb-2 block text-muted">{t.email}</label>
            <input
              type="email"
              id="email"
              name="from_email"
              autoComplete="email"
              maxLength={100}
              spellCheck={false}
              required
              readOnly={formStatus.sending}
              className="w-full rounded-lg border border-control bg-surface px-4 py-3 text-base text-ink placeholder:text-muted"
              placeholder={t.placeholderEmail}
            />
          </div>
          <div>
            <label htmlFor="message" className="eyebrow mb-2 block text-muted">{t.message}</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={2500}
              required
              readOnly={formStatus.sending}
              className="min-h-32 w-full resize-y rounded-lg border border-control bg-surface px-4 py-3 text-base text-ink placeholder:text-muted"
              placeholder={t.placeholderMessage}
            />
          </div>
          <div aria-live="polite" aria-atomic="true">
            {formStatus.success && <p className="rounded-lg border border-line bg-surface px-4 py-3 text-sm leading-relaxed text-ink">{t.success}</p>}
            {formStatus.rateLimited && <p className="rounded-lg border border-line bg-surface px-4 py-3 text-sm leading-relaxed text-ink">{t.rateLimit || 'Espera unos segundos antes de enviar otro mensaje.'}</p>}
            {formStatus.error && <p className="rounded-lg border border-control bg-surface px-4 py-3 text-sm leading-relaxed text-ink">{t.error}</p>}
          </div>

          {/* Honeypot field for bot protection */}
          <input
            type="text"
            name="_honey_bot"
            tabIndex={-1}
            autoComplete="off"
            className="hidden pointer-events-none opacity-0 absolute -left-[9999px]"
            aria-hidden="true"
          />

          <button type="submit" disabled={formStatus.sending} className="button-primary w-full disabled:cursor-wait disabled:opacity-60">
            {formStatus.sending ? t.sending : t.send}<span aria-hidden="true">→</span>
          </button>
        </form>
        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a href="https://www.linkedin.com/in/yaxche-itzamna-ramirez-garcia-b7556a177" target="_blank" rel="noopener noreferrer" className="text-link"><LinkedinIcon className="h-4 w-4" />{t.linkedin}<span aria-hidden="true">↗</span></a>
          <a href="https://github.com/YaxcheItz" target="_blank" rel="noopener noreferrer" className="text-link"><GithubIcon className="h-4 w-4" />{t.github}<span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
