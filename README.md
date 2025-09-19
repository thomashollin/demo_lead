# Multipage Demo (GitHub Pages + GTM + GA4 + Brevo)

## Seiten
- `index.html` – Home
- `products.html` – Produktübersicht
- `product-a.html`, `product-b.html`, `product-c.html` – einzelne Produktseiten
- `contact.html` – Kontaktformular (Brevo‑Embed‑Platzhalter + Demo‑Form)
- `signup.html` – Newsletter/DOI (Brevo‑Embed‑Platzhalter)

## Aktivierung
1) Dateien in ein öffentliches GitHub‑Repo laden.
2) **Settings → Pages** → Deploy from a branch (`main` / root).
3) Nach ~1–2 Minuten ist die Seite live unter `https://<user>.github.io/<repo>/`.

## Tracking
- **GTM**: Ersetze in jeder Seite die GTM‑Platzhalter (HEAD + noscript). GA4 im GTM konfigurieren.
- **Brevo**: Tracking‑Script in den `<head>` (oder per GTM als Custom HTML). Formular‑Embeds in `contact.html`/`signup.html` einsetzen.

## Test‑Events
- CTA Buttons feuern `cta_click` (via `dataLayer`).
- Sichtzeit‑Event `visible_time_reached` nach 60s.
- Demo‑Kontaktformular pusht `contact_submit_demo`.
