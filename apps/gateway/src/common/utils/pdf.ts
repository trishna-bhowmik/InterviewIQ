// @ts-ignore
import pdf from "pdf-parse/lib/pdf-parse.js";

import fs from "node:fs/promises";

export async function extractPdfText(
  filePath: string
): Promise<string> {
  const buffer = await fs.readFile(filePath);

  const data = await pdf(buffer);

  return data.text;
}