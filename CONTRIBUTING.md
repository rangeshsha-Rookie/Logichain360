# Contributing Guidelines

## Branching
- Always branch from `develop`
- Use format: `feature/<area>-<short-description>`

## Folder Ownership
- Only assigned owners may push to their folders (see CODEOWNERS)
- Shared folders (`components`, `services`, `store`) require PR and review by @rangeshsha-Rookie

## Commit Format
Use conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `chore:` for setup/config changes

## Secrets
- Never commit `.env`
- Use `.env.example` and GitHub Secrets

## Integration Contract
- UI never talks directly to blockchain
- UI never embeds AI logic
- All writes go through backend
- Admin UI is read-only
- Driver UI is offline-tolerant
- Manager UI triggers AI via backend
