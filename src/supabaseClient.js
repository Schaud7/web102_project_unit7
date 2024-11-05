
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zfkxhrieurbrwrncnnzm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpma3hocmlldXJicndybmNubnptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NzUwODQsImV4cCI6MjA0NjM1MTA4NH0.VPPwpGFub3OoSUYsEgmUZQz3v4Ki3rXaowdDDR0ZhSM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
