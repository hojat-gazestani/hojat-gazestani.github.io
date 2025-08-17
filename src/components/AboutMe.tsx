import Link from "next/link";

export const AboutMe = () => {
  const skills = [
    "Python",
    "Linux",
    "OpenStack",
    "Kubernetes",
    "GitLab",
    "Ansible",
    "Zabbix",
    "Prometheus",
    "Grafana",
    "RabbitMQ",
    "Redis",
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

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Outside of Work
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          When not working, I enjoy traveling and mountain climbing. Let&apos;s
          connect over coffee!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="mailto:Hojat.Gazestani@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Hojat.Gazestani@gmail.com
          </Link>
          <Link
            href="https://www.instagram.com/hojat_gazestani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            @hojat_gazestani
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};
