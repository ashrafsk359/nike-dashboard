import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.'https://shufxoklbvsmegjhfpxo.supabase.co'
const supabaseKey = process.env.'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNodWZ4b2tsYnZzbWVnamhmcHhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzMTQ4MTgsImV4cCI6MjA5Mzg5MDgxOH0.zyFEUgM3v_Dav3Adoq5ygfjbH3VwR9XzlI4ZWiLhwkk'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)