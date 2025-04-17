import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-12 text-center">

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-justify">
        <div className="rounded-md bg-slate-300 shadow-xl items-end">
          <div className="m-[min(1.75rem,5%)] justify-center">
            <img src="https://i.ibb.co/mV1t7KQD/1744579619781-1.jpg" alt="https://i.ibb.co/mV1t7KQD/1744579619781-1.jpg" border="0" className="rounded-lg shadow-md place-items-center" />
            <p className="mt-4 text-2xl font-semibold font-sans">Founder's Message</p>
            <p className="mt-4 indent-4">At Carbon Institute of Paramedical Science, we believe that quality education is the key to shaping the future of healthcare. Our mission is to provide students with the skills and knowledge necessary to excel in the medical field. With a strong focus on practical learning and hands-on training, we aim to produce highly skilled paramedical professionals who can serve society with dedication and compassion. We welcome you to embark on this rewarding journey with us.</p>
            <p className="text-right italic">-Founder</p>
            <p className="text-right italic">Jabbar Ahmad</p>
          </div>
        </div>
        <div className="rounded-md bg-slate-300 text-base shadow-xl">
          <div className="m-[min(1.75rem,5%)]">
            <img src="https://i.ibb.co/60f1JwvY/1724834411764-1.png" alt="1724834411764-1" border="0" className="rounded-lg shadow-md " />
            <p className="mt-4 text-2xl font-semibold font-sans">Principal's Message</p>
            <p className="mt-4 indent-4">Education in the medical field is not just about acquiring knowledge; it is about applying that knowledge to save lives and improve healthcare standards. At Carbon Institute of Paramedical Science, we ensure that our students receive the best academic guidance, practical exposure, and ethical training to excel in their careers. I invite all aspiring medical professionals to join us and take a step toward a brighter future in healthcare.</p>
            <p className="text-right italic">-Principal</p>
            <p className="text-right italic">Irfan Ahmad</p>
          </div>
        </div>
        <div className="rounded-md bg-slate-300 text-base shadow-xl">
          <div className="m-[min(1.75rem,5%)]">
            <img src="https://i.ibb.co/wrMz8ML7/Mohammad-Fahad-2.jpg" alt="Mohammad-Fahad-2" border="0" className="rounded-lg shadow-md " />
            <p className="mt-4 text-2xl font-semibold font-sans">Chief Guest's Remarks</p>
            <p className="mt-4 indent-4">The healthcare sector is rapidly evolving, and skilled paramedical professionals play a crucial role in strengthening medical services. Institutions like Carbon Institute of Paramedical Science are instrumental in producing competent healthcare workers who can contribute significantly to the medical industry. I commend the institute's dedication to excellence and encourage students to make the most of this opportunity to serve humanity.</p>
            <p className="text-right italic">-Chief Guest</p>
            <p className="text-right italic">Mohammad Fahad</p>
            <p className="text-right italic">[National President Samajwadi Yuvjan Sabha]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;





