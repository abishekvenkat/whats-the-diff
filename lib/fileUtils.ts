export const validFileTypes = [
  'text/plain',
  'text/javascript',
  'text/typescript',
  'text/css',
  'text/html',
  'text/csv',
  'application/json',
  'text/markdown',
  'text/x-python',
  'text/x-java'
];

export async function handleFileUpload(
  file: File | undefined,
  onValidFile: (text: string) => void
): Promise<void> {
  if (!file) return;

  if (!validFileTypes.includes(file.type)) {
    alert('Please upload only text files');
    return;
  }

  const text = await file.text();
  onValidFile(text);
}