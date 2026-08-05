---
name: build-transcript-first-cut
description: Turn source footage into a word-timed transcript, documented edit decisions, and a clean reversible base cut for CapCut. Use when a video session needs transcription, filler or silence review, a first cut, or a CapCut-ready base edit.
---

# Build a transcript and first cut

## Read the session before editing

- Read `edit/session-plan.md` when present.
- Read the client's `brand.md` and `style.json` when present, especially standing rules about fillers, opening frames, and delivery format.
- Inventory the source video without changing it. Keep source timing as the permanent reference.
- Inspect existing `edit/` files. Never overwrite a transcript, EDL, or render without explicit approval.

## Create the transcript

Transcribe speech with word-level start and end times. Save JSON at:

```text
<client>/<M.D.YY>/edit/transcripts/<source-name>.json
```

Preserve the full text plus word records. When supported, retain word type, speaker, and confidence. Flag uncertain names, brands, and technical terms for human review rather than guessing.

## Mark possible cuts

Review the transcript and waveform for:

- filler words such as “um” and “uh”;
- false starts, repeated takes, mistakes, and off-topic speech;
- long silence or dead air;
- useful pauses that support pacing;
- breaths or room tone needed to avoid harsh cuts.

Treat these as candidates, not automatic deletions, unless the client's notes contain a standing instruction. Keep a filler when removing it would sound unnatural or change meaning. Use small handles around kept speech and listen across every proposed join.

## Write a reversible EDL

Create `edit/edl.json` before rendering. Use source-relative timecodes so the edit can always be rebuilt. Follow the repository's existing shape:

```json
{
  "version": 1,
  "sources": {"source-id": "relative/path/to/source.mov"},
  "ranges": [
    {
      "source": "source-id",
      "start": 1.25,
      "end": 4.8,
      "beat": "HOOK",
      "quote": "Exact kept words",
      "reason": "Why this range is kept and how the boundary was chosen."
    }
  ],
  "grade": "none",
  "overlays": [],
  "subtitles": "master.srt",
  "total_duration_s": 3.55
}
```

Use paths relative to the repository in new EDLs. Keep ranges in playback order, ensure `start < end`, and document every editorial choice in `reason`. Do not bake captions, graphics, music, or destructive color changes into this stage.

## Render and check the base cut

Render the clean full-quality base as `edit/base.mp4`; use `edit/base_preview.mp4` only for a lighter review copy. Do not replace either file if it already exists—use a versioned name or request approval.

Check:

- all words and ideas remain accurate;
- no clipped consonants, jumpy audio, black frames, or accidental gaps appear at joins;
- frame size, orientation, frame rate, audio, and duration match the session plan;
- EDL duration and rendered duration agree within normal frame rounding;
- the base contains no burned-in captions or marketing-only overlays.

## Hand off

Report the transcript, EDL, base cut, removed or retained fillers, uncertain transcript terms, and review points. Describe `base.mp4` as CapCut-ready only after the checks pass. Keep the original source, transcript, and EDL together so changes remain reversible.
