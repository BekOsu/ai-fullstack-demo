iinterface ResponseDisplayProps {
  result: string | null;
  error: string | null;
  isLoading: boolean;
}

export default function ResponseDisplay({ result, error, isLoading }: ResponseDisplayProps) {
  if (isLoading) {
    return (
      <div className="w-full p-4 bg-gray-50 rounded-lg text-center text-gray-500">
        Generating response...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
        {error}
      </div>
    );
  }

  if (result) {
    return (
      <div className="w-full p-4 bg-gray-50 rounded-lg whitespace-pre-wrap">
        {result}
      </div>
    );
  }

  return null;
}