import React from 'react';
import Footer from '../home/Footer';
import Navigation, {NavDefault} from "../home/Navigation"
import {Typography, Container }from "@material-ui/core"
// import Container from "@material-ui/core/Container"
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {nav} from '../home/navlinks'

const Privacy = () => {
    
    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Fira Sans',
            'sans-serif',
          ].join(','),
        },});

    const email = 'help@sharity.com';

  return (
    <div id="privacy" style={{background:"#dbe3f0"}} className="background" >
       <ThemeProvider theme={theme} >
            <Typography variant="h3" style={{color: "#55a0cc", textAlign: "center"}} className="terms-words">  
    <h3>Privacy Policy</h3>
    </Typography>
    </ThemeProvider>
    <Container>
            <div>
            <ThemeProvider theme={theme} >
            <Typography variant="h6" className="terms-words2">
                <h6><em>Last updated April 15th, 2021:</em></h6>
                </Typography>
                </ThemeProvider>
    
            <ThemeProvider theme={theme} >
            <Typography variant="h5" className="terms-words3"> 
              <h5>INTRODUCTION</h5>
              Thank you for choosing to be part of our community at Sharity (“company”, “we”, “us”, or “our”). We are committed to protecting 
              your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices 
              with regards to your personal information, please contact us at {email}.
              <br/><br/>
              When you visit our website sharity-technyc.herokuapp.com (“Site”) and use our services, you trust us with your personal information. We 
              take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the 
              clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take 
              some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree 
              with, please discontinue use of our site and our services.
              <br/><br/>
              <strong>Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information 
              with us.</strong>
              <br/><br/>
              <p>This privacy policy was created using Termly. </p>

              <h5>WHAT INFORMATION DO WE COLLECT?</h5>
              <strong> Personal information you disclose to us</strong>
              <br/><br/>
              <em>In Short: We collect personal information that you provide to us such as name, contact information, and passwords and security 
              data.</em>
              <br/><br/>
              We collect personal information that you voluntarily provide to us when registering at the Site, expressing an interest in obtaining 
              information about us, or otherwise contacting us. The personal information that we collect depends on the context of your interactions 
              with us and the Site, the choices you make and the features you use. The personal information we COLLECT can include the following:
              <br/>
              <em>Name and Contact Data</em>. We collect your first and last name, and email address.<br/>
              <em>Credentials</em>. We collect passwords and similar security information used for authentication and account access.
              <br/><br/>
              All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such 
              personal information.  
              <br/><br/>
              <strong>Information automatically collected</strong><br/>
              <em>In Short: Some information – such as IP address and/or browser and device characteristics – is collected automatically when you visit 
              our websites.</em>
              <br/><br/>
              We automatically collect certain information when you visit, use or navigate the Site. This information does not reveal your specific 
              identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device 
              characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you 
              use our Site and other technical information.  This information is primarily needed to maintain the security and operation of our Site, and 
              for our internal analytics and reporting purposes.
              <br/><br/>
              <p>Like many businesses, we also collect information through cookies and similar technologies.</p>

              <h5>HOW DO WE USE YOUR INFORMATION?</h5>
              <em>In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, 
                compliance with our legal obligations, and/or your consent.</em>
              <br/><br/>
              We use personal information collected via our Site for a variety of business purposes described below. We process your personal information 
              for these purposes in reliance on our legitimate business interests ("Business Purposes"), in order to enter into or perform a contract with 
              you ("Contractual"), with your consent ("Consent"), and/or for compliance with our legal obligations ("Legal Reasons"). We indicate the 
              specific processing grounds we rely on next to each purpose listed below.
              <br/><br/>
              We use the information we collect or receive:
              <p>
                <ul>
                  <li>To facilitate account creation and logon process with your Consent.</li>
                  <li>To send administrative information to you. We may use your personal information to send you service and new feature information and/or 
                    information about changes to our terms, conditions, and policies.</li>
                  <li>Request Feedback with your Consent. We may use your information to request feedback and to contact you about your use of our Site.</li>
                  <li>To protect our Site.  We may use your information as part of our efforts to keep our Site safe and secure (for example, for fraud 
                    monitoring and prevention).</li>
                  <li>To enforce our terms, conditions and policies.</li>
                  <li>To respond to legal requests and prevent harm. If we receive a subpoena or other legal request, we may need to inspect the data we hold 
                    to determine how to respond.</li>
                  <li>For other Business Purposes. We may use your information for other Business Purposes, such as data analysis, identifying usage trends, 
                    and to evaluate and improve our Site and your experience.</li>
                </ul>
              </p>
              
              <h5>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h5>
              <em>In Short: We only share information with your consent, to comply with laws, to protect your rights, or to fulfill business obligations.</em>
              <br/><br/>
              We only share and disclose your information in the following situations:<br/>
              <p>
                <ul>
                  <li><strong>Compliance with Laws</strong>. We may disclose your information where we are legally required to do so in order to comply with 
                  applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a 
                  subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
                  <li><strong>Vital Interests and Legal Rights</strong>. We may disclose your information where we believe it is necessary to investigate, 
                  prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety 
                  of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
                  <li><strong>Third-Party Service Providers</strong>. We may share your data with third party service providers who perform services for us or 
                  on our behalf and require access to such information to do that work. Examples include: data analysis, email delivery, and hosting services. 
                  We may allow selected third parties to use tracking technology on the Sites, which will enable them to collect data about how you interact with 
                  the Site over time.  Unless described in this Policy, we do not share, sell, rent or trade any of your information with third parties for their 
                  promotional purposes.</li>
                  <li><strong>With your Consent</strong>. We may disclose your personal information for any other purpose with your consent.</li>
                </ul>
              </p>
            
            <h5>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h5>
            <em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em>
            <br/><br/>
            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information.</p>

            <h5>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h5>
            <em>In Short: We may transfer, store, and process your information in countries other than your own.</em>
            <br/><br/>
            Our servers are located in the United States of America. If you are accessing our Site from outside the United States of America, please be aware that 
            your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal 
            information.
            <br/><br/>
            If you are a resident in the European Economic Area, then these countries may not have data protection or other laws as comprehensive as those in your 
            country. We will however take all necessary measures to protect your personal information in accordance with this privacy policy and applicable law.
            <br/><br/> 
            <p>European Commission's Standard Contractual Clauses: Such measures implementing the European Commission's Standard Contractual Clauses for transfers 
              of personal information between our group companies and between us and our third-party providers, which require all such recipients to protect 
              personal information that they process from the EEA in accordance with European data protection laws.  We have implemented similar appropriate 
              safeguards with our third party service providers and partners and further details can be provided upon request.</p>

            <h5>HOW LONG DO WE KEEP YOUR INFORMATION?</h5>
            <em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by 
              law.</em>
            <br/><br/>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention 
            period is required or permitted by law. No purpose in this policy will require us keeping your personal information for longer than the period of time 
            in which you have an account with us.
            <br/><br/>
            <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not 
              possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information 
              and isolate it from any further processing until deletion is possible.</p>

            <h5>HOW DO WE KEEP YOUR INFORMATION SAFE?</h5>
            <em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em> 
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we 
              process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect 
              your personal information, transmission of personal information to and from our Site is at your own risk. You should only access the services within 
              a secure environment.</p> 

            <h5>DO WE COLLECT INFORMATION FROM MINORS?</h5>
            <em>In Short: We do not knowingly collect data from children under 18 years of age.</em>
            <br/><br/>
            <p>We do not knowingly solicit data from children under 18 years of age.  By using the Site, you represent that you are at least 18 or that you are the 
              parent or guardian of such a minor and consent to such minor dependent’s use of the Site.  If we learn that personal information has been collected 
              from users less than 18 years of age who have not obtained consent from a parent or guardian, we will deactivate the account(s) and take reasonable 
              measures to promptly delete such data from our records.  If you become aware of any data we have collected from children under age 18, please contact 
              us at [EMAIL].</p>   

            <h5>WHAT ARE YOUR PRIVACY RIGHTS?</h5>
            <em>In Short: You may review, change, or terminate your account at any time.</em>
            <br/><br/>
            We rely on your consent to process your personal information. You have the right to withdraw your consent at any time. Please note however that this 
            will not affect the lawfulness of the processing before its withdrawal.
            <br/><br/>
            If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to 
            complain to your local data protection supervisory authority. You can find their contact details here: 
            http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
            <br/><br/>
            <strong>Account Information</strong><br/>
            You may at any time review or change the information in your account or terminate your account by:<br/>
            <ul>
              <li>Logging into your account settings and updating your account</li>
              <li>Contacting us using the contact information provided below</li>
            </ul>
            Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some 
            information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or 
            comply with legal requirements.
            <br/><br/>
            <p><strong>Cookies and similar technologies</strong>: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose 
            to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features 
            or services of our Sites.</p>

            <h5>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h5>
            <em>In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em>
            <br/><br/>
            California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain 
            from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct 
            marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. 
            If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided 
            below.
            <br/><br/>
            <p>If you are under 18 years of age, reside in California, and have a registered account with the Site, you have the right to request removal of unwanted 
              data that you publicly post on the Site. To request removal of such data, please contact us using the contact information provided below, and include 
              the email address associated with your account and a statement that you reside in California.  We will make sure the data is not publicly displayed on 
              the Site, but please be aware that the data may not be completely or comprehensively removed from our systems.</p>

            <h5>DO WE MAKE UPDATES TO THIS POLICY?</h5>
            <em>In Short: Yes, we will update this policy as necessary to stay compliant with relevant laws.</em>
            <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will 
              be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice 
              of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are 
              protecting your information.</p>

            <h5>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h5>
            <p>If you have questions or comments about this policy, email us at {email}.</p>
            </Typography>
            </ThemeProvider>
            </div>
            </Container>
      <Footer/>
      
      </div>
  )

}



export default Privacy;