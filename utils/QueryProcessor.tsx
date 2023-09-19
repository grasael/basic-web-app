export default function QueryProcessor(query: string): string {
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const subMatch = query.match(/What is (\d+) minus (\d+)/);
  if (subMatch) {
    const x: number = parseInt(subMatch[1]);
    const y: number = parseInt(subMatch[2]);
    return (x-y).toString();
  }

  return "";
}
