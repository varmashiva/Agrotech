/*
  # Create soil data tables

  1. New Tables
    - `soil_samples`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `image_url` (text)
      - `data_file_url` (text)
      - `voice_note_url` (text)
      - `ph_level` (numeric)
      - `nitrogen_level` (numeric)
      - `phosphorus_level` (numeric)
      - `potassium_level` (numeric)
      - `moisture_content` (numeric)
      - `organic_matter` (numeric)
      - `location` (text)
      - `analysis_result` (jsonb)
      - `created_at` (timestamp with time zone)
      - `updated_at` (timestamp with time zone)

  2. Security
    - Enable RLS on `soil_samples` table
    - Add policies for authenticated users to:
      - Read their own soil samples
      - Insert new soil samples
*/

CREATE TABLE IF NOT EXISTS soil_samples (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE,
  image_url text,
  data_file_url text,
  voice_note_url text,
  ph_level numeric,
  nitrogen_level numeric,
  phosphorus_level numeric,
  potassium_level numeric,
  moisture_content numeric,
  organic_matter numeric,
  location text,
  analysis_result jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE soil_samples ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own soil samples"
  ON soil_samples
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own soil samples"
  ON soil_samples
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);