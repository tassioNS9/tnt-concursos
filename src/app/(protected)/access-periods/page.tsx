import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
export const AcessPeriodsPage = () => {
  return (
    <div className="mx-auto flex w-full flex-col space-y-6 px-4 py-40 md:w-full lg:w-[80%] lg:px-20">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        Prazos de acesso
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        Visualize detalhes do prazo de acesso dos conteúdos que você adquiriu.
      </p>
      <Separator />
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-black">Nome</TableHead>
              <TableHead className="font-bold text-black">Produto</TableHead>
              <TableHead className="font-bold text-black">
                Data de compra
              </TableHead>
              <TableHead className="font-bold text-black">
                Data de expiração
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="flex items-center gap-2 font-medium">
                <Image
                  src="/logo-tradicional.svg"
                  alt="Assinatura Tradicional"
                  width={55}
                  height={55}
                />
                Assinatura Tradicional
              </TableCell>
              <TableCell>Assinatura</TableCell>
              <TableCell>23/04/2026</TableCell>
              <TableCell>23/04/2027</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="w-full space-y-7 border-2 p-4 md:hidden">
        <div className="flex items-center justify-between">
          <Image
            src="/logo-tradicional.svg"
            alt="Assinatura Tradicional"
            width={55}
            height={55}
          />
          <p className="text-lg font-semibold text-gray-600">Assinatura</p>
        </div>
        <h2 className="text-center font-bold text-black">
          Assinatura Tradicional
        </h2>
        <div className="flex justify-between">
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-semibold">Data da compra</h3>
            <p className="text-sm text-gray-600">23/04/2025</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-semibold">Data da expiração</h3>
            <p className="text-sm text-gray-600">23/04/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcessPeriodsPage;
