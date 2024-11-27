"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import {
  AuthLoginFormResolver,
  AuthLoginValueSchema,
} from "@/src/schemas/auth_schema";
import { loginAction } from "@/actions/auth.actions";
// import { useActionLogin } from "@/actions/auth.actions";
// import { toast } from "sonner";

export default function FormLogin() {
  //const login = useActionLogin();
  const form = useForm<AuthLoginValueSchema>({
    resolver: zodResolver(AuthLoginFormResolver),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (values: AuthLoginValueSchema) => {
    await loginAction({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  //disabled={login?.isPending}
                  type="email"
                  placeholder="Entrez votre email (ex: example@domain.com)"
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  //disabled={login?.isPending}
                  type="password"
                  placeholder="Entrez votre mot passe"
                  autoComplete="current-password"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          //disabled={login?.isPending}
          className="w-full"
          type="submit"
        >
          Se connecter
        </Button>
      </form>
    </Form>
  );
}
