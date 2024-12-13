import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

export function TextArea({ label, value, onChange, onFileUpload, id }: TextAreaProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium">{label}</label>
        <div>
          <input
            type="file"
            id={id}
            className="hidden"
            onChange={onFileUpload}
            accept=".txt,.js,.ts,.css,.html,.csv,.json,.md,.py,.java"
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => document.getElementById(id)?.click()}
          >
            <Upload className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-[300px] font-mono"
        placeholder="Enter or paste text here..."
      />
    </div>
  );
}