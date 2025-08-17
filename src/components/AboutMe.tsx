import React from 'react';

export const AboutMe: React.FC = () => {
  return (
    <div>
      <h1>About Me</h1>

      <section>
        <img 
          src="./me.png" 
          alt="Hojat Gazestani" 
          style={{
            maxWidth: '200px', 
            borderRadius: '8px', 
            marginBottom: '20px'
          }} 
        />
      </section>
      
      <section>
        <h2>Professional Background</h2>
        <p>
          I have over 10 years of experience in Development and Operations. Currently, I work as a freelance 
          Kubernetes, AWS, and DevOps engineer, where I implement and maintain CI/CD pipelines and GitOps environments. 
          My expertise lies in setting up and managing Kubernetes clusters, and providing deployment solutions within these environments.
        </p>
      </section>

      <section>
        <h2>My Journey</h2>
        <p>
          My tech journey began in the era of dial-up internet and floppy disks, programming with PASCAL and Delphi. However, 
          it was C++ that truly ignited my passion for coding, with the guidance of a skilled teacher.
        </p>
        <p>
          The discovery of Ubuntu and the open-source culture was a turning point in my career. Initially, I struggled with graphic 
          driver issues and the Linux terminal, but these challenges sparked my interest in Cisco systems.
        </p>
        <p>
          I spent years mastering routing, switching, data center architecture, security, and network design through Cisco. Over time, 
          I expanded my skillset by learning Python to automate and optimize infrastructure tasks, improving my expertise in cloud security, 
          microservices, and DevOps practices.
        </p>
      </section>

      <section>
        <h2>What I Do Today</h2>
        <p>
          My focus today is on automating infrastructure, ensuring that software applications remain stable amidst frequent updates from development teams.
        </p>
      </section>

      <section>
        <h2>Outside of Work</h2>
        <p>
          When I'm not working, you’ll likely find me traveling or exploring mountain climbing. I love meeting new people over a cup of coffee, so feel free to reach out anytime.
        </p>
        <p>
          You can contact me at: <a href="mailto:Hojat.Gazestani@gmail.com">Hojat.Gazestani@gmail.com</a> or connect with me on Instagram: 
          <a href="https://www.instagram.com/hojat_gazestani" target="_blank">@hojat_gazestani</a>.
        </p>
      </section>

      <section>
        <h2>Core Competencies</h2>
        <ul>
          <li>Python</li>
          <li>Linux</li>
          <li>OpenStack</li>
          <li>Kubernetes</li>
          <li>GitLab</li>
          <li>Ansible</li>
          <li>Zabbix</li>
          <li>Prometheus</li>
          <li>Grafana</li>
          <li>RabbitMQ</li>
          <li>Redis</li>
        </ul>
      </section>
    </div>
  );
};

