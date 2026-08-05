import test from 'node:test';
import assert from 'node:assert/strict';
import {mapTranscriptToCut, parseSrt, toSrt} from '../scripts/caption-data.mjs';

test('parses SRT and assigns usable word timing', () => {
  const [cue] = parseSrt('1\n00:00:01,000 --> 00:00:02,000\nHELLO WORLD\n');
  assert.equal(cue.words.length, 2);
  assert.deepEqual([cue.start, cue.end], [1, 2]);
  assert.equal(cue.words[1].start, 1.5);
});

test('maps source word timing through removed sections', () => {
  const transcript = {words: [
    {text: 'ONE', start: 10.1, end: 10.4, type: 'word'},
    {text: 'TWO', start: 20.2, end: 20.5, type: 'word'},
  ]};
  const captions = mapTranscriptToCut(transcript, [{start: 10, end: 11}, {start: 20, end: 21}], 1);
  assert.ok(Math.abs(captions[1].words[0].start - 1.2) < 1e-9);
  assert.match(toSrt(captions), /00:00:01,200 --> 00:00:01,500/);
});
