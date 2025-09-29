import RootLayout from "@/components/layout/RootLayout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { api } from "../../services/api"; 

interface FormData {
  name: string;
}

export default function AddName() {
  const [feedback, setFeedback] = useState<string | null>(null);

  const form = useForm<FormData>({
    defaultValues: {
      name: "",
    },
  });

  async function handleSubmit(data: FormData) {
    console.log("Enviando:", data);
    setFeedback(null);

    try {
      const response = await api.post("/add/name", data);
      console.log("Resposta:", response.data);
      setFeedback("Nome adicionado com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      setFeedback("Erro ao adicionar o nome.");
    }
  }

  const isSubmitDisabled = !form.watch("name");

  return (
    <div>
      <RootLayout>
        <h1 className="text-3xl font-bold">Armazenador de nomes</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6 mt-2 w-full max-w-md"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Nome</FormLabel>
                  <FormDescription>
                    Digite um nome para armazenar
                  </FormDescription>
                  <FormControl>
                    <Input placeholder="Digite o nome" {...field} />
                  </FormControl>
                  {feedback && (
                    <div
                      className={`mb-4 text-sm ${
                        feedback.includes("sucesso")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {feedback}
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="flex align-center w-full cursor-pointer mx-auto max-w-72 uppercase"
              disabled={isSubmitDisabled}
            >
              Adicionar
            </Button>
          </form>
        </Form>
      </RootLayout>
    </div>
  );
}
