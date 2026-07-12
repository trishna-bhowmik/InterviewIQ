import cloudinary from "../../config/cloudinary.js";

export async function uploadResumeToCloudinary(
  filePath: string
) {
  return cloudinary.uploader.upload(filePath, {
    folder: "InterviewIQ/resumes",
    resource_type: "raw",
  });
}