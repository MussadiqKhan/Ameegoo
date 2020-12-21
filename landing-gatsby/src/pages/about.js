import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { ResetCSS } from 'common/src/assets/css/style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { GlobalStyle, ContentWrapper } from '../containers/Saas/saas.style';
import Sticky from 'react-stickynode';
import { saasTheme } from 'common/src/theme/saas';
import Main from 'common/src/assets/image/billboard.jpg';
import 'common/src/assets/css/styles.css';
import Navbar from '../containers/Saas/Navbar';
import BannerObject1 from 'common/src/assets/image/saas/banner/bannerObject1.png';
import Container from 'common/src/components/UI/Container';
import Image from 'common/src/components/Image';
import ServiceSection from '../containers/Saas/ServiceSection';
import FeatureSection from '../containers/Saas/FeatureSection';
import ServiceSectionWrapper from '../containers/Saas/ServiceSection/service.style';
import kris from 'common/src/assets/image/kris.jpg';
import jason from 'common/src/assets/image/jason.jpg';
import pam from 'common/src/assets/image/pam.jpg';
import brett from 'common/src/assets/image/brett.jpg';
import anonh from 'common/src/assets/image/anonh.jpg';
import grant from 'common/src/assets/image/grant.jpeg';
import Deano from 'common/src/assets/image/Deano.jpg';
import ty from 'common/src/assets/image/ty.jpg';
import don from 'common/src/assets/image/don.jpg';
import FeatureBlock from 'common/src/components/FeatureBlock';
import FeatureSections from '../containers/Saas/FeatureSection/feature';
import Footer from '../containers/Saas/Footer';
import SEO from '../components/seo';

const About = () => {
  return (
    <ThemeProvider theme={saasTheme}>
      <SEO title='About Us' description='Since 2006, Ameego has been helping restaurants create better employee schedules that save management time, reduce labor costs and make staff happy.' />
      <ResetCSS />
      <GlobalStyle />
      <ContentWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <Navbar />
          </DrawerProvider>
        </Sticky>

        <div className="bg">
          <Container>
            <div className="parent">
              <div className="text">
                <h1>Delivering the PERFECT Schedule t0 match guest traffic and SALES VOLUME</h1>
              </div>
              <div className="image">
                <img
                  src={BannerObject1}
                  alt="Domain Image"
                  style={{ width: '100%', margin: '0' }}
                />
              </div>
            </div>
            <div className="ameego">
              <h1>The Ameego story:</h1>
              <p>
                Since 2006, Ameego has been helping restaurants create better
                employee schedules.
              </p>
              <p>
                Not schedules that are copied over from the previous week and
                not based on a budget - better schedules that save management
                time, reduce labor costs, and make staff happy.
              </p>
              <p>
                Ameego started in a basement (literally) as a two man operation
                that set out to solve the challenges experienced while they were
                working in restaurants.
              </p>
              <p>
                Today, while no longer operated from a basement (most of the
                time), Ameego is a growing company that's helping thousands of
                restaurant people around the world. Regardless, over that time
                our mission has never changed:{' '}
                <b>
                  we're in pursuit of providing the perfect schedule to all
                  restaurants worldwide.
                </b>
              </p>
              <p>
                Perfection might seem unattainable to some, but how will you
                know if you don't try?
              </p>
            </div>
            <FeatureSection />

            <div className="team">
              <div className="member">
                <Image src={kris} />
                <h2>KRIS EDWARDS</h2>
                <h4>VP OPERATIONS</h4>
                <p>
                  When someone asks me what I do I say: "Hanz Skitzvelvet -
                  Trainer of dolphins. You want to talk to the dolphin, you talk
                  to me."
                </p>
              </div>
              <div className="member">
                <Image src={jason} />
                <h2>JASON WAGENAAR</h2>
                <h4>VP BUSINESS DEVELOPMENT</h4>
                <p>
                  In Fargo, North Dakota I ran from from the Holiday Inn to
                  Hornbachers in under 60 seconds.
                </p>
              </div>
              <div className="member">
                <Image src={pam} />
                <h2>PAM MCCALLUM</h2>
                <h4>CLIENT CONCIERGE</h4>
                <p>
                  I'm a Seinfeld junky and can quote any episode...and do daily
                  :) 'Hellooooooooooo La La Laaaaa'
                </p>
              </div>
              <div className="member">
                <Image src={brett} />
                <h2>BRETT WOODMAN</h2>
                <h4>DIRECTOR, PLATFORM DEVELOPMENT</h4>
                <p>
                  My childhood nickname was 'the bread basket'. I still love
                  bread, and have added cookies to the list.
                </p>
              </div>
              <div className="member">
                <Image src={anonh} />
                <h2>ANONH KHOUVONGSAVANH</h2>
                <h4>DIRECTOR, PREDICTIVE SCHEDULING</h4>
                <p>
                  A life goal of mine is to one day visit all the continents of
                  the world. Three more to go!
                </p>
              </div>
              <div className="member">
                <Image src={grant} />
                <h2>GRANT ROGERS</h2>
                <h4>VP SALES</h4>
                <p>
                  If Grant's life were to be made into a TV movie, he would be
                  played by Alec Baldwin from Glengarry Glen Ross. "A B C"
                </p>
              </div>
              <div className="member">
                <Image src={Deano} />
                <h2>DEAN SACCO</h2>
                <h4>DIRECTOR, CLIENT SUCCESS</h4>
                <p>
                  The Dos Equis ‘Most Interesting Man in The World’ is loosely
                  based on Dean's life and his Seinfeld knowledge rivals Pam.
                  Former Ameego user, forever Ameego enthusiast.
                </p>
              </div>
              <div className="member">
                <Image src={ty} />
                <h2>TYLER EDWARDS</h2>
                <h4>DIRECTOR, POC SUCCESS</h4>
                <p>
                  Guilty pleasure: watching Slice TV. I'm pretty sure I'm
                  addicted to Million Dollar Listing LA and New York. Not
                  totally sold on San Fran yet...
                </p>
              </div>
              <div className="member">
                <Image src={don} />
                <h2>JORDAN KOVACS</h2>
                <h4>DIRECTOR, FINANCE</h4>
                <p>
                  Guilty pleasure: watching Slice TV. I'm pretty sure I'm
                  addicted to Million Dollar Listing LA and New York. Not
                  totally sold on San Fran yet...
                </p>
              </div>
            </div>
            <FeatureSections />
          </Container>
        </div>
        <Footer />
      </ContentWrapper>
    </ThemeProvider>
  );
};

export default About;
