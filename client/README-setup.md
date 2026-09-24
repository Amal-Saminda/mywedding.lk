# MyWedding.Lk — frontend drop-in

## 1. Install the one extra dependency
```bash
npm install lucide-react
```

## 2. Copy files into your existing Next.js (App Router) project
- `tailwind.config.ts` → merge the `theme.extend` block into your existing config
- `app/fonts.ts`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`
- `components/` → whole folder
- `lib/sample-profiles.ts`

## 3. Add images to `/public`
- `public/logo.png` — the heart-couple logo you shared
- `public/banner/slide-1.jpg`, `slide-2.jpg`, `slide-3.jpg` — the banner
  slideshow images (landscape, ~1600×700). Your attached images weren't
  included as files in the chat, so add them here with these names, or pass
  your own array to `<Hero />`'s underlying `<BannerSlideshow slides={...} />`.

## 4. `tsconfig.json` path alias
Make sure the `@/*` alias points at the project root:
```json
"paths": { "@/*": ["./*"] }
```

## What's included
- `Navbar` — Category tab opens a dropdown grouped by profession (Medical,
  Engineering & IT, Education, Business & Government), a mobile menu, a
  notification bell with an unread-count badge (`<Navbar unreadNotifications={3} />`),
  and separate Login / Create Account actions.
- `BannerSlideshow` + `Hero` + `SearchBar` — autoplaying image slideshow
  (arrow controls, dot indicators, pauses-and-resumes on manual navigation)
  with the Sinhala headline and pill-shaped search bar overlaid on top.
- `Avatar` + `AvatarUpload` — profile photo with initials fallback, used on
  cards (`ProfileCard`) and on the edit-profile form (`AvatarUpload`, with
  file-type/size validation and a remove button).
- `ProfileGrid` / `ProfileCard` / `Pagination` — reusable grid for "Top
  Profile" and post listings; cards end with a "Send Invitation ▶" action;
  grids can render Previous/Next + numbered pagination via
  `<ProfileGrid totalPages={3} onPageChange={...} />`.
- `Reviews` — testimonials.
- `Footer` — newsletter signup, four-column link/contact layout, social
  icons, bottom bar.

## Design notes
- Palette pulled from the logo's rose→plum gradient plus an antique-gold
  accent, on a warm ivory canvas — not the default lavender/cream from the
  reference mock.
- Headline type is Bodoni Moda (editorial, invitation-card weight); UI/body
  type is Karla; Sinhala text uses Noto Sans Sinhala.
- Section dividers use a small gold hairline-diamond motif (`.divider-motif`
  in `globals.css`) instead of a plain rule.
