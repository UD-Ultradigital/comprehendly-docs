# Comprehendly SDK docs

Public site for <https://docs.comprehendly.nz> (Vercel, Ultradigital team).

Static HTML + a copy of `spec/` from the private core.

```bash
git clone https://github.com/flobo79/comprehendly-docs.git
cd comprehendly-docs
python3 -m http.server 4174
```

Production: Vercel project root = this repo; domain `docs.comprehendly.nz` → A `76.76.21.21` (or CNAME to `cname.vercel-dns.com`).
