import { Helmet } from 'react-helmet';

import icons from '../../assets/img/icons.svg';
import PageHeader from '../../components/page-header/PageHeader';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions ⋅ Crypto Quest</title>
        <meta name="description" content="Terms & Conditions ⋅ Crypto Quest" />
      </Helmet>
      <PageHeader title="Terms &amp; Conditions" />
      <div className="section section--padding-s section--bg-curves">
        <div className="container container--medium">
          <div className="article article--sticky-aside">
            <aside className="article__aside">
              <nav className="aside-nav links-inverted">
                <h3 className="aside-nav__title mt-0">Table of Contents</h3>
                <ul className="aside-nav__menu">
                  <li className="active">
                    <a href="#id">Cookies Used</a>
                    <ul>
                      <li>
                        <a href="#id">Pupose of Use</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#id">Your Rights</a>
                  </li>
                  <li>
                    <a href="#id">Changes to this Policy</a>
                  </li>
                  <li>
                    <a href="#id">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </aside>
            <article className="article__content">
              <p className="d-flex">
                <span>January 5, 2021</span>
                <span className="ml-auto pl-5">
                  <a href="/link/to/pdf/file" download="">
                    <svg
                      className="icon"
                      width="16"
                      height="16"
                      role="img"
                      aria-label="Download"
                    >
                      <use xlinkHref={`${icons}#download`}></use>
                    </svg>
                  </a>
                </span>
              </p>

              <h2>Welcome to Crypto Quest</h2>
              <p>
                Crypto Quest is an Ethereum/Polygon blockchain-based generative
                project consisting of 10,000 unique adventurer avatars with
                randomized traits and stats. The Crypto Quest team are existing
                business owners with a passion for quality art and community
                building. These terms of service (“TOS”) are intended to provide
                clear, transparent guidelines for responsible ownership and use
                of Crypto Quest NFTs. Any questions can be sent along to the
                Creative Team, via Twitter or Discord.
              </p>

              <h3>Ownership and Commercial Rights of Crypto Quest NFT’s</h3>
              <p>
                Crypto Quest consists of 10,000 individual ERC-721 tokens
                (individually “Crypto Quest NFTs” or “NFTs”) which include
                unique generative artwork hosted on Inter Planetary File System
                (“IPFS”). By minting a Crypto Quest NFT from our smart contract,
                purchasing it off the secondary market (e.g. OpenSea), or
                otherwise acquiring the NFT through any other legitimate means
                or method, the Holder receives full and complete ownership,
                inclusive of commercial rights, to the NFT and the corresponding
                unique artwork. The License the Holder is receiving is solely
                for the Licensed NFT which includes the right to use the
                Licensed NFT and the right to reproduce the Licensed NFT on
                tribute or derivative art, merchandise, or sharing these rights
                with third party projects. The Holder agrees not to use,
                utilize, portray, advertise, distribute or otherwise market any
                Crypto Quest NFT in any project or derivative work that involves
                hate speech, racism, pornography, or any other illegal or
                unlawful content. Upon sale or transfer of the NFT, any
                ownership or commercial rights are immediately transferred to
                the new Holder. No refunds shall be issued to any Holder upon a
                full and complete lawful purchase of any Crypto Quest NFT. In
                the event that any Holder purchases a Crypto Quest NFT through
                the secondary market, such as OpenSea, Holder shall be held
                accountable and will be bound by the Terms of Service which
                govern said secondary market platform.
              </p>

              <h3>
                Limitations of Liability for Gas, Failed Transactions, Smart
                Contract Bugs
              </h3>
              <p>
                Participants in minting Crypto Quest NFTs agree not to hold the
                project Creative Team accountable for any losses incurred as a
                consequence of minting an NFT. These potential losses include
                any gas fees for failed transactions, any excessive gas fees
                charged due to website or smart contract bugs, and any loss of
                cryptocurrency, or NFT procurement due to website or smart
                contract bugs.
              </p>

              <h3>No Guarantees or Future Promises</h3>
              <p>
                While Crypto Quest has released a roadmap outlining future goals
                and plans for community development, we cannot guarantee to
                accomplish every item outlined during the pre-launch planning
                phase as ideas and projects evolve organically. You agree that
                your purchase of a Crypto Quest NFT, from any one of our Drops
                of NFTs, is all you are guaranteed to receive with your initial
                purchase, whether through primary or secondary channels. Any
                future benefits are ancillary to this purchase and not to be
                taken into consideration with your initial purchase. You agree
                that you are not relying on any future commitments by Crypto
                Quest in using this site and participating in our NFT launch.
              </p>

              <h3>No Guarantees of Value</h3>
              <p>
                Crypto Quest NFTs were created purely as collectibles, not as
                investment vehicles or substitutes for cryptocurrency. We make
                absolutely no promise or guarantee that these NFTs will
                subsequently retain monetary value in fiat, cash or
                cryptocurrency.
              </p>

              <h3>Taxes</h3>
              <p>
                Each Holder is solely and entirely responsible for any and all
                jurisdictional taxes, including Federal or State tax liabilities
                which may arise, be imposed, or enforced as a result of minting
                or reselling Crypto Quest NFTs.
              </p>

              <h3>Class Action Waiver, Jurisdiction and Choice of Law</h3>
              <p>
                You agree to waive any class action status. Any legal dispute
                surrounding the Crypto Quest NFT project can only be pursued on
                an individual basis.
              </p>

              <h3>Age Disclaimer</h3>

              <p>
                The Crypto Quest project is not targeted towards children. You
                agree that you are over the age of 18.
              </p>

              <h3>Notice of Non-Affiliation</h3>

              <p>
                We are not affiliated, associated, authorized, endorsed by, or
                in any way officially connected with Wizards of the Coast,
                Dungeons &amp; Dragons, or any of its subsidiaries or its
                affiliates. The official Dungeons &amp; Dragons website can be
                found at https://dnd.wizards.com/. The name ‘Dungeons &amp;
                Dragons’ as well as related names, marks, emblems and images are
                registered trademarks of their respective owners.
              </p>

              <h3>Copyright Notice</h3>

              <ul>
                <li>
                  Open Game License v 1.0a Copyright 2000, Wizards of the Coast,
                  LLC.
                </li>
                <li>
                  Ethereum Logos. Creative Commons Licensing attribution 3.0
                </li>
                <li>
                  System Reference Document 5.1 Copyright 2016, Wizards of the
                  Coast, Inc.; Authors Mike Mearls, Jeremy Crawford, Chris
                  Perkins, Rodney Thompson, Peter Lee, James Wyatt, Robert J.
                  Schwalb, Bruce R. Cordell, Chris Sims, and Steve Townshend,
                  based on original material by E. Gary Gygax and Dave Arneson.
                </li>
              </ul>

              <h3>Privacy Policy</h3>

              <p>
                &zwj;Crypto Quest may collect cookies for the purposes of
                application usability, or for browsing behavior for Google
                analytics SEO which helps us enhance your experience with our
                site and relay visitor traffic statistics to the Google search
                engine. Information will not be provided, sold, or distributed
                to any third-party except when required to by law. All project
                participants understand that the Ethereum/Polygon blockchain
                network is a public blockchain, and all transaction history
                initiated through the website will be made public. Crypto Quest
                has no influence on secondary marketplaces, such as OpenSea
                which has an independent terms of service, should you choose to
                utilize these sites. You also understand that Crypto Quest may
                work with third-party apps, such as Discord, Twitter, etc.,
                which collect and store user data. Should Crypto Quest be
                required to collect or store data for future activities such as
                merchandise launches or transfer of any benefits such as
                airdrops, you will be required to agree to the collection of
                this data. This provision may be subject to change, when deemed
                fit by the Crypto Quest team.
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
