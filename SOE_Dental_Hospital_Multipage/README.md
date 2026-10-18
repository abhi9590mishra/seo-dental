# SOE Dental Hospital & Implant Centre — multi-page website

## Pages
- `index.html` — homepage
- `services.html` — expanded dental service catalogue
- `pricing.html` — indicative Hyderabad private-clinic price comparisons
- `about.html` — care approach
- `patient-guide.html` — patient information and FAQs
- `appointment.html` — appointment request form with success popup after successful Netlify submission
- `appointment-success.html` — fallback success page
- `contact.html` — contact options
- `assets/style.css` — shared responsive styling
- `assets/site.js` — navigation and appointment form behavior

## Local preview
Run from this folder:
```bash
python -m http.server 8000
```
Open http://localhost:8000. On localhost, the appointment form validates fields but deliberately does not claim a real request was sent. Deploy to Netlify to enable form capture.

## Deploy appointment form
This site uses Netlify Forms. Deploy the folder to Netlify with form detection enabled. After the first deploy, verify that the `appointment` form appears in the Netlify dashboard under Forms, and submit a real test request. The success popup appears only after the hosted form endpoint responds successfully. Form notifications/recipient routing should be configured in Netlify. Until notifications are configured and tested, do not assume the clinic team will receive an email automatically.

## Pricing
`pricing.html` displays indicative public-market price ranges gathered from published Hyderabad/India dental price guides. These are NOT confirmed SOE prices. Replace them with clinic-approved pricing before presenting them as the clinic's own charges. If you retain the reference ranges, keep the market-estimate disclaimer and confirm figures periodically.

## Before launch
1. Confirm exact clinic brand name and service availability.
2. Replace placeholder address and hours with verified details.
3. Add approved real clinic/team photography.
4. Add verified dentist names and qualifications only after approval.
5. Configure Netlify form notifications to the intended clinic email.
6. Add canonical URLs, sitemap.xml and the production domain to SEO metadata before submitting to search engines.
7. Review privacy wording and applicable consent requirements.
8. Test all page links and WhatsApp actions on desktop and mobile.

The WhatsApp contact is +91 94936 41068. The site is static and does not use a booking calendar or automatically reserve appointment slots.
