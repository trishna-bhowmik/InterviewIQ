export interface AIProvider {
  analyzeResume(text: string): Promise<string>;

  generateInterviewQuestions(
    text: string
  ): Promise<string>;
}