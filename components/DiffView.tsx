import { Card } from '@/components/ui/card';
import { Change } from 'diff';

interface DiffViewProps {
  diff: Change[];
}

export function DiffView({ diff }: DiffViewProps) {
  let lineNumber = 1;
  const lines = diff.reduce<{ content: string; number: number; type: string }[]>((acc, part) => {
    const partLines = part.value.split('\n');
    return acc.concat(
      partLines.map((line, i) => ({
        content: line,
        number: i < partLines.length - 1 ? lineNumber++ : lineNumber,
        type: part.added ? 'added' : part.removed ? 'removed' : 'unchanged'
      }))
    );
    if (partLines.length > 1) lineNumber++;
  }, []);

  return (
    <Card className="mt-8 p-6">
      <h2 className="text-xl font-semibold mb-4">Differences</h2>
      <div className="font-mono bg-gray-50 p-4 rounded-lg overflow-x-auto">
        <table className="w-full">
          <tbody>
            {lines.map((line, index) => (
              <tr key={index} className={`
                ${line.type === 'added' ? 'bg-green-100 text-green-800' : ''}
                ${line.type === 'removed' ? 'bg-red-100 text-red-800' : ''}
              `}>
                <td className="select-none pr-4 text-gray-500 text-right w-12 border-r">
                  {line.number}
                </td>
                <td className="pl-4 whitespace-pre">{line.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}