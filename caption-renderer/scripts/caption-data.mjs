import path from 'node:path';

export const parseTime = (value) => {
  const match = value.match(/(\d+):(\d+):(\d+)[,.](\d+)/);
  if (!match) throw new Error(`Invalid SRT timestamp: ${value}`);
  return Number(match[1]) * 3600 + Number(match[2]) * 60 + Number(match[3]) + Number(match[4].padEnd(3, '0').slice(0, 3)) / 1000;
};

export const parseSrt = (text) => text.trim().split(/\r?\n\s*\r?\n/).map((block) => {
  const lines = block.trim().split(/\r?\n/);
  const timingIndex = lines.findIndex((line) => line.includes('-->'));
  if (timingIndex < 0) return null;
  const [startRaw, endRaw] = lines[timingIndex].split('-->').map((part) => part.trim());
  const start = parseTime(startRaw);
  const end = parseTime(endRaw);
  const tokens = lines.slice(timingIndex + 1).join(' ').trim().split(/\s+/).filter(Boolean);
  const span = Math.max(0.001, end - start);
  return {start, end, words: tokens.map((word, index) => ({text: word, start: start + span * index / tokens.length, end: start + span * (index + 1) / tokens.length}))};
}).filter(Boolean);

export const mapTranscriptToCut = (transcript, ranges, maxWords = 4) => {
  const sourceWords = transcript.words.filter((word) => word.type === 'word');
  const timelineWords = [];
  let cursor = 0;
  for (const range of ranges) {
    for (const word of sourceWords) {
      if (word.end <= range.start || word.start >= range.end) continue;
      timelineWords.push({
        text: word.text,
        start: cursor + Math.max(0, word.start - range.start),
        end: cursor + Math.min(range.end - range.start, word.end - range.start),
      });
    }
    cursor += range.end - range.start;
  }
  const captions = [];
  let group = [];
  for (const word of timelineWords) {
    const gap = group.length ? word.start - group.at(-1).end : 0;
    if (group.length && (group.length >= maxWords || gap > 0.42)) {
      captions.push({start: group[0].start, end: group.at(-1).end, words: group});
      group = [];
    }
    group.push(word);
    if (/[.!?]$/.test(word.text)) {
      captions.push({start: group[0].start, end: group.at(-1).end, words: group});
      group = [];
    }
  }
  if (group.length) captions.push({start: group[0].start, end: group.at(-1).end, words: group});
  return captions;
};

const formatTime = (seconds) => {
  const milliseconds = Math.max(0, Math.round(seconds * 1000));
  const h = Math.floor(milliseconds / 3600000);
  const m = Math.floor(milliseconds % 3600000 / 60000);
  const s = Math.floor(milliseconds % 60000 / 1000);
  const ms = milliseconds % 1000;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')},${String(ms).padStart(3, '0')}`;
};

export const toSrt = (captions) => captions.map((caption, index) => `${index + 1}\n${formatTime(caption.start)} --> ${formatTime(caption.end)}\n${caption.words.map((word) => word.text).join(' ').toUpperCase()}\n`).join('\n');

export const publicPath = (source, repoRoot) => {
  const absolute = path.isAbsolute(source) ? source : path.resolve(repoRoot, source);
  const relative = path.relative(repoRoot, absolute);
  if (relative.startsWith('..')) throw new Error(`Source must be inside repository public root: ${source}`);
  return relative.split(path.sep).join('/');
};
