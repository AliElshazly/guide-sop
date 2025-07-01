let confettiInterval;

const sopFlow = {
  "start": {
    question: `
    <p style='font-weight: normal;'>
    Is there a discrepancy between the passport name, the passport number, or the nationality or missing attachments?
    </p>
    `,
    options: [
      "Nationality Discrepancy",
      "Passport No. Discrepancy",
      "Name Discrepancy",
      "Photo doesn't match the passport",
      "No Passport attached",
      "No Discrepancy at all",
      "Mismatch (Place of birth & Nationality)"
    ],
    next: {
      "Nationality Discrepancy": "discrepancies",
      "Passport No. Discrepancy": "step2",
      "Name Discrepancy": "step3",
      "Photo doesn't match the passport": "step4",
      "No Passport attached": "step5",
      "No Discrepancy at all": "sure?",
      "Mismatch (Place of birth & Nationality)": "step7"
    }
  },
  "discrepancies": {
    question: `
    <p style='font-weight: normal;'>
    Select what kind of discrepancy you have in the application, and proceed accordingly.
    </p>`,
    options: ["Nationality Discrepancy",
      "Second Nationality is the Same as the Main",
      "One of the British Nationalities as a Second Nationality",
      "Has 3 or more than 3 Nationalities"
    ],
    next: { "Nationality Discrepancy": "step1",
      "Second Nationality is the Same as the Main": "step1-2",
      "One of the British Nationalities as a Second Nationality": "step1-3",
      "Has 3 or more than 3 Nationalities": "step1-4"
    },
    disclaimer: "Validate with your <strong>Team Leader</strong> if you have some doubts before you proceed, it's very <strong>CRITICAL!</strong>."
  },
  "step1": {
    question: `
    <p style='font-weight: normal;'>
    You need to contact the customer with the following template <a style='font-weight: bold;' href='https://docs.google.com/document/d/1Xf9MOjZU6b5pROzYYuscLprhJeSpXAprzMtu3UXVfvQ/edit?tab=t.0' target='_blank'>Nationality Discrepancy Template</a>
    </p>
    <br>
    <hr>
    <p style='font-weight: normal;'>
    You can also read this article on the knowledge base to learn how to handle the dual nationalities: <a style='font-weight: bold;' href='https://guideholding.sharepoint.com/:u:/s/GuideConsultantsInfoCenter/ETPTyh1PEO5DlaKIz0QQs7gBFuV3e2PBogHsSs78Rg0-Ow?e=SkST2P' target='_blank'>Nationality Descripancy Article</a>
    </p>
   `,
    options: ["Did you receive the customer response within 24 hours?",
      "Not yet"
    ],
    next: { "Did you receive the customer response within 24 hours?": "responseCheck1",
      "Not yet": "notYet1"
    },
    disclaimer: "Confirm with your <strong>Team Leader</strong> & Change the status to <strong>Contacted</strong> once email is sent."
  },
  "step1-2": {
    question: `
    <p style='font-weight: normal;'>
    You need to contact the customer with the following template <a style='font-weight: bold;' href='https://docs.google.com/document/d/1hHVy0AN43HECAQpe6guoAu6sVgj7U2k-AsibzPrqrsY/edit?tab=t.0' target='_blank'>Second Nationality is the Same as the Main Nationality Template</a>
    </p>
    <br>
    <hr>
    <p style='font-weight: normal;'>
    You can also read this article on the knowledge base to learn how to handle the dual nationalities: <a style='font-weight: bold;' href='https://guideholding.sharepoint.com/:u:/s/GuideConsultantsInfoCenter/ETPTyh1PEO5DlaKIz0QQs7gBFuV3e2PBogHsSs78Rg0-Ow?e=SkST2P' target='_blank'>Nationality Descripancy Article</a>
    </p>
   `,
    options: ["Did you receive the customer response within 24 hours?",
      "Not yet"
    ],
    next: { "Did you receive the customer response within 24 hours?": "responseCheck1",
      "Not yet": "notYet1"
    },
    disclaimer: "Confirm with your <strong>Team Leader</strong> & Change the status to <strong>Contacted</strong> once email is sent."
  },
   "step1-3": {
    question: `
    <p style='font-weight: normal;'>
    If the customer selected a British National (Overseas) or any other British Nationality, you need to contact the customer with the following template <a style='font-weight: bold;' href='https://docs.google.com/document/d/1PkSg5zuU3l8-fOFTfzpYg-7MSsFw48ZwS9E0207bGzY/edit?tab=t.0' target='_blank'>British Nationality Calrification Template</a>
    </p>
    <br>
    <hr>
    <p style='font-weight: normal;'>
    You can also read this article on the knowledge base to learn how to handle the dual nationalities: <a style='font-weight: bold;' href='https://guideholding.sharepoint.com/:u:/s/GuideConsultantsInfoCenter/ETPTyh1PEO5DlaKIz0QQs7gBFuV3e2PBogHsSs78Rg0-Ow?e=SkST2P' target='_blank'>Nationality Descripancy Article</a>
    </p>
   `,
    options: ["Did you receive the customer response within 24 hours?",
      "Not yet"
    ],
    next: { "Did you receive the customer response within 24 hours?": "responseCheck1",
      "Not yet": "notYet1"
    },
    disclaimer: "Confirm with your <strong>Team Leader</strong> & Change the status to <strong>Contacted</strong> once email is sent."
  },
  "step1-4": {
    question: `
    <p style='font-weight: normal;'>
    If the customer has 3 or more than 3 nationalities, you need to contact the customer with the following template <a style='font-weight: bold;' href='https://docs.google.com/document/d/1-5vAE_DeIUwBRrA6HJgn6D6Xb4b1vz2oi330OwP9ATM/edit?tab=t.0' target='_blank'>Three or More than Three Nationalities Template</a>
    </p>
    <br>
    <hr>
    <p style='font-weight: normal;'>
    You can also read this article on the knowledge base to learn how to handle the dual nationalities: <a style='font-weight: bold;' href='https://guideholding.sharepoint.com/:u:/s/GuideConsultantsInfoCenter/ETPTyh1PEO5DlaKIz0QQs7gBFuV3e2PBogHsSs78Rg0-Ow?e=SkST2P' target='_blank'>Nationality Descripancy Article</a>
    </p>
   `,
    options: ["Did you receive the customer response within 24 hours?",
      "Not yet"
    ],
    next: { "Did you receive the customer response within 24 hours?": "responseCheck1",
      "Not yet": "notYet1"
    },
    disclaimer: "Confirm with your <strong>Team Leader</strong> & Change the status to <strong>Contacted</strong> once email is sent."
  },
  "step2": {
    question: `
    <p style='font-weight: normal;'>
    You need to contact the customer with the <span class="copy-text" data-copy="2-6 Clarification Required: Verify the Passport Number Details Provided" onclick="copyToClipboard(this)">
    <strong>2-6 Clarification Required: Verify the Passport Number Details Provided</strong>
</span>
 in the 2-Dual Nationalities tab <a style='font-weight: bold;' href='https://docs.google.com/document/d/1Aj9m_qWOGg4riyMB1PbxXcYf2-6hiePMAieas7EcUGA/edit?tab=t.j057vyvynfyp' target='_blank'>2-6 Dual Nationalities Template</a>
    </p>
    <br>
    <hr>
    <p style='font-weight: normal;'>
    You can also read this article on the knowledge base to learn how to handle the dual nationalities: <a style='font-weight: bold;' href='https://guideholding.sharepoint.com/:u:/s/GuideConsultantsInfoCenter/ETPTyh1PEO5DlaKIz0QQs7gBFuV3e2PBogHsSs78Rg0-Ow?e=SkST2P' target='_blank'>Nationality Descripancy Article</a>
    </p>
   `,
    options: ["Did you receive the customer response within 24 hours?",
      "Not yet"
    ],
    next: { "Did you receive the customer response within 24 hours?": "responseCheck1",
      "Not yet": "notYet1"
    },
    disclaimer: `
    Confirm with your <strong>Team Leader</strong> & Change the status to <strong>Contacted</strong> once email is sent.
    <hr>
    Use the <span class="copy-text">Green Button</span> to copy the text and search for the matching template using the subject line in the <a style='font-weight: bold;' href='https://docs.google.com/document/d/1Aj9m_qWOGg4riyMB1PbxXcYf2-6hiePMAieas7EcUGA/edit?tab=t.j057vyvynfyp' target='_blank'><strong>templates document</strong></a>.
    `
  },
  "step3": {
    question: `
    <p style='font-weight: normal;'>
    You need to contact the customer with the following template <a style='font-weight: bold;' href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/Ee3nAeTtLZBOt_SdDbvaI8sBr41hsIyUh3rnf0taCG0Vhw?e=goZrPv' target='_blank'>Name Discrepancy Template</a>
    </p>

   `,
    options: ["Did you receive the customer response within 24 hours?",
      "Not yet"
    ],
    next: { "Did you receive the customer response within 24 hours?": "responseCheck1",
      "Not yet": "notYet1"
    },
    disclaimer: "Confirm with your <strong>Team Leader</strong> & Change the status to <strong>Contacted</strong> once email is sent."
  },
  "step4": {
    question: `
    <p style='font-weight: normal;'>
    You need to contact the customer with the following template <a style='font-weight: bold;' href='https://guideholding-my.sharepoint.com/:w:/r/personal/farah_mohammed_guideholding_com/Documents/Document%204.docx?d=w634f6cc38bcd4af682208e9904f1692d&csf=1&web=1&e=8AmaDp' target='_blank'>Personal Photo Required Template</a>
    </p>

   `,
    options: ["Did you receive the customer response within 24 hours?",
      "Not yet"
    ],
    next: { "Did you receive the customer response within 24 hours?": "responseCheck1",
      "Not yet": "notYet1"
    },
    disclaimer: "Confirm with your <strong>Team Leader</strong> & Change the status to <strong>Contacted</strong> once email is sent."
  },
  "step5": {
    question: `
    <p style='font-weight: normal;'>
    You need to contact the customer with the following template <a style='font-weight: bold;' href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EVIndbdpYpZFtXAFWJQ_YeIBUGssE0y9E4lJLvHSVjC9gQ?e=LFROJI' target='_blank'>Passport Copy is Required Template</a>
    </p>

   `,
    options: ["Did you receive the customer response within 24 hours?",
      "Not yet"
    ],
    next: { "Did you receive the customer response within 24 hours?": "responseCheck1",
      "Not yet": "notYet1"
    },
    disclaimer: "Confirm with your <strong>Team Leader</strong> & Change the status to <strong>Contacted</strong> once email is sent."
  },
  "sure?": {
    question: `
    <p style='font-weight: normal;'>
    Are you sure there are no discrepancies in the nationality, CRM data compared with the passport or anything?
    </p>`,
    options: ["Application is clear",
      "There are discrepancies"
    ],
    next: { "Application is clear": "step6",
      "There are discrepancies": "start"
    },
    disclaimer: "Validate with your <strong>Team Leader</strong> if you have some doubts before you proceed, it's very <strong>CRITICAL!</strong>."
  },
  "responseCheck1": {
    question: `
    <p style='font-weight: normal;'>
    Has the customer provided all the required documents and information?
    </p>
    `,
    options: ["Yes", "No"],
    next: {
      "Yes": "passportExpiry",
      "No": "requestAgain"
    },
    disclaimer: `
    If the customer replied with the required info, validate with your <strong>Team Leader</strong> and ensure all documents are verified before proceeding.
    <hr>
    If the customer didn't reply with the required info, click <strong>No</strong>.
    `
  },
  "responseCheck2": {
    question: `
    <p style='font-weight: normal;'>
    Did the customer accept to apply for the ETA even when his passport is expiring in less than 6 months from the travel date?
    </p>
    `,
    options: ["Yes, the customer accepted to apply", "No, will proceed with the refund"],
    next: {
      "Yes, the customer accepted to apply": "proceedToGov",
      "No, will proceed with the refund": "proceedToRefund2"
    },
    disclaimer: `
    If the customer replied with the required info, validate with your <strong>Team Leader</strong> and ensure all documents are verified before proceeding.
    <hr>
    If the customer didn't reply with the required info, click <strong>No</strong>.
    `
  },
  "notYet1": {
    question: "If 24 hours have passed without a response, send a first reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EdgXYUQbBtxPhkX_T0GEs5YBblYvIr4CektWFrpR7w_SJg?e=ieHp03' target='_blank'>Reminder Template</a>.<br><br><hr><br>If 48 hours have passed send a second reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EY1b2d0g3j5Hq8c7k4f6n9sB9m1eXQx3y2J4Z5v7r6z0WQ?e=8hGk3D' target='_blank'>Second Reminder Template</a>.<br><br><hr><br><span style='color:red'>Have 72 hours been passed without a response from the customer?</span>",
    options: ["Yes, 72 hours have been passed"],
    next: { "Yes, 72 hours have been passed": "proceedToRefund" },
    disclaimer: "Validate with your <strong>Team Leader</strong> before sending the reminder.<br><hr>Also notify the <strong>Customer Service Team</strong> to follow up with the customer.",
  },
  "proceedToGov": {
    question: `
    <p style='font-weight: normal;'>
    If no further discrepancies found, open the <a href='https://apply-for-an-eta.homeoffice.gov.uk/apply/electronic-travel-authorisation/how-to-apply' target='_blank'><strong>UK GOV ETA Application</strong></a> to apply for the ETA.
    <br>
    <br>
    <hr>
    <p style='font-weight: normal;'>
    Reject the cookies and click on <a href='https://apply-for-an-eta.homeoffice.gov.uk/apply/electronic-travel-authorisation/how-to-apply' target='_blank' style='text-decoration:none;'><strong style='background-color: #00703c; box-shadow: 0 2px #002d18; color: #fff; border: 2px solid transparent; margin: 0 0 22px; padding: 8px 10px 7px;'>Continue</strong></a>
    </p>`,
    options: ["Continue the process flow"],
    next: { "Continue the process flow": "passportAttach" },
    disclaimer: "Focus on which domain you are working on, if it's <strong>UK ETA</strong> then use the <strong>UK ETA Alias.</strong><br><hr>If its <strong>ETA UK</strong> then use the <strong>ETA UK Alias</strong> to receive the OTP and the approval on the correct domain, etc...."
  },
  "requestAgain": {
    question: `
    <p style='font-weight: normal;'>
    Get back to your <strong>Team Leader</strong> as this kind of scenarios require a customized email template.
    </p>
    `,
    options: ["Team Leader Response is Received"],
    next: { "Team Leader Response is Received": "wait" },
    disclaimer: "At this stage, your <strong>Team Leader</strong> will get a customized email template to be sent to the customer for further verification.<hr><strong>Be Paitient!</strong>"
  },
  "wait": {
    question: `
    <p style='font-weight: normal;'>
    If you sent the customized template to the customer, wait until the customer replies back to decide whether you should proceed or not.
    </p>
    `,
    options: ["Did you receive the customer response within 24 hours?", "Not Yet"],
    next: { "Did you receive the customer response within 24 hours?": "responseCheck1", "Not Yet": "notYet1" },
    disclaimer: "Change the status to <strong>Pending Documents</strong>."
  },
  "passportAttach": {
    question: `Once you click on Continue, you will see the below picture.
    <br>
    <br>
    <hr>
    <br>
    <h2 style= 'text-decoration: underline;'>
      Step 1:
    </h2>
    <p style='font-weight: normal;'>
    Attach the passport copy for the system to read the MRZ and click on <strong>Continue</strong>.
    </p>
    <br>
    <img src='passportAttaching.png' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Passport Attaching'>
    <hr>
    <h2 style= 'text-decoration: underline;'>
      Step 2:
    </h2>
    <p style='font-weight: normal;'>
    After clicking on Continue, you will see the below page, if it says your photo doesn't meet the requirements, get back to your <strong>Team Leader</strong>.
    </p>
    <img src='passportMeets.jpeg' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Passport Check Page'>
    <hr>
    <h2 style= 'text-decoration: underline;'>
      Step 3:
    </h2>
    <p style='font-weight: normal;'>
      Validate the data from the passport MRZ, the passport data, and the CRM carefully, get back to your <strong>Team Leader</strong> in case you get lost in here!
    </p>
    <span style= 'background-color: yellow; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; font-weight: bold; text-align: center;'>If the system misread any letter, use Verify MRZ status on the CRM and Don't Ever Change any field without a Confirmation from your Team Leader</span>
    <img src='mrzCheck.jpeg' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='MRZ Check Page'>
    <p style= 'background-color: yellow; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; text-align: center;'>
    Click on Continue to proceed to the next page!
    </p>
    <hr>
    <h2 style= 'text-decoration: underline;'>
      Step 4:
    </h2>
    <p style='font-weight: normal;'>
    Click on <strong style='color:rgb(106, 166, 214); text-decoration: underline;'>skip this step</strong>, as seen in the below picture, get back to your <strong>Team Leader</strong> if you need support.
    </p>
    <img src='skip.jpeg' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Skip This Step Page'>
    <br>
    <hr>
    <h2 style= 'text-decoration: underline;'>
      Step 5:
    </h2>
    <p style='font-weight: normal;'>
    After skiping the previous step, you will see the below page, it clarifies how the photo should look like to be accepted by the system, get back to your <strong>Team Leader</strong> if required.
    </p>
    <img src='addPhoto2.jpeg' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Add Photo Page'>
     <br>
    <hr>
    <h2 style= 'text-decoration: underline;'>
      Step 6:
    </h2>
    <p style='font-weight: normal;'>
    Upload the customer photo that was processed by the Photo Processing Team, get back to your <strong>Team Leader</strong> if required.
    </p>
    <img src='uploadPhoto.jpeg' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Upload Photo Page'>
      <br>
    <hr>
    <h2 style= 'text-decoration: underline;'>Step 7:</h2>
    <p style='font-weight: normal;'>
    If it tells you the photo meets the requirement, click <strong>Yes</strong> and <strong>Continue</strong>, get back to your <strong>Team Leader</strong> if the photo doesn't meet the requirements.
    </p>
    <img src='photoMeets.jpeg' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Photo Meets Requirements Page'>
    <br>
    <hr>
    <h2 style= 'text-decoration: underline;'>
      Step 8:
    </h2>
    <p style='font-weight: normal;'>
    Copy the customer phone number from the CRM and remove the spaces as same as the below image. Get back to your <strong>Team Leader</strong> if required!
    </p>
    <img src='phoneNumber.jpeg' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Phone Number Page'>
    <br>
    <hr>
    <h2 style= 'text-decoration: underline;'>
      Step 9:
    </h2>
    <p style='font-weight: normal;'>
    Arrange the address as same as the below image clarifies, it should always be arranged this way <span style= 'background-color: yellow; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; font-weight: bold; text-align: center;'>Apt No. Building No. Street, Area</span> get back to your <strong>Team Leader</strong> if required.
    </p>
    <img src='address.jpeg' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Address page'>
    <br>
    <hr>
    <h2 style= 'text-decoration: underline;'>
      Step 10:
    </h2>
    <p style='font-weight: normal;'>
    If the customer has other nationalities, Choose <strong>Yes</strong> and select the other nationalities then <strong>Continue</strong>, if no other nationalities, then select No. Get back to your <strong>Team Leader</strong> if required!
    </p>
    <img src='otherNationalitiesPage.png' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Other Nationalities Page'>
    <br>
    <hr>
    <h2 style= 'text-decoration: underline;'>
      Step 11:
    </h2>
    <p style='font-weight: normal;'>
    Copy the customer Job from the CRM, <strong>Make sure no offensive words or symbols written by the customer</strong> then, <strong>Continue</strong>. Get back to your <strong>Team Leader</strong> if required!
    </p>
    <img src='jobPage.png' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Job Page'>
    <br>
    <hr>
    <h2 style= 'text-decoration: underline;'>
      Step 12:
    </h2>
    <p style='font-weight: normal;'>
    If the customer answered No for the Criminal Conviction on the CRM, then proceed normally, if he answered <strong>Yes</strong>, then the followed 2 questions' answers must be <strong>NO</strong>, get back to your <strong>Team Leader</strong> if required!
    </p>
    <img src='criminal.png' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Criminal Conviction Page'>
    <h3 style= 'background-color: yellow; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; font-weight: bold; text-align: center;'>The First Question Answer!</h3>
    <img src='convicted.png' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Conicted A Crime Photo'>
    <h3 style= 'background-color: yellow; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; font-weight: bold; text-align: center;'>The Second Question Answer!</h3>
    <img src='prisoned.png' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Conicted A Crime Photo'>
    <h3 style= 'background-color: yellow; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; font-weight: bold; text-align: center;'>The Extremism <strong>MUST BE NO!</strong></h3>
    <img src='ext.png' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Conicted A Crime Photo'>
    <hr>
    <h2 style= 'text-decoration: underline;'>
      Step 13:
    </h2>
    <p style='font-weight: normal;'>
    Validate your inputs before you <strong>Continue</strong> then, <strong>Continue</strong>. Get back to your <strong>Team Leader</strong> if required!
    <span style= 'background-color: yellow; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; font-weight: bold; text-align: center;'>You must take a screenshot from this step on the UK Portal to upload it on the CRM in the <strong>Verification</strong> field</span>
    </p>
    <img src='checkYourAnswers.png' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Check Your Answers'>
    <br>
    <hr>
    <h2 style= 'text-decoration: underline;'>
      Step 14:
    </h2>
    <p style='font-weight: normal;'>
    After deep detaied validation <strong>Continue to payment</strong>. Get back to your <strong>Team Leader</strong> if required!
    </p>
    <img src='cont.jpeg' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Validation Image'>
    <br>
    <hr>
    <h2 style= 'text-decoration: underline;'>
      Step 15:
    </h2>
    <p style='font-weight: normal;'>
    <span style= 'background-color: yellow; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; font-weight: bold; text-align: center;'> ALWAYS Choose United Arab Emirates as the Country you're applying from! </span> <strong>Continue</strong> to the payment page. Get back to your <strong>Team Leader</strong> if required!
    </p>
    <img src='applyingFrom.png' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Applying Form'>
    <p style='background-color: yellow; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; text-align: center;'>
    Continue to payment on Worldpay.
    </p>
    <img src='worldPay.jpeg' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Select United Arab Emirates'>
    <br>
    <hr>
    <h2 style= 'text-decoration: underline;'>
      Step 16:
    </h2>
    <p style='font-weight: normal;'>
    Enter the credit card details and click on <strong>Make Payment</strong>. Get back to your <strong>Team Leader</strong> if required!
    </p>
    <img src='worldpayPS.png' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Select United Arab Emirates'>
    `
  
    
    ,
    options: ["Applied?"],
    next: { "Applied?": "Applied" },
    disclaimer: `
    If you're facing any challenges, get back to your <strong>Team Leader</strong>
    <hr>
    <strong style= 'background-color: yellow; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; font-weight: bold; text-align: center;'>When you process the payment, make sure you use the relevant card for the domain you received the application on!</strong>
    <hr>
    <strong>Don't RISK!</strong>.
    `
  },
  "Applied": {
    question: `
    
      <p style='font-weight: normal;'>
        Now change the application status to <span style='color:green; font-weight:bold;'>Applied</span> and wait for the approval to be sent to the email you used to apply from.
        <br><br>
        <hr>
        <p style='font-weight: normal;'>
          Once you receive the approval, follow the below steps to send it to the customer in its professional format.
        </p>
      </p>`,
    options: ["Approval Received"],
    next: { "Approval Received": "Duplicated?" },
    disclaimer: "Change the status to <strong>Applied</strong> and wait until the approval is sent to your email."
  },
  "Duplicated?": {
    question: "Is it a Duplicated application?",
    options: ["Yes, it's Duplicated", "No, it's not Duplicated"],
    next: { "Yes, it's Duplicated": "Duplicated Template", "No, it's not Duplicated": "Approval Template" },
    disclaimer: "Make sure you check with your <strong>Team Leader</strong> if you have any doubts."
  },
  "Duplicated Template": {
    question: `
    <p style='font-weight: normal;'>
    Make sure the 2 applications included the same or similar info, and one of them is “Duplicate”, and send this approval template to the customer <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EQeml1hoO8BMp-VR7ELN2ikB3rS3rq6QNTNTZcbUfHJFow?e=WDtoi5' target='_blank'><strong>Duplicate Approval Template</strong></a>.
    </p>
    <hr>
    <p>
    <span style= 'background-color: yellow; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; font-weight: bold; text-align: center;'>Don't Forget to attach the approval on the CRM in the <strong>Approval</strong> field.</span>
    </p>
    `,
    options: ["Done and Start Over"],
    next: { "Done and Start Over": "start" },
    disclaimer: "Leave the Duplicated application status with the same <strong>Duplicate</strong> status as is."
  },
  "Approval Template": {
    question: `
    <p style='font-weight: normal;'>
    Send the approval to the customer using this template <a href='https://docs.google.com/document/d/14ViHapXINanCbVpBZrvP9qTgI2q6hSaHuyR6PGSA-DQ/edit?tab=t.0' target='_blank'><strong>Approval Template</strong></a>.
    </p>
    <hr>
    <p>
    <span style= 'background-color: yellow; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; font-weight: bold; text-align: center;'>Don't Forget to attach the approval on the CRM in the <strong>Approval</strong> field.</span>
    </p>
    `,
    options: ["Done and Start Over"],
    next: { "Done and Start Over": "start" },
    disclaimer: "Don't forget to change the status to <strong>Applied</strong>, and get back to your <strong>Team Leader</strong> if you have any concerns."
  },
  "proceedToRefund": {
    question: "Change the application status to <strong>Unresponsive</strong> on the CRM.<br><br><hr><br>Once the application status gets changed to <strong>Refunded</strong>, send the <a href='https://docs.google.com/document/d/1QJaAEdrcl-aCGG4Q2kHBzonXhwYjyJnzWe1Zc41xVGY/edit?tab=t.0' target='_blank'>Refund Template</a> to the customer.",
    options: ["Done and Start Over"],
    next: { "Done and Start Over": "start" },
    disclaimer: "After sending the refund template to the customer, don't forget to <strong>Change</strong> the application status to <strong style='color: red'>Cancelled!</strong>"
  },
  "proceedToRefund2": {
    question: `
    <p style='font-weight: normal;'>
    Change the application status to <strong>Refund Requested</strong> on the CRM.
    </p>
    <br>
    <hr>
    <p style='font-weight: normal;'>
    Once the application status gets changed to <strong>Refunded</strong>, send the following <a href='https://guideholding-my.sharepoint.com/:w:/r/personal/farah_mohammed_guideholding_com/Documents/Dear%20%E2%80%A6.docx?d=w5380655cb12146fe8e56ad5aa6ac1205&csf=1&web=1&e=DHVah5' target='_blank'>Refund Template</a> to the customer and change the application status to <strong style='color: red;'>Cancelled</strong>.
    </p>
    `,
    options: ["Done and Start Over"],
    next: { "Done and Start Over": "start" },
    disclaimer: "After sending the refund template to the customer, don't forget to <strong>Change</strong> the application status to <strong style='color: red'>Cancelled!</strong>"
  },
  "step6": {
    question: `
    <p style='font-weight: normal;'>
    Before you proceed, make sure that the passport information are correct, the photo matches the passport, and the passport data are matching the CRM.</p>
    <br>
    <hr>
    <p style='font-weight: normal;'>
    Once confirmed, you can continue the process.
    </p>
    `
    ,
    options: ["Continue the process flow",
    ],
    next: { "Continue the process flow": "passportExpiry"
    },
    disclaimer: "Make sure to check with your <strong>Team Leader</strong> if you have any doubts before proceeding.<br><hr><strong>Don't RUSH!</strong>"
  },
  "step7": {
    question: `
    <p style='font-weight: normal;'>
    In case there is a mismatch or difference between the place of birth and the customer's nationality, you must send an email to the customer with the following template <a href='https://docs.google.com/document/d/1F1OBQWTOzSxZF4rUAebhi3ut1JDHWPUVqp0O4uRyQUc/edit?tab=t.0#heading=h.tn1n9xpcc8m' target='_blank' style='font-weight: bold;'>Second Nationality & Customer answered <strong style='background-color: yellow;'>No</strong> Template</a>.
    </p>
    <hr>
    <p style='font-weight: normal;'>
    Use this template if the customer answered <strong>Yes</strong> in the second Nationality field <a href='https://docs.google.com/document/d/1F1OBQWTOzSxZF4rUAebhi3ut1JDHWPUVqp0O4uRyQUc/edit?tab=t.0#heading=h.tn1n9xpcc8m' target='_blank' style='font-weight: bold;'>Second Nationality & Customer answered <strong style='background-color: yellow;'>Yes</strong> Template</a>.
    </p>
    `
    ,
    options: ["Did you receive the customer response within 24 hours?", "Not Yet"
    ],
    next: { "Did you receive the customer response within 24 hours?": "responseCheck1", "Not Yet": "notYet1"
    },
    disclaimer: "Make sure to check with your <strong>Team Leader</strong> if you have any doubts before proceeding.<br><hr><strong>Don't RUSH!</strong>"
  },
  "passportExpiry": {
    question: `
    <p style='font-weight: normal;'>
    Is the passport expiration date less than 6 months from the travel date?
    </p>
    `,
    options: ["Yes, it's less than 6 months", "No, it's more than 6 months"],
    next: { "Yes, it's less than 6 months": "notifyCustomer", "No, it's more than 6 months": "proceedToGov" },
    disclaimer: "<strong>Check the Passport Expiry Date!</strong>"
  },
  "notifyCustomer": {
    question: `
    <p style='font-weight: normal;'>
    You need to notify the customer by sending him the following template <a href='https://docs.google.com/document/d/1jyPHMz5S42Gjk4PwFJOQYylzWLWc3AJGOotxtlQ7yrw/edit?tab=t.0' target='_blank'><strong>Passport Expiry Notification Template</strong></a>.
    </p>
    `,
    options: ["Did you receive the customer response within 24 hours?", "Not Yet"],
    next: { "Did you receive the customer response within 24 hours?": "responseCheck2", "Not Yet": "notYet1" },
    disclaimer: "If the customer replied back with accepting to apply for the ETA even the passport expiry date is less than 6 months, then proceed to the next step."
  },
  

};


