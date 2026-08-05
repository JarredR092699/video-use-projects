# Caitlyn video workflows — meeting starter

This folder is a concrete starting point for discussing repeatable video work with Caitlyn. Caitlyn has identified two main editing tracks—talking-head videos and montage/recap videos. The three starter skills cover their shared foundation: intake, a reversible first cut, and an editable caption handoff.

## Proposed process

1. **Plan the session.** Use [`plan-video-session`](plan-video-session/SKILL.md) to collect six essentials and write a session plan in the existing client/date structure.
2. **Build the clean first cut.** Use [`build-transcript-first-cut`](build-transcript-first-cut/SKILL.md) to create a word-timed transcript, identify possible fillers and silence, document kept ranges in an EDL, and render a clean CapCut-ready base.
3. **Prepare captions and handoff.** Use [`prepare-captions-handoff`](prepare-captions-handoff/SKILL.md) to create and validate SRT captions, optionally render a styled preview, and keep every marketing asset editable.
4. **Finish in the editor.** Keep music, speed changes, color enhancement, title cards, logos, emojis, transitions, and text callouts editable. Caitlyn makes the creative choices and approves the final polish.
5. **Expand after the meeting.** Review the [`Caitlyn workflow inventory`](caitlyn-workflow-inventory.md), which now maps her reported talking-head and montage/recap processes to proposed automation, templates, and human review. Use the open fields to define future skills.

The original video always remains unchanged. `edl.json` records source-relative decisions, `base.mp4` stays free of burned-in captions and marketing overlays, and previews are review copies rather than master assets.

## One-video meeting walkthrough

Use the existing original source [`internal/7.19.26/video-use-v1.mov`](../../internal/7.19.26/video-use-v1.mov) as the example. It is short enough for a meeting and already has derived artifacts in `internal/7.19.26/edit/` that the team can inspect as examples. Do not change the source or those existing outputs during the meeting.

Walk through the process as if this were a new request:

1. Answer the six intake questions: client, platform/aspect ratio, desired outcome, caption reference, required brand assets, and review owner.
2. Compare the source with its word-level transcript and discuss which filler or silence decisions should be rules versus human choices.
3. Open the existing `edl.json` and confirm that each kept range has source times, quoted words, and a reason.
4. Compare the clean base preview and `master.srt`; confirm that the base remains useful in CapCut without captions baked in.
5. Discuss whether an optional Remotion preview would answer the review question faster. The renderer is under separate development, so the workflow must still work without it.
6. Compare how the same source would be treated as a talking-head edit versus one piece of a montage. Discuss where Caitlyn needs options rather than an automatic final choice.
7. Complete the open fields in the inventory. Do not add a future skill until the team can describe its input, finished result, and review owner.

If the team later runs the example end to end, create a separate, clearly named demo session or obtain approval before replacing anything. Never reuse the existing edit files as scratch space.

## Decisions required in the meeting

The meeting is complete when the team has decided exactly these items:

- [ ] Who owns intake and who is the single review owner?
- [ ] Which platforms and aspect ratios should the starter workflow support first?
- [ ] What does a successful first cut optimize for: clarity, brevity, authenticity, conversion, or another stated outcome?
- [ ] Are fillers and long pauses removed by default, reviewed case by case, or set per client?
- [ ] What minimum silence or audio handles should remain around cuts, and who may override them?
- [ ] Which transcript words, names, or confidence issues must always receive human review?
- [ ] What is the approved caption reference for the first workflow: style, casing, chunk size, placement, and safe zone?
- [ ] Which brand assets are required before work starts, and where is the approved source of truth?
- [ ] Is the required CapCut handoff the clean base plus SRT, or are any additional editable files needed?
- [ ] Is a Remotion caption preview optional or required before review, and what is the fallback while the renderer is unavailable?
- [ ] Which verification checks are required before Caitlyn receives a handoff?
- [ ] Which real Caitlyn tasks should become the next skill, and for each one is the primary treatment automate, template, or human creative review?
- [ ] Should the next skill focus on talking-head finishing or montage/recap assembly?
- [ ] For speed, audio enhancement, and color auto-adjust, what settings are safe as first-pass defaults?
- [ ] Where does approved, properly licensed music come from, and who makes the final selection?
- [ ] Should automated filler and rambling removal produce suggestions, a draft cut, or both?
- [ ] For montage work, how many AI clip recommendations should Caitlyn review, and what information should explain each recommendation?
- [ ] When should beat-sync yield to speech, story, or an important visual moment?
- [ ] Which title cards, transitions, logo placements, and text treatments should become reusable client templates?
- [ ] Which editable project files must accompany the clean base and SRT so Caitlyn can complete final polish?

## What this starter set deliberately does not decide

It does not choose Caitlyn's creative options, define default enhancement settings, select or license music, choose a caption style, approve brand assets, publish content, or make Remotion a dependency. Those are team decisions captured above.
