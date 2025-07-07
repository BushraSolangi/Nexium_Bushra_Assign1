// src/components/QuoteModal.tsx
"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  quote: string;
  children: React.ReactNode;
}

export function QuoteModal({ quote, children }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-xl sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">💬 Quote</DialogTitle>
        </DialogHeader>
        <p className="text-lg text-muted-foreground text-center">{quote}</p>
      </DialogContent>
    </Dialog>
  );
}