let currentPath = [];

function renderStep(stepId) {
  transitionToStep(stepId);
}



function goBack() {
  const previousId = currentPath.pop();
  renderStep(previousId);
}


function transitionToStep(stepId) {
  const container = document.getElementById('sop-flow');
  container.classList.remove('fade-in');
  container.classList.add('fade-out');

  toggleDisclaimer("");
  setTimeout(() => {
    container.classList.remove('fade-out');
    container.innerHTML = "";

    const step = sopFlow[stepId];
    if (!step) return;

    toggleDisclaimer(step.disclaimer);
    if (stepId === "Applied") {
      showCelebration();
    }

    

    const q = document.createElement('h3');
    q.innerHTML = step.question;
    container.appendChild(q);

    if (step.options.length <= 3) {
      step.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = "option";
        btn.innerText = option;
        btn.onclick = () => {
          currentPath.push(stepId);
          const nextId = step.next[option];
          toggleDisclaimer(option);
          renderStep(nextId);
        };
        container.appendChild(btn);
      });
    } else {
      const select = document.createElement('select');
      select.innerHTML = `<option value="">-- Choose --</option>`;
      step.options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.innerText = option;
        select.appendChild(opt);
      });
      select.onchange = () => {
        const selected = select.value;
        if (selected) {
          currentPath.push(stepId);
          toggleDisclaimer(selected);
          renderStep(step.next[selected]);
        }
      };
      container.appendChild(select);
    }

    const backBtn = document.getElementById('backBtn');
      if (stepId === "start") {
        currentPath = []; // reset path
        backBtn.style.display = "none";
    } else if (stepId === "start" || stepId === "Done and Start Over" || stepId === "proceedToRefund") {
        currentPath = []; // reset path
        backBtn.style.display = "none";
    } else {
        backBtn.style.display = currentPath.length > 0 ? "inline-block" : "none";
    }

    container.classList.add('fade-in');
  }, 500);
}




