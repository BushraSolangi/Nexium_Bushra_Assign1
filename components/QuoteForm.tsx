"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  onSearch: (topic: string) => void;
}

export function QuoteForm({ onSearch }: Props) {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(topic);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        placeholder="Enter a topic (e.g., life, success)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button type="submit">Get Quotes</Button>
    </form>
  );
}
