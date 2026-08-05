# Caitlyn workflow inventory — working draft

This draft records the process Caitlyn provided. The classifications and future skill names are proposals for team discussion, not approved automation rules.

## Classification guide

- **Automate** — prepare a reliable first pass or run an objective check.
- **Template** — reuse an approved structure, style, or client setting.
- **Human creative review** — keep Caitlyn in control of taste, story, pacing, and final approval.

Automation should create editable suggestions or previews. It should not publish, replace source footage, or silently make creative decisions final.

## Talking-head editing

**Reported process:** adjust speed; enhance audio; add background music; generate captions; remove long pauses, filler words, and rambling; review and adjust captions; apply auto-adjust or color enhancement; then add final polish such as a title card, logos, and appropriate emojis.

| Task Caitlyn performs | Proposed treatment | Human judgment that must stay | Current / future skill |
|---|---|---|---|
| Adjust speed | Human creative review | Confirm the speaker still sounds natural and on-brand | Future `finish-talking-head` |
| Enhance audio | Automate, then review | Decide whether speech sounds clean and natural | Future `finish-talking-head` |
| Add background music | Human creative review | Choose track, mood, volume, rights, and where music starts or stops | Future `finish-talking-head` |
| Generate captions | Automate | Confirm spoken meaning, names, and timing | Existing [`prepare-captions-handoff`](prepare-captions-handoff/SKILL.md) |
| Remove long pauses, “ums,” “uhs,” and rambling | Automate suggestions, then review | Decide what is intentional, authentic, or necessary for meaning | Existing [`build-transcript-first-cut`](build-transcript-first-cut/SKILL.md) |
| Review and adjust captions | Human creative review | Approve wording, chunking, emphasis, placement, and readability | Existing [`prepare-captions-handoff`](prepare-captions-handoff/SKILL.md) |
| Apply auto-adjust / color enhancement | Template, then review | Approve skin tone, exposure, consistency, and client look | Future `finish-talking-head` |
| Add title card | Template, then review | Choose message, timing, hierarchy, and approved style | Future `finish-talking-head` |
| Add logos | Template | Confirm approved file, placement, size, and usage | Future `finish-talking-head` |
| Add emojis when appropriate | Human creative review | Decide whether emojis suit the client, audience, and moment | Future `finish-talking-head` |

## Montage / recap editing

**Reported process:** auto-cut footage; select clips; review AI recommendations; rearrange or trim clips; choose music; sync cuts to the beat; adjust transitions; add a title; add subtitles or text callouts as needed; and add logos when needed.

| Task Caitlyn performs | Proposed treatment | Human judgment that must stay | Possible future skill |
|---|---|---|---|
| Auto-cut footage | Automate | Confirm scene boundaries and ensure useful moments are not lost | `assemble-montage-recap` |
| Select desired clips | Human creative review | Choose the story, people, moments, and client priorities | `assemble-montage-recap` |
| Review AI recommendations and choose the best option | Human creative review | Accept, reject, or combine recommendations | `assemble-montage-recap` |
| Rearrange or trim clips | Human creative review | Control narrative order, energy, and pacing | `assemble-montage-recap` |
| Choose background music | Human creative review | Choose mood, rights, audience fit, and client fit | `assemble-montage-recap` |
| Sync cuts to the beat | Automate first pass, then review | Decide when story or speech should override the beat | `assemble-montage-recap` |
| Adjust transitions | Template, then review | Avoid distracting effects and approve pacing | `assemble-montage-recap` |
| Add title | Template, then review | Approve copy, hierarchy, timing, and style | `assemble-montage-recap` |
| Add subtitles or text callouts as needed | Human creative review | Decide what needs explanation or emphasis | `assemble-montage-recap` plus existing caption skill |
| Add logos when needed | Template | Confirm whether a logo is needed and use the approved asset correctly | `assemble-montage-recap` |

## Details still needed from the team

Fill these in before turning either proposed workflow into a production skill:

| Decision | Talking head | Montage / recap |
|---|---|---|
| What starts the job? | [Fill in] | [Fill in] |
| Required source files | [Fill in] | [Fill in] |
| Platform / aspect ratio defaults | [Fill in] | [Fill in] |
| Definition of “done” | [Fill in] | [Fill in] |
| Typical turnaround and frequency | [Fill in] | [Fill in] |
| Current editing tools | [Fill in] | [Fill in] |
| Approved music source / licensing rule | [Fill in] | [Fill in] |
| Client style source of truth | [Fill in] | [Fill in] |
| Review owner | [Fill in] | [Fill in] |
| Files Caitlyn must be able to edit | [Fill in] | [Fill in] |
| What must never happen automatically? | [Fill in] | [Fill in] |

## Other Caitlyn workflows to discover

Use this table only for responsibilities not covered above.

| Caitlyn's task | Trigger / input | Finished result | Frequency | Primary treatment | Human judgment that must stay | Possible future skill |
|---|---|---|---|---|---|---|
| [Fill in] | [Fill in] | [Fill in] | [Fill in] | Automate / Template / Human creative review | [Fill in] | [Fill in after discussion] |
