import { FaYoutube, FaLink } from "react-icons/fa";
import Link from "next/link";

export const OnlineContent = () => {
  const playlists = [
    {
      title: "AWS Tutorials",
      url: "https://www.youtube.com/watch?v=FYlCJZ_tg8Q&list=PLiOKisJtnuNsfVFNx15YFYmmAhmsc_3me",
      description:
        "Comprehensive AWS cloud computing tutorials and best practices",
    },
    {
      title: "OpenStack Deep Dive",
      url: "https://www.youtube.com/watch?v=d78p9gBvyhk&list=PLiOKisJtnuNtFNJOMxPwYjPwaSglgPTjs",
      description: "OpenStack cloud infrastructure deployment and management",
    },
    {
      title: "Ceph Storage",
      url: "https://www.youtube.com/watch?v=Fk2CYFeVqoc&list=PLiOKisJtnuNvy4HsVE8kIOZbOwvQK6Rj-",
      description: "Distributed storage system implementation and optimization",
    },
    {
      title: "Kubernetes Mastery",
      url: "https://www.youtube.com/watch?v=YuDJ5DTi6cM&list=PLiOKisJtnuNtLf24qcZboouwGqYUK1KRr",
      description: "Container orchestration from basics to advanced concepts",
    },
    {
      title: "RabbitMQ with Python",
      url: "https://www.youtube.com/watch?v=nrwAI7g1Q4M&list=PLiOKisJtnuNujB0wGrMnIUlfOsh5UHJ-H",
      description: "Message broker implementation and Python integration",
    },
    {
      title: "VMware VCP & SRM",
      url: "https://www.youtube.com/watch?v=nrwAI7g1Q4M&list=PLiOKisJtnuNujB0wGrMnIUlfOsh5UHJ-H",
      description: "Virtualization and disaster recovery solutions",
    },
    {
      title: "HAProxy Load Balancing",
      url: "https://www.youtube.com/watch?v=_Dz4QFHunAw&list=PLiOKisJtnuNuTXKZwh7S9wZ51feHiCEYu",
      description: "High availability proxy server configuration",
    },
    {
      title: "Layer 2 Security",
      url: "https://www.youtube.com/watch?v=4DtzJxkbBpo&list=PLiOKisJtnuNsc50BFuzGKSSflBO67-h7D",
      description: "Network security at the data link layer",
    },
    {
      title: "Puppet Configuration",
      url: "https://www.youtube.com/watch?v=iTdU2iXSo8s&list=PLiOKisJtnuNt2wxflxN0WeH4YLPTpk0Ar",
      description: "Infrastructure automation and management",
    },
    {
      title: "Vagrant Development",
      url: "https://www.youtube.com/watch?v=3aVrRk19RDw&list=PLiOKisJtnuNtIBRfJiqUjOwnH7KYSnfV-",
      description: "Virtual development environments setup",
    },
    {
      title: "Linux Administration",
      url: "https://www.youtube.com/watch?v=6scgysyNk80&list=PLiOKisJtnuNtf3HhPFq-eJYXI7Vgz1ze0",
      description: "Essential Linux system administration skills",
    },
    {
      title: "LPIC3-303 (PKI)",
      url: "https://www.youtube.com/watch?v=c0wMAtO3QgA&list=PLiOKisJtnuNtS_IQDjzNYlTypuNsHC0lh",
      description: "Public Key Infrastructure concepts and implementation",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center mb-8">
        <FaYoutube className="text-red-600 mr-3" size={28} />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Online Content
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {playlists.map((playlist, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-red-600"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {playlist.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {playlist.description}
            </p>
            <Link
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-600 hover:text-red-800 dark:hover:text-red-400 transition-colors"
            >
              <FaYoutube className="mr-2" />
              Watch Playlist
              <FaLink className="ml-2" size={12} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