function toggleDisclaimer(message = "") {
  const disclaimer = document.getElementById('disclaimer');
  const text = document.getElementById('disclaimer-text');

  if (message) {
    text.innerHTML = message;
    disclaimer.style.display = "flex";
  } else {
    disclaimer.style.display = "none";
  }
}


function showCelebration() {
  const celebration = document.createElement('div');
  celebration.className = "celebration-message";
  celebration.innerHTML = "🎉🎊 Great Job! You have Successfully Applied the Application! 🎊🎉";
  celebration.style.position = "fixed";
  celebration.style.top = "30px";
  celebration.style.left = "50%";
  celebration.style.transform = "translateX(-50%)";
  celebration.style.background = "#fff";
  celebration.style.width = "auto";
  celebration.style.border = "2px solid #4CAF50";
  celebration.style.padding = "12px 16px";
  celebration.style.borderRadius = "10px";
  celebration.style.fontSize = "16px";
  celebration.style.fontWeight = "bold";
  celebration.style.zIndex = "9999";
  celebration.style.boxShadow = "0 0 20px rgba(0,0,0,0.2)";
  celebration.style.color = "#4CAF50";
  celebration.style.textAlign = "center";
  document.body.appendChild(celebration);

  // Fire confetti immediately
  confetti({
    particleCount: 100,
    spread: 100,
    origin: { y: 0.6 }
  });

  // Fire 2 more times at 1s and 2s
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 }
    });
  }, 1000);

  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 }
    });
  }, 2000);

  // Remove celebration message after 4 seconds
  setTimeout(() => {
    celebration.remove();
  }, 4000);
}


