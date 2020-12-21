import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ResetCSS } from 'common/src/assets/css/style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { GlobalStyle, ContentWrapper } from '../containers/Saas/saas.style';
import Sticky from 'react-stickynode';
import { saasTheme } from 'common/src/theme/saas';
import Main from 'common/src/assets/image/billboard.jpg';
import 'common/src/assets/css/styles.css';
import Navbar from '../containers/Saas/Navbar';
import Container from 'common/src/components/UI/Container';
import Footer from '../containers/Saas/Footer';
import SEO from '../components/seo';


const Contact = () => {
  return (
    <ThemeProvider theme={saasTheme}>
      <SEO title='Contact Us' description='Get in touch with Ameego team to help answer your all queries related to the product' />
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
            <form id="contact" action="" method="post">
              <h1>Get in touch with us</h1>
              <fieldset>
                <input
                  placeholder="Your name"
                  type="text"
                  tabindex="1"
                  required
                  autofocus
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your Email Address"
                  type="email"
                  tabindex="2"
                  required
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your Phone Number"
                  type="tel"
                  tabindex="3"
                  required
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your Company's name"
                  type="text"
                  tabindex="4"
                  required
                />
              </fieldset>
              <fieldset>
                <select
                  placeholder="Your Email Address"
                  type="email"
                  tabindex="2"
                  required
                >
                  <option value="" disabled selected hidden>
                    {' '}
                    How can we help you?
                  </option>
                  <option value="Account and Billing changes">
                    Account and Billing changes
                  </option>
                  <option value="Pricing Inquiry">Pricing Inquiry</option>
                  <option value="Request Demo">Request Demo</option>
                  <option value="Talk to a sales rep">
                    Talk to a sales rep
                  </option>
                </select>
              </fieldset>
              <fieldset>
                <textarea
                  placeholder="Type your Message Here...."
                  tabindex="5"
                  required
                ></textarea>
              </fieldset>
              <fieldset>
                <button
                  name="submit"
                  type="submit"
                  id="contact-submit"
                  data-submit="...Sending"
                >
                  Submit
                </button>
              </fieldset>
            </form>
          </Container>
        </div>
        <Footer />
      </ContentWrapper>
    </ThemeProvider>
  );
};

export default Contact;
