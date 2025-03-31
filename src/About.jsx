function About() {
    return (
      <div className="flex flex-col md:flex-row items-center w-full bg-gray-100 dark:bg-gray-800 pt-7 pb-1 px-4 md:px-20 gap-6 md:gap-12">
        <div className="relative w-48 md:w-64">
          <img
            src="/profile.png"
            alt="isha-gupta"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="mb-4 text-3xl md:text-4xl font-weight-300 tracking-wide dark:text-white font-normal">
            hi! I'm Isha
          </h1>
          <p className="text-base md:text-lg mt-4 font-light text-black dark:text-gray-300 leading-relaxed break-words">
            I am a graduate student in Computer Science at ETH Zürich. Currently,
            I am based in Stanford as a visiting researcher at the STAIR Lab with
            Sanmi Koyejo. My research interests broadly include AI safety,
            robustness and multimodality. <br />
            <br />
            My Master's degree specializes in secure and reliable systems and
            machine intelligence. I have also had the opportunity to work in
            various software engineering roles during my Bachelor's degree in
            Zürich and take a special interest in entrepreneurship. <br /> <br />
            In my free time, I enjoy running,{" "}
            <a
              href="https://www.instagram.com/liebe.gruesse.isha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              analog photography and making clothes
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
  
export default About;