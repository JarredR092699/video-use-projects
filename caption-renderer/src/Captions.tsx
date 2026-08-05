import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import type {CaptionSchema} from './types';
import type {z} from 'zod';

type Caption = z.infer<typeof CaptionSchema>;

export const Captions: React.FC<{captions: Caption[]}> = ({captions}) => {
  const frame = useCurrentFrame();
  const {fps, width} = useVideoConfig();
  const time = frame / fps;
  const cue = captions.find((item) => time >= item.start && time < item.end);
  if (!cue) return null;
  const fontSize = Math.round(width * 0.052);
  return <AbsoluteFill style={{justifyContent: 'flex-end', alignItems: 'center', padding: '0 7% 10%', pointerEvents: 'none'}}>
    <div style={{maxWidth: '92%', textAlign: 'center', fontFamily: 'Arial Black, Arial, sans-serif', fontSize, fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.025em', textTransform: 'uppercase', filter: 'drop-shadow(0 5px 3px rgba(0,0,0,.75))'}}>
      {cue.words.map((word, index) => {
        const active = time >= word.start && time < word.end;
        return <span key={`${word.start}-${index}`} style={{display: 'inline-block', margin: '0 .12em', color: active ? '#FF3D9A' : '#FFFFFF', WebkitTextStroke: `${Math.max(2, width / 480)}px #111111`, transform: active ? 'scale(1.08)' : undefined}}>{word.text}</span>;
      })}
    </div>
  </AbsoluteFill>;
};
