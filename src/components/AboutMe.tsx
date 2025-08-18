export const AboutMe = () => {
  const skills = [
    { id: 1, name: "AWS" },
    { id: 2, name: "Python" },
    { id: 3, name: "Linux" },
    { id: 4, name: "OpenStack" },
    { id: 5, name: "Kubernetes" },
    { id: 6, name: "HAproxy" },
    { id: 7, name: "Nginx" },
    { id: 8, name: "Git" },
    { id: 9, name: "GitLab" },
    { id: 10, name: "ArgoCD" },
    { id: 11, name: "Ansible" },
    { id: 12, name: "Zabbix" },
    { id: 13, name: "Prometheus" },
    { id: 14, name: "Grafana" },
    { id: 15, name: "Zabbix" },
    { id: 16, name: "RabbitMQ" },
    { id: 17, name: "Redis" },
    { id: 18, name: "Pfsense" },
    { id: 19, name: "Firepower" },
    { id: 20, name: "Juniper" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h1>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Professional Background
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          With over 10 years of experience in Development and Operations, I
          specialize as a freelance Kubernetes, AWS, and DevOps engineer. My
          focus includes implementing CI/CD pipelines, GitOps environments, and
          managing Kubernetes clusters with deployment solutions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          My Journey
        </h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            My tech journey began in the era of dial-up internet, programming
            with PASCAL and Delphi. C++ ignited my coding passion under a
            skilled mentor&apos;s guidance.
          </p>
          <p>
            Discovering Ubuntu and open-source culture marked a career turning
            point. Initial struggles with Linux graphics and terminal led me to
            Cisco systems, where I mastered networking, security, and data
            center architecture.
          </p>
          <p>
            I expanded into Python automation, cloud security, microservices,
            and DevOps practices to optimize infrastructure tasks.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          What I Do Today
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Specializing in infrastructure automation, I ensure application
          stability during frequent development updates.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.id}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};
