import React from "react";

const Admission = () => {
  return (
    <div className="p-6 text-center">

      <h1 className="text-3xl font-bold text-blue-900">Admission Process</h1>


      <p className="mt-3 text-lg text-gray-700">
        Join Carbon Institute of Paramedical Science and be a part of an excellent learning environment.
      </p>


      <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800">Eligibility Criteria</h2>
        <ul className="mt-2 text-gray-700 text-left list-disc list-inside">
          <li>📌 Minimum Qualification: 12th pass from a recognized board.</li>
          <li>📌 Minimum Percentage Required: 40%-50% (varies by course)</li>
          <li>📌 Age Requirement: 17 years and above at the time of admission.</li>
          <li>📌 Preferred Subjects: Science background (Biology, Chemistry) is preferred but not mandatory.</li>
        </ul>
      </div>

      <div className="mt-6 bg-slate-100 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800">Documents Required</h2>
        <ul className="mt-2 text-gray-700 text-left list-disc list-inside">
          <li>✅ Mark sheets (10th & 12th or equivalent)</li>
          <li>✅ Transfer Certificate (TC) / Migration Certificate</li>
          <li>✅ Aadhar Card or other valid ID proof</li>
          <li>✅ Passport-size photographs</li>
        </ul>
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-md border">
        <h2 className="text-2xl font-semibold text-blue-800">Admission Process</h2>
        <p className="text-left">At the Carbon Institute of Paramedical Science, Kasganj, we welcome students who are passionate about healthcare and wish to build a rewarding career in paramedical sciences. Our admission process is simple, transparent, and merit-based, ensuring that every aspiring student gets a fair opportunity to enroll in our prestigious programs.</p>
        <ol className="mt-2 text-gray-700 text-left list-decimal list-inside">
          <li>Fill out the registration form.</li>
          <li>Submit required documents.</li>
          <li>Attend an interaction session.</li>
          <li>Final confirmation and Commencement of Classes.</li>
        </ol>
      </div>


      <div className="mt-6 p-4 bg-blue-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800">Need Help?</h2>
        <p className="text-gray-700">Contact our admission office for any queries:</p>
        <p className="mt-2 font-semibold">📞 +91 8868865268, 8868865267, 7452086088</p>
        <p className="font-semibold">✉️ carbon.ips@gmail.com</p>
      </div>
    </div>
  );
};

export default Admission;
