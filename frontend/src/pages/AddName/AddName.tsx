import RootLayout from "@/components/layout/RootLayout";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
}

export default function AddName() {
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
    },
  });

  function handleSubmit(data: FormData) {
    console.log(data);
    form.reset();
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
                  <FormDescription>Digite um nome para armazenar</FormDescription>
                  <FormControl>
                    <Input placeholder="Digite o nome" {...field} />
                  </FormControl>
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