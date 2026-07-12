import { ResumeRepository } from "./resume.repository.js";
import { UploadResumeInput } from "./resume.types.js";
import { extractPdfText } from "../../common/utils/pdf.js";

export class ResumeService {
  private repository = new ResumeRepository();

  async uploadResume(input: UploadResumeInput) {
    // Save resume metadata
    const resume = await this.repository.createResume(input);

    // Extract text from uploaded PDF
    const extractedText = await extractPdfText(input.path);

    // Save extracted text in database
    await this.repository.updateExtractedText(
      resume.id,
      extractedText
    );

    // Return updated resume
    return this.repository.getResumeById(resume.id);
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