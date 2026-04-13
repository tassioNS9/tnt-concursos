"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormControl, FormMessage } from "@/components/ui/form";
import { FormItem, FormLabel } from "@/components/ui/form";
import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  email: z
    .email({ message: "Invalid email address." })
    .trim()
    .min(1, { message: "E-mail é obrigatório" }),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
  feedback: z
    .string()
    .min(20, "Feedback must be at least 20 characters.")
    .max(200, "Feedback must be at most 200 characters."),
});

export const DoubtsPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
      feedback: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {};
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center space-y-8 px-8 py-20 lg:px-20">
      <div className="flex flex-col gap-2 self-start">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Dúvidas e Perguntas Frequentes
        </h1>
        <p className="mt-2 text-lg text-gray-600">Central de ajuda</p>
      </div>
      <div className="flex w-full flex-col gap-12 md:flex-row md:items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Perguntas Frequentes – TN CONCURSOS
          </h1>
          <div>
            <Accordion
              type="single"
              collapsible
              defaultValue="shipping"
              className="max-w-lg"
            >
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-dark-var-3-color text-xl font-semibold">
                  Qual o prazo de acesso?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-950">
                  Para os Cursos Completos, você terá acesso por até 3 meses
                  após a realização da próxima prova que o curso se refere. Se
                  você adquiriu um Módulo avulso, terá acesso por 12 meses. Para
                  as assinaturas Essencial e Ouro, o prazo de acesso é de 12
                  meses. Os alunos da Assinatura Vitalícia terão acesso
                  ilimitado, desde que obedeçam aos critérios estabelecidos nos
                  Termos de Uso - Direção Concursos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="returns">
                <AccordionTrigger className="text-dark-var-3-color text-xl font-semibold">
                  Se não me sentir satisfeito, posso desistir da minha compra?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-950">
                  Claro, você tem a opção de solicitar o cancelamento e receber
                  o reembolso integral do valor pago, desde que esteja dentro do
                  prazo estabelecido nos Termos de Uso - Direção Concursos. Para
                  os Cursos Completos, Módulo Avulso e Assinaturas Essencial e
                  Ouro, é possível solicitar o cancelamento e o reembolso
                  integral do valor pago em até 14 dias corridos após a
                  aprovação do pagamento. Caso tenha optado pela Assinatura
                  Vitalícia, o prazo para solicitar o cancelamento é de até 7
                  dias corridos após a aprovação do pagamento. Após esses
                  prazos, não será possível realizar o cancelamento, estorno ou
                  troca de cursos. Para solicitar o cancelamento, envie um
                  e-mail dentro dos prazos mencionados para
                  contato@direcaoconcursos.com.br com o assunto
                  &quot;Cancelamento de compra&quot;.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="support">
                <AccordionTrigger className="text-dark-var-3-color text-xl font-semibold">
                  Terei questões atualizadas?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-950">
                  Sim. Nossas questões são atualizados assim que o projeto
                  básico é divulgado, Todo o conteúdo é disponibilizado para que
                  você possa estudar com questões atualizadas e antigas. E o
                  melhor de tudo, você não terá nenhum custo adicional para ter
                  acesso às atualizações.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Caso você não encontre o que procura, entre em{" "}
            <span className="text-dark-var-3-color underline">
              contato conosco.
            </span>
          </h2>
          <Card className="w-full sm:max-w-md">
            <CardContent className="space-y-4">
              <Form {...form}>
                <form
                  className="space-y-4"
                  id="form"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input
                            className="h-12"
                            placeholder="Digite seu nome"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input
                            className="h-12"
                            placeholder="Digite seu e-mail"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrição</FormLabel>
                        <FormControl>
                          <Input
                            className="h-12"
                            placeholder="Digite a descrição"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="feedback"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feedback</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your feedback helps us improve..."
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <CardFooter>
                    <Field orientation="horizontal">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => form.reset()}
                      >
                        Reset
                      </Button>
                      <Button type="submit" form="form">
                        Submit
                      </Button>
                    </Field>
                  </CardFooter>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DoubtsPage;
