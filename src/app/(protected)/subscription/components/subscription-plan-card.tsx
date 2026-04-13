import { CheckCircle2 } from "lucide-react";
import type { SubscriptionPlan } from "@/app/constants/subscription-plans";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type SubscriptionPlanCardProps = {
  plan: SubscriptionPlan;
};

export const SubscriptionPlanCard = ({ plan }: SubscriptionPlanCardProps) => {
  return (
    <Card>
      <CardHeader className="px-6 pb-0">
        <CardTitle className="text-2xl leading-none font-bold tracking-tight">
          {plan.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4 px-6 pt-4">
        <Separator />

        <ul className="space-y-1.5">
          {plan.features.map((feature) => (
            <li key={feature.label} className="flex items-start gap-2">
              <CheckCircle2
                className={cn(
                  "mt-1 h-5 w-5 shrink-0",
                  feature.enabled
                    ? "text-subscription-check"
                    : "text-subscription-muted",
                )}
              />
              <span
                className={cn(
                  feature.enabled
                    ? "text-subscription-text"
                    : "text-subscription-muted line-through",
                )}
              >
                {feature.label}
              </span>
            </li>
          ))}
        </ul>

        <Separator />

        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-[1.2rem] leading-none font-bold">
              {plan.headline}
            </h3>
            <span className="bg-subscription-badge text-subscription-badge-foreground rounded-lg px-3 py-1.5 text-[1.3rem] leading-none font-bold">
              {plan.discount}
            </span>
          </div>

          <p className="text-subscription-text leading-none line-through">
            {plan.oldPrice}
          </p>

          <p className="text-subscription-text flex items-end gap-1 leading-none">
            <span className="">12x R$</span>
            <span className="font-bold">{plan.priceMajor}</span>
            <span className="font-bold">{plan.priceMinor}</span>
          </p>

          <p className="text-subscription-text leading-none">
            ou {plan.pixPrice} no pix (com + 10% OFF)
          </p>
        </div>
      </CardContent>

      <CardFooter className="px-6 pt-0">
        <Button
          className="hover:bg-subscription-cta/90 h-12 w-full rounded-xl text-[1rem] font-bold"
          type="button"
        >
          ASSINAR AGORA
        </Button>
      </CardFooter>
    </Card>
  );
};
