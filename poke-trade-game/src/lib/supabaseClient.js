import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://lmuypusgcdjnsdfunnzn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtdXlwdXNnY2RqbnNkZnVubnpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyNTAzMDcsImV4cCI6MjAyNzgyNjMwN30.KJFATVoTFEIdKcLLW9lQjlh_OvfMVy9BiyVOfFgfYVU')