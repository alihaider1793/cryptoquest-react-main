import post1 from '../assets/img/post1.jpg';

import { IBlogItem } from '../types/blog';

export const blog: IBlogItem[] = [
  {
    id: 1,
    image: post1,
    title: 'Partnership with Crowdcreate',
    description: (
      <p>
        Crypto Quest is proud to announce our strategic partnership with
        Crowdcreate, the leading crypto &amp; NFT marketing agency (
        <a href="https://crowdcreate.us/" target="_blank" rel="noreferrer">
          https://crowdcreate.us/
        </a>
        ).
      </p>
    ),
    fullText: (
      <>
        <p>
          Crypto Quest is proud to announce our strategic partnership with
          Crowdcreate, the leading crypto &amp; NFT marketing agency (
          <a href="https://crowdcreate.us/" target="_blank" rel="noreferrer">
            https://crowdcreate.us/
          </a>
          ).
        </p>
        <p>
          They will be bringing a full suite of marketing and consulting
          services from influencer marketing and expert advisory, to content
          creation and community building.
        </p>
        <p>
          They run one of the largest networks of creators, founders, investors,
          and influencers across crypto, NFTs, defi, and gaming that we will be
          able to leverage here at Crypto Quest!
        </p>
      </>
    ),
  },
];
