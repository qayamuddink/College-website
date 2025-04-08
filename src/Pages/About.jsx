import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-justify">
        
        <h2 className="mt-5 text-3xl font-bold text-blue-600">ℹ️ About Us</h2>

        <p className="ml-10 text-gray-700 mt-3">
        Welcome to the Carbon Institute of Paramedical Science, a premier institution dedicated to excellence in paramedical education. Our mission is to train and empower the next generation of healthcare professionals with the skills, knowledge, and hands-on experience needed to serve communities with compassion and expertise.</p>
        
        <h2 className="mt-5 text-3xl font-bold text-blue-600">ℹ️ Our Vision</h2>
        
        <p className="ml-10 mt-3 text-gray-700">
        At Carbon Institute, we envision a future where quality healthcare education is accessible to all. We strive to produce highly skilled paramedics who contribute to the medical field with integrity, dedication, and professionalism.        </p>
        
        <h2 className="mt-5 text-3xl font-bold text-blue-600">ℹ️ Our Mission</h2>
        
        <div className="ml-16 mt-3 text-gray-700">
        <ul className="list-disc" >
          <li>To provide world-class paramedical education with a strong emphasis on practical training.</li>
          <li>To equip students with the latest medical knowledge and technology.</li>
          <li>To foster a culture of research, innovation, and ethical healthcare practices.</li>
          <li>To develop compassionate healthcare professionals ready to serve the community.</li>
          </ul>
        </div>


        {/* </p> */}
      </div>
    </section>
  );
};

export default About;
