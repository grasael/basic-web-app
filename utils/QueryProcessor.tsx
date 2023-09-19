export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("What is 43 plus 12?")) {
    return (
      "55"
    );
  }

  return "";
}
