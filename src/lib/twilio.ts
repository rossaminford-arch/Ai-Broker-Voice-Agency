import Twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

export const TWILIO_FROM = process.env.TWILIO_VOICE_NUMBER || "";
export const TWILIO_WHATSAPP = process.env.TWILIO_WHATSAPP_NUMBER || "";

export const twilioClient = accountSid && authToken ? Twilio(accountSid, authToken) : null;

export function ensureTwilioClient() {
  if (!twilioClient) {
    throw new Error("Twilio credentials missing");
  }
  return twilioClient;
}
