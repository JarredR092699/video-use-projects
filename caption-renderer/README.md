# Caption Renderer POC

A small Remotion renderer for the repository's existing EDL, word-timing JSON, SRT, and media files. It creates the same first cut in two forms:

- `CleanCut`: edit only, with no burned-in captions
- `CaptionedCut`: edit plus a CapCut-inspired preset (short uppercase groups, white text with dark outline, vivid pink active word, bottom safe-zone placement)

Existing media and edit files are read-only inputs. Generated configuration, SRT, and video files go into ignored `generated/` and `out/` directories.

## Setup and test

Requires Node.js 20 or newer and FFmpeg available on the machine.

```sh
cd caption-renderer
npm install
npm test
```

The test command runs timing conversion tests and the TypeScript check. To preview the included July 30 example:

```sh
npm run studio
```

To render the complete example:

```sh
npm run render:clean
npm run render:captioned
```

The first render downloads Remotion's headless Chromium build. Because the repository root is used as Remotion's public media directory, bundling scans/copies the repository's media and can be slow; this keeps the POC non-destructive and avoids duplicate source files.

## Inputs and outputs

`scripts/prepare-input.mjs` accepts:

- `--edl`: existing EDL JSON with `sources` and `ranges`
- `--transcript`: existing word-timing transcript JSON; preferred because it enables true active-word highlighting
- `--srt`: existing SRT; used when no transcript is supplied (word timing within each cue is estimated evenly)
- `--out`: generated Remotion props JSON
- `--export-srt`: optional normalized, edited-timeline SRT output

The sample preparation command is `npm run prepare:sample`. It maps source-relative word timings through every EDL cut, creates groups of at most four words, and writes `generated/sample.json` plus `generated/sample.srt`. When both transcript and SRT are supplied, transcript timing drives the render and the exported SRT; no caption text is manually re-entered.

## CapCut handoff

Marketing should render `CleanCut`, then import the clean MP4 and `generated/sample.srt` into CapCut. Keep them both at timeline time `00:00:00`. CapCut can then restyle, regroup, or correct the captions without reconstructing the cut. Use `CaptionedCut` as a fast review/reference export or when burned-in captions are acceptable.

For another edit, either update the sample paths in `package.json` or call `prepare-input.mjs` directly with that edit's EDL/transcript/SRT. Source files referenced by the EDL must remain inside this repository because it is the renderer's public media root.

## Current limitations

- One 1920×1080, 30 fps preset; it does not auto-detect or reframe aspect ratios.
- Straight cuts only. EDL overlays, transitions, grading, motion graphics, and CapCut project-file export are out of scope.
- Word JSON is assumed to use source-file seconds. SRT-only active-word timing is an estimate because SRT has cue-level timing.
- Cut boundaries are rounded to the nearest 30 fps frame. The sample source is 60 fps, so the POC prioritizes a predictable social export over frame-perfect source-rate preservation.
- Remotion rendering scans the full repository public directory, which is simple but inefficient for large media libraries.

## Licensing and dependency note

The pinned Remotion 4 license bundled with the dependency permits free evaluation, individuals, nonprofits, and for-profit organizations with up to three employees. Larger for-profit organizations require a Remotion Company License; confirm the current terms before commercial rollout. React and the other direct packages use their respective bundled licenses. Source footage, fonts, music, logos, and other creative assets remain separately licensed responsibilities.

`npm install` currently reports 14 vulnerabilities in the pinned dependency tree (12 critical, 1 high, 1 low). They are transitive development/rendering-tool findings and should be reviewed and updated before production or CI deployment; this POC does not expose a web service.
