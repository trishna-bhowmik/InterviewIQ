export interface Resume {
  id: string;
  originalName: string;
  filename: string;
  createdAt: string;
}

export interface ResumeResponse {
  success: boolean;
  data: Resume[];
}