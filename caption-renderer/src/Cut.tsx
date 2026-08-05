import React from 'react';
import {AbsoluteFill, OffthreadVideo, Sequence, staticFile, useVideoConfig} from 'remotion';
import type {RenderProps} from './types';

export const Cut: React.FC<RenderProps> = ({ranges, sources}) => {
  const {fps} = useVideoConfig();
  let cursor = 0;
  return <AbsoluteFill style={{backgroundColor: 'black'}}>{ranges.map((range, index) => {
    const durationInFrames = Math.max(1, Math.round((range.end - range.start) * fps));
    const from = cursor;
    cursor += durationInFrames;
    const source = sources[range.source];
    if (!source) throw new Error(`Missing source mapping: ${range.source}`);
    return <Sequence key={`${range.source}-${index}`} from={from} durationInFrames={durationInFrames}>
      <OffthreadVideo
        src={staticFile(source)}
        startFrom={Math.round(range.start * fps)}
        endAt={Math.round(range.end * fps)}
        style={{width: '100%', height: '100%', objectFit: 'contain'}}
      />
    </Sequence>;
  })}</AbsoluteFill>;
};
