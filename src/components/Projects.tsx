import Link from "next/link";
import { FaProjectDiagram, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  title: string;
  tech: string[];
  repoUrl: string;
  points: string[];
};

const projects: Project[] = [
  {
    title: "Agentic Kubernetes Root Cause Analysis Platform",
    tech: [
      "Python",
      "LangGraph",
      "MCP",
      "Kubernetes",
      "Elasticsearch",
      "VictoriaMetrics",
      "LLM",
    ],
    repoUrl: "https://github.com/hojat-gazestani/k8s-AI-Assistant",
    points: [
      "Built an agentic Kubernetes Root Cause Analysis platform that investigates alerts using live metrics, logs, Kubernetes state, and historical incident data.",
      "Designed a LangGraph-based autonomous workflow for planning investigations, collecting evidence, verification, and RCA generation.",
      "Integrated infrastructure and observability capabilities through MCP tools, including Kubernetes, VictoriaMetrics, and Elasticsearch.",
      "Implemented evidence-driven RCA to distinguish observed facts from inferred causes and reduce unsupported conclusions.",
      "Added incident-history retrieval using RAG to correlate current failures with previous incidents.",
      "Designed structured RCA reports containing affected workloads, pod/node status, events, metrics, logs, and supporting evidence.",
    ],
  },
  {
    title: "Agentic Job Search / Career Automation",
    tech: ["Python", "LangGraph", "LLM", "vLLM", "Tavily"],
    repoUrl: "https://github.com/hojat-gazestani/ai-job-agent",
    points: [
      "Built an agentic job-search system that evaluates engineering positions against a structured candidate profile.",
      "Implemented Planner → Verifier → Scoring workflow using LangGraph.",
      "Integrated web search and local OpenAI-compatible LLM infrastructure for job discovery and evaluation.",
      "Designed candidate/job matching around Kubernetes, SRE, DevOps, cloud, AI infrastructure, and agentic engineering requirements.",
    ],
  },
];

export const Projects = () => {
  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center mb-8">
        <FaProjectDiagram className="text-blue-600 mr-3" size={28} />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          SELECTED PROJECTS
        </h2>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {project.title}
              </h3>
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center whitespace-nowrap text-blue-600 dark:text-blue-400 hover:underline"
              >
                <FaGithub className="mr-2" />
                <span className="text-sm">GitHub repository</span>
                <FaExternalLinkAlt className="ml-1" size={12} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((technology, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-800"
                >
                  {technology}
                </span>
              ))}
            </div>

            <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
              {project.points.map((point, i) => (
                <li key={i} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
