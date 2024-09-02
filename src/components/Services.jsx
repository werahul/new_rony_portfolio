import React from "react";

const Services = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:py-10 px-5 mt-20 max-container">
      <div class="card">
        <h2>Front-end Development</h2>
        <p>
          <ul class="list-disc list-inside space-y-1 text-white font-kanit leading-6">
            <li>
              Specialize in developing user interfaces for websites and web
              applications
            </li>
            <li>Focus on layout, design, and interactive elements</li>
            <li>Expertise in HTML, CSS, and JavaScript</li>
            <li>Proficient in ReactJS and NextJS frameworks</li>
            <li>Emphasize responsive design principles</li>
            <li>Ensure seamless functionality across various devices</li>
          </ul>
        </p>
      </div>
      <div class="card">
        <h2>Back-end Development</h2>
        <p>
          <ul class="list-disc list-inside space-y-1 text-white font-kanit leading-6">
            <li>
              Develop robust server-side logic for websites and web applications
            </li>
            <li>
              Design and implement RESTful APIs to support front-end
              functionality
            </li>
            <li>
              Manage and optimize database interactions for performance and
              scalability
            </li>
            <li>Ensure secure and efficient handling of user data</li>
            <li>Leverage Node.js for building scalable backend systems</li>
            
          </ul>
        </p>
      </div>
      <div class="card">
        <h2>Version <br /> Control Systems</h2>
        <p>
          <ul class="list-disc list-inside space-y-1 text-white font-kanit leading-6">
            <li>
              Utilize version control systems like Git for efficient code
              management
            </li>
            <li>
              Track and document changes to the codebase to ensure project
              integrity
            </li>
            <li>
              Collaborate seamlessly with team members through distributed
              version control
            </li>
            <li>
              Manage and merge code branches to facilitate continuous
              integration
            </li>
            <li>
              Resolve conflicts in code to maintain a clean and functional
              repository
            </li>
           
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Services;
