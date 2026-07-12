import { ResumeRepository } from "./resume.repository.js";
import { UploadResumeInput } from "./resume.types.js";
import { extractPdfText } from "../../common/utils/pdf.js";
import fs from "node:fs/promises";
import { uploadResumeToCloudinary } from "../../common/utils/cloudinary.js";

export class ResumeService {
  private repository = new ResumeRepository();

  async uploadResume(input: UploadResumeInput) {
  // Step 1: Extract text from local PDF
  const extractedText = await extractPdfText(input.path);

  // Step 2: Upload original PDF to Cloudinary
  const uploadedFile =
    await uploadResumeToCloudinary(input.path);

  // Step 3: Delete temporary local file
  await fs.unlink(input.path);

  // Step 4: Save resume metadata using Cloudinary URL
  const resume =
    await this.repository.createResume({
      ...input,
      path: uploadedFile.secure_url,
    });

  // Step 5: Save extracted text
  await this.repository.updateExtractedText(
    resume.id,
    extractedText
  );

  // Step 6: Return updated resume
  return this.repository.getResumeById(
    resume.id
  );
}

  async getUserResumes(userId: string) {
    return this.repository.getResumeByUserId(userId);
  }

  async deleteResume(
  id: string,
  userId: string
) {
  return this.repository.deleteResume(
    id,
    userId
  );
}
}