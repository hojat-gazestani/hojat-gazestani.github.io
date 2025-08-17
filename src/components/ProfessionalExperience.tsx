import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export const ProfessionalExperience = () => {
  const experiences = [
    {
      role: "Cloud Engineer | DevOps | Kubernetes | AWS (Contract)",
      period: "May 2023 – Present",
      company: "Nethightech",
      website: "https://www.nethightech.com/",
      location: "Lisbon, Portugal",
      achievements: [
        "Developed scalable services on AWS using EC2 Auto Scaling, ELB, S3, and DynamoDB",
        "Engineered AWS EKS Kubernetes clusters with Terraform, reducing deployment time by 60%",
        "Optimized Kubernetes deployments using Kubespray and Bash scripts, achieving 80% faster application launches",
        <>
          Created HAProxy training materials (
          <Link
            href="https://github.com/hojat-gazestani/kube-task"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </Link>
          ,{" "}
          <Link
            href="https://www.youtube.com/channel/UCmYCnN9mmHEcSvfP6ytbnGA"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            YouTube
          </Link>
          ) boosting content delivery by 50%
        </>,
        "Implemented GitLab CI/CD with Kustomize and Flux, reducing delivery time by 80%",
      ],
    },
    {
      role: "OpenStack DevOps Engineer",
      period: "Sep 2021 – Dec 2022",
      company: "ArcFava",
      website: "http://www.arcfava.com/",
      location: "Remote",
      achievements: [
        "Architected OpenStack and Ceph infrastructure, improving network management by 40%",
        "Transformed single-node Redis to cluster, achieving 100% scalability and 70% reliability boost",
        "Redesigned RabbitMQ into cluster configuration, improving scalability and stability by 80%",
      ],
    },
    {
      role: "DevOps Engineer",
      period: "Apr 2020 - May 2021",
      company: "Mahsan",
      website: "https://mahsan.co/",
      location: "Tehran, Iran",
      achievements: [
        "Optimized Python unit tests in CI/CD, improving code management by 100%",
        "Automated Netbox-VMware vCenter synchronization with Python",
        "Implemented monitoring stack (Zabbix, Grafana, Prometheus, cAdvisor)",
        "Established SLAs for 50+ web services in Zabbix",
      ],
    },
    {
      role: "Systems Engineer",
      period: "Jul 2016 – Apr 2020",
      company: "Didehbannet",
      location: "Tehran, Iran",
      achievements: [
        "Designed and secured new server room infrastructure",
        "Implemented Kubernetes/Docker storage optimization saving high-cost storage space",
        "Redesigned core network security (Juniper, FortiGate) improving security by 80%",
        "Automated network management with Python scripts",
        "Configured EMC Unity and HP SAN storage for VMware HA clusters",
      ],
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Professional Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {exp.role}
              </h3>
              <span className="text-gray-600 dark:text-gray-400">
                {exp.period}
              </span>
            </div>

            <div className="flex items-baseline mt-2 mb-4">
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {exp.company}
              </h4>
              {exp.website && (
                <Link
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                  <span className="text-sm">Website</span>
                  <FaExternalLinkAlt className="ml-1" size={12} />
                </Link>
              )}
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                {exp.location}
              </span>
            </div>

            <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="leading-relaxed">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
