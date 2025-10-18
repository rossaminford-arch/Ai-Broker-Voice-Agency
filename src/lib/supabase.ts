import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !anonKey) {
  console.warn("Supabase credentials missing; API routes will operate in mock mode.");
}

export function createSupabaseClient() {
  if (!supabaseUrl || !anonKey) {
    throw new Error("Supabase environment variables are missing");
  }
  return createClientComponentClient({ supabaseUrl, supabaseKey: anonKey });
}

export function createSupabaseServerClient() {
  if (!supabaseUrl || !anonKey) {
    throw new Error("Supabase environment variables are missing");
  }
  return createServerComponentClient({ cookies }, { supabaseUrl, supabaseKey: anonKey });
}
