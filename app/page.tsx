"use client";

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import { diffChars } from 'diff';
import { TextArea } from '@/components/TextArea';
import { DiffView } from '@/components/DiffView';
import { handleFileUpload } from '@/lib/fileUtils';

export default function Home() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const handleReset = () => {
    setText1('');
    setText2('');
  };

  const handleFileUpload1 = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    await handleFileUpload(e.target.files?.[0], setText1);
  }, []);

  const handleFileUpload2 = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    await handleFileUpload(e.target.files?.[0], setText2);
  }, []);

  const diff = diffChars(text1, text2);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">What&apos;s the diff?</h1>
          <p className="text-lg text-gray-600 mb-8">
            Compare text in real-time and visualize the differences instantly. 
            Upload files or paste text directly to see what changed.
          </p>
          <Button 
            onClick={handleReset}
            variant="outline"
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <TextArea
            label="Original Text"
            value={text1}
            onChange={setText1}
            onFileUpload={handleFileUpload1}
            id="file1"
          />
          <TextArea
            label="Modified Text"
            value={text2}
            onChange={setText2}
            onFileUpload={handleFileUpload2}
            id="file2"
          />
        </div>

        <DiffView diff={diff} />

        <footer className="text-center mt-12 text-sm text-gray-500">
          <p>No data is stored with us. All processing happens on your browser.</p>
        </footer>
      </div>
    </main>
  );
}