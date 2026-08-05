---
name: plan-video-session
description: Collect the minimum marketing intake for a source video and create a plain-language session plan in this repository's client/date structure. Use when a teammate asks to start, scope, organize, or prepare a new video-production session.
---

# Plan a video session

## Protect existing work

- Treat source media and existing files under `edit/` as read-only.
- Never overwrite a session. If the intended client/date folder already contains work, ask whether to use it or create a clearly named new session.
- Do not install tools, download brand assets, or begin rendering during intake.

## Gather only the required intake

Find answers in the request, the source file, and existing client notes before asking questions. Ask for only the missing items, grouped into one short message:

1. Client name.
2. Platform and aspect ratio, such as LinkedIn 1:1, YouTube 16:9, or Reels 9:16.
3. Desired outcome: what the viewer should understand, feel, or do.
4. Reference caption style: a link, example file, or a plain description. Accept “no reference yet.”
5. Required brand assets: logo, fonts, colors, music, product shots, or “none.”
6. Review owner: the one person responsible for approving the cut.

Do not ask for Caitlyn's broader responsibilities. Record optional details only when the teammate volunteers them.

## Create the session plan

Use the existing pattern:

```text
<client>/<M.D.YY>/
├── <source-video>              original; do not alter
└── edit/
    └── session-plan.md
```

Reuse client-level `brand.md` and `style.json` when present; do not copy or silently change them. Create only the folders needed for the session. If no client slug exists, use a short lowercase hyphenated name and show it to the teammate.

Write `edit/session-plan.md` with:

```markdown
# Video session plan

- Client:
- Session date:
- Source video:
- Platform / aspect ratio:
- Desired outcome:
- Caption reference:
- Required brand assets:
- Review owner:
- Existing client guidance consulted:

## Planned deliverables

- Word-level transcript JSON
- Reversible `edl.json`
- Clean CapCut-ready base cut
- Validated `master.srt`
- Optional caption preview
- Review notes / open decisions

## Open items

- [List only unresolved items, or write “None.”]
```

Use paths relative to the repository. Never claim an asset or decision exists unless it was provided or found.

## Confirm the plan

Summarize the folder, source, intended deliverables, review owner, and unresolved items. Stop before transcription if a source video, desired outcome, or review owner is still missing.
