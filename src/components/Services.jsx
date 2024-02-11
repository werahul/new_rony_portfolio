import React from 'react'

const Services = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 lg:px-20 px-5 mt-20'>

            <div class="card">
                <h2>Front-end Development</h2>
                <p>
                    Specialize in developing user interfaces for websites and web applications<br />
                    Focus on layout, design, and interactive elements<br />
                    Expertise in HTML, CSS, and JavaScript<br />
                    Proficient in ReactJS and NextJS frameworks<br />
                    Emphasize responsive design principles<br />
                    Ensure seamless functionality across various devices
                </p>
            </div>
            <div class="card">
                <h2>Back-end Development</h2>
                <p>I possess strong skills in server-side development for websites and web applications. My capabilities include constructing server logic, managing database interactions, and designing APIs, leveraging technologies such as Node.js.</p>
            </div>
            <div class="card">
                <h2>Version Control Systems</h2>
                <p>In my role as a web developer, I'm well-versed in version control systems, utilizing tools like Git to track changes, collaborate with team members, and efficiently manage code repositories.</p>
            </div>

        </div>
    )
}

export default Services