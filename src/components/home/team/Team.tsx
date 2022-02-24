import { useEffect, useState } from 'react';
import handleViewport from 'react-in-viewport';

import teamZach from '../../../assets/img/team-zach.jpeg';
import teamTheo from '../../../assets/img/team-theo.jpg';
import teamSpencer from '../../../assets/img/team-spencer.jpg';
import teamJon from '../../../assets/img/team-jon.png';
import teamDart from '../../../assets/img/team-dart.jpg';
import teamAna from '../../../assets/img/team-ana.jpg';
import teamAndrei from '../../../assets/img/team-andrei.jpg';
import teamTifa from '../../../assets/img/team-tifa.jpg';
import elves5 from '../../../assets/img/elves-5.png';
import elves6 from '../../../assets/img/elves-6.png';

const teamMembers = [
  {
    firstName: 'Zach',
    lastName: 'Hopkins',
    position: 'President',
    avatar: teamZach,
    link: 'https://www.linkedin.com/in/zachary-a-hopkins/',
    classes: 'team__member-link--bg-knife-1',
  },
  {
    firstName: 'Theo',
    lastName: 'Thomas',
    position: 'Vice President',
    avatar: teamTheo,
    link: 'https://www.linkedin.com/in/theo-thomas-523b18166/',
    classes: 'team__member-link--bg-axe-1',
  },
  {
    firstName: 'Spencer',
    lastName: 'Weston',
    position: 'Public Relations Director',
    avatar: teamSpencer,
    link: 'https://www.linkedin.com/in/spencer-w-6908584/',
    classes: 'team__member-link--bg-knife-2',
  },
  {
    firstName: 'Jonathan',
    lastName: 'Mills',
    position: 'Marketing Director',
    avatar: teamJon,
    link: 'https://www.linkedin.com/in/jonathan-b-mills/',
    classes: 'team__member-link--bg-knife-3',
  },
  {
    firstName: "D'Artagnan",
    lastName: 'Whitney',
    position: 'Lore Author',
    avatar: teamDart,
    link: '',
    classes: 'team__member-link--bg-axe-3',
  },
  {
    firstName: 'Ana',
    lastName: 'Škaro',
    position: 'Software Engineer',
    avatar: teamAna,
    link: 'https://www.linkedin.com/in/ana-skaro/',
    classes: 'team__member-link--bg-knife-2',
  },
  {
    firstName: 'Andrei',
    lastName: 'Valeanu',
    position: 'Artist',
    avatar: teamAndrei,
    link: 'https://www.artstation.com/getrektgore',
    classes: 'team__member-link--bg-axe-2',
  },
  {
    firstName: 'Tifa C.',
    lastName: 'Moles',
    position: 'Artist',
    avatar: teamTifa,
    link: 'https://www.artstation.com/tifacmoles',
    classes: 'team__member-link--bg-axe-4',
  },
];

interface ITeamInner {
  enterCount: number;
  forwardedRef: any;
  inViewport: boolean;
  leaveCount: number;
}

const TeamInner = (props: ITeamInner) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { inViewport, forwardedRef, enterCount } = props;

  useEffect(() => {
    if (inViewport && enterCount === 1) {
      setIsAnimating(true);
    }
  }, [inViewport, enterCount]);

  return (
    <div
      ref={forwardedRef}
      className="section section-team ripped-top"
      id="team"
    >
      <div className="container">
        <h2 className="section__title text-black">
          <span>Meet the Team</span>
        </h2>

        <ul className="team py-10 mb-10 mw-1200px xl:mw-100 mx-auto">
          {teamMembers.map((member, index) => (
            <li key={index} className="team__member">
              <a
                className={`team__member-link ${member.classes}`}
                href={member.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="team__member-photo box-shadow-l"
                  src={member.avatar}
                  alt={member.firstName}
                />
                <h3 className="team__member-name">
                  {member.firstName}
                  <br />
                  {member.lastName}
                </h3>
                <p className="team__member-position">{member.position}</p>
              </a>
            </li>
          ))}
        </ul>

        <img
          className={`${
            isAnimating
              ? 'animate__animated animate__backInUp animate__slow'
              : ''
          } home__bottom-images home__bottom-images--1`}
          src={elves5}
          alt="Elves"
        />
        <img
          className={`${
            isAnimating
              ? 'animate__animated animate__backInUp animate__slow'
              : ''
          } home__bottom-images home__bottom-images--2`}
          src={elves6}
          alt="Elves"
        />
      </div>
    </div>
  );
};

const Team = handleViewport(TeamInner);

export default Team;
