import React, { useState } from "react";

const Academics = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  const courses = [
    {
      id: 1,
      title: "1. Auxiliary Nursing & Midwifery (ANM)",
      content: (
        <ul className="text-left text-gray-700 mt-2">
          <li>📌 <b>Duration:</b> 2 Years</li>
          <li>📌 <b>Eligibility:</b> 12th Pass (Science/Arts)</li>
          <li>📌 <b>Specialization:</b> Nursing care, maternal health, child healthcare, community health services</li>
          <li><b>📌 Career Opportunities:</b></li>
          <li className="ml-8">✔️ Staff Nurse in hospitals, clinics, and nursing homes</li>
          <li className="ml-8">✔️ Community Health Worker in government & private healthcare centers</li>
          <li className="ml-8">✔️ Maternity & Child Care Specialist</li>
          <li className="ml-8">✔️ Home Healthcare Assistant</li>
          <li><b>📌 Further Studies:</b> GNM, B.Sc. Nursing</li>
          <li>🔹 <b>Course Highlights:</b></li>
          <li className="ml-8">✅ Hands-on training in nursing care, patient management, and emergency response</li>
          <li className="ml-8">✅ Internship in government and private hospitals</li>
          <li className="ml-8">✅ Strong demand for female healthcare professionals</li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "2. Diploma in Pharmacy (D.Pharm)",
      content: (
        <ul className="text-left text-gray-700 mt-2">
          <li>📌 <b>Duration:</b> 2 Years</li>
          <li>📌 <b>Eligibility:</b> 12th Pass (PCB/PCM)</li>
          <li>📌 <b>Specialization:</b> Pharmacology, drug formulation, pharmacy law, patient counseling</li>
          <li><b>📌 Career Opportunities:</b></li>
          <li className="ml-8">✔️ Pharmacist in hospitals, medical stores, and drug companies</li>
          <li className="ml-8">✔️ Drug Inspector & Medical Representative</li>
          <li className="ml-8">✔️ Lab Technician in pharmaceutical labs</li>
          <li className="ml-8">✔️ Entrepreneurship – Open own medical store (Drug License)</li>
          <li><b>📌 Further Studies:</b> B.Pharm, M.Pharm</li>
          <li>🔹 <b>Course Highlights:</b></li>
          <li className="ml-8">✅ Approved by PCI (Pharmacy Council of India)</li>
          <li className="ml-8">✅ Strong placement in pharmaceutical industries and hospitals</li>
          <li className="ml-8">✅ Opportunities to start own pharmacy business</li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "3. Diploma in Physiotherapy (DPT)",
      content: (
        <ul className="text-left text-gray-700 mt-2">
          <li>📌 <b>Duration:</b> 2 Years</li>
          <li>📌 <b>Eligibility:</b> 12th Pass (PCB)</li>
          <li>📌 <b>Specialization:</b> Musculoskeletal therapy, rehabilitation, pain management</li>
          <li><b>📌 Career Opportunities:</b></li>
          <li className="ml-8">✔️ Physiotherapist in hospitals, sports clinics, and rehabilitation centers</li>
          <li className="ml-8">✔️ Work with orthopedic surgeons & fitness trainers</li>
          <li className="ml-8">✔️ Personal physiotherapy consultant</li>
          <li><b>📌 Further Studies:</b> Bachelor of Physiotherapy (BPT), MPT</li>
          <li>🔹 <b>Course Highlights:</b></li>
          <li className="ml-8">✅ Training in physical therapy techniques & patient recovery</li>
          <li className="ml-8">✅ High demand in sports, orthopedics, and rehabilitation centers</li>
          <li className="ml-8">✅ Internship opportunities in top hospitals & clinics</li>
        </ul>
      ),
    },
    {
      id: 4,
      title: "4. Diploma in Naturopathy & Yogic Science (DNYS)",
      content: (
        <ul className="text-left text-gray-700 mt-2">
          <li>📌 <b>Duration:</b> 3 Years</li>
          <li>📌 <b>Eligibility:</b> 10th or 12th Pass</li>
          <li>📌 <b>Specialization:</b> Naturopathy, herbal medicine, alternative healing therapies</li>
          <li><b>📌 Career Opportunities:</b></li>
          <li className="ml-8">✔️ Naturopathy Doctor in wellness centers, spas, and ayurvedic hospitals</li>
          <li className="ml-8">✔️ Yoga Trainer in health centers and fitness clubs</li>
          <li className="ml-8">✔️ Consultant for holistic healing and natural medicine</li>
          <li><b>📌 Further Studies:</b> BNYS (Bachelor of Naturopathy & Yogic Sciences), MD in Naturopathy</li>
          <li>🔹 <b>Course Highlights:</b></li>
          <li className="ml-8">✅ Focus on natural healing, diet therapy, and yoga-based treatments</li>
          <li className="ml-8">✅ High demand in alternative medicine & wellness industry</li>
          <li className="ml-8">✅ Ideal for those interested in holistic healthcare</li>
        </ul>
      ),
    },
    {
      id: 5,
      title: "5. Diploma in Medical Laboratory Technology (DMLT)",
      content: (
        <ul className="text-left text-gray-700 mt-2">
          <li>📌 <b>Duration:</b> 2 Years</li>
          <li>📌 <b>Eligibility:</b> 12th Pass (PCB)</li>
          <li>📌 <b>Specialization:</b> Pathology, microbiology, biochemistry, diagnostic testing</li>
          <li><b>📌 Career Opportunities:</b></li>
          <li className="ml-8">✔️ Medical Lab Technician in hospitals and diagnostic centers</li>
          <li className="ml-8">✔️ Pathology Lab Assistant</li>
          <li className="ml-8">✔️ Blood Bank Technician</li>
          <li className="ml-8">✔️ Research Lab Assistant in pharma industries</li>
          <li><b>📌 Further Studies:</b> B.Sc. MLT, M.Sc. MLT</li>
          <li>🔹 <b>Course Highlights:</b></li>
          <li className="ml-8">✅ Hands-on training in blood tests, urine tests, and microbiological analysis</li>
          <li className="ml-8">✅ Internships in reputed pathology labs & hospitals</li>
          <li className="ml-8">✅ Strong job demand in diagnostics and hospital labs</li>
        </ul>
      ),
    },
    {
      id: 6,
      title: "6. Certificate in Medical Science (CMS - Emergency & Disaster Management)",
      content: (
        <ul className="text-left text-gray-700 mt-2">
          <li>📌 <b>Duration:</b> 1 Year</li>
          <li>📌 <b>Eligibility:</b> 10th or 12th Pass</li>
          <li>📌 <b>Specialization:</b> Emergency response, trauma care, disaster management</li>
          <li><b>📌 Career Opportunities:</b></li>
          <li className="ml-8">✔️ Emergency Medical Technician (EMT) in hospitals and ambulance services</li>
          <li className="ml-8">✔️ Rescue & Disaster Response Team Member</li>
          <li className="ml-8">✔️ Work with fire departments, emergency rescue units, and NGOs</li>
          <li><b>📌 Further Studies:</b> Paramedical specialization in Emergency Medicine</li>
          <li>🔹 <b>Course Highlights:</b></li>
          <li className="ml-8">✅ Training in emergency care, first aid, and CPR techniques</li>
          <li className="ml-8">✅ Career opportunities in ambulance services, fire safety, and emergency response teams</li>
          <li className="ml-8">✅ Essential for those interested in paramedical emergency services</li>
        </ul>
      ),
    },
    {
      id: 7,
      title: "7. Diploma in Operation Theater Technology (OTT)",
      content: (
        <ul className="text-left text-gray-700 mt-2">
          <li>📌 <b>Duration:</b> 2 Years</li>
          <li>📌 <b>Eligibility:</b> 12th Pass (PCB)</li>
          <li>📌 <b>Specialization:</b> Operation theater management, surgical instruments, anesthesia support</li>
          <li><b>📌 Career Opportunities:</b></li>
          <li className="ml-8">✔️ OT Technician in hospitals, surgical clinics, and trauma centers</li>
          <li className="ml-8">✔️ Surgical Assistant in operating rooms</li>
          <li className="ml-8">✔️ Anesthesia Technician in critical care units</li>
          <li><b>📌 Further Studies:</b> B.Sc. OTT, M.Sc. OTT</li>
          <li>🔹 <b>Course Highlights:</b></li>
          <li className="ml-8">✅ Training in pre-operative and post-operative surgical assistance</li>
          <li className="ml-8">✅ Internship in operation theaters of major hospitals</li>
          <li className="ml-8">✅ High demand for skilled OT technicians in the healthcare sector</li>
        </ul>
      ),
    }
  
    // Add more courses here if needed (e.g., Diploma in Physiotherapy, etc.)
  ];

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-900">Academics</h1>
      <p className="mt-3 text-lg text-gray-700">
        Explore the academic curriculum and learning methodology at our Institute.
      </p>

      <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-cyan-950 text-left mb-5 ml-2">Courses Offered:</h2>
        {courses.map((course) => (
          <div key={course.id} className="border-b border-stone-100 ">
            <h3
              onClick={() => toggleSection(course.id)}
              className="text-xl font-medium text-blue-950 text-left p-4 bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors duration-200 rounded-lg"
            >
              {course.title}
            </h3>
            {activeSection === course.id && (
              <div className="p-4 bg-white text-gray-700">{course.content}</div>
            )}
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Academics;