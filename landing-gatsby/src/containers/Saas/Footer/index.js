import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Logo from 'common/src/components/UIElements/Logo';
import Container from 'common/src/components/UI/Container';
import FooterWrapper, { List, ListItem } from './footer.style';

import Facebook from 'common/src/assets/image/facebook.png';
import Twitter from 'common/src/assets/image/twitter.png';
import Linkedin from 'common/src/assets/image/linkedin.png';

import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  colThree,
  titleStyle,
  logoStyle,
  textStyle
}) => {
  const Data = useStaticQuery(graphql`
    query {
      saasJson {
        Footer_Data {
          title
          menuItems {
            text
            url
          }
        }
      }
    }
  `);

  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Logo
              href="#"
              logoSrc={Facebook}
              title="Hosting"
              logoStyle={logoStyle}
            />
            <Text
              content="P.O. Box 70057,
1-1660 Kenaston Blvd.
Winnipeg MB, R3X 0P6"
              {...textStyle}
              style={{
                paddingLeft: '0px',
                marginBottom: '30px',
                marginTop: '30px'
              }}
            />
            <Text
              content="P: 800-770-7319"
              {...textStyle}
              style={{ paddingLeft: '0px', marginBottom: '30px' }}
            />
            <Text
              content="Connect with us"
              {...textStyle}
              style={{ paddingLeft: '0px', marginBottom: '30px' }}
            />

            <div style={{ display: 'flex' }}>
              <a
                href="https://www.facebook.com/pages/Ameego/9863084037"
                target="_blank"
              >
                <Image
                  src={Facebook}
                  title="Facebook"
                  style={{
                    width: '20px',
                    marginRight: '20px',
                    display: 'inline !important'
                  }}
                />
              </a>
              <a href="https://twitter.com/myameego" target="_blank">
                <Image
                  src={Twitter}
                  title="Twitter"
                  style={{
                    width: '20px',
                    marginRight: '20px',
                    display: 'inline !important'
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/ameego-workforce-solutions"
                target="_blank"
              >
                <Image
                  src={Linkedin}
                  title="Linkedin"
                  style={{
                    width: '20px',
                    marginRight: '20px',
                    display: 'inline !important'
                  }}
                />
              </a>
            </div>
          </Box>
          {/* End of footer logo column */}
            <Box {...colTwo}></Box>
          <Box {...colThree}>
            <Text
              content="GET A DEMO"
              {...textStyle}
              style={{ paddingLeft: '0px', height: '0', fontWeight: '500' }}
            />
            <Text
              content="Looking to save time and make more money? Let us help you get your restaurant schedules off paper and optimize your labor."
              {...textStyle}
              style={{ paddingLeft: '0px' }}
            />
            <Button
              title="Request a Demo! "
              style={{ minHeight: '0', paddingTop: '0', paddingBottom: '0' }}
            ></Button>
          </Box>
          {/* End of footer List column */}
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  colThree: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0]
  },
  colTwo: {
    width: ['30%', '35%', '35%', '33%'],
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Footer col two style
  colThree: {
    width: ['70%', '30%', '30%', '33%'],
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '20px',
    fontWeight: '700',
    mb: '30px'
  },
  // Default logo size
  logoStyle: {
    width: '20px',
    mb: '15px'
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px'
  }
};

export default Footer;
