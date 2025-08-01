
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oyievckqvughkqjppnma.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95aWV2Y2txdnVnaGtxanBwbm1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NjQ4MDAsImV4cCI6MjAxMzE0MDgwMH0.example';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Admin credentials
export const ADMIN_CREDENTIALS = {
  username: 'mohamedaty',
  password: '123456',
  email: 'mohamedaty007@gmail.com'
};

// Types for our database tables
export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
}

export interface User {
  id?: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  created_at?: string;
}

export interface Service {
  id?: number;
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  image_url?: string;
  created_at?: string;
}

export interface Content {
  id?: number;
  page: string;
  section: string;
  content_en: string;
  content_ar: string;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
}

// Database functions
export const db = {
  // Contact messages
  async getContactMessages() {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as ContactMessage[];
  },

  async createContactMessage(message: Omit<ContactMessage, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([message])
      .select();

    if (error) throw error;
    return data[0] as ContactMessage;
  },

  async deleteContactMessage(id: number) {
    const { error } = await supabase
      .from('contact_messages')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  },

  // Users
  async getUsers() {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as User[];
  },

  async createUser(user: Omit<User, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('users')
      .insert([user])
      .select();

    if (error) throw error;
    return data[0] as User;
  },

  async updateUser(id: number, updates: Partial<User>) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data[0] as User;
  },

  async deleteUser(id: number) {
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  },

  // Services
  async getServices() {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as Service[];
  },

  async createService(service: Omit<Service, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('services')
      .insert([service])
      .select();

    if (error) throw error;
    return data[0] as Service;
  },

  async updateService(id: number, updates: Partial<Service>) {
    const { data, error } = await supabase
      .from('services')
      .update(updates)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data[0] as Service;
  },

  async deleteService(id: number) {
    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  },

  // Content
  async getContent(page?: string) {
    let query = supabase
      .from('content')
      .select('*');

    if (page) {
      query = query.eq('page', page);
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) throw error;
    return data as Content[];
  },

  async createContent(content: Omit<Content, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('content')
      .insert([content])
      .select();

    if (error) throw error;
    return data[0] as Content;
  },

  async updateContent(id: number, updates: Partial<Content>) {
    const { data, error } = await supabase
      .from('content')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select();

    if (error) throw error;
    return data[0] as Content;
  },

  async deleteContent(id: number) {
    const { error } = await supabase
      .from('content')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  }
};
