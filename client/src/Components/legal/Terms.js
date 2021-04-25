import React from 'react';
import Footer from '../home/Footer';
import {Typography, Container }from "@material-ui/core"
import {ThemeProvider, createMuiTheme, } from "@material-ui/core/styles";


const Terms = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Fira Sans',
        'sans-serif',
      ].join(','),
    },
  });
  const email = 'help@sharity.com';
  return (
      <div id="terms" style={{background:"#dbe3f0"}} className="background-tos" >
        <Container>
          <ThemeProvider theme={theme} >
              <Typography variant="h3" style={{color: "#55a0cc", textAlign: "center", paddingTop: "5%"}}>Terms of Service</Typography>
          </ThemeProvider>
          <ThemeProvider theme={theme} >
            <Typography variant="h6" className="terms-words2">
              <em>Last updated April 15, 2021:</em>
            </Typography>
          </ThemeProvider>
          <ThemeProvider theme={theme} >
            <Typography variant="h5" className="terms-words3">
              <h5>AGREEMENT TO TERMS</h5>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity 
              (“you”) and Sharity (“we,” “us” or “our”), concerning your access to and use of the [sharity-technyc.herokuapp.com] website as well as any 
              other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto 
              (collectively, the “Site”). 
              <br/><br/>
              You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you 
              do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue 
              use immediately.
              <br/><br/>
              Supplemental Terms of Service or documents that may be posted on the Site from time to time are hereby expressly incorporated 
              herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service 
              at any time and for any reason. 
              <br/><br/>
              We will alert you about any changes by updating the “Last updated” date of these Terms of Service, and you waive any right to 
              receive specific notice of each such change. 
              <br/><br/>
              It is your responsibility to periodically review these Terms of Service to stay informed of updates. You will be subject to, and 
              will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Service by your continued 
              use of the Site after the date such revised Terms of Service are posted. 
              <br/><br/>
              The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or 
              country where such distribution or use would be contrary to law or regulation or which would subject us to any registration 
              requirement within such jurisdiction or country. 
              <br/><br/>
              Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely 
              responsible for compliance with local laws, if and to the extent local laws are applicable. 
              <br/><br/>
              These terms of service were created using Termly.
              <br/><br/>
              <p>The Site is intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they 
              reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian 
              to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms of Service prior to 
              you using the Site.</p>
          
              <h5>INTELLECTUAL PROPERTY RIGHTS</h5>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, 
              website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, 
              service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by 
              copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, 
              foreign jurisdictions, and international conventions. 
              <br/><br/>
              The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly 
              provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, 
              uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for 
              any commercial purpose whatsoever, without our express prior written permission.
              <br/><br/>
              <p>Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or 
              print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. 
              We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.</p>

              <h5>USER REPRESENTATIONS</h5>
              By using the Site, you represent and warrant that:
              <br/>
              <ol>
              <li>all registration information you submit will be true, accurate, current, and complete;</li>
              <li>you will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
              <li>you have the legal capacity and you agree to comply with these Terms of Service; </li>
              <li>you are not under the age of 13;</li>
              <li>not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site; </li>
              <li>you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; </li>
              <li>you will not use the Site for any illegal or unauthorized purpose; </li>
              <li>your use of the Site will not violate any applicable law or regulation.</li>
              </ol>
              <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate 
              your account and refuse any and all current or future use of the Site (or any portion thereof).</p>
          
              <h5>USER REGISTRATION</h5>
              <p>You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your 
              account and password.</p>

              <h5>PROHIBITED ACTIVITIES</h5>
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in 
              connection with any commercial endeavors except those that are specifically endorsed or approved by us. 
              <br/><br/>
              As a user of the Site, you agree not to:
              <ol>
                <li>systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, 
                  database, or directory without written permission from us.</li>
                <li>make any unauthorized use of the Site, including collecting names and/or email addresses of users by electronic or other means for 
                  the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                <li>circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict 
                  the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</li>
                <li>engage in unauthorized framing of or linking to the Site.</li>
                <li>trick, defraud, or mislead us, especially in any attempt to learn sensitive account information such as user passwords;</li>
                <li>make improper use of our support services or submit false reports of abuse or misconduct.</li>
                <li>engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or 
                  similar data gathering and extraction tools.</li>
                <li>interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
                <li>attempt to impersonate another user or person.</li>
                <li>sell or otherwise transfer your profile.</li>
                <li>use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
                <li>use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating 
                  endeavor or commercial enterprise.</li>
                <li>decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.</li>
                <li>attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.</li>
                <li>harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.</li>
                <li>delete the copyright or other proprietary rights notice from any Content.</li>
                <li>copy or adapt the Site’s software, including but not limited to HTML, JavaScript, or other code.</li>
                <li>upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital 
                  letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the 
                  Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</li>
                <li>upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or 
                  transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other 
                  similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).</li>
                <li>except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, 
                  including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching 
                  any unauthorized script or other software.</li>
                <li>disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
                <li>use the Site in a manner inconsistent with any applicable laws or regulations.</li>
              </ol>

              <h5>THIRD-PARTY CONTENT</h5>
              The Site may contain photographs, text, graphics, pictures, designs, information, applications, and other content belonging to or originating from 
              third parties ("Third-Party Content"). 
              <br/><br/>
              Such Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible 
              for any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, 
              reliability, privacy practices, or other policies of or contained in the Third-Party Content. 
              <br/><br/>
              Inclusion of, linking to, or permitting the use or installation of any Third-Party Content does not imply approval or endorsement thereof by us. If 
              you decide to leave the Site and use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Service 
              no longer govern. 
              <br/><br/>
              You should review the applicable terms and policies, including privacy and data gathering practices, relating to any applications you use or install 
              from the Site.
              <br/><br/>
              <p>You agree and acknowledge that we do not endorse the services offered by Third-Party Content and you shall hold us harmless from any losses sustained 
              by you or harm caused to you relating to or resulting in any way from any Third-Party Content.</p>

              <h5>SITE MANAGEMENT</h5>
              We reserve the right, but not the obligation, to: 
              <ol>
                <li>monitor the Site for violations of these Terms of Service; </li>
                <li>take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service, including without limitation, 
                  reporting such user to law enforcement authorities; </li>
                <li>in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically 
                  feasible) any of your Contributions or any portion thereof;</li>
                <li>in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are 
                  excessive in size or are in any way burdensome to our systems; </li>
                <li>otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.</li>
              </ol>

              <h5>PRIVACY POLICY</h5>
              We care about data privacy and security. Please review our Privacy Policy [CLICK HERE]/posted on the Site. By using the Site, you agree to be bound by 
              our Privacy Policy, which is incorporated into these Terms of Service. Please be advised the Site is hosted in the United States. 
              <br/><br/>
              If you access the Site from the European Union, Asia, or any other region of the world with laws or other requirements governing personal data collection, 
              use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Site, you are transferring your data to 
              the United States, and you expressly consent to have your data transferred to and processed in the United States. 
              <br/><br/>
              <p>Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children. Therefore, in accordance with the U.S. 
              Children’s Online Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without 
              the requisite and verifiable parental consent, we will delete that information from the Site as quickly as is reasonably practical.</p>

              <h5>DIGITAL MILLENNIUM COPYRIGHT ACT NOTICE AND POLICY</h5>
              <strong>Notifications</strong><br/>
              We respect the intellectual property rights of others. If you believe that any material available on or through the Site infringes upon any copyright you own 
              or control, please immediately notify our Designated Copyright Agent using the contact information provided below (a “Notification”). 
              <br/><br/>
              A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to 
              federal law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on 
              or linked to by the Site infringes your copyright, you should consider first contacting an attorney.
              <br/><br/>
              All Notifications should meet the requirements of DMCA 17 U.S.C. § 512(c)(3) and include the following information: 
              <ol>
                <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed; </li>
                <li>identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works on the Site are covered by the 
                  Notification, a representative list of such works on the Site; </li>
                <li>identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access 
                  to which is to be disabled, and information reasonably sufficient to permit us to locate the material; </li>
                <li>information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number, and, if available, an email 
                  address at which the complaining party may be contacted;</li>
                <li>a statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the 
                  copyright owner, its agent, or the law;</li>
                <li>a statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act 
                  on behalf of the owner of an exclusive right that is allegedly infringed upon.</li>
              </ol>
              <strong>Counter Notification</strong><br/>
              If you believe your own copyrighted material has been removed from the Site as a result of a mistake or misidentification, you may submit a written 
              counter notification to [us/our Designated Copyright Agent] using the contact information provided below (a “Counter Notification”). 
              <br/><br/>
              To be an effective Counter Notification under the DMCA, your Counter Notification must include substantially the following: 
              <ol>
                <li>identification of the material that has been removed or disabled and the location at which the material appeared before it was removed or 
                  disabled;</li>
                <li>a statement that you consent to the jurisdiction of the Federal District Court in which your address is located, or if your address is outside 
                  the United States, for any judicial district in which we are located;</li>
                <li>a statement that you will accept service of process from the party that filed the Notification or the party's agent;</li>
                <li>your name, address, and telephone number;</li>
                <li>a statement under penalty of perjury that you have a good faith belief that the material in question was removed or disabled as a result of a 
                  mistake or misidentification of the material to be removed or disabled;</li>
                <li>your physical or electronic signature.</li>
              </ol>
              If you send us a valid, written Counter Notification meeting the requirements described above, we will restore your removed or disabled material, unless 
              we first receive notice from the party filing the Notification informing us that such party has filed a court action to restrain you from engaging in 
              infringing activity related to the material in question.
              <br/><br/>
              Please note that if you materially misrepresent that the disabled or removed content was removed by mistake or misidentification, you may be liable for 
              damages, including costs and attorney's fees. Filing a false Counter Notification constitutes perjury.
              <br/><br/>
              <p>Designated Copyright Agent
              <br/>
              [Name]
              <br/>
              Attn: Copyright Agent
              <br/>
              [Address]
              <br/>
              [City, State Zip]
              <br/>
              [email]</p>
              
              <h5>COPYRIGHT INFRINGEMENTS</h5>
              We respect the intellectual property rights of others. If you believe that any material available on or through the Site infringes upon any copyright 
              you own or control, please immediately notify us using the contact information provided below (a “Notification”). A copy of your Notification will be 
              sent to the person who posted or stored the material addressed in the Notification. 
              <p>Please be advised that pursuant to federal law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if 
              you are not sure that material located on or linked to by the Site infringes your copyright, you should consider first contacting an attorney.</p>
              
              <h5>TERM AND TERMINATION</h5>
              These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE 
              RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), 
              TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE 
              TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE [YOUR ACCOUNT AND] ANY CONTENT OR 
              INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION. 
              <br/><br/>
              If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed 
              name, or the name of any third party, even if you may be acting on behalf of the third party.
              <br/><br/>
              <p>In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing 
              civil, criminal, and injunctive redress.</p>
              
              <h5>MODIFICATIONS AND INTERRUPTIONS</h5>
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we 
              have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
              <br/><br/>
              We will not be liable to you or any third party for any modification, suspension, or discontinuance of the Site. 
              We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to 
              the Site, resulting in interruptions, delays, or errors. 
              <br/><br/>
              We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You 
              agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or 
              discontinuance of the Site. 
              <br/><br/>
              <p>Nothing in these Terms of Service will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in 
              connection therewith.</p>
              
              <h5>GOVERNING LAW</h5>
              <p>These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of the State of New York applicable to 
              agreements made and to be entirely performed within the State of New York, without regard to its conflict of law principles.</p>
              
              <h5>DISPUTE RESOLUTION</h5>
              <strong>Informal Negotiations</strong><br/>
              If a dispute arises between you and Sharity, our goal is to provide you with a neutral and cost-effective means of resolving the dispute quickly. In the event of 
              a dispute we encourage you first to contact us to resolve your problem directly with us. You may contact us regarding any complaints or disputes at the Contact 
              Us portion of the Website.
              <br/><br/>
              To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Service (each a "Dispute" and collectively, the 
              “Disputes”) brought by either you or us (individually, a “Party” and collectively, the “Parties”), the Parties agree to first attempt to negotiate any Dispute 
              (except those Disputes expressly provided below) informally before initiating arbitration. Such informal negotiations commence upon written notice from one Party 
              to the other Party.
              <br/><br/>
              <strong>Binding Arbitration</strong><br/>
              If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and 
              exclusively resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. 
              <br/><br/>
              The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association ("AAA") and, where appropriate, 
              the AAA’s Supplementary Procedures for Consumer Related Disputes ("AAA Consumer Rules"), both of which are available at the AAA website www.adr.org.
              <br/><br/>
              Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules.
              <br/><br/>
              The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not 
              provide a statement of reasons unless requested by either Party. 
              <br/><br/>
              The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except as otherwise provided herein, the Parties may 
              litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.
              <br/><br/>
              <strong>Restrictions</strong><br/>
              <p>The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall 
              be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; 
              and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.</p>
              
              <h5>CORRECTIONS</h5>
              <p>There may be information on the Site that contains typographical errors, inaccuracies, or omissions that may relate to the Site, including descriptions and 
              various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, 
              without prior notice.</p>
              
              <h5>INDEMNIFICATION</h5>
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and 
              against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the 
              Site; (2) breach of these Terms of Service; (3) any breach of your representations and warranties set forth in these Terms of Service; (4) your violation of the rights of 
              a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site.
              <br/><br/>

              <p>Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, 
              and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is 
              subject to this indemnification upon becoming aware of it.</p>

              <h5>USER DATA</h5>
              We will maintain certain data that you transmit to the Site for the purpose of managing the Site, as well as data relating to your use of the Site. Although we perform regular 
              routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. 
              <p>You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such 
              loss or corruption of such data.</p>

              <h5>ELECTRONIC COMMUNICATIONS AND SIGNATURES</h5>
              Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that 
              all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such 
              communication be in writing. 
              <br/><br/>
              YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES AND POLICIES. 
              <br/><br/>
              <p>You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature 
              or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</p>

              <h5>CALIFORNIA USERS AND RESIDENTS</h5>
              <p>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California 
              Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.</p>

              <h5>MISCELLANEOUS</h5>
              These Terms of Service and any policies or operating rules posted by us on the Site constitute the entire agreement and understanding between you and us. Our failure 
              to exercise or enforce any right or provision of these Terms of Service shall not operate as a waiver of such right or provision.
              <br/><br/>
              These Terms of Service operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be 
              responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. 
              <br/><br/>
              If any provision or part of a provision of these Terms of Service is determined to be unlawful, void, or unenforceable, that provision or part of the provision is 
              deemed severable from these Terms of Service and does not affect the validity and enforceability of any remaining provisions.
              <br/><br/>
              There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Service or use of the Site. You agree that 
              these Terms of Service will not be construed against us by virtue of having drafted them. 
              <br/><br/>
              <p>You hereby waive any and all defenses you may have based on the electronic form of these Terms of Service and the lack of signing by the parties 
              hereto to execute these Terms of Service.</p>

              <h5>CONTACT US</h5>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at {email}.
              <br/><br/>
            </Typography>
          </ThemeProvider>   
        </Container>
      <Footer/>
    </div>
    )
}
        
        
        
export default Terms; 