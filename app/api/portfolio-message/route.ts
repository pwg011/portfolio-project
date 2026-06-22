const RESEND_API_URL = "https://api.resend.com/emails";
const RECIPIENT_EMAIL = "gberevbiepeterwilliam@gmail.com";
const SENDER_EMAIL = "Portfolio <onboarding@resend.dev>";
const EMAIL_SUBJECT = "New portfolio message";
const MAX_MESSAGE_LENGTH = 5000;

type MessageRequest = {
  message?: unknown;
  website?: unknown;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let payload: MessageRequest;

  try {
    payload = (await request.json()) as MessageRequest;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return Response.json({ ok: true });
  }

  if (typeof payload.message !== "string") {
    return Response.json({ error: "Message is required." }, { status: 400 });
  }

  const message = payload.message.trim();

  if (!message) {
    return Response.json({ error: "Message is required." }, { status: 400 });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return Response.json({ error: "Message is too long." }, { status: 400 });
  }

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: SENDER_EMAIL,
      to: [RECIPIENT_EMAIL],
      subject: EMAIL_SUBJECT,
      text: `New portfolio message:\n\n${message}`,
    }),
  });

  if (!response.ok) {
    return Response.json({ error: "Message could not be sent." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
