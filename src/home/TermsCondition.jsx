import React, { Component, Fragment } from "react";
import Header from "../component/header/Header";
//import Helmet from "../component/common/Helmet";

class TermsCondition extends Component {
    render() {
        let title = "Privacy Policy";

        return (
            <Fragment>
                {/* Start Header Area  */}
                <Header logo="light" color="color-white" />

                {/* End Header Area  */}

                <div
                    className="rn-page-title-area pt--120 pb--190"
                    data-black-overlay="7"
                >
                    <div className="container mx-auto p-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-white text-left pt--100">
                                    <h2 className="title theme-gradient text-center">Terms & Conditions</h2>

                                    <p>Thank you for Aperra Solutions Pvt Ltd, Inc. ("Aperra", "we", "us", "our"). Together with the Privacy Policy, these Terms of Service are a contractual Agreement between Aperra and our users, so please read them carefully before accessing or using Aperra. In consideration of the mutual promises contained in this Agreement, you and Aperra agree as follows:</p>

                                    <h4>1. Definitions</h4>
                                    <ul>
                                        <li>The "Agreement" refers to these Terms of Service (the "Terms"), our Privacy Policy, and all other operating rules, policies, and procedures that we may publish periodically on the Website.</li>
                                        <li>"Aperra,""we,"and "us"refer to Aperra AI, Inc., a Delaware company doing business as Aperra, as well as our affiliates, directors, subsidiaries, contractors, licensors, officers, agents, and employees.</li>
                                        <li>The "Service" refers to the Website and online products provided by Aperra.</li>
                                        <li>The "Website" refers to Aperra's website located at Aperra.dev, all subdomains of Aperra.dev such as app.Aperra.dev, and all content, services, and products provided by Aperra at or through Aperra.dev and its subdomains.</li>
                                        <li>"User ,""you ,"and "your"refer to the individual person, company, or organization that has visited or is using the Website or Service; that accesses or uses any part of the account; or that directs the use of the account in the performance of its functions. A User must be at least 13 years of age.</li>
                                        <li>"Authorized Users"refer to Users and the Aperra personnel that Users authorize to access our Service.</li>
                                        <li>A "Subscription"is (a) an online order for the Service completed and submitted by you through this Website and accepted by Aperra or (b) another written agreement or purchase order for the Service accepted by both you and Aperra.</li>
                                        <li>The "Subscription Date" refers to (a) the date you submit your online order through the Website or (b) the date you accept an agreement that is ultimately accepted by both you and Aperra.</li>
                                    </ul>

                                    <h4>2. Description</h4>
                                    <p>Aperra's mission is to transform software development by analyzing data across the stack to quantify the craft of development. Features and functionality are as described on our Website on the Subscription Date, as such features and functionality may change periodically. We operate our Service on our providers' hosting servers to enable Authorized Users to access and use our Service via the web. By using or accessing any part of our Service, you are representing that you have the capacity and authority to enter into this agreement and are consenting on behalf of yourself and/or as an authorized representative of your company, as applicable, to be bound by this agreement.</p>

                                    <h4>3. Account Terms</h4>
                                    <h5>3.1 Access to Services</h5>
                                    <p>Aperra distributes the Service online. You are solely responsible for providing, installing, and maintaining at your own expense all equipment, facilities, and services necessary to enable Authorized Users' access and use of the Service through the interface, including, without limitation all computer hardware, software, and Internet access.</p>

                                    <h5>3.2 User Account Security</h5>
                                    <p>You are solely responsible for tracking and for ensuring the security and confidentiality of all user identifiers and passwords. Aperra has no liability with respect to any use or misuse of such identifiers or passwords, and any use other than as provided in this Agreement will be considered a breach of this Agreement by you.</p>

                                    <p>Aperra has implemented commercially reasonable, industry-standard technical and organizational measures designed to secure your data from accidental loss and from unauthorized access, use, alteration, or disclosure. Each hosting provider for the Service has or will have similar contractual obligations to Aperra. Aperra does not represent that it meets the standards for operational compliance or certification in any specific area, including any government or industry-association requirements (see Section 15.3).</p>

                                    <h4>4. Acceptable Use</h4>
                                    <h5>4.1 Compliance with Laws and Regulations</h5>
                                    <p>You will use commercially reasonable efforts to ensure, through proper instructions and enforcement actions, that all access to and use of the Service by you or Authorized Users, or otherwise through your facilities, equipment, identifiers, or passwords, will conform to this Agreement and will be made and used solely for proper and legal purposes, and will be conducted in a manner that does not violate any law or regulation, the rights of any third party, or this Agreement.</p>

                                    <h5>4.2 Conduct Restrictions</h5>
                                    <p>No provision of this Agreement includes the right to, and you will not, directly or indirectly:</p>
                                    <ul>
                                        <li>Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Service</li>
                                        <li>Take any action that imposes, or may impose at Aperra's discretion, an unreasonable or disproportionately large load on Aperra's infrastructure</li>
                                        <li>Knowingly upload invalid data, viruses, worms, or other software agents through the Service</li>
                                        <li>Enable any person or entity other than Authorized Users to access and use the Service or Technology (as defined in Section 12)</li>
                                        <li>Modify or create any derivative work based upon the Service or Technology</li>
                                        <li>Engage in, permit, or suffer to continue any copying or distribution of the Service or Technology</li>
                                        <li>Reverse engineer, disassemble, or decompile all or any portion of, or attempt to discover or recreate the source code for, any software that is part of the Service or Technology</li>
                                        <li>Access the Service in order to build a competitive solution or to assist any third party to build a competitive solution</li>
                                        <li>Remove, obscure, or alter any proprietary notice related to the Service or Technology</li>
                                        <li>Engage in, permit, or suffer to continue any use or other activity that is not expressly authorized under this Agreement by any person or entity within your control.</li>
                                    </ul>
                                    <p>In the event you violate any of the terms in this section, in addition to any other remedies available at law or in equity, Aperra will have the right, in its discretion, to immediately suspend your and Authorized Users' use and access to the Service.</p>

                                    <h4>5. Service Period</h4>
                                    <p>This Agreement will commence on the Subscription Date and, unless terminated early in accordance with Section 7, continue for the number of months or year(s) specified in the Subscription as measured from the Subscription Date (the "Initial Period").</p>

                                    <p>If you are using a Paying Plan, this Agreement will automatically renew for successive renewal periods of the same duration of the Initial Period (each, a "Renewal Period") unless one party gives notice of termination or non-renewal. The Initial Period and all subsequent Renewal Periods are collectively the "Service Period."</p>

                                    <p>If you are using the Service under a Free Plan, this Agreement will be deemed month-to-month and either party will be free to not renew, or to terminate, this Agreement immediately upon notice to the other.</p>

                                    <h4>6. Payment</h4>
                                    <ul>
                                        <li><strong>Pricing:</strong> Unless the parties agree otherwise in a separately executed written agreement for a Paying Plan, all fees including taxes for the Service ("Fees") will be initially based on the pricing published at the Website as of the Subscription Date for the Initial Period. In order to maintain the quality of the Service, pricing may automatically increase by the greater of 3% or CPI to adjust for inflation, which can increase the cost of improving and maintaining the Service. All or certain of the Fees may be calculated on the basis of the number of users in your organization, number of synchronized repositories, number of executed workflows and automations, and duration of data retention.</li>
                                        <li><strong>Authorization for payment:</strong> You agree to give Aperra permission to charge you using that payment method for any services used during the Service Period. As indicated in a Subscription, Aperra may bill: in advance; at the time of purchase; shortly after purchase; or on a recurring time- or usage-based basis.</li>
                                        <li><strong>Responsibility for payment:</strong> You agree that you are authorized to use the payment method you entered when creating a billing account. You must keep all information in your billing account current. You can access and modify your billing account information through the Website and may change your payment method at any time. If you notify Aperra to stop using your previously designated payment method and fail to designate an alternative, Aperra may immediately suspend use and access to the Service. Any notice from you changing your billing account will not affect charges Aperra submits to your billing account before Aperra reasonably could act on your request.</li>
                                        <li><strong>Billing schedule; no refunds:</strong> Payments for all accounts registered to pay via credit card are due the date the invoice is posted on your account. Payments for all accounts registered to pay via check, wire transfer, or Automated Clearing House (ACH) are due within 30 days of the invoice date unless otherwise agreed-to by the parties in writing. If any payment is not made when due, Aperra may immediately suspend use and access to the Service. All prepayments, if any, for the Service (monthly, yearly, or otherwise) will be deemed fully earned upon payment and are non-refundable.</li>
                                        <li><strong>Missed payments:</strong> Any amount not paid when due will bear interest at the rate of 1.5% per month or the maximum rate permitted by applicable law, whichever is less, computed and compounded daily from the date due until the date paid. Further, in the event of any action by Aperra to collect any amount not paid when due, you will pay or reimburse Aperra's costs of collection (including, without limitation, any attorneys' fees and court costs).</li>
                                        <li><strong>Pricing changes:</strong> Except for automatic increases to adjust for inflation pursuant to Section 6.1, Aperra will notify you in advance, either through the Service or by email pursuant to Section 15.6, if Aperra changes Fees that would apply to you in a Renewal Period. If you do not agree to these changes, you must give notice of your intent to not renew the Agreement for such Renewal Period and stop using the Service on or before the effective date of termination. If you fail to give notice of non-renewal, your payment information on file will be charged according to the new Fees thereafter.</li>
                                        <li><strong>Cancellation:</strong> If you terminate this Agreement early or if it's terminated early by Aperra pursuant to Section 7, you will not be obligated to pay the Fees following the effective date of termination. In all other cases, and regardless of whether you and your Authorized Users access or use the Service at the levels reflected in the Subscription or otherwise, you are responsible for paying all Fees through expiration of the Service Period.</li>
                                    </ul>

                                    <h4>7. Cancellation and Termination</h4>
                                    <h5>7.1. Account Cancellation</h5>
                                    <p>It is your responsibility to properly cancel your account with Aperra. You can cancel your account at any time by going into your account settings.</p>

                                    <h5>7.2. Upon Cancellation</h5>
                                    <p>Any and all rights granted to you with respect to the Service and Technology, and any and all rights granted to Aperra with respect to your data except as written in Section 11.2, will terminate on the effective date of termination. You agree return to Aperra any and all Confidential Information of Aperra in your possession or control. Aperra will have no obligation to provide the Service to you or Authorized Users after the effective date of the termination. You will pay to Aperra any amounts payable for your and Authorized User's use of the Service through the effective date of the termination, together with all other amounts in accordance with Section 6. This Section 7 and Sections 4, 6, and 10-15 will survive the expiration or earlier termination of this Agreement.</p>

                                    <p>Aperra's only obligation with respect to any electronic information transmitted or received by you or Authorized Users in relation to use of the Service is to promptly delete or destroy any information that is stored in the Service database on the effective date of termination upon your request. You acknowledge that the duration of the retention of such information is determined by the terms of the applicable Free Plan or Paying Plan. In addition, you acknowledge that although information in the Service database will be deleted from its transaction servers, Aperra may retain such information stored on automatic backup archiving systems during the period such backup or archived materials are retained under Aperra's customary procedures and policies. In addition, Aperra may retain certain information as provided in Section 11.2.</p>

                                    <h5>7.3. Aperra May Terminate</h5>
                                    <p>Aperra may terminate this Agreement immediately upon notice to you if you breach any provisions in the Agreement, in order to comply with applicable laws or regulations, or if you default in the timely payment of any amounts due Aperra under a Paying Plan.</p>

                                    <h4>8. Service Commitment and Support</h4>
                                    <p>Excluding scheduled maintenance windows, Aperra will use commercially reasonable efforts to maintain 99.8% availability of the hosted portion of the Service for each month during the term of this Agreement. The Service will be deemed "available"so long as Authorized Users are able to login to the Service interface and access data.</p>

                                    <p>If you are under a Paying Plan, Aperra will provide in-product and email support ("Support"). Although no response times are guaranteed, Aperra will use commercially reasonable efforts to respond to such support requests within 48 hours. Aperra may delegate the performance of certain portions of the Support to third parties, but will remain responsible to you for delivery. In the event any Support is not performed with reasonable skill, care, and diligence, Aperra will re-perform the Support to the extent necessary to correct the defective performance, and you acknowledge that re-performance will be your sole and exclusive remedy for any defective performance.</p>

                                    <p>Subject to this Agreement, Aperra will make the Service available to you and Authorized Users during the Service Period, and Aperra hereby grants to you, during the Service Period, a nonexclusive, nontransferable, limited right to enable Authorized Users to access and use the Service through the interface and the Website, and to access and use Aperra's technical and operations documentation and Agents (as defined in Section 9) in support solely for your internal, business use.</p>

                                    <p>You acknowledge that your and each Authorized User's access and use of the Service are subject to Aperra's Privacy Policy which is incorporated into this Agreement by reference. Aperra may delegate the performance of certain portions of the Service to third parties, but will remain responsible to you for delivery. Aperra may in its discretion modify, enhance, or otherwise change the Service.</p>

                                    <h4>9. Agents; Third-Party Content</h4>
                                    <p>Aperra will make various application program interfaces (APIs), agents, libraries, and other materials available at the Website or through the Service at its discretion to support your access and use of the Service (collectively, "Agents"). You acknowledge and agree that:</p>

                                    <ul>
                                        <li>The Agents may only be used on systems owned, leased, or primarily operated by you</li>
                                        <li>The Agents are made available solely to support access and use of the Service, and Aperra has no liability with respect to any other uses of the Agents</li>
                                        <li>Certain of the Agents may include third-party content that is subject to open source license terms that may expand or limit your rights to use such content</li>
                                        <li>You agree to review any electronic documentation that accompanies the Agents or is identified in a link provided to you to determine which portions of the Agents are open source and are licensed under open source license terms. To the extent any such license terms require that Aperra provide you the rights to copy, modify, distribute, or otherwise use any open source software in the Agents that are inconsistent with the limited rights granted to you in this Agreement, then such rights in the applicable open source license terms will take precedence over the rights and restrictions granted in this Agreement, but solely with respect to such open source software. Further, you acknowledge and agree that all third-party content is governed by its respective terms and such terms are solely between you and the applicable licensor. You agree to comply with such third-party terms (including open source license terms), as applicable, and Aperra has no liability with respect to third-party content under this Agreement.</li>
                                    </ul>

                                    <h4>10. Nonuse and Nondisclosure of Confidential Information</h4>
                                    <h5>10.1. Confidentiality</h5>
                                    <p>As used in this Agreement, "Confidential Information"means any information that is proprietary or confidential to the Discloser (as defined below) or that the Discloser is obligated to keep confidential (e.g., pursuant to a contractual or other obligation owing to a third party). Confidential Information may be of a technical, business, or other nature. However, Confidential Information does not include any information that:</p>

                                    <ul>
                                        <li>Was known to the Recipient (as defined below) prior to receiving the same from the Discloser in connection with this Agreement</li>
                                        <li>Is independently developed by the Recipient</li>
                                        <li>Is acquired by the Recipient from another source without restriction as to use or disclosure</li>
                                        <li>Is or becomes part of the public domain through no fault or action of the Recipient</li>
                                    </ul>
                                    <p>Each party reserves any and all right, title, and interest (including any intellectual property rights) that it may have in or to any Confidential Information that it may disclose to the other party under this Agreement. The party that receives any Confidential Information (the "Recipient") of the other party (the "Discloser") will protect Confidential Information of the Discloser against any Unauthorized Use or disclosure to the same extent that the Recipient protects its own Confidential Information of a similar nature against Unauthorized Use or disclosure, but in no event will use less than a reasonable standard of care to protect such Confidential Information; provided that the Confidential Information of the Discloser is conspicuously marked or otherwise identified as confidential or proprietary upon receipt by the Recipient or the Recipient otherwise knows or has reason to know that the same is Confidential Information of the Discloser. The Recipient will use any Confidential Information of the Discloser solely for the purposes for which the Discloser provides it.</p>

                                    <p>This section will not be interpreted or construed to prohibit:</p>
                                    <ul>
                                        <li>Any use or disclosure which is necessary or appropriate in connection with the Recipient's performance of its obligations or exercise of its rights under this Agreement or any other agreement between the parties</li>
                                        <li>Any use or disclosure required by applicable law, provided that the Recipient uses reasonable efforts to give the Discloser reasonable advance notice to afford the Discloser an opportunity to intervene and seek an order or other appropriate relief for the protection of its Confidential Information</li>
                                        <li>Any use or disclosure made with the consent of the Discloser.</li>
                                    </ul>
                                    <p>In the event of any breach or threatened breach by the Recipient of its obligations under this section, the Discloser will be entitled to injunctive and other equitable relief to enforce such obligations. The obligations of confidentiality will survive expiration or termination of this Agreement.</p>

                                    <h5>10.2. Pre-Release Program</h5>
                                    <p>As set forth in the Non-Disclosure Agreement, you agree that you will not disclose, publish, or otherwise disseminate any Confidential Information to anyone other than individuals who are employees of Aperra, members of the pre-release program, or as otherwise expressly permitted or agreed to in writing by Aperra. You further agree to take reasonable precautions to prevent any unauthorized use, disclosure, publication, or dissemination of Confidential Information, including preventing access to or display of the Service to third parties. You agree to use the Confidential Information solely for the permitted uses as set forth in this Agreement. You agree not to use Confidential Information otherwise for your own or any third party's benefit without the prior written approval of an authorized representative of Aperra in each instance.</p>

                                    <h4>11. Customer Data</h4>
                                    <h5>11.1. Ownership of Data</h5>
                                    <p>You retain ownership, right, and responsibility to all text, software, audio, video, images, or other content that you and/or any Authorized User run on or through the Service (collectively "Customer Data"), subject only to the limited rights expressly granted in this Agreement and intellectual property rights. You are solely responsible, and Aperra assumes no liability for the Customer Data that Authorized Users or other third parties post, send, or otherwise make available over or through the Service.</p>

                                    <h5>11.2. License Grant to Aperra</h5>
                                    <p>In order to provide and support the Service for your benefit, you hereby grant Aperra a worldwide, non-exclusive, royalty-free license during the Service Period to use, reproduce, electronically distribute, transmit, have transmitted, perform, display, store, and archive Customer Data. You agree that, so long as no Confidential Information is publicly disclosed, Aperra may:</p>
                                    <ul>
                                        <li>Use Customer Data to refine, supplement, or test Aperra's product and Service offerings</li>
                                        <li>Include aggregated and anonymized data in any publicly available reports, analyses, and promotional materials</li>
                                        <li>Retain anonymized, non-attributable data following any termination of this Agreement for use in connection with the above</li>
                                        <li>List you as a Customer and use your name and logo on the Website, on publicly available customer lists, and in media releases during the Service Period.</li>
                                    </ul>

                                    <h4>12. Intellectual Property</h4>
                                    <p>As used in this Agreement, "Technology"means any and all know-how, processes, methodologies, specifications, designs, inventions, functionality, graphics, techniques, methods, applications, computer programs, libraries, user manuals, documentation, products or other technology and materials of any kind, or any enhancement thereto, used by Aperra in connection with the performance of the Service or the Support, or made available by Aperra to you, any Authorized User, or any third party in connection with the Service or the Support. Without limiting the above, Technology includes the products, services, and technology made available through the Website, the Agents, the Service interface, and any Aperra branded or co-branded websites (including sub-domains, widgets, and mobile versions).</p>
                                    <p>The Service and Technology constitute or otherwise involve valuable intellectual property rights of Aperra, and Aperra will own all right, title, and interest in and to the above. No title to or ownership of the Service or Technology, or any intellectual property rights associated therewith, is transferred to you, any Authorized User, or any third party under this Agreement. Sections 8-9 describe the entirety of your limited rights to access and use the Service and Agents and to make the Service and Agents available to Authorized Users. Except with respect to certain of the Agents, in no event will you be entitled to access or review any object code or source code. Aperra reserves all rights to the Service and Technology not otherwise expressly granted herein.</p>

                                    <h4>13. Limitations of Liability</h4>
                                    <p>You understand and agree that we will not be liable to you or any third party for any damage, injury, or loss of profits, use, goodwill, or data, or for any incidental, indirect, special, consequential, or exemplary damages, however arising, that result from:</p>
                                    <ul>
                                        <li>The use, disclosure, or display of your Customer Data</li>
                                        <li>Your use or inability to use the Service</li>
                                        <li>Any modification, price change, suspension, interruption, cessation of transmission, or discontinuance of the Service</li>
                                        <li>The Service generally or the software or systems that make the Service available</li>
                                        <li>Unauthorized access to or alterations of your transmissions or data</li>
                                        <li>Statements or conduct of any third party on the Service</li>
                                        <li>Any other user interactions that you input or receive through your use of the Service</li>
                                        <li>Hacking, tampering, or other unauthorized access or use of the Service or your account(s) or the information contained therein</li>
                                        <li>Errors, mistakes, or inaccuracies of data</li>
                                        <li>Personal injury or property damage, of any nature whatsoever, resulting from your and authorized users' access to and use of the Service or support</li>
                                        <li>Any other matter relating to the Service.</li>
                                    </ul>
                                    <p>Our liability is limited whether or not we have been informed of the possibility of such damages, and even if a remedy described in this Agreement is found to have failed of its essential purpose. We will have no liability for any failure or delay due to matters beyond our reasonable control.</p>
                                    <p>These limitations will not apply to damages arising out of a party's failure to comply with its confidentiality obligations, indemnification obligations, or payment obligations to Aperra. Except for their respective indemnity and confidentiality obligations, in no event will either party, their affiliates, directors, employees, or licensors be liable to the other party or any authorized user for any claims, proceedings, liabilities, obligations, damages, losses, or costs in an amount exceeding the fees you paid to Aperra.</p>
                                    <p>This limitation of liability section applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if the non-breaching party has been advised of the possibility of such damage. The above limitations of liability will apply to the fullest extent permitted by law in the applicable jurisdiction.</p>

                                    <h4>14. Representations and Indemnities</h4>
                                    <p>This section states Aperra's entire liability and your exclusive remedies for intellectual property rights infringement. You hereby represent and warrant to Aperra that you have the authority to enter into and perform this Agreement, and that performance of the Agreement's obligations and exercise of its rights do not and will not violate any applicable laws, regulations, or orders.</p>
                                    <p>You hereby represent, warrant, and covenant that:</p>
                                    <ul>
                                        <li>You or your licensors owns all right, title, and interest in and to Customer Data</li>
                                        <li>You have all rights to Customer Data necessary to grant the rights contemplated by this Agreement</li>
                                        <li>You have obtained any necessary third-party approvals, including without limitations applicable vendors and licensors, in relation to third-party content to be used by you in connection with the Service or will obtain such approvals prior to such use.</li>
                                    </ul>
                                    <p>Aperra hereby represents, warrants, and covenants to you, if under a Paying Plan, that:</p>
                                    <ul>
                                        <li>The Service and Technology as delivered to you and used in accordance with this Agreement will not infringe on any intellectual property right or other right of any other person or entity</li>
                                        <li>Aperra has all rights in the Service and Technology necessary to grant the rights contemplated by this Agreement</li>
                                    </ul>
                                    <p>You agree to defend, indemnify, and hold harmless Aperra and its employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt and expenses (including without limitation attorneys' fees) arising out of or related to:</p>
                                    <ul>
                                        <li>Your or Authorized Users' use of and access to the Service</li>
                                        <li>Your or an Authorized User's violation of any term of this Agreement</li>
                                        <li>Your or an Authorized User's violation of any third-party right, including without limitation any right of privacy, publicity rights, or intellectual property rights</li>
                                        <li>Your or an Authorized User's violation of any law, rule, or regulation</li>
                                        <li>Any claim or damages that arise as a result of any Customer Data</li>
                                        <li>Any other party's access and use of the Service with provided identifier(s) and password(s).</li>
                                    </ul>
                                    <p>Aperra agrees to defend, indemnify, and hold harmless you, if under a Paying Plan, from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt and expenses (including without limitation attorneys' fees) arising out of or related to:</p>
                                    <ul>
                                        <li>Aperra's breach of any representation, warranty, or obligation in this Agreement</li>
                                        <li>Aperra's violation of any law, rule, or regulation.</li>
                                    </ul>
                                    <p>In addition, if the Service or Technology becomes the subject of a claim of infringement of a U.S. copyright or patent, Aperra will indemnify you, if under a Paying Plan, against such claim provided that you give Aperra prompt written notice of the claim, allow Aperra to direct the defense and settlement of the claim, and cooperate with Aperra as necessary, at Aperra's expense, for defense and settlement of the claim. If the Service or Technology become, or, in Aperra's opinion is likely to become, the subject of such a claim, Aperra will have the right to obtain for you the right to continue using the Service or Technology, replace or modify the Service or Technology so that it becomes non-infringing, or terminate the rights granted here to such Service or Technology with refund to you of any fees paid for such Service and Technology (less a reasonable charge for the period during which you has had available to it the use of such Service and Technology).</p>
                                    <p>Aperra will have no liability for any infringement claim to the extent it:</p>
                                    <ul>
                                        <li>Is based on modification of the Service or Technology other than by Aperra</li>
                                        <li>Results from failure of you to use any updated version of Service or Technology provided by Aperra to you</li>
                                        <li>Is based on the combination or use of the Service or Technology with any other software, program, or device not provided by Aperra if such infringement would not have arisen but for such use or combination</li>
                                        <li>Results from compliance by Aperra with designs, plans, or specifications furnished by you</li>
                                        <li>Results from your operation of the Service or Technology in a manner that is inconsistent with its intended use.</li>
                                    </ul>
                                    <p>Except as expressly provided in this agreement, the services, technology, support, and all other items provided in connection therewith are provided on an "as is"basis without warranties of any kind, either express or implied. Aperra disclaims all warranties, express or implied, arising by law or otherwise, with respect to any error, defect, deficiency, infringement, or noncompliance in the services, technology, support, or any other items provided by, through, or on behalf of Aperra under this agreement (including without limitation any implied warranty of merchantability, fitness for a particular purpose, or non-infringement and any implied warranty arising from course of performance, course of dealing, or usage of trade).</p>

                                    <h4>15. Miscellaneous</h4>
                                    <h5>15.1. Non-Assignability</h5>
                                    <p>Aperra may assign or delegate these Terms of Service and/or the Privacy Statement, in whole or in part, to any person or entity at any time with or without your consent, including the license grant in Section 11.2. You may not delegate, assign, or transfer this Agreement or any of its rights and obligations under this Agreement, and any attempt to do so will be void.</p>

                                    <h5>15.2. Governing Law</h5>
                                    <p>Except to the extent applicable law provides otherwise, this Agreement between you and Aperra and any access to or use of the Website or the Service are governed by the federal laws of the United States of America and the laws of the State of California, without regard to conflict of law provisions. You and Aperra agree to submit to the exclusive jurisdiction and venue of the courts located in the city of San Francisco, California.</p>

                                    <h5>15.3. Federal Use</h5>
                                    <p>The Service is provided to the U.S. Government as "commercial items,""commercial computer software,""commercial computer software documentation,"and "technical data"with the same rights and restrictions generally applicable to the Service. If you or any Authorized User is using the Service on behalf of the U.S. Government and these terms fail to meet the U.S. Government's needs or are inconsistent in any respect with federal law, you and your Authorized Users must immediately discontinue use of the Service. The terms listed above are defined in the Federal Acquisition Regulation and the Defense Federal Acquisition Regulation Supplement.</p>

                                    <h5>15.4. Import-Export Controls</h5>
                                    <p>In connection with this Agreement, you will comply with all applicable import, re-import, export, and re-export control laws and regulations, including the Export Administration Regulations, the International Traffic in Arms Regulations, and country-specific economic sanctions programs implemented by the Office of Foreign Assets Control. For clarity, you are solely responsible for compliance related to the manner in which you choose to use the Service, including the transfer and processing of Customer Data.</p>

                                    <h5>15.5. Obligations of Parties</h5>
                                    <p>The parties expressly understand and agree that their relationship is that of independent contractors. Nothing in this Agreement will constitute one party as an employee, agent, joint venture partner, or servant of another.</p>
                                    <p>Aperra will have no liability to you, Authorized Users, or third parties for any failure or delay in performing any obligation under this Agreement due to circumstances beyond its reasonable control, including without limitation acts of God or nature, fires, floods, strikes, civil disturbances or terrorism, or interruptions in power, communications, satellites, the Internet, or any other network that are beyond its reasonable control.</p>

                                    <h5>15.6. Communications</h5>
                                    <p>Aperra may send you, in electronic form, information about the Service, additional information, and any information the law requires Aperra to provide. You acknowledge and agree that Aperra may provide notices to you by email at the address you specified in its Subscription or by access to a website that Aperra identifies. Notices emailed to you will be deemed given and received when the email is sent. If you do not consent to receiving notices electronically, you and your Authorized Users must stop using the Service. (Please note that these provisions relate to the business relationship and are distinct from marketing and similar emails covered by the "Opt-Out"provisions of the Privacy Policy.) You may provide legal notices to Aperra by email to admin@Aperra.dev. You must specify in all such notices that the notice is being given under this Agreement.</p>

                                    <h5>15.7. Severability, No Waiver, and Survival</h5>
                                    <p>If any part of this Agreement is held invalid or unenforceable, that portion of the Agreement will be construed to reflect the parties' original intent. The remainder of the Agreement will remain in full force and effect. Any failure on the part of Aperra to enforce any provision of this Agreement will not be considered a waiver of our right to enforce such provision. Our rights under this Agreement will survive any termination of this Agreement.</p>

                                    <h5>15.8. Complete Agreement</h5>
                                    <p>These Terms of Service, together with the Privacy Policy, represent the complete and exclusive statement of the Agreement between you and Aperra. This Agreement supersedes any proposal or prior agreements, oral or written, and any other communications between you and Aperra relating to the subject matter of these terms.</p>
                                    <p>If any information posted on the Website conflicts with any provision of this Agreement, the applicable provision of this Agreement will control. Any terms and conditions of any other arrangement issued by you in connection with this Agreement, which are in addition to, inconsistent with, or different from the terms and conditions of this Agreement, will be of no force or effect. Any affiliate of yours will be deemed a third party for purposes of this Agreement. This Agreement can only be modified only by a written arrangement duly executed by authorized representatives of the parties.</p>

                                    <h4>Contact Us</h4>
                                    <p>If you have any questions or concerns about these Terms of Service, please email us at <a href="mailto:hello@aperasoftwares.com">hello@aperasoftwares.com</a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default TermsCondition;
