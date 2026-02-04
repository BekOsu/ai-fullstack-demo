"use client";

import { useState } from "react";
import PromptForm from "@/components/PromptForm";
import ResponseDisplay from "@/components/ResponseDisplay";
import { generateText } from "@/lib/api";

export default function Home() {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (prompt: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await generateText(prompt);
      setResult(response.result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">AI Text Generator</h1>
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          <PromptForm onSubmit={handleSubmit} isLoading={isLoading} />
          <ResponseDisplay result={result} error={error} isLoading={isLoading} />
        </div>
      </div>
    </main>
  );
}