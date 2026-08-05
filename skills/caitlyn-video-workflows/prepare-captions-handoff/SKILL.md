---
name: prepare-captions-handoff
description: Generate and validate SRT captions, optionally create a Remotion caption preview, and package a clean editable marketing handoff. Use when a base edit needs captions, caption quality review, a styled preview, or delivery to CapCut and a marketing teammate.
---

# Prepare captions and handoff

## Preserve the editable base

- Use the approved clean base cut and its EDL as inputs.
- Never burn captions, logos, music, or effects into `base.mp4`.
- Keep `master.srt`, brand assets, and any preview separate so marketing can change them later.
- Never overwrite existing outputs without approval; use a descriptive version suffix.

## Generate `master.srt`

Map transcript words through the EDL into base-cut time. Create readable caption chunks that match the reference style and platform. Keep exact spoken meaning, fix obvious transcription errors only when the audio confirms them, and flag uncertain names.

Use valid SRT blocks with sequential numbers and `HH:MM:SS,mmm --> HH:MM:SS,mmm` timecodes. Keep cues in time order, with positive duration and no unintended overlaps. Do not put font, color, or placement instructions inside SRT; keep styling editable in client notes or renderer settings.

## Validate captions

Check the complete file for:

- valid numbering and time format;
- cue times within the base video's duration;
- no missing or duplicated spoken phrases after cuts;
- readable line length and pacing;
- punctuation, names, and brand terms;
- caption placement inside the platform safe zone in a visual preview.

Listen and watch at the opening, closing, every edit boundary, and several middle sections. Record unresolved wording or style decisions for the review owner.

## Create an optional Remotion preview

Look for a working repository-local Remotion caption renderer. Use it only when its own instructions, command, and required inputs are present and it can run without installing dependencies or changing the renderer. Treat the renderer as optional and possibly under development.

When available, render a review-only caption preview with the session's `master.srt` and client style. Save it under the session's `edit/` area with “preview” in the name. Verify representative frames and platform safe zones.

When unavailable or failing, do not block the handoff. Deliver the clean base plus validated SRT and state that a styled preview remains pending. Never substitute a caption-burned preview for the clean base.

## Package the marketing handoff

Keep these items together in the session:

```text
edit/
├── base.mp4                 clean CapCut-ready edit
├── edl.json                 reversible source decisions
├── master.srt               editable captions
├── transcripts/             word-level source transcript
├── <caption-preview>.mp4    optional review copy
└── verify/                  optional representative check frames
```

Point to client-level `brand.md`, `style.json`, and original brand assets; do not duplicate or flatten them into the base video. Include a short handoff note with:

- what is ready;
- which file to import into CapCut;
- which SRT to import;
- platform and aspect ratio;
- caption reference and brand guidance used;
- any open wording, style, asset, or approval decisions;
- review owner and requested next action.

Call the handoff complete only when the clean base and SRT pass validation and all open items are visible to the review owner.
