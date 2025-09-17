import React from "react";
// import aboutMoreImg from "../../assets/images/aboutmore.jpg"; // Replace with your actual image path

const Aboutmore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-6 py-12 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-sky-900 mb-3 tracking-tight text-center">
          FCAI University Slogan
        </h1>

        {/* Created Date */}
        <p className="text-gray-500 text-sm mb-8 text-center">Created: 21 January 2016</p>

        {/* Image */}
        <div className="flex justify-center mb-10">
          {/* <img
            src={aboutMoreImg}
            alt="FCAI Symbol"
            className="w-[320px] md:w-[420px] h-auto border border-gray-300 shadow-2xl rounded-lg"
          /> */}
          <img src="https://via.placeholder.com/400x300?text=No+Image" alt="About More" />
        </div>

        {/* Paragraph Content */}
        <div className="text-lg text-gray-800 leading-relaxed space-y-6">
          <p>
            <strong className="text-sky-800">FCAI (Faculty of Computers and Artificial Intelligence)</strong> is committed to cultivating future tech leaders by equipping students with advanced knowledge in computer science, artificial intelligence, and information technology. Our faculty empowers learners to become creators and problem-solvers in a technology-driven world.
          </p>

          <p>
            Through a <span className="font-semibold">modern, hands-on curriculum</span> and mentorship from experienced professors, students develop not only technical skills, but also a deep sense of critical thinking and innovation. FCAI takes pride in promoting a culture where research and creativity are essential pillars of the learning process.
          </p>

          <p>
            Our programs are backed by <span className="text-purple-700 font-semibold">strategic industry partnerships</span> and real-world collaboration opportunities, ensuring that our graduates gain the practical experience required to stand out in today’s competitive market.
          </p>

          <p>
            At FCAI, we believe in the power of education to create positive change. Our students are encouraged to be proactive contributors to both local and global communities, prepared to address the challenges of tomorrow through ethical and impactful technological solutions.
          </p>

          <p className="italic text-gray-600">
            “Technology with purpose, intelligence with heart — this is the spirit of FCAI.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutmore;
