import { SectionItem } from "../common/terms-template/TermsInterfaces";

export const termsMeta = {
    pageTitle: '| Terms & Conditions |',
    title: 'USDVT Terms & Conditions',
    subtitle: 'Vermont State Bank',
    updated: 'Latest update: 31 July 2025',
};

export const sections: SectionItem[] = [
    {
        id: "intro",
        title: "IMPORTANT NOTICES",
        content: [
            <span key="1" style={{marginLeft: 20}}>
                1. PLEASE READ CAREFULLY. THIS AGREEMENT CONTAINS AN ARBITRATION CLAUSE REQUIRING ALL CLAIMS TO BE RESOLVED BY WAY OF BINDING ARBITRATION AND YOU ARE WAIVING YOUR RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS ACTION PROCEEDING
            </span>,
            <span key="2" style={{marginLeft: 20}}>
                2. BY PURCHASING, HOLDING, REDEEMING, DISPOSING, OR OTHERWISE USING USDVT, YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS CONTAINED IN THIS AGREEMENT. 
            </span>,
            <span key="3" style={{marginLeft: 20}}>
                <strong>
                    3. USDVT IS NOT INSURED BY THE FDIC; NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY; IS NOT A DEPOSIT OR OTHER OBLIGATION OF, OR GUARANTEED BY, VERMONT STATE BANK, OR ANY OF ITS AFFILIATES.
                </strong>
            </span>,
            "This Agreement (“Agreement” or “Terms”) sets forth the terms and conditions between Vermont State Bank (“VSB,” “we,” “us,” and “our”) and the user of USDVT (“you,” “your,” “Purchaser,” “Holder,” and “User”) that govern the purchase, issuance, use, custody, redemption, disposal, and storage of USDVT. This Agreement sets forth the Terms under which USDVT may be acquired and used. Please read this Agreement carefully and keep these Terms for future reference. This Agreement applies to the you and any other subsequent User of USDVT. Any use, custody, purchase, disposal, or redemption of USDVT will constitute acceptance of this Agreement. By using USDVT, you agree that you have read, understood, and accepted all of the Terms set forth in this Agreement, including the provisions about Arbitration and prohibited transactions."
        ]
    },
    {
        title: "Amendments to Terms & Conditions",
        id: "amendments-to-terms-conditions",
        content: [
            "VSB may modify, update, or amend the Terms at any time and may impose new or additional terms or conditions on the use of USDVT at any time and without prior notice. If VSB determines to modify, update, or amend the Terms, VSB will post the revised version of these Terms with an effective date on USDVT.com. You agree that you are responsible for staying up to date on all revisions, modifications, or amendments to the Terms.",
        ],
    },
    {
        title: "About USDVT",
        id: "about-usdvt",
        content: [
            "USDVT is not legal tender, an account card, a credit or debit card, or a security. Ownership of USDVT does not create a customer relationship with VSB. All transactions using USDVT are irreversible and all transactions processed are nonrefundable by VSB. All transactions involving USDVT are subject to the terms and conditions of any exchange, wallet, merchant, or any other entity or third party involved in the transaction.",
        ],
    },
    {
        title: "Blockchain",
        id: "blockchain",
        content: [
            "You acknowledge and understand that VSB does not own, operate, or control any blockchain and that VSB is not responsible for the operation of any blockchain. You further acknowledge and understand that VSB bears no responsibility for any issues arising with any blockchain or third-party software or technology that results in your loss of USDVT. You also agree that VSB may discontinue supporting the availability of USDVT on any blockchain in VSB’s sole discretion and without notice."
        ],
    },
    {
        title: "Fees",
        id: "fees",
        content: [
            "USDVT may be subject to fees levied by a third party. Once a User transfers, swaps, or otherwise uses USDVT to facilitate a transaction with a third party, the User may be subject to fees imposed by the third party. It is the responsibility of the User to know the exact amount of any applicable fees imposed by any third party in the purchase, transfer, swap, or redemption of USDVT. VSB is not under any circumstances responsible for any such fees."
        ],
    },
    {
        title: "Using USDVT",
        id: "using-usdvt",
        content: [
            "VSB is not responsible for any delays in processing, redeeming, purchasing, converting, or disposing USDVT.  VSB is also not responsible for any issues in the delivery, purchase, or redemption of USDVT from third parties.",
            "By purchasing, holding, using, or redeeming USDVT, you represent and warrant that you: ",
            <span style={{marginLeft: 20}} key="2">i. are at least 18 years of age and that you have the capacity to enter into a legally binding agreement;</span>,
            <span style={{marginLeft: 20}} key="3">ii. are not located in, are a resident of, or under the control of any country to which the United States government has sanctioned or embargoed goods or services;</span>,
            <span style={{marginLeft: 20}} key="4">iii. are not identified on any sanction or restrictions list maintained by the US Department of the Treasury Office of Foreign Assets Control or the US Department of Commerce;</span>,
            <span style={{marginLeft: 20}} key="5">iv. will comply with all applicable local, state, national, and international laws, rules, and regulations; and</span>,
            <span style={{marginLeft: 20}} key="6">v. will comply with all applicable rules and customs of any exchange, blockchain, wallet, network, merchant, distributor, or other entity involved in transactions involving USDVT.</span>,
            "Any use, custody, purchase, disposal, or redemption of USDVT will constitute acceptance of this Agreement by you. Your right to use USDVT is also conditioned upon your acceptance and compliance with this Agreement.",
            "All transactions involving USDVT are subject to any applicable terms and conditions, user agreements, and fees of any exchange, wallet, merchant, or any other entity involved in the transaction. VSB has the right to discontinue, restrict, change, or suspend any aspect of use of USDVT within VSB’s control without notice and liability. All transactions using USDVT are irreversible and nonrefundable by VSB. VSB, subject to applicable laws, may restrict any aspect of your use of USDVT due to suspicion of inappropriate or illegal conduct, or if VSB believes a transaction will violate applicable laws or this Agreement, in VSB’s sole discretion and without notice and liability."
        ],
    },
    {
        title: "Accessing Funds and Prohibited Transactions",
        id: "funds-prohibited-transactions",
        content: [
            "You represent and warrant that the fiat currency used to purchase USDVT is not derived from the proceeds of any unlawful activity. By holding or using USDVT, you represent and warrant that you will not violate any United States federal or state laws and regulations, including, but not limited to, laws aimed at anti-money laundering efforts or countering the financing of terrorism programs, regulations issued by the Office of Foreign Assets Control (OFAC) of the United States Department of the Treasury, and Executive Orders issued by the President of the United States. You also represent and warrant that you will not engage in any transaction that violates any sanctions-related lists or programs maintained by any government agency or department.",
            "You shall not use USDVT to engage in any activity that:",
            <span style={{marginLeft: 20}} key="3">i. violates any applicable law or regulation (including AML/CFT, anti-corruption, or sanctions laws); </span>,
            <span style={{marginLeft: 20}} key="4">ii. involves illegal gambling, fraud, money laundering, terrorist financing, ransomware, illicit drugs, or the exploitation of minors;</span>,
            <span style={{marginLeft: 20}} key="5">iii. infringes intellectual-property or privacy rights; or</span>,
            <span style={{marginLeft: 20}} key="6">iv. facilitates illegal activity on behalf of any other person.</span>,
            "VSB may refuse, reverse, freeze, or seize any transaction that it, in its sole discretion, believes violates this section."
        ],
    },
    {
        title: "No Customer Relationship",
        id: "no-customer-relationship",
        content: [
            <strong key="1">
                The purchase, disposal, redemption, or holding of USDVT does not constitute the creation of an account at VSB, a banking relationship between you and VSB, or any other contractual or fiduciary relationship of any kind between you and VSB.
            </strong>
        ],
    },
    {
        title: "Irreversible Transactions",
        id: "irreversible-transactions",
        content: [
            "Once a transaction is initiated, VSB does not have the ability to reverse or cancel any transaction. When you send USDVT to a specific address, you understand and acknowledge that you may permanently lose access to that USDVT and that you bear all responsibility for any losses or liabilities incurred as a result of the transaction. This would include any losses or liabilities incurred as a result of you sending USDVT to an incorrect address, sending USDVT to an address in which User does not have the private key, sending USDVT to an address that will not return USDVT, and sending USDVT to an address that is blocked or blacklisted by a government entity, third party exchange, or other entity involved in the transaction."
        ],
    },
    {
        title: "Access to USDVT",
        id: "access-to-usdvt",
        content: [
            <span key="1">
                In order to comply with United States laws and regulations and these Terms, VSB may block and restrict the transfer of USDVT to certain individual addresses (“Blacklisted Addresses”). VSB maintains the ability to freeze USDVT held by you for any reason and without notice, including, but not limited to, the ability to freeze USDVT that is sent to you by a Blacklisted Address or USDVT that you have sent to a Blacklisted Address. VSB may report any suspicious activity to law enforcement as well as comply with law enforcement requests to freeze the custody of USDVT, including orders from a United States court of competent jurisdiction. VSB may be required to make certain disclosures regarding transactions using USDVT to authorities or law enforcement without prior notice to Holder or any other party affected. 
            </span>
        ],
    },
    {
        title: "Error Resolution and User Liability",
        id: "error-resolution",
        content: [
            <span key="1">
                You understand and acknowledge that (i) the consumer liability limitations for unauthorized transactions and error resolution procedures under the Electronic Funds Transfer Act (Regulation E) do not apply to USDVT; (ii) VSB does not offer accounts for holders who receive USDVT through third parties, and; (iii) VSB does not use its consumer identification and verification process for holders that purchase, swap, or otherwise receive USDVT through a third party. You further understand and acknowledge holders of USDVT are fully liable for all unauthorized use of USDVT and are solely responsible for settling any disputes that occur between any third party involved in a transaction using USDVT. VSB is not responsible, either directly or indirectly, for the quality, delivery, or satisfaction of products or services purchased with USDVT.
            </span>
        ],
    },
    {
        title: "Redeeming USDVT",
        id: "redeeming-usdvt",
        content: [
            <span key="1">
                USDVT purchased through a third-party distributor cannot be redeemed for USD by VSB. USDVT may only be redeemed for USD by certain third parties pursuant to separate agreements with VSB. You understand and acknowledge that VSB is not liable for the actions, services, or products of any prior holder or User of USDVT, nor any third party connected or involved in the redemption, purchase, holding, disposal, or use of USDVT. Holder understands and acknowledges there is no right to redeem USDVT with VSB.
            </span>
        ],
    },
    {
        title: "No Warranties; Not a Security",
        id: "warranties-security",
        content: [
            <span key="1">
                VSB is not responsible for the safety, quality, legality, or any other aspect of any goods or services purchased with USDVT. USDVT AND ALL RELATED SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT ANY REPRESENTATION OR WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. WITHOUT LIMITING THE FOREGOING, VSB SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, QUIET ENJOYMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF PERFORMANCE, COURSE OF DEALING, OR USAGE OF TRADE. VSB DOES NOT WARRANT THAT USDVT OR ANY RELATED SERVICE WILL BE UNINTERRUPTED, TIMELY, ERROR-FREE, OR SECURE, OR WILL MEET YOUR REQUIREMENTS.
            </span>,
            "Further, VSB is not liable:",
            <span style={{marginLeft: 20}} key="2">i. If you do not have enough USDVT to complete a transaction;</span>,
            <span style={{marginLeft: 20}} key="3">ii. If a merchant refuses to accept USDVT;</span>,
            <span style={{marginLeft: 20}} key="4">iii. If an electronic device where you are conducting a transaction does not operate properly;</span>,
            <span style={{marginLeft: 20}} key="5">iv. If access to your USDVT or ability to redeem USDVT has been blocked by a third party; </span>,
            <span style={{marginLeft: 20}} key="6">v. If a transaction is prevented from being completed for any reason; or</span>,
            <span style={{marginLeft: 20}} key="7">vi. For any other reason stated in this Agreement.</span>,
            "USDVT is not a security and is not registered with the United States Securities and Exchange Commission."
        ],
    },
    {
        title: "Privacy",
        id: "privacy",
        content: [
            <span key="1">
                VSB, along with its affiliates, does not collect, store, or share any personal information or User data in connection with holding or using USDVT, as well as redeeming or purchasing USDVT from third parties. VSB does not sell your information to third parties or use your data for marketing purposes in connection with the use of USDVT.
            </span>
        ],
    },
    {
        title: "KYC; Information Cooperation",
        id: "kyc",
        content: [
            <span key="1">
                By using purchasing, holding, or redeeming USDVT, you agree to provide promptly any information, documentation, or certifications that VSB reasonably requests to comply with applicable laws or its internal policies. Failure to provide such information within ten [10] business days may result in suspension or termination of your right to hold or use USDVT. 
            </span>
        ],
    },
    {
        id: "user-risks",
        title: "USER RISKS AND DISCLAIMERS",
        content: [
            <span key="1">
                <strong>User risks involved in the purchase, redemption, holding, and disposal of USDVT include, but are not limited to:</strong>
            </span>
        ],
    },
    {
        id: "value-price",
        title: "Value & Price Stability",
        content: [
            <span key="1">
                There is no assurance that the value of USDVT will remain steady or will retain the value at which a Holder originally purchased USDVT. The value of USDVT may fluctuate on third party platforms due to factors outside of VSB’s control. Therefore, USDVT may trade at a value that is above or below the value USDVT may be redeemed at or the value at which USDVT was purchased by User. VSB does not guarantee that third parties or other platforms will maintain a price of one USD ($1) per one USDVT and VSB is not responsible for any losses that result from these fluctuations. VSB makes no representations or warranties that USDVT will be accepted at any particular merchant or can be used in any particular transaction. Any merchant that accepts USDVT in transactions does so in its sole discretion, and VSB is not responsible if a merchant values USDVT at any more or less than the value User paid for USDVT. It is the responsibility of the User to know whether USDVT is accepted at any particular merchant or can be used in a transaction. User acknowledges and understands that VSB cannot control how any third party values USDVT and that VSB is not responsible for any loss that results from any transaction. VSB makes no warranties and representations regarding any conditions relating to the settlement or transaction of USDVT imposed by third parties. VSB is not responsible for the listing or delisting of USDVT by any third-party exchange or market.
            </span>
        ],
    },
    {
        id: "changes-in-law",
        title: "Changes in Law",
        content: [
            <span key="1">
                VSB and USDVT are subject to United States federal and state law. Changes in laws and regulations or actions by government entities may adversely affect the purchase, holding, disposal, value, or redemption of USDVT. VSB is not liable for the adverse results of any change in law or actions taken by a government entity or for adverse results from actions by VSB at the direction of a government entity. In the event that VSB fails, any loss incurred would not be offset by an insurer, and the holder of USDVT effectively would become an unsecured creditor of VSB. VSB is not responsible for the actions of lawmakers or regulators that adversely affect the value, redeemability, or issuance of USDVT. Due to changes in laws and regulations, Users are responsible for understanding how laws affecting USDVT affect their rights and ability to hold USDVT.
            </span>
        ],
    },
    {
        id: "transfer-custody",
        title: "Transfer, Custody, and Redemption Risks",
        content: [
            <span key="1">
                As required by law or in VSB’s sole discretion, VSB may freeze any USDVT held by User without notice. If VSB freezes USDVT, User will not be able to use, transfer, trade, or dispose of USDVT and User may permanently lose all access to that USDVT. VSB may be required to report any suspected illegal or suspicious activity to law enforcement agencies. VSB is not responsible in the event that User transfers USDVT to the wrong party or address, and User acknowledges that User may permanently lose control and value of USDVT once User transfers USDVT to another party. Due to the nature of blockchain transactions, User understands that VSB is unable to reverse any transaction with USDVT, and VSB has no responsibility to track, trace, or verify any transactions using USDVT. Any holder of USDVT may be at risk of security breaches or technological defects that result in the loss of USDVT and VSB is not responsible for any loss of USDVT that may result from such breaches or defects. VSB is not responsible for any loss that incurs due to conditions or fees imposed by any third party in the redemption of USDVT, including a third party’s decision to delay redemption or to not redeem USDVT.
            </span>
        ],
    },
    {
        id: "no-deposits-insurance",
        title: "No Deposit Insurance",
        content: [
            <span key="1">
                USDVT, the funds used to purchase USDVT, and the reserves backing USDVT are not a deposit or bank product and are not insured by any government agency, including the FDIC, any private company, nor guaranteed by VSB. Any loss of USDVT a holder may experience would not be offset by any insurance payment. In the event that VSB fails, holders of USDVT will be unsecured creditors of VSB.
            </span>
        ],
    },
    {
        id: "indemnification",
        title: "Indemnification",
        content: [
            <span key="1">
                By using USDVT, you agree to indemnify, defend, and hold harmless Vermont State Bank, its parents, subsidiaries, affiliates, officers, directors, employees, agents, contractors, and representatives (“Indemnified Parties”) from and against any and all claims, demands, actions, proceedings, liabilities, losses, damages, judgments, costs, and expenses (including reasonable attorneys’ fees) arising out of or relating to (a) your breach of this Agreement or any applicable law or regulation; (b) your use, custody, purchase, redemption, transfer, or disposal of USDVT; or (c) any third-party claim asserted against an Indemnified Party in connection with your acts or omissions.
            </span>
        ],
    },
    {
        id: "miscellaneous",
        title: "MISCELLANEOUS",
        content: [
        ],
    },
    {
        id: "entire-agreement",
        title: "Entire Agreement",
        content: [
            <span key="1">
                This Agreement constitutes the entire agreement and understanding between all parties and supersedes all prior representations, understandings, undertakings, or agreements (whether oral and whether expressed or implied) of the parties with respect to the subject matter hereof. The waiver or failure of VSB to exercise in any respect any right provided for in this Agreement shall not be deemed a waiver of any further rights.
            </span>
        ],
    },
    {
        id: "headings",
        title: "Headings",
        content: [
            <span key="1">
                The headings in this Agreement are for purposes of convenience only and shall not limit or affect the meaning or interpretation of any of the terms or conditions of this Agreement.
            </span>
        ],
    },
    {
        id: "applicable-law",
        title: "Applicable Law",
        content: [
            <span key="1">
                This Agreement will be governed by and construed in accordance with the laws (both substantive and procedural) of the State of Illinois without regard to conflict of laws provisions. Any dispute arising out of or relating to this Agreement shall be resolved exclusively in the state courts of Illinois or the federal court of the Central District of Illinois, and the parties hereby irrevocable submit to the jurisdiction of such courts.
            </span>
        ],
    },
    {
        id: "severability",
        title: "Severability",
        content: [
            <span key="1">
                If any provision of this Agreement is deemed invalid or unenforceable under any applicable law, then the parties shall negotiate a valid and enforceable provision that reflects the original intent to the extent necessary in order to render such provision valid and enforceable. If such provision may not be saved, it shall be severed and the remaining provisions of this Agreement remain in full force.
            </span>
        ],
    },
    {
        id: "limitation",
        title: "Limitation",
        content: [
            <span key="1">
                <strong>
                    YOU HEREBY AGREE THAT VSB AND VSB’S SUBSIDIARIES, AFFILIATES, AND SERVICES PROVIDERS, AND THEIR RESPECTIVE OFFICERS, DIRECTORS, AGENTS, EMPLOYEES, ATTORNEYS, AND REPRESENTATIVES WILL NOT BE LIABLE FOR ANY DIRECT, PUNITIVE, INDIRECT, SPECIAL, INCIDENTAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSS, RESULTING FROM THE PURCHASE, HOLDING, DISPOSAL, OR REDEMPTION OF USDVT OR ANY OTHER MATTER RELATING TO THE SERVICES CONTEMPLATED BY THIS AGREEMENT, EVEN IF VSB HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND WHETHER SUCH DAMAGES ARE BASED ON CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE. 
                </strong>
            </span>
        ],
    },
    {
        id: "binding",
        title: "Binding Arbitration; Class Action Waiver",
        content: [
            "PLEASE READ THIS SECTION CAREFULLY AS IT WILL HAVE A SUBSTANTIAL IMPACT ON HOW LEGAL DISPUTES BETWEEN YOU AND VSB ARE RESOLVED. THIS PROVISION AFFECTS YOUR LEGAL RIGHTS BY PERMITTING US TO ELECT TO RESOLVE ANY CLAIMS THROUGH INDIVIDUAL (AND NOT CLASS-WIDE) BINDING ARBITRATION. ARBITRATION REPLACES YOUR RIGHT TO GO TO COURT, INCLUDING YOUR RIGHT TO BRING OR PARTICIPATE IN A CLASS ACTION, PRIVATE ATTORNEY, GENERAL ACTION, OR OTHER REPRESENTATIVE ACTION. IN ARBITRATION, A LEGAL DISPUTE IS SUBMITTED TO A NEUTRAL ARBITRATOR INSTEAD OF A JUDGE OR JURY. BY PURCHASING, USING, HOLDING OR REDEEMING USDVT, YOU AGREE TO ARBITRATE ANY AND ALL CLAIMS, DISPUTES, DEMANDS, COMPLAINS, CONTROVERSIES, OR CAUSES OF ACTION BETWEEN YOU AND US, OF ANY NATURE WHATSOEVER, REGARDING ANY PAST, PRESENT, OR FUTURE CONDUCT OR FACTS, WHICH ARE BASED UPON, ARISE OUT OF, RELATE TO, OR CONCERN THIS AGREEMENT.",
            "In order to commence arbitration, you must notify VSB in writing. Your notice shall be sent to 106 N Main Street, Vermont, IL 61484. Arbitration will be mandatory and the exclusive manner for resolving the dispute. Any arbitration will be conducted by a single, neutral arbitrator and shall take place in Fulton County, Illinois. You will not have the right to participate as a representative or member of any class of claimants pertaining to any dispute subject to arbitration. Arbitrations will be conducted under the rules of the arbitration administrator, as chosen by us. Unless mutually agreed to by you and us, claims of two or more persons may not be joined, consolidated, or otherwise brought together in the same arbitration, whether or not the claim may have been assigned.",
            "YOU ACKNOWLEDGE THAT YOU AGREE THAT NO CLASS ACTION, CLASS-WIDE ARBITRATION, PRIVATE ATTORNEY, GENERAL ACTION, OR OTHER PROCEEDING WHERE SOMEONE ACTS IN A REPRESENTATIVE CAPACITY, MAY BE PURSUED IN ANY ARBITRATION, REGARDLESS OF WHEN THE DISPUTE AROSE OR ACCRUED, OR WHEN THE ALLEGATIONS OR FACTS UNDERLYING THE DISPUTE OCCURRED. IN CONNECTION WITH ANY DISPUTE, YOU AND WE AGREE THAT NEITHER YOU NOR WE WILL HAVE THE RIGHT TO (AND YOU AND WE HEREBY WAIVE THE RIGHT TO): (A) PROCEED ON ANY DISPUTE AS A CLASS CLAIM OR CLASS ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR OTHER REPRESENTATIVE ACTION; (B) PARTICIPATE IN, OR BE REPRESENTED IN, A CLASS ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR OTHER REPRESENTATIVE ACTION IN COURT, IN A MEDIATION, OR IN ARBITRATION, EITHER AS A CLASS REPRESENTATIVE OR CLASS MEMBER; (C) JOIN OR CONSOLIDATE DISPUTES WITH CLAIMS OF ANY OTHER PERSONS; OR (D) SEEK ANY AWARD, REMEDY, OR RELIEF AGAINST OR ON BEHALF OF ANYONE WHO IS NOT A NAMED PARTY TO THE ACTION.",
            <span key="2">
                <strong>BANK ELECTION OF FORUM</strong>: VSB MAY, AT ITS SOLE OPTION, ELECT TO BRING AN ACTION REGARDING ANY DISPUTE IN A COURT OF COMPETENT JURISDICTION IN THE STATE OF ILLINOIS, AND YOU HEREBY CONSENT TO SUCH FORUM. IF VSB DOES NOT SO ELECT, ARBITRATION SHALL BE CONDUCTED AS OUTLINED PREVIOUSLY.
            </span>
        ],
    },
    {
        id: "dispute",
        title: "Dispute Resolution Time Limitation",
        content: [
            <span key="1">
                Any claim or cause of action you have arising out of or related to this Agreement or USDVT must be commenced within one (1) year after the claim accrues; otherwise, such claim or cause of action is permanently barred.
            </span>
        ],
    },
    {
        id: "force-majeure",
        title: "Force Majeure",
        content: [
            <span key="1">
                VSB shall have no responsibility for any failure or delay in any aspect of USDVT resulting from any condition beyond VSB’s control, including but not limited to government action, acts of terrorism, earthquake, fire, flood, power failures, equipment failures, and internet disturbances.
            </span>
        ],
    },
    {
        id: "assignment",
        title: "Assignment",
        content: [
            <span key="1">
                Any Holder in receipt or custody of USDVT will be subject to this Agreement, and sending, transferring, or exchanging USDVT to another party will automatically assign this Agreement to that party. Each holder or User of USDVT is subject to these Terms, which may be amended or modified by VSB without notice, and all prior and subsequent holders or Users warrant they have not and will not engage in illegal or prohibited transactions using USDVT.
            </span>,
            <span key="2">
                VSB maintains the right to freely assign this Agreement and the rights and obligations of this Agreement to any third party without prior notice in VSB’s sole discretion.
            </span>
        ],
    },
];
