import React, { useState } from 'react';

/*
--------------------------------------------------------------------------------
-- HOW TO CONNECT THIS FORM TO YOUR GOOGLE SHEET (FREE & NO HOSTING!) --
--------------------------------------------------------------------------------

This form works by sending its data to a Google Apps Script, which then adds the
data to a Google Sheet. Follow these steps exactly:

PART 1: CREATE THE GOOGLE SHEET & SCRIPT
------------------------------------------
1.  Go to sheets.google.com and create a NEW spreadsheet.
2.  Name your spreadsheet something like "MenuVerse Contacts".
3.  In the first row (Row 1), create your headers. They MUST BE:
    `timestamp`, `name`, `email`, `phone`, `message` (all lowercase).
4.  Go to "Extensions" > "Apps Script". A new script editor tab will open.
5.  Delete any code in the `Code.gs` file and PASTE the entire script from the
    "--- GOOGLE APPS SCRIPT CODE ---" block below into the editor.
6.  Save the script project (File > Save project). Give it a name.

PART 2: DEPLOY THE SCRIPT AS A WEB APP
------------------------------------------
7.  Click the blue "Deploy" button in the top right, then "New deployment".
8.  Click the gear icon next to "Select type" and choose "Web app".
9.  Fill in the deployment details:
    - Description: "MenuVerse Contact Form" (or anything)
    - Execute as: "Me"
    - Who has access: "Anyone" <--- THIS IS VERY IMPORTANT!
10. Click "Deploy".
11. Google will ask you to authorize the script. Click "Authorize access".
12. Choose your Google account. You might see a "Google hasn't verified this app"
    warning. This is normal. Click "Advanced", then "Go to [Your Project Name] (unsafe)".
13. Click "Allow" on the final permission screen.
14. After it deploys, a "Deployment updated" box will appear. COPY the
    "Web app URL". It looks like `https://script.google.com/macros/s/.../exec`.

PART 3: CONNECT THE FORM
------------------------------------------
15. Come back to this file (`ContactSection.tsx`).
16. PASTE the Web app URL you copied into the `SCRIPT_URL` variable below,
    replacing the empty string placeholder.

That's it! Your form is now live and will send data directly to your sheet.

--- GOOGLE APPS SCRIPT CODE (PASTE THIS INTO Code.gs) ---

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rowData = [];
  
  // Create a timestamp
  rowData.push(new Date());
  
  // Get form data by name, matching the order in your Sheet
  rowData.push(e.parameter.name);
  rowData.push(e.parameter.email);
  rowData.push(e.parameter.phone);
  rowData.push(e.parameter.message);
  
  // Append a new row to the sheet
  sheet.appendRow(rowData);
  
  // Return a success response
  return ContentService.createTextOutput(JSON.stringify({
    'result': 'success',
    'data': JSON.stringify(e.parameter)
  })).setMimeType(ContentService.MimeType.JSON);
}

*/

const ContactSection = () => {
  // IMPORTANT: PASTE YOUR GOOGLE APPS SCRIPT URL HERE
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz0agdZB6taoQQ6nQf_Izkz4IHFfCIzHXIItQ5hzizYg_Z7fooZyLEsAZHrh0FUkIAw/exec";

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!SCRIPT_URL) {
        alert("Setup incomplete: Please add your Google Apps Script URL to the ContactSection.tsx file.");
        return;
    }
    setSubmissionStatus('submitting');
    
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('message', formData.message);

    fetch(SCRIPT_URL, {
      method: 'POST',
      body: data,
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setSubmissionStatus('error');
    });
  };

  return (
    <section id="contact-form" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-light-text dark:text-dark-text">Get In Touch</h2>
          <p className="text-lg text-light-subtle dark:text-dark-subtle mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Drop us a line.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-light-card/80 dark:bg-dark-card/80 p-8 rounded-xl backdrop-blur-md border border-white/10 dark:border-white/5 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-light-subtle dark:text-dark-subtle mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Ada Lovelace"
                required
                className="w-full bg-light-bg/90 dark:bg-dark-bg text-light-text dark:text-dark-text p-3 rounded-lg border border-white/10 focus:ring-2 focus:ring-electric-violet focus:border-transparent outline-none transition-all duration-300 placeholder:text-light-subtle/60 dark:placeholder:text-dark-subtle/60"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-light-subtle dark:text-dark-subtle mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g., ada@example.com"
                required
                className="w-full bg-light-bg/90 dark:bg-dark-bg text-light-text dark:text-dark-text p-3 rounded-lg border border-white/10 focus:ring-2 focus:ring-electric-violet focus:border-transparent outline-none transition-all duration-300 placeholder:text-light-subtle/60 dark:placeholder:text-dark-subtle/60"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-light-subtle dark:text-dark-subtle mb-2">Phone Number (Optional)</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g., +91 12345 67890"
                className="w-full bg-light-bg/90 dark:bg-dark-bg text-light-text dark:text-dark-text p-3 rounded-lg border border-white/10 focus:ring-2 focus:ring-electric-violet focus:border-transparent outline-none transition-all duration-300 placeholder:text-light-subtle/60 dark:placeholder:text-dark-subtle/60"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-light-subtle dark:text-dark-subtle mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                required
                className="w-full bg-light-bg/90 dark:bg-dark-bg text-light-text dark:text-dark-text p-3 rounded-lg border border-white/10 focus:ring-2 focus:ring-electric-violet focus:border-transparent outline-none transition-all duration-300 resize-none placeholder:text-light-subtle/60 dark:placeholder:text-dark-subtle/60"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={submissionStatus === 'submitting'}
                className="w-full py-3 px-6 text-center font-semibold rounded-lg transition-all bg-electric-violet text-white hover:opacity-90 shadow-glow-violet disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
            {submissionStatus === 'success' && <p className="mt-4 text-center text-cyber-teal">Thank you! Your message has been sent successfully.</p>}
            {submissionStatus === 'error' && <p className="mt-4 text-center text-red-500">Oops! Something went wrong. Please try again later.</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;