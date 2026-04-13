import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const MyOrdersPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }

  return (
    <div className="mx-auto flex w-full flex-col space-y-6 px-4 py-40 md:w-full lg:w-[80%] lg:px-20">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        Pagamento
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        Visualize suas faturas de pagamento.
      </p>
      <Separator />
      <div className="">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-black">Pedido</TableHead>
              <TableHead className="font-bold text-black">
                Data de cobrança
              </TableHead>
              <TableHead className="font-bold text-black">Produto</TableHead>
              <TableHead className="font-bold text-black">Status</TableHead>
              <TableHead className="font-bold text-black">Valor</TableHead>
              <TableHead className="font-bold text-black">Pagamento</TableHead>
              <TableHead className="font-bold text-black">Descrição</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="flex items-center gap-2 font-medium">
                320756
              </TableCell>
              <TableCell>23/04/2025, 16:05:...</TableCell>
              <TableCell>1</TableCell>
              <TableCell>Liberado</TableCell>
              <TableCell>R$ 838,80</TableCell>
              <TableCell>Cartão de crédito</TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
