# Feature: Admin Asset Upload Panel

## Overview
A client-side admin panel that lets the portfolio owner upload and manage their profile photo and resume PDF without redeploying. Assets persist in `localStorage`.

## Access
Navigate to `/?admin=true` to activate. Remove the query param to exit.

## Scope

### Profile Photo
- Upload any image (JPEG, PNG, WebP)
- Max size: 3 MB
- Stored as base64 in `localStorage` key: `portfolio_profile_image`
- Shown in Hero section; falls back to placeholder avatar if not set

### Resume PDF
- Upload a PDF file
- Max size: 8 MB
- Stored as base64 in `localStorage` key: `portfolio_resume`
- "Download CV" button in Hero only renders when a resume is uploaded
- Download filename: `Rohan_Sartho_Resume.pdf`

## Behaviour
| State | Profile Photo | Resume |
|-------|--------------|--------|
| Not uploaded | Placeholder avatar shown | "Download CV" button hidden |
| Uploaded | Photo displayed | "Download CV" visible |

## Files
| File | Role |
|------|------|
| `src/hooks/useAdminAssets.js` | Reads/writes localStorage, exposes upload/clear functions |
| `src/components/AdminPanel.jsx` | Floating UI panel; collapsible |
| `src/App.jsx` | Detects `?admin=true`, mounts panel, passes asset state to Hero |
| `src/components/Hero.jsx` | Consumes `profileImage` and `resumeData` props |

## Constraints
- No backend required — fully static
- Assets are browser-local; uploading on one device does not affect other devices/browsers
- localStorage limit varies by browser (~5–10 MB); oversized files show an inline error

## Future Considerations
- Migrate to IndexedDB for larger file support
- Add password gate for the admin route
- Support uploading project images or references via the same panel
