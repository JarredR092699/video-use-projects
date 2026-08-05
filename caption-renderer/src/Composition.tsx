import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Cut} from './Cut';
import {Captions} from './Captions';
import type {RenderProps} from './types';

export const Edit: React.FC<RenderProps & {showCaptions?: boolean}> = (props) => <AbsoluteFill>
  <Cut {...props} />
  {props.showCaptions === false ? null : <Captions captions={props.captions} />}
</AbsoluteFill>;
