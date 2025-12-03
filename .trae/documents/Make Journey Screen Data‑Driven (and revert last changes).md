## What I’ll Undo
- Remove the dynamic JSON-driven integration added to the Journey screen
- Restore the previous hardcoded `ScreenCard` tabs in `app/journey/page.tsx`
- Delete `components/JourneyDataScreen.tsx` and `public/data/journey-tabs.json`

## Is Constant Updating Possible?
Yes. The Journey screen can read data at runtime and refresh automatically. Options:
- Local JSON file: Edit `public/journey.json`; the screen fetches it with `cache: 'no-store'`. Simple, no external accounts.
- Google Sheets: Use a published CSV/JSON or Sheets API; map rows to tabs. Easy editing from Docs.
- Headless CMS: Sanity/Contentful/Notion; structured content, draft/publish, webhooks.
- GitHub-hosted JSON: Fetch `raw.githubusercontent.com/.../journey.json` to sync from your repo.

## Proposed Implementation (after undo)
1. Create `app/api/journey/route.ts` that returns JSON for tabs from your chosen source
2. Replace the static tabs with a data adapter that fetches from `/api/journey`
3. Use SWR for client-side revalidation (e.g., every 60s) to keep the screen updated
4. Show loading and error fallbacks; gracefully degrade to last known content

## Data Source Choices
- Local JSON (default): `public/data/journey.json` with the same shape as your current content
- Google Sheets: A single sheet with columns `[label, line1, line2, listItem1..N]`
- CMS: Fields `[title, subtitle, resumeHref, tabs[]]` matching today’s UI

## Live-Update Strategies
- Polling: SWR `refreshInterval: 60000` for minute-level updates
- Webhooks: CMS → call `/api/journey/revalidate` to refresh cache instantly
- Realtime push (optional): Pusher/Ably trigger to broadcast changes without polling

## Safety, Caching, and UX
- Sanitize strings; reject HTML
- Add schema validation (zod) in the API
- Cache in memory with a short TTL to reduce rate limits
- Feature flag to fall back to static tabs on failure

## Testing & Rollback
- Unit test the tab mapping function
- Snapshot test a sample JSON
- Keep a static fallback copy to restore instantly

Confirm and I’ll (1) undo the recent integration, and (2) implement your chosen live-update path.