import IconType from 'src/utils/constants/icon-type';

import { ReactComponent as Grid } from './grid.svg';
import { ReactComponent as Lines } from './lines.svg';
import { ReactComponent as Search } from './search.svg';
import { ReactComponent as XmarkCircleFill } from './xmark-circle-fill.svg';
import { ReactComponent as ChevronRight } from './chevron-right.svg';
import { ReactComponent as MusicBeamNote } from './music-beam-note.svg';
import { ReactComponent as MusicCrotchetNote } from './music-crotchet-note.svg';
import { ReactComponent as MusicList } from './music-list.svg';
import { ReactComponent as Person } from './person.svg';
import { ReactComponent as Play } from './play.svg';
import { ReactComponent as Pause } from './pause.svg';
import { ReactComponent as Forward } from './forward.svg';
import { ReactComponent as Backward } from './backward.svg';
import { ReactComponent as Xmark } from './xmark.svg';
import { ReactComponent as NotAllowed } from './not-allowed.svg';

export default {
  [IconType.grid]: Grid,
  [IconType.lines]: Lines,
  [IconType.search]: Search,
  [IconType.xmarkCircleFill]: XmarkCircleFill,
  [IconType.chevronRight]: ChevronRight,
  [IconType.musicCrotchetNote]: MusicCrotchetNote,
  [IconType.musicBeamNote]: MusicBeamNote,
  [IconType.musicList]: MusicList,
  [IconType.person]: Person,
  [IconType.play]: Play,
  [IconType.pause]: Pause,
  [IconType.forward]: Forward,
  [IconType.backward]: Backward,
  [IconType.xmark]: Xmark,
  [IconType.notAllowed]: NotAllowed,
};
