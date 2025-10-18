#!/usr/bin/env node
const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
console.log("Simulating inbound Twilio webhook...");
console.log(`curl -X POST ${appUrl}/api/voice/inbound -d 'From=%2B447700900123&To=%2B441234567890&CallSid=CA123'`);
console.log("Simulating lead webhook...");
console.log(`curl -X POST ${appUrl}/api/leads/webhook -H 'Content-Type: application/json' -d '{"phone":"+447700900123"}'`);
