const EMAIL_ADDRESS = "gberevbiepeterwilliam@gmail.com";
const EMAIL_SUBJECT = "Project or Enquiry";
const EMAIL_BODY = `Hello Peter-William,

I would like to speak with you about a potential project or opportunity.

Best,`;
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}&su=${encodeURIComponent(
  EMAIL_SUBJECT,
)}&body=${encodeURIComponent(EMAIL_BODY)}`;

export function CopyEmailButton() {
  return (
    <a
      className="contact-email-button"
      href={GMAIL_COMPOSE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Email Peter-William at ${EMAIL_ADDRESS}`}
    >
      EMAIL
    </a>
  );
}
