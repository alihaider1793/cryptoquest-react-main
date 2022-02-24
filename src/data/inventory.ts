import avatar1 from '../assets/img/avatar-1.png';
import avatar1webp from '../assets/img/avatar-1.webp';
import avatar3 from '../assets/img/avatar-3.png';
import avatar3webp from '../assets/img/avatar-3.webp';

import { IInventoryItem } from '../types/inventory';

export const inventory: IInventoryItem[] = [
  {
    avatar: avatar3,
    avatarWebP: avatar3webp,
    name: 'Seriphina',
    tokenId: 1,
    race: 'Elfic',
    gender: 'Female',
    level: 1,
    description: 'A dangerous elf with a penchant for black magic.',
  },
  {
    avatar: avatar1,
    avatarWebP: avatar1webp,
    name: 'Nina',
    tokenId: 2,
    race: 'Human',
    gender: 'Female',
    level: 1,
    description: 'A warrior woman imprinted with the seal of Darv.',
  },
];
