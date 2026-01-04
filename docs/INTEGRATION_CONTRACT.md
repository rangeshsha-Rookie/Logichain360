# Integration Contract

## Rules
- UI never talks directly to blockchain
- UI never embeds AI logic
- All writes go through backend
- Admin dashboard is read-only
- Driver dashboard is offline-tolerant
- Manager dashboard triggers AI via backend

## Enforcement
- Shared folders require PR and review
- Contract compliance checkbox in PR template
