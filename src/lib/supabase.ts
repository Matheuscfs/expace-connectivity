
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mppkdtetvnkdyzcveeoi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wcGtkdGV0dm5rZHl6Y3ZlZW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4ODExOTgsImV4cCI6MjA1NDQ1NzE5OH0.efGw3H2GNjy8yCI-kfC8RnQZZ83d_f487djeNk5jFrs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
