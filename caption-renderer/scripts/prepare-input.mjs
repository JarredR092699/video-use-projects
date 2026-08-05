import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import {mapTranscriptToCut, parseSrt, publicPath, toSrt} from './caption-data.mjs';

const args = Object.fromEntries(process.argv.slice(2).reduce((pairs, value, index, all) => value.startsWith('--') ? [...pairs, [value.slice(2), all[index + 1]]] : pairs, []));
if (!args.edl || !args.out || (!args.transcript && !args.srt)) {
  throw new Error('Usage: --edl FILE (--transcript FILE | --srt FILE) --out FILE [--export-srt FILE]');
}
const repoRoot = path.resolve(import.meta.dirname, '../..');
const readJson = async (file) => JSON.parse(await fs.readFile(path.resolve(process.cwd(), file), 'utf8'));
const edl = await readJson(args.edl);
const captions = args.transcript
  ? mapTranscriptToCut(await readJson(args.transcript), edl.ranges)
  : parseSrt(await fs.readFile(path.resolve(process.cwd(), args.srt), 'utf8'));
const payload = {
  fps: 30,
  width: 1920,
  height: 1080,
  sources: Object.fromEntries(Object.entries(edl.sources).map(([key, source]) => [key, publicPath(source, repoRoot)])),
  ranges: edl.ranges.map(({source, start, end}) => ({source, start, end})),
  captions,
};
const out = path.resolve(process.cwd(), args.out);
await fs.mkdir(path.dirname(out), {recursive: true});
await fs.writeFile(out, `${JSON.stringify(payload, null, 2)}\n`);
if (args['export-srt']) {
  const srtOut = path.resolve(process.cwd(), args['export-srt']);
  await fs.mkdir(path.dirname(srtOut), {recursive: true});
  await fs.writeFile(srtOut, toSrt(captions));
}
console.log(`Prepared ${captions.length} caption groups across ${edl.ranges.length} cuts -> ${args.out}`);
