import { nanoid } from 'nanoid';
import { BiDollarCircle } from 'react-icons/bi';
import { FaCar, FaMap, FaUserShield, FaUsers, FaWallet } from 'react-icons/fa';
import { FaGun } from 'react-icons/fa6';

export const navlinks = [
  { id: nanoid(), href: '/', text: 'Home' },
  { id: nanoid(), href: '/matches', text: 'Matches' },
  { id: nanoid(), href: '/about', text: 'About' },
  { id: nanoid(), href: '/contact', text: 'Contact' },
];
export const navlinksMob = [
  { id: nanoid(), href: '/', text: 'Home' },
  { id: nanoid(), href: '/matches', text: 'Matches' },
  { id: nanoid(), href: '/about', text: 'About' },
  { id: nanoid(), href: '/contact', text: 'Contact' },
];

export const teams = [
  {
    id: nanoid(),
    name: 'shield gamer',
    imageUrl: '/images/pubg-character.png',
    slot: 1
  },
  {
    id: nanoid(),
    name: 'apex gamer',
    imageUrl: '/images/pubg-character.png',
    slot: 2
  },
  {
    id: nanoid(),
    name: 'joker gamer',
    imageUrl: '/images/pubg-character.png',
    slot: 3
  },
  {
    id: nanoid(),
    name: 'soul gamer',
    imageUrl: '/images/pubg-character.png',
    slot: 4
  },
  {
    id: nanoid(),
    name: 'snax gamer',
    imageUrl: '/images/pubg-character.png',
    slot: 5
  },
  {
    id: nanoid(),
    name: 'dynamo gamer',
    imageUrl: '/images/pubg-character.png',
    slot: 6
  }
];

export const about = [
  {
    id: nanoid(),
    icon: <FaMap className="w-10 h-10 text-container" />,
    title: 'Erangle',
    para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero harum iusto reiciendis, reprehenderit tempora dolore.'
  },
  {
    id: nanoid(),
    icon: <FaUserShield className="w-10 h-10 text-container" />,
    title: 'Antiban System',
    para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero harum iusto reiciendis, reprehenderit tempora dolore.'
  },
  {
    id: nanoid(),
    icon: <FaCar className="w-10 h-10 text-container" />,
    title: 'Vehicle',
    para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero harum iusto reiciendis, reprehenderit tempora dolore.'
  },
  {
    id: nanoid(),
    icon: <FaGun className="w-10 h-10 text-container" />,
    title: 'Guns',
    para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero harum iusto reiciendis, reprehenderit tempora dolore.'
  },
]

export const matchInfoCards = [
  {
    id: nanoid(),
    icon: <BiDollarCircle className='w-10 h-10 mb-5 text-container' />,
    title: 'Prize Pool',
    subtitle: '700',
  },
  {
    id: nanoid(),
    icon: <FaUsers className='w-10 h-10 mb-5 text-container' />,
    title: 'Mode',
    subtitle: 'squad',
  },
  {
    id: nanoid(),
    icon: <FaWallet className='w-10 h-10 mb-5 text-container' />,
    title: 'Entry Fee',
    subtitle: '50',
  },
  {
    id: nanoid(),
    icon: <FaMap className='w-10 h-10 mb-5 text-container' />,
    title: 'Map',
    subtitle: 'Erangle',
  },
];

export const userHistory = [
  {
    id: nanoid(),
    match: 'Erangle',
    imageUrl: '/images/char1.png',
    matchtype: 'Squad',
    date: '01 March',
    result: 'win',
    winamount: '+500'
  },
  {
    id: nanoid(),
    match: 'Erangle',
    imageUrl: '/images/char1.png',
    matchtype: 'Squad',
    date: '01 March',
    result: '2nd',
    winamount: '+300',
  },
  {
    id: nanoid(),
    match: 'Erangle',
    imageUrl: '/images/char1.png',
    matchtype: 'Squad',
    date: '01 March',
    result: 'loss',
    lossamount: '-40'
  },
];

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Active Users",
    number: 8.236,
    change: 6,
  },
  {
    id: 3,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 4,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];