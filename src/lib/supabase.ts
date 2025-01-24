import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wcvwissbkbjeqwdoimzw.supabase.co'
const supabaseAnonKey = 'your-anon-key' // We'll replace this with the secure key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)