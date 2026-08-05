import React from 'react';
import {Composition} from 'remotion';
import {Edit} from './Composition';
import {RenderPropsSchema, type RenderProps} from './types';

const defaults: RenderProps = {fps: 30, width: 1920, height: 1080, sources: {}, ranges: [], captions: []};
const metadata = ({props}: {props: RenderProps}) => {
  const parsed = RenderPropsSchema.parse(props);
  return {
    fps: parsed.fps,
    width: parsed.width,
    height: parsed.height,
    durationInFrames: Math.max(1, parsed.ranges.reduce((sum, range) => sum + Math.max(1, Math.round((range.end - range.start) * parsed.fps)), 0)),
    props: parsed,
  };
};

export const RemotionRoot: React.FC = () => <>
  <Composition id="CaptionedCut" component={Edit} defaultProps={defaults} durationInFrames={1} fps={30} width={1920} height={1080} schema={RenderPropsSchema} calculateMetadata={metadata} />
  <Composition id="CleanCut" component={Edit} defaultProps={{...defaults, showCaptions: false}} durationInFrames={1} fps={30} width={1920} height={1080} schema={RenderPropsSchema} calculateMetadata={metadata} />
</>;
