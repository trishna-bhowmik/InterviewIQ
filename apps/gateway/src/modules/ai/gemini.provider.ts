import { GoogleGenAI, Type } from "@google/genai";
import { env } from "../../config/env.js";
import { ResumeAnalysis } from "./schemas/resume-analysis.schema.js";
import {
  InterviewFeedback,
  interviewFeedbackSchema,
} from "./schemas/interview-feedback.schema.js";

const ai = new GoogleGenAI({
  apiKey: env.GEMINI_API_KEY,
});

export class GeminiProvider {
  async analyzeResume(text: string) {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are an expert technical recruiter.

Analyze the following resume.

Resume:
${text}

Return a complete analysis.
`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: {
              type: Type.STRING,
            },
            skills: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
            },
            strengths: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
            },
            weaknesses: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
            },
            recommendations: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
            },
            projects: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: {
                    type: Type.STRING,
                  },
                  description: {
                    type: Type.STRING,
                  },
                },
              },
            },
          },
        },
      },
    });

    return JSON.parse(response.text ?? "{}");
  }

  async generateInterviewQuestions(
  analysis: ResumeAnalysis
) {
  const skills = analysis.skills ?? [];
  const strengths = analysis.strengths ?? [];
  const weaknesses = analysis.weaknesses ?? [];
  const recommendations =
    analysis.recommendations ?? [];
  const projects = analysis.projects ?? [];

  const prompt = `
You are a Senior Software Engineer interviewer.

Based on the following candidate analysis, generate interview questions.

Summary:
${analysis.summary ?? ""}

Skills:
${skills.join(", ")}

Projects:
${projects
  .map(
    (project) =>
      `${project.title}: ${project.description}`
  )
  .join("\n")}

Strengths:
${strengths.join(", ")}

Weaknesses:
${weaknesses.join(", ")}

Recommendations:
${recommendations.join(", ")}

Generate:
- 1 HR question
- 1 Technical question
- 1 Project question
- 1 Behavioral question
- 1 Coding question

Return ONLY valid JSON in this format:

{
  "hr": [],
  "technical": [],
  "projects": [],
  "behavioral": [],
  "coding": []
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          hr: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING,
            },
          },
          technical: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING,
            },
          },
          projects: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING,
            },
          },
          behavioral: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING,
            },
          },
          coding: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING,
            },
          },
        },
      },
    },
  });

  return JSON.parse(response.text ?? "{}");
}

  async evaluateAnswer(
    question: string,
    answer: string
  ) {
    const prompt = `
You are a Senior Software Engineer interviewer.

Evaluate the candidate's answer.

Question:
${question}

Candidate Answer:
${answer}

Evaluate on:

- Overall Score (0-10)
- Communication (0-10)
- Technical Accuracy (0-10)
- Confidence (0-10)
- Strengths
- Improvements
- Detailed Feedback

Return ONLY valid JSON.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: {
              type: Type.NUMBER,
            },
            communication: {
              type: Type.NUMBER,
            },
            technicalAccuracy: {
              type: Type.NUMBER,
            },
            confidence: {
              type: Type.NUMBER,
            },
            strengths: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
            },
            improvements: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
            },
            feedback: {
              type: Type.STRING,
            },
          },
        },
      },
    });

    return JSON.parse(response.text ?? "{}");
  }

  async generateInterviewFeedback(
  questions: string[],
  answers: string[]
): Promise<InterviewFeedback> {
  const prompt = `
You are an experienced Senior Software Engineer interviewer.

Evaluate the candidate's complete interview.

Questions:
${questions.map((q, i) => `${i + 1}. ${q}`).join("\n")}

Answers:
${answers.map((a, i) => `${i + 1}. ${a}`).join("\n")}

Return ONLY valid JSON.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          overallScore: {
            type: Type.NUMBER,
          },
          strengths: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING,
            },
          },
          weaknesses: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING,
            },
          },
          recommendations: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING,
            },
          },
          summary: {
            type: Type.STRING,
          },
        },
      },
    },
  });

  return interviewFeedbackSchema.parse(
    JSON.parse(response.text ?? "{}")
  );
}

}