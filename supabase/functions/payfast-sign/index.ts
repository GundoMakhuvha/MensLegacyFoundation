import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { createHash } from 'node:crypto'

// PayFast field order per their docs
const FIELD_ORDER = [
  'merchant_id', 'merchant_key', 'return_url', 'cancel_url', 'notify_url',
  'name_first', 'name_last', 'email_address', 'cell_number',
  'm_payment_id', 'amount', 'item_name', 'item_description',
  'custom_int1', 'custom_int2', 'custom_int3', 'custom_int4', 'custom_int5',
  'custom_str1', 'custom_str2', 'custom_str3', 'custom_str4', 'custom_str5',
  'email_confirmation', 'confirmation_address', 'payment_method',
  'subscription_type', 'billing_date', 'recurring_amount', 'frequency', 'cycles',
  'subscription_notify_email', 'subscription_notify_webhook', 'subscription_notify_buyer',
]

// PHP-style urlencode: spaces -> '+', uppercase hex
function phpUrlEncode(v: string): string {
  return encodeURIComponent(v)
    .replace(/%20/g, '+')
    .replace(/[!'()*~]/g, (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase())
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const data = await req.json() as Record<string, string | number | undefined>
    const passphrase = Deno.env.get('PAYFAST_PASSPHRASE') ?? ''

    const fields: Record<string, string> = {}
    for (const key of FIELD_ORDER) {
      const val = data[key]
      if (val !== undefined && val !== null && String(val).trim() !== '') {
        fields[key] = String(val).trim()
      }
    }

    const parts = Object.entries(fields).map(([k, v]) => `${k}=${phpUrlEncode(v)}`)
    if (passphrase) parts.push(`passphrase=${phpUrlEncode(passphrase)}`)
    const signatureString = parts.join('&')
    const signature = createHash('md5').update(signatureString).digest('hex')

    return new Response(JSON.stringify({ fields, signature }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})