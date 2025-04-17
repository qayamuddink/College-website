import React from "react";

const images = [
  { src: "https://i.ibb.co/4wFX1kfW/building-2.jpg", preview: "https://i.ibb.co/4wFX1kfW/building-2.jpg", title: "evening" },
  { src: "https://i.ibb.co/WWqSFZPb/IMG-20250414-WA0009.jpg", preview: "https://i.ibb.co/WWqSFZPb/IMG-20250414-WA0009.jpg", title: "evening" },
  { src: "https://i.ibb.co/xq97BvjL/IMG-20250414-WA0011.jpg", preview: "https://i.ibb.co/xq97BvjL/IMG-20250414-WA0011.jpg", title: "evening" },
  { src: "https://i.ibb.co/3m6ZQ6bB/IMG-20250414-WA0018.jpg", preview: "https://i.ibb.co/3m6ZQ6bB/IMG-20250414-WA0018.jpg", title: "evening" },
  { src: "https://i.ibb.co/1GGPpTM4/IMG-20250414-WA0025.jpg", preview: "https://i.ibb.co/1GGPpTM4/IMG-20250414-WA0025.jpg", title: "evening" },
  { src: "https://i.ibb.co/gMsNypYT/IMG-20250414-WA0026.jpg", preview: "https://i.ibb.co/gMsNypYT/IMG-20250414-WA0026.jpg", title: "evening" },
  { src: "https://i.ibb.co/jkrVRwpp/IMG-20250414-WA0029.jpg", preview: "https://i.ibb.co/jkrVRwpp/IMG-20250414-WA0029.jpg", title: "evening" },
  { src: "https://i.ibb.co/tTxjBPPc/IMG-20250414-WA0030.jpg", preview: "https://i.ibb.co/tTxjBPPc/IMG-20250414-WA0030.jpg", title: "evening" },
  { src: "https://i.ibb.co/ymm7F8Jn/IMG-20250414-WA0035.jpg", preview: "https://i.ibb.co/ymm7F8Jn/IMG-20250414-WA0035.jpg", title: "evening" },
  { src: "https://i.ibb.co/ZkzBsvm/IMG-20250414-WA0048.jpg", preview: "https://i.ibb.co/ZkzBsvm/IMG-20250414-WA0048.jpg", title: "evening" },
  { src: "https://i.ibb.co/3m4fzHr5/IMG-20250414-WA0051.jpg", preview: "https://i.ibb.co/3m4fzHr5/IMG-20250414-WA0051.jpg", title: "evening" },
  { src: "https://i.ibb.co/mV4rYB5z/IMG-20250414-WA0052.jpg", preview: "https://i.ibb.co/mV4rYB5z/IMG-20250414-WA0052.jpg", title: "evening" },
  { src: "https://i.ibb.co/rGDN5DXN/IMG-20250414-WA0053.jpg", preview: "https://i.ibb.co/rGDN5DXN/IMG-20250414-WA0053.jpg", title: "evening" },
  { src: "https://i.ibb.co/9kF05swn/IMG-20250414-WA0055.jpg", preview: "https://i.ibb.co/9kF05swn/IMG-20250414-WA0055.jpg", title: "evening" },
  // { src: "https://i.ibb.co/tg5Lg0k/IMG-20250414-WA0056.jpg", preview: "https://i.ibb.co/tg5Lg0k/IMG-20250414-WA0056.jpg", title: "evening" },
  { src: "https://i.ibb.co/V0cn74tV/IMG-20250414-WA0057.jpg", preview: "https://i.ibb.co/V0cn74tV/IMG-20250414-WA0057.jpg", title: "evening" },
  { src: "https://i.ibb.co/gFwTmGdc/IMG-20250414-WA0059.jpg", preview: "https://i.ibb.co/gFwTmGdc/IMG-20250414-WA0059.jpg", title: "evening" },
  { src: "https://i.ibb.co/pvW0sW0x/IMG-20250414-WA0063.jpg", preview: "https://i.ibb.co/pvW0sW0x/IMG-20250414-WA0063.jpg", title: "evening" },
  { src: "https://i.ibb.co/fYytQvfd/IMG-20250414-WA0065.jpg", preview: "https://i.ibb.co/fYytQvfd/IMG-20250414-WA0065.jpg", title: "evening" },
  { src: "https://i.ibb.co/DDV7cvGb/IMG-20250414-WA0068.jpg", preview: "https://i.ibb.co/DDV7cvGb/IMG-20250414-WA0068.jpg", title: "evening" },
  { src: "https://i.ibb.co/TGfDcfB/IMG-20250414-WA0071.jpg", preview: "https://i.ibb.co/TGfDcfB/IMG-20250414-WA0071.jpg", title: "evening" },
  { src: "https://i.ibb.co/p8LMRn0/IMG-20250414-WA0075.jpg", preview: "https://i.ibb.co/p8LMRn0/IMG-20250414-WA0075.jpg", title: "evening" },
  { src: "https://i.ibb.co/Qvj5kk9c/IMG-20250414-WA0077.jpg", preview: "https://i.ibb.co/Qvj5kk9c/IMG-20250414-WA0077.jpg", title: "evening" },
  { src: "https://i.ibb.co/21W8W8nG/IMG-20250414-WA0084.jpg", preview: "https://i.ibb.co/21W8W8nG/IMG-20250414-WA0084.jpg", title: "evening" },
  { src: "https://i.ibb.co/DgHny90r/IMG-20250414-WA0088.jpg", preview: "https://i.ibb.co/DgHny90r/IMG-20250414-WA0088.jpg", title: "evening" },
  { src: "https://i.ibb.co/MkvNmmgp/IMG-20250414-WA0090.jpg", preview: "https://i.ibb.co/MkvNmmgp/IMG-20250414-WA0090.jpg", title: "evening" },
  { src: "https://i.ibb.co/hFgh3Zrx/1.jpg", preview: "https://i.ibb.co/hFgh3Zrx/1.jpg", title: "evening" },
  { src: "https://i.ibb.co/R4455vcV/2.jpg", preview: "https://i.ibb.co/R4455vcV/2.jpg", title: "evening" },
  { src: "https://i.ibb.co/SDtMthf9/4.jpg", preview: "https://i.ibb.co/SDtMthf9/4.jpg", title: "evening" },
  { src: "https://i.ibb.co/YM4n5Bd/6.jpg", preview: "https://i.ibb.co/YM4n5Bd/6.jpg", title: "evening" },
  { src: "https://i.ibb.co/p6wNTyyq/13.jpg", preview: "https://i.ibb.co/p6wNTyyq/13.jpg", title: "evening" },
  { src: "https://i.ibb.co/S9bpVyj/15.jpg", preview: "https://i.ibb.co/S9bpVyj/15.jpg", title: "evening" },
  { src: "https://i.ibb.co/qYbZB3J8/17.jpg", preview: "https://i.ibb.co/qYbZB3J8/17.jpg", title: "evening" },
  { src: "https://i.ibb.co/ZzHkD0KD/35.jpg", preview: "https://i.ibb.co/ZzHkD0KD/35.jpg", title: "evening" },
  { src: "https://i.ibb.co/3yxNLsc4/IMG-20250414-WA0085.jpg", preview: "https://i.ibb.co/3yxNLsc4/IMG-20250414-WA0085.jpg", title: "evening" },
  { src: "https://i.ibb.co/8L7Krtzj/10.jpg", preview: "https://i.ibb.co/8L7Krtzj/10.jpg", title: "evening" },
  { src: "https://i.ibb.co/NPKWMcf/12.jpg", preview: "https://i.ibb.co/NPKWMcf/12.jpg", title: "evening" },
  // { src: "https://i.ibb.co/QFL61d8n/building-1.jpg", preview: "https://i.ibb.co/QFL61d8n/building-1.jpg", title: "evening" },
  // { src: "", preview: "", title: "evening" },
  // { src: "", preview: "", title: "evening" },
  // { src: "", preview: "", title: "evening" },
];

const MajorEvents = () => {
  return (
    <><div className="m-4 text-center">
      <h className="font-semibold text-3xl mt-4 align-text-top ">Here are some glimpses of Grand Opening of the Institute</h>

      <div className="flex justify-center mt-4 gap-6 flex-wrap">
        {images.map((image, index) => (
          <div className="flex flex-wrap justify-around shadow-lg shadow-gray-300 w-[45%] md:w-[30%] h-full rounded-lg">
            {/* w-[min(400px,45%)] */}
            <a
              key={index}
              href={image.src}
              data-lightbox="show-2"
              data-title={image.title}
              target="_blank"
            >
              <img
                src={image.preview}
                alt="alternative explanation"
                className="rounded-lg block shadow-md hover:scale-105 transition-transform duration-300" />
            </a>
          </div>
        ))}
      </div>
    </div></>
  );
};

export default MajorEvents;
