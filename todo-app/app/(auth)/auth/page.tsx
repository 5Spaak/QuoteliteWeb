/*
'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signInWithPassword, signUpWithPassword } from "@/lib/auth/action"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function AuthPage() {
  const [isPending, startTransition]= useTransition();
  const [error, setError] = useState<string | null>(null);
  const query = useSearchParams().get("query")

  const signin = query === 'signin'

  const handleSignIn = (formData: FormData) => {
    startTransition(()=>{
      signInWithPassword(formData).catch(()=>{
        setError('Mot de passe ou email incorrect');
      });
    });
  }

  const handleSignUp = (formData: FormData) => {
    startTransition(()=>{
      signUpWithPassword(formData).catch(()=>{
        setError('Mot de passe ou email incorrect');
      });
    });
  };

  const handleSubmit = (formData: FormData) =>{
    signin ? handleSignIn(formData) : handleSignUp(formData);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-xl font-bold text-center text-blue-500 mb-4 p-2"> {signin ? 'Connexion':'Inscription'}</h2>
        <form 
          action={handleSubmit}
          className="w-full md:w-2/3 lg:w-1/2"  
          >
        <fieldset
          className="grid grid-cols-1 w-1/2 mx-auto px-2 py-2 gap-4" 
          disabled={isPending}>
          <Input 
            type="email" 
            name="email" 
            placeholder="test@test.fr" required
            />
          <Input 
            type="password" 
            name="password" 
            placeholder="password" required
            />
          {error && <p className="text-red-500">{error}</p>}
          <Button className="flex gap-2">
            { signin ? 'Se connecter' :"S'inscrire" }
             {' '}{' '} <AiOutlineLoading3Quarters className={cn('animate-spin', {hidden: !isPending})}  
          /> 
          </Button>
          </fieldset>
        </form>
    <Link className="mt-6 hover:underline" href={signin ? "/auth?query=signup" : "/auth?query=signin"}>
      {signin ? 'Pas de compte' : 'Déjà un compte ?'}
    </Link>
    </div>
  )
}



*/

'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signInWithPassword, signUpWithPassword } from "@/lib/auth/action";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { AiOutlineLoading3Quarters, AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";

export default function AuthPage() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const query = useSearchParams().get("query");
  const signin = query === "signin";

  const handleSignIn = (formData: FormData) => {
    startTransition(() => {
      signInWithPassword(formData).catch(() => {
        setError("Mot de passe ou email incorrect");
      });
    });
  };

  const handleSignUp = (formData: FormData) => {
    startTransition(() => {
      signUpWithPassword(formData).catch(() => {
        setError("Mot de passe ou email incorrect");
      });
    });
  };

  const handleSubmit = (formData: FormData) => {
    signin ? handleSignIn(formData) : handleSignUp(formData);
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center shadow-md bg-white">
     <h2 className="text-1xl font-bold text-center text-blue-600 mb-3">
  {signin ? <AiOutlineLogin className="inline-block w-6 h-6 mr-2" /> : <AiOutlineUserAdd className="inline-block w-7 h-9 mr-1" />}
  {signin ? "Connexion" : "Inscription"}
</h2>

      <form
        action={handleSubmit}
        className="md:w-1/2 lg:w-1/3 space-y-4"
      >
        <fieldset className="grid grid-cols-1 gap-4" disabled={isPending}>
          <Input
            type="email"
            name="email"
            placeholder="test@test.fr"
            required
            className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
          <Input
            type="password"
            name="password"
            placeholder="Mot de passe"
            required
            className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button className="flex items-center justify-center w-full rounded-md py-2 text-white font-bold bg-blue-500 hover:bg-blue-700">
            {signin ? "Se connecter" : "S'inscrire"}
            {isPending && <AiOutlineLoading3Quarters className="ml-2 animate-spin" />}
          </Button>
        </fieldset>
      </form>
      <Link className="text-center text-blue-500 hover:underline mt-6" href={signin ? "/auth?query=signup" : "/auth?query=signin"}>
        {signin ? "Pas de compte ?" : "Déjà un compte ?"}
      </Link>
    </div>
  );
}