function copyToClipboard(element) {
  const text = element.dataset.copy;
  navigator.clipboard.writeText(text).then(() => {
    showCopyNotification("Copied to clipboard!");
  });
}

function showCopyNotification(message) {
  const note = document.createElement('div');
  note.innerText = message;
  note.style.position = 'fixed';
  note.style.top = '20px';
  note.style.left = '50%';
  note.style.transform = 'translateX(-50%)';
  note.style.background = '#4CAF50';
  note.style.color = '#fff';
  note.style.padding = '10px 20px';
  note.style.borderRadius = '8px';
  note.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  note.style.zIndex = '9999';
  note.style.fontWeight = 'bold';
  document.body.appendChild(note);

  setTimeout(() => {
    note.remove();
  }, 2000);
}






const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeOut {
  0% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }
}`;
document.head.appendChild(style);




renderStep("start");


document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("recommendationModal");
  const closeModalBtn = document.getElementById("closeModal");
  const recommendationLink = document.getElementById("recommendationLink");
  const submitBtn = document.getElementById("submitRecommendation");

  recommendationLink.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  submitBtn.addEventListener("click", function () {
    const text = document.getElementById("recommendationText").value.trim();
    if (text) {
      fetch("https://formspree.io/f/meoknvee", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: text
        })
      })
      .then(response => {
        if (response.ok) {
          showCopyNotification("Recommendation sent successfully!");
          modal.style.display = "none";
          document.getElementById("recommendationText").value = "";
        } else {
          showCopyNotification("Failed to send. Try again.");
        }
      })
      .catch(error => {
        showCopyNotification("Something went wrong. Try again.");
        console.error("Formspree error:", error);
      });
      
    } else {
      showCopyNotification("Please write something before submitting.");
    }
  });
});
