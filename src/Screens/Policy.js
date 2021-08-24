import React, { useEffect } from "react";
import "./Faq.css";
import { Accordion, Button, Card } from "react-bootstrap";

function Policy() {
    
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

    return (
        <div>
      {/* =========================== Faq Main ============================== */}
      <div class="faq-main">
        <div class="faq-inner" style={{backgroundColor:'transparent'}}>
          <h1 style={{border:'none', opacity:'1'}}>PRIVACY POLICY FOR GAMEHUB INC</h1>
          <p>This Privacy Policy was updated on September 1st, 2021</p>
          {/* =========================== Accordion Tabs ============================== */}
          <div class="accordion-tabs-faq">
            <Accordion>
              {/* =========================== Card 1 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    YOUR PRIVACY RIGHTS
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div class="card-body-inner-content">
                        <p>
                        We respect the right to privacy and the importance of protecting information collected about every person who accesses our Website. This includes your "right to be forgotten" if that’s your choice. We have adopted a Site-wide, nation-wide privacy policy regarding the personal-identifying information that is collected in the course of operating our Website.
                        </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div class="accordion-tabs-faq">
            <Accordion>
              {/* =========================== Card 1 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    WHAT IS PERSONAL-IDENTIFYING INFORMATION?
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div class="card-body-inner-content">
                        <p>
                        The personal-identifying information involved is any information that identifies, relates to, describes, or is capable of being associated with, a particular natural person. This includes name, signature, social security number, physical characteristics or description, address, telephone number, passport number, driver's license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, and any other financial information, medical information, or health insurance information. In summary, personal-identifying information is information which identifies a person who accesses our Website and may be used to contact the person. (Personal-identifying information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records or is in the public domain and comes from a source other than information supplied to our web site by the person involved.
                        </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div class="accordion-tabs-faq">
            <Accordion>
              {/* =========================== Card 1 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    WHAT IS OUR POLICY FOR?
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div class="card-body-inner-content">
                        <p>
                        This policy guides how we will store and use the personal-identifying information which people provide when accessing our web site.
                        </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div class="accordion-tabs-faq">
            <Accordion>
              {/* =========================== Card 1 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    WHEN WE COLLECT PERSONAL-IDENTIFYING INFORMATION
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div class="card-body-inner-content">
                        <p>
                        We collect personal-identifying information from you when you register on our Website, to participate in our prize promotions and contests, establish a GameHub account, win a prize due to your participation in a contest or prize promotion, respond to a survey, purchase any product or service through use our Website, claim a prize won by your participation on one of our contests, tournaments or prize promotions, or place content on any message boards made available on our Website.

                        </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div class="accordion-tabs-faq">
            <Accordion>
              {/* =========================== Card 1 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    HOW WE USE PERSONAL-IDENTIFYING INFORMATION
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div class="card-body-inner-content">
                        <p>
                        We will use the personal-identifying information that we collect: (1) to administer the contests, tournaments prize promotions and other advertising and promotional activities that we conduct from time to time (including prize notifications and prize deliveries), and (2) to make reports and submissions to governmental agencies and branches, as required or permitted by law, and (3) to compile market and statistical reports based on aggregated information (but the reports do not contain personal-identifying information, and (4) to allow us to better respond to the individual needs and preferences of people who access our web site, and (5) to invite you to participate in surveys, sweepstakes, contests, competitions, tournaments and other promotions, and (6) for data analysis, audits, developing new products and services, identifying usage trends and determining the effectiveness of our promotional campaigns, and (7) to enable us to pay royalties to third-party content providers, and (8) to process transactions, including (not limited to) fulfillment of cash prize awards, merchandise prize awards and product and service purchases.
                        We may send email announcements of upcoming contests and prize promotions and information about products, features and events that we believe you may be interested in. We may share your personal-identifying information with trusted third parties who have committed to protect your personal-identifying information in the same way that we do and who assist us in operating our Website, conducting our business, conducting our contests, tournaments and prize promotions, preparing market and statistical reports, and conducting other contests or promotions or providing services to you, so long as those parties agree by enforceable contract to keep this information confidential. From time to time we may also share customer lists compiled upon the basis of information we have collected, to businesses and charitable entities that post content or advertise web site; but this sharing is also subject to contractual commitments regarding your privacy, that obligate the affected third parties to store personal-identifying information securely and to use the information only for purposes and in a manner that is not inconsistent with our privacy policy. Information that is not personally identifiable may be provided to other parties for marketing, advertising and other uses.

                        </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div class="accordion-tabs-faq">
            <Accordion>
              {/* =========================== Card 1 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    LINKS TO OTHER WEB SITES.
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div class="card-body-inner-content">
                        <p>
                        Sometimes, at our discretion, we may include or offer links to third-party web sites. These third-party sites have separate and independent privacy policies. Therefore, we have no responsibility or liability for the content or activities of these linked sites.
                        </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div class="accordion-tabs-faq">
            <Accordion>
              {/* =========================== Card 1 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    HOW WE PROTECT YOUR PERSONAL-IDENTIFYING INFORMATION
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div class="card-body-inner-content">
                        <p>
                        To safeguard the confidentiality of personal-identifying information that we collect, we implement password protection and a variety of security measures to maintain the safety of your personal-identifying information when you enter, submit or access your personal information. The Administrator uses a secure server to protect your personal-identifying information and to prevent unauthorized access and disclosure. All supplied personal-identifying information is transmitted via Secure Socket Layer technology and then encrypted into our data base only to be accessible by those who are authorized with special access rights to such systems and who are required to keep the personal-identifying information confidential.
                        Although we are diligent to protect your personal-identifying information and privacy, we do not promise (nor should you expect) that your personal-identifying information or private communications will always remain private. After a transaction, your private payment information may not be stored on our servers. We will retain personal-identifying information, including information from closed accounts, to comply with law, prevent fraud, collect any money owed, resolve disputes, troubleshoot problems, assist with any investigation, enforcethe "official rules" of our contests, tournaments and prize promotions, prepare marketing and demographic studies and statistical reports, and to take any necessary or appropriate actions permitted by law. Please be aware that it is technologically impossible to remove from our servers, every record or information that you provide to us. The need for backup means that a copy of your personal information may exist in non-erasable form.

                        </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div class="accordion-tabs-faq">
            <Accordion>
              {/* =========================== Card 1 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    HOW YOU CAN SUBMIT OPT-OUT REQUESTS, REMOVAL REQUESTS AND QUESTIONS.
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div class="card-body-inner-content">
                        <p>
                        If you request removal of your personal information from our data base, we will take all reasonable steps to comply with your request. Any person who requests such removal or who has questions or comments about our privacy policy or our collection, safeguarding and use of protected Participant personal information may present the inquiry by emailing us support@gamehubx.com

                        </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div class="accordion-tabs-faq">
            <Accordion>
              {/* =========================== Card 1 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    CHILDREN YOUNGER THAN 13 YEARS OF AGE.
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div class="card-body-inner-content">
                        <p>
                        The rules of our contests, tournaments and prize promotions provide that children under thirteen (13) years of age are ineligible to participate or to win prizes. CHILDREN UNDER AGE 13 MUST NEVER SUPPLY THEIR NAMES OR OTHER PERSONAL-IDENTIFYING INFORMATION. No information should be provided to us by or regarding children younger than thirteen years of age without documented parental consent. If for any reason any person is concerned about a child’s personal-identifying information having been supplied, such person should contact the Privacy Policy Administrator by writing to the address set out above. In response to the inquiry the Privacy Policy Administrator will review and remove the child’s information as appropriate. In any event we do not knowingly record or disclose personal-identifying information about children younger than thirteen years of age.

                        </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div class="accordion-tabs-faq">
            <Accordion>
              {/* =========================== Card 1 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    “COOKIES” AND OTHER TRACKING DEVICES.
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div class="card-body-inner-content">
                        <p>
                        When you access the Website from your personal computer or mobile device we may install on your device a small text file that enables us to recognize your browser through your GameHub account. Most websites typically use the following:
                            1-"Session cookies" that are temporary and are deleted when you close your browser;
                            2-"Persistent cookies" that remain until you delete them or they expire;
                            3-"Web beacons" that are electronic images also known as single-pixel glifs.
                        We install a session cookie that expires when you log off your session or if you don’t log off, then two weeks after installed. We do not otherwise install persistant cookies, web beacons or glifs.
                        In general, cookies, web beacons, glifs and similar technologies do not contain personally identifiable information. However, when you furnish personal information through the web site, this information may be linked to the non-personally-identifiable information stored in cookies sent to your browser from the web site. Many browsers allow the user to block the installation of cookies. If you block cookies, you may not be able to make full use of the Website.
                        We are not responsible for so-called cookies, web beacons or glifs installed by your accessing any web site other than our Website (a "third-party web site)," even if the third-party web site is accessed by a link through our Website. You should review the third party site’s privacy policy. Rather, inclusion in our Website of any link to a third-party web site does not imply our endorsement of the third-party website or its content or the third party.
                        </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div class="accordion-tabs-faq">
            <Accordion>
              {/* =========================== Card 1 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    COMMON ID COOKIE
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div class="card-body-inner-content">
                        <p>
                        This site uses cookies and similar tracking technologies such as the Common ID cookie to provide its services. Cookies are important devices for measuring advertising effectiveness and ensuring a robust online advertising industry. The Common ID cookie stores a unique user id in the first party domain and is accessible to our ad partners. This simple ID that can be utilized to improve user matching, especially for delivering ads to iOS and MacOS browsers. Users can opt out of the Common ID tracking cookie by clicking here.
                        </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div class="accordion-tabs-faq">
            <Accordion>
              {/* =========================== Card 1 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    ADVERTISING PRIVACY SETTINGS
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div class="card-body-inner-content">
                        <p>
                        FOR EU USERS ONLY: When you use our site, pre-selected companies may access and use certain information on your device and about your interests to serve ads or personalized content. You may revisit or change consent-choices at any time by clicking here.
                        </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          
        </div>
      </div>
    </div>
    )
}

export default Policy
