import React from "react";
const reviews = [
  {
    id: 1,
    des: "This product Changed my life",
    personName: "John Doe",
    position: "CEO, CC Company",
    profile: "/girlImg.png",
  },
  {
    id: 2,
    des: "I'm impressed with the quality of this product.",
    personName: "Jane Smith",
    position: "CEO, ACC Company",
    profile: "/avatar.png",
  },
  {
    id: 3,
    des: "I can't imagine my life without this product.",
    personName: "Sarah Lee",
    position: "CEO, ADC Company",
    profile: "/avatar2.png",
  },
  {
    id: 4,
    des: "I can't imagine my life without this product.",
    personName: "Mark Johnson",
    position: "CEO, AAA Company",
    profile: "/avatar3.png",
  },
  {
    id: 5,
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    personName: "Emily Johnson",
    position: "CEO, ABC Company",
    profile: "/2.png",
  },
  {
    id: 6,
    des: "I'm so glad I found this product.",
    personName: "John Doe",
    position: "CEO, ABC Company",
    profile: "/2.png",
  },
];
const Reviews = () => {
  return (
    <div className="max-w-[1400px] w-full mx-auto lg:px-[80px] px-[20px] lg:mb-[160px] mb-[80px]">
      <div className="flex flex-col mb-[40px]">
        <div className="text-center lg:text-5xl text-3xl font-['Helvetica'] font-bold leading-[56px]">
          Customer Reviews
        </div>
        <div className="text-center text-lg font-['Quicksand'] leading-[28px]">
          See what our customers are saying
        </div>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-none flex-wrap gap-[20px]">
        {reviews.map((item) => {
          return (
            <div
              key={item.id}
              className=" rounded-[14px] bg-[#f2f9f9] border border-[#99c1bd] p-[20px]"
            >
              <div className="flex flex-row justify-between w-full items-start">
                <img
                  src="https://file.rendit.io/n/C7QEJSttw3xjoRUGIbNR.svg"
                  alt="Group"
                />
                <img
                  src="https://file.rendit.io/n/EXw3ZqqySfRKUac0PQGp.svg"
                  alt="Vector"
                  className="w-10"
                />
              </div>
              <div className="text-sm font-['Quicksand'] leading-[24px] text-[#666666] h-[100px]">
                {item.des}
              </div>
              <div className="flex">
                <img
                  src={item.profile}
                  alt=""
                  className="w-[70px] h-[70px] mr-[10px]"
                />
                <div className="flex flex-col">
                  <div className="text-2xl font-['Helvetica'] font-bold leading-[34px]">
                    {item.personName}
                  </div>
                  <div className="opacity-50 text-lg font-['Quicksand'] leading-[28px] ">
                    {item.position}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
