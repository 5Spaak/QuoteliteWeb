import { supabase } from "@/lib/supabase/server";

const gestTodos = async () => {
  const {data} = await supabase.from('todos').select();
  return data;
};

export default async function Home() {
  const todos = await gestTodos();
  console.log('todos : ',todos);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Mes Todos</h1>
    </main>
  );
}
