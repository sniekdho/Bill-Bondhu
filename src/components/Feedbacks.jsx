import React from "react";
import man from "../assets/avatars/man.png";
import girl from "../assets/avatars/girl.png";
import business_man from "../assets/avatars/bussiness-man.png";

const Feedbacks = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-accent mb-6">
          What Our Users Say
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Our users love how easy and quick it is to pay their bills using our
          platform. Here are a few testimonials from satisfied customers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow  p-6 text-left">
            <p>
              “Using this app, I paid my DESCO bill in seconds. Highly
              recommended!”
            </p>
            <div className="flex items-center mt-4">
              <img
                src={man}
                alt="User"
                className="h-10 w-10 rounded-full mr-3"
              />
              <div>
                <h4 className="font-semibold">Tanvir Ahmed</h4>
                <small>Dhaka</small>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow  p-6 text-left">
            <p>
              “A very user-friendly and fast website. Loved the experience.”
            </p>
            <div className="flex items-center mt-4">
              <img
                src={girl}
                alt="User"
                className="h-10 w-10 rounded-full mr-3"
              />
              <div>
                <h4 className="font-semibold">Mim Sultana</h4>
                <small>Chittagong</small>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow  p-6 text-left">
            <p>
              “No more long queues! I paid my gas bill while sitting at home.”
            </p>
            <div className="flex items-center mt-4">
              <img
                src={business_man}
                alt="User"
                className="h-10 w-10 rounded-full mr-3"
              />
              <div>
                <h4 className="font-semibold">Rafiul Islam</h4>
                <small>Rajshahi</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
