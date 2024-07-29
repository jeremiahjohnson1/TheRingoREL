import React from "react";
import { useNavigate } from "react-router-dom";
import { skills } from "../data";

const Skills = () => {
  const navigate = useNavigate();

  const handleSkillClick = (id) => {
    navigate(`/skill/${id}`);
  };

  return (
    <section id="skills" className="section bg-amber-100 pb-32">
      <div className="container lg:text-right mx-auto text-center">
        <h2 className="text-5xl font-primary lg:px-6 font-extrabold text-zinc-700 pl-6 ">
          Who Are We?
        </h2>
        <p className="text-zinc-700 ml-auto max-w-[540px] px-6 lg:px-5 mb-[60px]">
          At Ringo Real Estate Lawyers, we specialize in providing expert legal services tailored to the unique needs of the real estate industry. Our team of seasoned attorneys combines extensive knowledge with a client-focused approach to deliver comprehensive solutions for property transactions, development projects, leasing agreements, and more.
          <br/><br/>
          With a commitment to excellence and integrity, we guide our clients through the complexities of real estate law, ensuring smooth and successful outcomes. Whether you're a buyer, seller, developer, or investor, we are dedicated to protecting your interests and achieving your goals. Trust Ringo Real Estate Lawyers to be your reliable partner in all your real estate legal matters.
        </p>
      </div>
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold text-zinc-700">
          What Do We Do?
        </h2>
        <p className="text-zinc-700 max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]">
          At Ringo Real Estate Lawyers, we offer a comprehensive range of legal services tailored to meet the diverse needs of our clients. Our team of specialized attorneys provides expert legal counsel in the following areas:
          <br/><br/>
          <strong>Real Estate Law:</strong> Our real estate attorney excels in assisting with property transactions, development projects, leasing agreements, and title services. We ensure every transaction is seamless and secure, providing legal support from initial planning and zoning to construction and final sale.
          <br/><br/>
          <strong>Business Law:</strong> Our business lawyer is skilled in corporate law, contract negotiations, mergers and acquisitions, and regulatory compliance. We offer strategic legal solutions to help businesses navigate legal complexities, protect their interests, and achieve their goals.
          <br/><br/>
          <strong>Family Law:</strong> Our family lawyer provides compassionate and personalized legal services in matters such as divorce, custody, estate planning, and family dispute resolution. We strive to achieve the best outcomes for our clients, ensuring their rights and interests are protected during challenging times.
          <br/><br/>
          Our goal is to provide personalized, detail-oriented legal support across various legal disciplines to help you navigate the complexities of your specific situation with confidence. Whether you are a homeowner, business owner, or dealing with family legal matters, Ringo Real Estate Lawyers is here to safeguard your interests and help you succeed.
        </p>
        <div className="lg:grid lg:grid-cols-3">
          {skills.map((item) => {
            const { id, icon, title, description } = item;
            return (
              <div
                key={id}
                className="flex flex-col items-center justify-center mb-16 last:mb-0 lg:mb-0 cursor-pointer"
                onClick={() => handleSkillClick(id)}
              >
                <img className="mb-6" src={icon} alt="" />
                <h4 className="mb-2 text-4xl font-primary font-bold text-zinc-700">
                  {title}
                </h4>
                <p className="max-w-[332px] lg:max-w-[340px] font-normal">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
