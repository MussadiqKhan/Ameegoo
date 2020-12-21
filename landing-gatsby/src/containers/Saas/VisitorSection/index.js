import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Card from 'common/src/components/Card';
import Image from 'common/src/components/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import VisitorSectionWrapper, { SectionObject } from './visitor.style';

import ImageOne from 'common/src/assets/image/saas/saasvisitor1.png';
import ImageBg from 'common/src/assets/image/saas/visitor_bg.png';
import keg from 'common/src/assets/image/keg-logo.png';
import forecast from 'common/src/assets/image/forecast-image-optimised.png';
import employee from 'common/src/assets/image/Shift-shop-optimised.png';
import reporting from 'common/src/assets/image/reporting.png';

import logoClient from 'common/src/assets/image/logo-client.png';
import smittys from 'common/src/assets/image/smittys.png';

import marios from 'common/src/assets/image/marios.png';

const VisitorSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle
}) => {
  return (
    <div>
      <VisitorSectionWrapper id="visitorSection">
        <div style={{ marginBottom: '60px' }}>
          <SectionObject>
            <Card className="objectWrapper" {...imageWrapper}>
              <Zoom>
                <Image src={ImageBg} alt="BgImage" />
              </Zoom>
              <Card className="dashboardWrapper" {...imageWrapper}>
                <Fade left>
                  <Image src={ImageOne} alt="VisitorDashboard1" />
                </Fade>
              </Card>
            </Card>
          </SectionObject>
        </div>
        <Container>
          <Box {...textArea}>
            <h6 style={{ color: '#faa61c', margin: '0' }}>
              CREATE THE PERFECT SCHEDULE
            </h6>
            <FeatureBlock
              title={
                <Heading
                  content="One touch scheduling
                "
                  {...title}
                />
              }
              description={
                <Text
                  content="Ameego’s one touch scheduling tool will automatically create schedules in seconds not hours! Employee profiles guarantee that skill level, weekly availability, and time off requests are perfect every time."
                  {...description}
                />
              }
            />
            <img src={keg} style={{ maxWidth: '120px', maxHeight: '60px' }} />

            <p style={{ fontStyle: 'italic', color: '#545856' }}>
              “Ameego is saving us six to eight hours per week in management
              time through effective communication and scheduling.”
            </p>
            <p style={{ fontSize: '0.8em' }}>
              <b>SCOTT STEPHEN - DIRECTOR OF OPERATIONS</b>
            </p>
          </Box>
        </Container>
      </VisitorSectionWrapper>
      <VisitorSectionWrapper id="visitorSection">
        <div style={{ marginBottom: '60px' }}>
          <SectionObject>
            <Card className="objectWrapper" {...imageWrapper}>
              <Zoom>
                <Image src={ImageBg} alt="BgImage" />
              </Zoom>
              <Card className="dashboardWrapper" {...imageWrapper}>
                <Fade left>
                  <Image src={forecast} alt="VisitorDashboard1" />
                </Fade>
              </Card>
            </Card>
          </SectionObject>
        </div>
        <Container>
          <Box {...textArea}>
            <h6 style={{ color: '#faa61c', margin: '0' }}>FORECASTING</h6>
            <FeatureBlock
              title={
                <Heading
                  content="Automated sales forecasting

                "
                  {...title}
                />
              }
              description={
                <Text
                  content="Ameego uses historical data gathered from your POS system to create unique and optimized schedules. Plus with data from our log books and event calendar at your fingertips, you’ll always get it right."
                  {...description}
                />
              }
            />
            <img
              src={marios}
              style={{ maxWidth: '120px', maxHeight: '60px' }}
            />

            <p style={{ fontStyle: 'italic', color: '#545856' }}>
              “I didn’t think our store was ‘wasting’ hours and in our case, we
              were able to cut labour cost by half a percentage point in a
              matter of two schedules.”
            </p>
            <p style={{ fontSize: '0.8em' }}>
              <b>BARRY REED – FRANCHISEE</b>
            </p>
          </Box>
        </Container>
      </VisitorSectionWrapper>
      <VisitorSectionWrapper id="visitorSection">
        <div style={{ marginBottom: '60px' }}>
          <SectionObject>
            <Card className="objectWrapper" {...imageWrapper}>
              <Zoom>
                <Image src={ImageBg} alt="BgImage" />
              </Zoom>
              <Card className="dashboardWrapper" {...imageWrapper}>
                <Fade left>
                  <Image src={employee} alt="VisitorDashboard1" />
                </Fade>
              </Card>
            </Card>
          </SectionObject>
        </div>
        <Container>
          <Box {...textArea}>
            <h6 style={{ color: '#faa61c', margin: '0' }}>
              EMPLOYEE MANAGEMENT
            </h6>
            <FeatureBlock
              title={
                <Heading
                  content="Keep your employees happy


                "
                  {...title}
                />
              }
              description={
                <Text
                  content="Ameego’s online employee portal gives your staff the ability to view schedules, request time off, change their availability, and trade shifts easily via our online portal or mobile app (and you can approve or deny them just as easily!).

                  "
                  {...description}
                />
              }
            />
            <img
              src={logoClient}
              style={{ maxWidth: '120px', maxHeight: '60px' }}
            />

            <p style={{ fontStyle: 'italic', color: '#545856' }}>
              “Ameego allows our staff to be engaged with the restaurant and
              with each other by making communication easy using text, email,
              and a message board. Plus, having control of shift drops and
              pickups through Ameego allows us to always put our guests first.
              We can spend time on customer experience and not on staff
              requests.”
            </p>
            <p style={{ fontSize: '0.8em' }}>
              <b>KRIS KOPANSKY - OWNER</b>
            </p>
          </Box>
        </Container>
      </VisitorSectionWrapper>
      <VisitorSectionWrapper id="visitorSection">
        <div style={{ marginBottom: '60px' }}>
          <SectionObject>
            <Card className="objectWrapper" {...imageWrapper}>
              <Zoom>
                <Image src={ImageBg} alt="BgImage" />
              </Zoom>
              <Card className="dashboardWrapper" {...imageWrapper}>
                <Fade left>
                  <Image src={reporting} alt="VisitorDashboard1" />
                </Fade>
              </Card>
            </Card>
          </SectionObject>
        </div>
        <Container>
          <Box {...textArea}>
            <h6 style={{ color: '#faa61c', margin: '0' }}>Reporting </h6>
            <FeatureBlock
              title={
                <Heading
                  content="Detailed daily reports"
                  {...title}
                />
              }
              description={
                <Text
                  content="Breakdown key sales and labor metrics including sales, hours worked, labor percentage, and cost per man-hour both by department and by timeframe. This way you can line up your projections with your actuals to figure out where you can tighten up to save money.



                  "
                  {...description}
                />
              }
            />
            <img
              src={logoClient}
              style={{ maxWidth: '120px', maxHeight: '60px' }}
            />

            <p style={{ fontStyle: 'italic', color: '#545856' }}>
              “By being able to quickly see and compare results, our managers
              are more aware and effective in controlling our labour costs.
            </p>
            <p style={{ fontSize: '0.8em' }}>
              <b>CHRIS DYCK - GENERAL MANAGER</b>
            </p>
          </Box>
        </Container>
      </VisitorSectionWrapper>
    </div>
  );
};

VisitorSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object
};

VisitorSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%']
  },
  imageWrapper: {
    boxShadow: 'none'
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px']
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg'
  }
};

export default VisitorSection;
