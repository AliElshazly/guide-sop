let confettiInterval;

const sopFlow = {
  "start": {
    question: `
    <p style='font-weight: normal;'>
    Is there a discrepancy in the passport name, the passport number, or the nationality, missing attachments, or the passport is expired?
    </p>
    `,
    options: [
      "Nationality Discrepancy",
      "Passport No. Discrepancy",
      "Name Discrepancy",
      "Photo/Passport doesn't match the requirements",
      "No Photo/Passport attached",
      "No Discrepancy at all",
      "Mismatch (Place of birth & Nationality)",
      "Passport Expired"
    ],
    next: {
      "Nationality Discrepancy": "discrepancies",
      "Passport No. Discrepancy": "step2",
      "Name Discrepancy": "step3",
      "Photo/Passport doesn't match the requirements": "step4",
      "No Photo/Passport attached": "step5",
      "No Discrepancy at all": "sure?",
      "Mismatch (Place of birth & Nationality)": "step7",
      "Passport Expired": "step8"
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
      "Not yet": "notYet Second As Main"
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
      "Not yet": "notYet British"
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
      "Not yet": "notYet More Than 3"
    },
    disclaimer: "Confirm with your <strong>Team Leader</strong> & Change the status to <strong>Contacted</strong> once email is sent."
  },
  "step2": {
    question: `
    <p style='font-weight: normal;'>
    You need to contact the customer with the <a style='font-weight: bold;' href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EU34Y9Jzaa9Lk04iBB3Mw5kBEuGAor8xzhnqq7PsArlKrQ?e=wlWRdm' target='_blank'>Passport Number Discrepancy Template</a>
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
      "Not yet": "notYet Passport Number"
    },
    disclaimer: `
    Confirm with your <strong>Team Leader</strong> & Change the status to <strong>Contacted</strong> once email is sent.
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
      "Not yet": "notYet Name Discrepancy"
    },
    disclaimer: "Confirm with your <strong>Team Leader</strong> & Change the status to <strong>Contacted</strong> once email is sent."
  },
  "step4": {
    question: `
    <p style='font-weight: normal;'>
    You need to contact the customer with one ofthe following templates <a style='font-weight: bold;' href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EdrPV6crg8hHu0A-uCJ9ZlABFgqNnnzzBskMGpbc-PumMQ?e=ZxHY0k' target='_blank'>Personal/Passport Copy Required Templates</a>
    </p>

   `,
    options: ["Did you receive the customer response within 24 hours?",
      "Not yet"
    ],
    next: { "Did you receive the customer response within 24 hours?": "responseCheck1",
      "Not yet": "notYet photo/passport doesn't match"
    },
    disclaimer: "Confirm with your <strong>Team Leader</strong> & Change the status to <strong>Contacted</strong> once email is sent."
  },
  "step5": {
    question: `
    <p style='font-weight: normal;'>
    You need to contact the customer with one of the following templates <a style='font-weight: bold;' href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EZg_HXb4AWtMiNzBG8c5deQBtsg7-u3hJqXYuOcip28LpQ?e=cBakY8&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1753269826382&web=1' target='_blank'>Passport/Photo Templates</a>
    </p>

   `,
    options: ["Did you receive the customer response within 24 hours?",
      "Not yet"
    ],
    next: { "Did you receive the customer response within 24 hours?": "responseCheck1",
      "Not yet": "notYet no photo/passport attached"
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
    Has the customer provided all the required documents and information?
    </p>
    `,
    options: ["Yes", "No"],
    next: {
      "Yes": "proceedToGov",
      "No": "requestAgain"
    },
    disclaimer: `
    If the customer replied with the required info, validate with your <strong>Team Leader</strong> and ensure all documents are verified before proceeding.
    <hr>
    If the customer didn't reply with the required info, click <strong>No</strong>.
    `
  },
  "notYet1": {
    question: "If 24 hours have passed without a response, send a first reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EdgXYUQbBtxPhkX_T0GEs5YBblYvIr4CektWFrpR7w_SJg?e=ieHp03' target='_blank'>Reminder Template</a>.<br><br><hr><br>If 48 hours have passed send a second reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EdgXYUQbBtxPhkX_T0GEs5YBblYvIr4CektWFrpR7w_SJg?e=ieHp03' target='_blank'>Second Reminder Template</a>.<br><br><hr><br><span style='color:red'>Have 72 hours been passed without a response from the customer?</span>",
    options: ["Yes, 72 hours have been passed"],
    next: { "Yes, 72 hours have been passed": "proceedToRefund" },
    disclaimer: "Validate with your <strong>Team Leader</strong> before sending the reminder.<br><hr>Also notify the <strong>Customer Service Team</strong> to follow up with the customer.",
  },
  "notYet Second As Main": {
    question: "If 24 hours have passed without a response, send a first reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EXpRzLl9dUpCkUuI85rxyGYB5ZlodO_OIGrZL6AExhJxww?e=VdPdh1&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1752755593180&web=1' target='_blank'>Reminder Template</a>.<br><br><hr><br>If 48 hours have passed send a second reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EXpRzLl9dUpCkUuI85rxyGYB5ZlodO_OIGrZL6AExhJxww?e=VdPdh1&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1752755593180&web=1' target='_blank'>Second Reminder Template</a>.<br><br><hr><br><span style='color:red'>Have 72 hours been passed without a response from the customer?</span>",
    options: ["Yes, 72 hours have been passed"],
    next: { "Yes, 72 hours have been passed": "proceedToRefund" },
    disclaimer: "Validate with your <strong>Team Leader</strong> before sending the reminder.<br><hr>Also notify the <strong>Customer Service Team</strong> to follow up with the customer.",
  },
  "notYet British": {
    question: "If 24 hours have passed without a response, send a first reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/ERBMAy2ldPdDjlZYpiebchQBtJNzZmL6JOrklgEuHl-c-w?e=W25gwJ&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1752755986733&web=1' target='_blank'>Reminder Template</a>.<br><br><hr><br>If 48 hours have passed send a second reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/ERBMAy2ldPdDjlZYpiebchQBtJNzZmL6JOrklgEuHl-c-w?e=W25gwJ&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1752755986733&web=1' target='_blank'>Second Reminder Template</a>.<br><br><hr><br><span style='color:red'>Have 72 hours been passed without a response from the customer?</span>",
    options: ["Yes, 72 hours have been passed"],
    next: { "Yes, 72 hours have been passed": "proceedToRefund" },
    disclaimer: "Validate with your <strong>Team Leader</strong> before sending the reminder.<br><hr>Also notify the <strong>Customer Service Team</strong> to follow up with the customer.",
  },
  "notYet More Than 3": {
    question: "If 24 hours have passed without a response, send a first reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EYhJJNCXh6BButH7XBYvvjMBsuvzYbKbvjw5TQqcG8gC2Q?e=spCEXi&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1752756180051&web=1' target='_blank'>Reminder Template</a>.<br><br><hr><br>If 48 hours have passed send a second reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EYhJJNCXh6BButH7XBYvvjMBsuvzYbKbvjw5TQqcG8gC2Q?e=spCEXi&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1752756180051&web=1' target='_blank'>Second Reminder Template</a>.<br><br><hr><br><span style='color:red'>Have 72 hours been passed without a response from the customer?</span>",
    options: ["Yes, 72 hours have been passed"],
    next: { "Yes, 72 hours have been passed": "proceedToRefund" },
    disclaimer: "Validate with your <strong>Team Leader</strong> before sending the reminder.<br><hr>Also notify the <strong>Customer Service Team</strong> to follow up with the customer.",
  },
  "notYet Passport Number": {
    question: "If 24 hours have passed without a response, send a first reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/ETXVudijut9MubY23QPtJ10BIk7tILQp0YgPEsuaCtbi6A?e=JxOByt&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1752756369893&web=1' target='_blank'>Reminder Template</a>.<br><br><hr><br>If 48 hours have passed send a second reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/ETXVudijut9MubY23QPtJ10BIk7tILQp0YgPEsuaCtbi6A?e=JxOByt&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1752756369893&web=1' target='_blank'>Second Reminder Template</a>.<br><br><hr><br><span style='color:red'>Have 72 hours been passed without a response from the customer?</span>",
    options: ["Yes, 72 hours have been passed"],
    next: { "Yes, 72 hours have been passed": "proceedToRefund" },
    disclaimer: "Validate with your <strong>Team Leader</strong> before sending the reminder.<br><hr>Also notify the <strong>Customer Service Team</strong> to follow up with the customer.",
  },
  "notYet Name Discrepancy": {
    question: "If 24 hours have passed without a response, send a first reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EW6st6OS0DVDmVNHszJnUuUBN0UsrzHD80Y158gnJp8M-A?e=qQURya&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1752756646611&web=1' target='_blank'>Reminder Template</a>.<br><br><hr><br>If 48 hours have passed send a second reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EW6st6OS0DVDmVNHszJnUuUBN0UsrzHD80Y158gnJp8M-A?e=qQURya&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1752756646611&web=1' target='_blank'>Second Reminder Template</a>.<br><br><hr><br><span style='color:red'>Have 72 hours been passed without a response from the customer?</span>",
    options: ["Yes, 72 hours have been passed"],
    next: { "Yes, 72 hours have been passed": "proceedToRefund" },
    disclaimer: "Validate with your <strong>Team Leader</strong> before sending the reminder.<br><hr>Also notify the <strong>Customer Service Team</strong> to follow up with the customer.",
  },
  "notYet Mismatch": {
    question: "If 24 hours have passed without a response, send a first reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EfnlKxEIgWtJnxovU0SCz7MBccwO9SVAosY2h6kdt7f2DQ?e=VhuAlb&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1752756722948&web=1' target='_blank'>Reminder Template</a>.<br><br><hr><br>If 48 hours have passed send a second reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EfnlKxEIgWtJnxovU0SCz7MBccwO9SVAosY2h6kdt7f2DQ?e=VhuAlb&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1752756722948&web=1' target='_blank'>Second Reminder Template</a>.<br><br><hr><br><span style='color:red'>Have 72 hours been passed without a response from the customer?</span>",
    options: ["Yes, 72 hours have been passed"],
    next: { "Yes, 72 hours have been passed": "proceedToRefund" },
    disclaimer: "Validate with your <strong>Team Leader</strong> before sending the reminder.<br><hr>Also notify the <strong>Customer Service Team</strong> to follow up with the customer.",
  },
  "notYet Expired Passport": {
    question: "If 24 hours have passed without a response, send a first reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EaGMakj1kjlDkhzglYZpffkBGvH3-WGkukuASa5YmD2BeQ?e=n1z6ZO&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1752757883768&web=1' target='_blank'>Reminder Template</a>.<br><br><hr><br>If 48 hours have passed send a second reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EaGMakj1kjlDkhzglYZpffkBGvH3-WGkukuASa5YmD2BeQ?e=n1z6ZO&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1752757883768&web=1' target='_blank'>Second Reminder Template</a>.<br><br><hr><br><span style='color:red'>Have 72 hours been passed without a response from the customer?</span>",
    options: ["Yes, 72 hours have been passed"],
    next: { "Yes, 72 hours have been passed": "proceedToRefund" },
    disclaimer: "Validate with your <strong>Team Leader</strong> before sending the reminder.<br><hr>Also notify the <strong>Customer Service Team</strong> to follow up with the customer.",
  },
  "notYet less than 6 months": {
    question: "If 24 hours have passed without a response, send a first reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/ETzEPr780B1FsV7MB1HXohUBHROdzfD2VJfUzzRAj5lVJg?e=FkDi0c&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1753269159555&web=1' target='_blank'>Reminder Template</a>.<br><br><hr><br>If 48 hours have passed send a second reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/ETzEPr780B1FsV7MB1HXohUBHROdzfD2VJfUzzRAj5lVJg?e=FkDi0c&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1753269159555&web=1' target='_blank'>Second Reminder Template</a>.<br><br><hr><br><span style='color:red'>Have 72 hours been passed without a response from the customer?</span>",
    options: ["Yes, 72 hours have been passed"],
    next: { "Yes, 72 hours have been passed": "proceedToRefund" },
    disclaimer: "Validate with your <strong>Team Leader</strong> before sending the reminder.<br><hr>Also notify the <strong>Customer Service Team</strong> to follow up with the customer.",
  },
  "notYet photo/passport doesn't match": {
    question: "If 24 hours have passed without a response, send a first reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EfL0JUPOYRNPuo-kuvpbNNMBGWTFX544G9r1vhQv_-5zZQ?e=hRKnMX&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1753269459604&web=1' target='_blank'>Reminder Template</a>.<br><br><hr><br>If 48 hours have passed send a second reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EfL0JUPOYRNPuo-kuvpbNNMBGWTFX544G9r1vhQv_-5zZQ?e=hRKnMX&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1753269459604&web=1' target='_blank'>Second Reminder Template</a>.<br><br><hr><br><span style='color:red'>Have 72 hours been passed without a response from the customer?</span>",
    options: ["Yes, 72 hours have been passed"],
    next: { "Yes, 72 hours have been passed": "proceedToRefund" },
    disclaimer: "Validate with your <strong>Team Leader</strong> before sending the reminder.<br><hr>Also notify the <strong>Customer Service Team</strong> to follow up with the customer.",
  },
  "notYet no photo/passport attached": {
    question: "If 24 hours have passed without a response, send a first reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EQzTHS3tfFlPtZ56966AgfQB51EN80pHPaUoUsEDkATPWQ?wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1753269758820&web=1' target='_blank'>Reminder Template</a>.<br><br><hr><br>If 48 hours have passed send a second reminder to the customer from this template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/EQzTHS3tfFlPtZ56966AgfQB51EN80pHPaUoUsEDkATPWQ?wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1753269758820&web=1' target='_blank'>Second Reminder Template</a>.<br><br><hr><br><span style='color:red'>Have 72 hours been passed without a response from the customer?</span>",
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
    next: { "Did you receive the customer response within 24 hours?": "responseCheck2", "Not Yet": "notYet Expired Passport" },
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
    If it tells you the photo meets the requirements, click <strong>Yes</strong> and <strong>Continue</strong>. <span style= 'background-color: yellow; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; font-weight: bold; text-align: center;'>Get back to your Team Leader if the photo doesn't meet the requirements.</span>
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
    <div style="margin-bottom: 20px;">
    <div style="text-align: center; margin-bottom: 20px;">
  <div style="text-align: center; margin-bottom: 20px;">
  <button id="minorToggleBtn" onclick="toggleMinorSection()" style="
      background-color: #00703c;
      color: white;
      padding: 14px 26px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      font-size: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      animation: flash 0.7s infinite;
      box-shadow: 0 0 12px #6fcf97;
    ">
    <svg id="minorIcon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24">
      <path d="M11 11V6h2v5h5v2h-5v5h-2v-5H6v-2h5z" />
    </svg>
    <span>Is this a Minor Case?</span>
  </button>
</div>


</div>

  </div>

  <div id="minorDetails" style="display: none; border: 2px dashed #00703c; padding: 12px; margin-bottom: 20px; border-radius: 8px; background-color: #f4fff4;">
    <h3 style="text-decoration: underline;">Minor Case Required Steps:</h3>
    <p style="font-weight: normal;">Enter the parental <strong>Given Name</strong> and <strong>Surname</strong>.</p>
    <img src="guardian1.png" style="max-width: 100%; border-radius: 8px; border: 2px solid #013f63; margin-top: 10px;" alt="Guardian Name">
    <p style="font-weight: normal;">Enter the guardian <strong>phone number</strong></p>
    <img src="guardian2.png" style="max-width: 100%; border-radius: 8px; border: 2px solid #013f63; margin-top: 10px;" alt="Guardian Number">
    <p style="font-weight: normal;">Enter the guardian <strong>email address</strong></p>
    <img src="guardian3.jpeg" style="max-width: 100%; border-radius: 8px; border: 2px solid #013f63; margin-top: 10px;" alt="Guardian Email">
  </div>

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
    Copy the customer Job from the CRM as is without removing or summarizing the job <strong>even if the customer was explaining his job description</strong>, <strong>Make sure no offensive words or symbols written by the customer</strong> then, <strong>Continue</strong>. Get back to your <strong>Team Leader</strong> if required!
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
    <span style= 'background-color: red; color: white; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; font-weight: bold; text-align: center;'>You must take a screenshot from this step on the UK Portal to upload it on the CRM in the <strong>Verification</strong> field</span>
    </p>
    <img src='checkYourAnswers.png' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='Check Your Answers'>
    <br>
    <hr>
    <h2 style= 'text-decoration: underline;'>
      Step 14:
    </h2>
    <p style='font-weight: normal;'>
    After deep detailed validation <strong>Continue to payment</strong>. Get back to your <strong>Team Leader</strong> if required!
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
    <img src='worldpayPS.png' style='max-width:100%; height: auto; border-radius: 8px; margin: 20px auto; display: block; border: 2px solid #013f63; ' alt='World Pay Payment Image'>
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
        </p>
        <br><br>
        <hr>
        <p style='font-weight: normal;'>
          Once you receive the approval, follow the below steps to send it to the customer in its professional format.
        </p>
        <hr>
      <span style= 'background-color: yellow; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; font-weight: bold; text-align: center;'>If the approval is received and the customer's email was wrong, change the application status to <span style='color: green;'>Approved</strong></span> and check with your Team Leader.
      `,
    options: ["Approval Received", "Approval not Received"],
    next: { "Approval Received": "Duplicated?", "Approval not Received": "validationQuestion" },
    disclaimer: "Change the status to <strong>Applied</strong> and wait until the approval is sent to your email."
  },
  "Duplicated?": {
    question: "Is it a Duplicated application?",
    options: ["Yes, it's Duplicated", "No, it's not Duplicated"],
    next: { "Yes, it's Duplicated": "Duplicated Template", "No, it's not Duplicated": "Approval Template" },
    disclaimer: "Make sure you check with your <strong>Team Leader</strong> if you have any doubts."
  },
  "validationQuestion": {
    question: `
    <p style='font-weight: normal;'>
    Was there a previous conversation with the customer regarding the Nationality or any additional information?
    </p>
    `,
    options: ["Yes, there was a previous conversation", "No, the application was clear"],
    next: { "Yes, there was a previous conversation": "Not Received Template", "No, the application was clear": "Submitted Directly Template" },
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
    disclaimer: "Leave the Duplicated application status with the same <strong>Duplicate</strong> status as is, and change the new application status to <strong>Closed</strong>."
  },
  "Not Received Template": {
    question: `
    <p style='font-weight: normal;'>
    Send the Application Submitted after receiving required documents template to the customer using this template <a href='https://docs.google.com/document/d/1HP4wpR7s1JkkuYrK4l4ff8RtHx1xFGInCjUNPptHn90/edit?tab=t.0' target='_blank'><strong>Application Submitted After Receiving Required Documents - English</strong></a>.
    <br>
    The email subject should be: <strong>Update on Your UK ETA Application Status</strong>
    </p>
    `,
    options: ["Approval Received", "Approval Not Received After 48 Hours"],
    next: { "Approval Received": "Duplicated?", "Approval Not Received After 48 Hours": "Approval Not Received After 48 Hours Process"},
    disclaimer: `
    Don't forget to change the status to <strong>Applied</strong>, and get back to your <strong>Team Leader</strong> if you have any concerns.
    <hr>
    If you applied for the application again because the first application was delayed, send the new approval to the customer.
    `
  },
  "Submitted Directly Template": {
    question: `
    <p style='font-weight: normal;'>
    Send the submitted directly template to the customer using this template <a href='https://docs.google.com/document/d/1QC45PsEk94pyeHcXSeVoPu4QFdzQ8dzEmQcQur3l1jc/edit?tab=t.0' target='_blank'><strong>Application Submitted Directly - English</strong></a>.
    <br>
    The email subject should be: <strong>Update on Your UK ETA Application Status</strong>
    </p>
  
    `,
    options: ["Approval Received", "Approval Not Received After 48 Hours"],
    next: { "Approval Received": "Duplicated?", "Approval Not Received After 48 Hours": "Approval Not Received After 48 Hours Process"},
    disclaimer: "Ensure to check with your <strong>Team Leader</strong> if you have any doubts before sending the template"
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
    disclaimer: `
    Don't forget to change the status to <strong>Applied</strong>, and get back to your <strong>Team Leader</strong> if you have any concerns.
    <hr>
    If you applied for the application again because the first application was delayed, send the new approval to the customer.
    `
  },
  "Approval Duplicated Template": {
    question: `
    <p style='font-weight: normal;'>
    Send the approval to the customer using this template <a href='https://guideholding-my.sharepoint.com/:w:/p/ali/Edhc1SZ-GWJEgJ2G3pGHvmMBfsCcGzTWktSlFuDWgoV3hA?e=TUZ8jS' target='_blank'><strong>Approval Template</strong></a>.
    </p>
    <hr>
    <p>
    <span style= 'background-color: yellow; padding: 10px; border-radius: 8px; margin: 20px auto; display: block; font-weight: bold; text-align: center;'>Don't Forget to attach the approval on the CRM in the <strong>Approval</strong> field.</span>
    </p>
    `,
    options: ["Done and Start Over"],
    next: { "Done and Start Over": "start" },
    disclaimer: `
    Don't forget to change the status to <strong>Applied</strong>, and get back to your <strong>Team Leader</strong> if you have any concerns.
    <hr>
    If you applied for the application again because the first application was delayed, send the new approval to the customer.
    `
  },
  "Approval Not Received After 48 Hours Process": {
    question: `
    <p style='font-weight: normal;'>
    If the approval is not yet received even after 48 hours, you <strong>MUST</strong> get back to your <strong>Team Leader</strong>.
    </p>
    `,
    options: ["Done and Start Over"],
    next: { "Done and Start Over": "start" },
    disclaimer: "Ask your <strong>Team Leader</strong> to help you at this specific stage."
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
    next: { "Did you receive the customer response within 24 hours?": "responseCheck1", "Not Yet": "notYet Mismatch"
    },
    disclaimer: "Make sure to check with your <strong>Team Leader</strong> if you have any doubts before proceeding.<br><hr><strong>Don't RUSH!</strong>"
  },
  "step8": {
    question: `
    <p style='font-weight: normal;'>
    In case there is an Expired Passport, you must send an email to the customer with the following template <a href='https://guideholding-my.sharepoint.com/:w:/p/farah_mohammed/ERg3uuA2OlJFmchI_FaKMLwBo2aMC_LmoHxOQ0PohphASA?e=WmfLiG&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1752756904947&web=1' target='_blank' style='font-weight: bold;'>Expired Passport Template</a>.
    </p>
    `
    ,
    options: ["Did you receive the customer response within 24 hours?", "Not Yet"
    ],
    next: { "Did you receive the customer response within 24 hours?": "responseCheck2", "Not Yet": "notYet Expired Passport"
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
    next: { "Did you receive the customer response within 24 hours?": "responseCheck2", "Not Yet": "notYet less than 6 months" },
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

function toggleMinorSection() {
  const section = document.getElementById("minorDetails");
  const button = event.target;
  const isVisible = section.style.display === "block";

  section.style.display = isVisible ? "none" : "block";
  button.innerHTML = isVisible ? "➕ Is this a Minor Case?" : "➖ Hide Minor Case Info";
}

function toggleMinorSection() {
  const section = document.getElementById("minorDetails");
  const button = document.getElementById("minorToggleBtn");
  const icon = document.getElementById("minorIcon");

  const isVisible = section.style.display === "block";
  section.style.display = isVisible ? "none" : "block";

  // Toggle icon (plus/minus)
  icon.innerHTML = isVisible
    ? '<path d="M11 11V6h2v5h5v2h-5v5h-2v-5H6v-2h5z"/>'
    : '<path d="M19 13H5v-2h14v2z"/>'; // minus icon
}
