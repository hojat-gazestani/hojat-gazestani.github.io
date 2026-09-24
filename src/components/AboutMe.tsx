import {
  FaAws,
  FaDocker,
  FaPython,
  FaLinux,
  FaGitAlt,
  FaServer,
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaBrain,
  FaPlug,
  FaRobot,
  FaSync,
  FaBolt,
  FaCogs,
  FaKey,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiOpenstack,
  SiAnsible,
  SiGitlab,
  SiArgo,
  SiPrometheus,
  SiGrafana,
  SiRabbitmq,
  SiRedis,
  SiPfsense,
  SiDjango,
  SiHelm,
  SiLangchain,
  SiCeph,
  SiFlux,
  SiCelery,
  SiElasticsearch,
  SiNginx,
} from "react-icons/si";

export const AboutMe = () => {
  const skillCategories = [
    {
      name: "Cloud & Infrastructure",
      skills: [
        {
          name: "AWS",
          level: "Expert",
          icon: <FaAws className="text-orange-500" />,
        },
        {
          name: "EKS",
          level: "Expert",
          icon: <FaCloud className="text-orange-500" />,
        },
        {
          name: "OpenStack",
          level: "Expert",
          icon: <SiOpenstack className="text-red-500" />,
        },
        {
          name: "Kubernetes",
          level: "Expert",
          icon: <SiKubernetes className="text-blue-500" />,
        },
        {
          name: "Docker",
          level: "Expert",
          icon: <FaDocker className="text-blue-500" />,
        },
        {
          name: "Ceph",
          level: "Expert",
          icon: <SiCeph className="text-blue-500" />,
        },
        {
          name: "Helm",
          level: "Expert",
          icon: <SiHelm className="text-teal-500" />,
        },
        {
          name: "Kubespray",
          level: "Expert",
          icon: <FaCode className="text-gray-700 dark:text-gray-300" />,
        },
      ],
    },
    {
      name: "Programming",
      skills: [
        {
          name: "Python",
          level: "Expert",
          icon: <FaPython className="text-blue-500" />,
        },
        {
          name: "Bash",
          level: "Expert",
          icon: <FaCode className="text-gray-700 dark:text-gray-300" />,
        },
        {
          name: "Ansible",
          level: "Expert",
          icon: <SiAnsible className="text-red-500" />,
        },
      ],
    },
    {
      name: "CI/CD & GitOps",
      skills: [
        {
          name: "GitLab",
          level: "Expert",
          icon: <SiGitlab className="text-orange-500" />,
        },
        {
          name: "Git",
          level: "Expert",
          icon: <FaGitAlt className="text-orange-500" />,
        },
        {
          name: "ArgoCD",
          level: "Expert",
          icon: <SiArgo className="text-blue-500" />,
        },
        {
          name: "FluxCD",
          level: "Expert",
          icon: <SiFlux className="text-amber-500" />,
        },
        {
          name: "GitOps",
          level: "Expert",
          icon: <FaSync className="text-blue-500" />,
        },
        {
          name: "CI/CD",
          level: "Expert",
          icon: <FaCogs className="text-purple-500" />,
        },
      ],
    },
    {
      name: "Web & Application",
      skills: [
        {
          name: "Django",
          level: "Expert",
          icon: <SiDjango className="text-green-600" />,
        },
        {
          name: "Nginx",
          level: "Expert",
          icon: <SiNginx className="text-green-500" />,
        },
        {
          name: "HAProxy",
          level: "Expert",
          icon: <FaServer className="text-blue-500" />,
        },
        {
          name: "Celery",
          level: "Expert",
          icon: <SiCelery className="text-amber-600" />,
        },
      ],
    },
    {
      name: "Monitoring & Observability",
      skills: [
        {
          name: "Prometheus",
          level: "Expert",
          icon: <SiPrometheus className="text-orange-500" />,
        },
        {
          name: "VictoriaMetrics",
          level: "Expert",
          icon: <FaChartLine className="text-blue-500" />,
        },
        {
          name: "Grafana",
          level: "Expert",
          icon: <SiGrafana className="text-orange-500" />,
        },
        {
          name: "Zabbix",
          level: "Expert",
          icon: <FaServer className="text-red-500" />,
        },
        {
          name: "Elasticsearch",
          level: "Expert",
          icon: <SiElasticsearch className="text-amber-500" />,
        },
      ],
    },
    {
      name: "AI & LLM",
      skills: [
        {
          name: "LangChain",
          level: "Expert",
          icon: <SiLangchain className="text-blue-500" />,
        },
        {
          name: "LangGraph",
          level: "Expert",
          icon: <FaProjectDiagram className="text-amber-600" />,
        },
        {
          name: "RAG",
          level: "Expert",
          icon: <FaBrain className="text-purple-500" />,
        },
        {
          name: "MCP",
          level: "Expert",
          icon: <FaPlug className="text-orange-500" />,
        },
        {
          name: "LLM Agents",
          level: "Expert",
          icon: <FaRobot className="text-purple-500" />,
        },
        {
          name: "vLLM",
          level: "Expert",
          icon: <FaBolt className="text-blue-500" />,
        },
      ],
    },
    {
      name: "Networking & Security",
      skills: [
        {
          name: "Linux",
          level: "Expert",
          icon: <FaLinux className="text-yellow-500" />,
        },
        {
          name: "pfSense",
          level: "Expert",
          icon: <SiPfsense className="text-orange-500" />,
        },
        {
          name: "Juniper",
          level: "Expert",
          icon: <FaServer className="text-blue-500" />,
        },
        {
          name: "Firepower",
          level: "Expert",
          icon: <FaShieldAlt className="text-red-500" />,
        },
        {
          name: "PKI",
          level: "Expert",
          icon: <FaKey className="text-green-500" />,
        },
      ],
    },
    {
      name: "Message Brokers & Databases",
      skills: [
        {
          name: "RabbitMQ",
          level: "Expert",
          icon: <SiRabbitmq className="text-orange-500" />,
        },
        {
          name: "Redis",
          level: "Expert",
          icon: <SiRedis className="text-red-500" />,
        },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200 dark:border-green-700";
      case "Advanced":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-700";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-200 dark:border-yellow-700";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-600";
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h1>
      </section>

      <section className="mb-12">
        <div className="space-y-6 text-justify">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-8 hyphens-auto">
            I am a seasoned DevOps & Cloud Engineer with over a decade of
            experience specializing in building resilient, scalable systems. My
            journey began programming in Pascal and Delphi, followed by C++
            under mentorship, and evolved through mastering Linux, networking,
            and security—eventually leading me to infrastructure automation with
            Python, microservices, and cloud-native DevOps practices.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-8 hyphens-auto">
            Today, as a freelance Kubernetes, AWS, and DevOps engineer, I
            architect and manage Kubernetes clusters, implement CI/CD and GitOps
            pipelines, and develop web applications using Python and Django. I
            automate infrastructure across platforms like OpenStack, AWS,
            Docker, and more. I&apos;m passionate about delivering stability
            without sacrificing velocity—empowering development teams to iterate
            quickly and confidently.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-2 rounded-full text-sm font-medium border flex items-center gap-2 ${getLevelColor(
                      skill.level
                    )}`}
                  >
                    <span className="text-base">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
