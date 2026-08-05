import { supabase } from "./supabase";

export async function getAbout() {
  const { data, error } = await supabase
    .from("about")
    .select("*")
    .single();

  if (error) throw error;

  return data;
}

export async function updateAbout(id, values) {
  const { error } = await supabase
    .from("about")
    .update(values)
    .eq("id", id);

  if (error) throw error;
}