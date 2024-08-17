import Image from "next/image";

export default function Blog() {
  return (
    <div id="blog">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-black">
            Latest Articles
          </h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-black">
          Code Chronicles: Your Daily Dose of Programming Insights<br></br>
          Top Programming Blogs to Read in 2024
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg :grid-cols-3">
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="https://www.codecademy.com/resources/blog/wp-content/uploads/2023/02/What-Is-CoffeeScript-.png?resize=1536,645"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
               What Is CoffeeScript?
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              What is CoffeeScript, and is it worth learning? In this article, 
              we explain how it changed the way we write both front-end and back-end JavaScript code...
              </p>
              <a className="inline-block" href="https://www.codecademy.com/resources/blog/what-is-coffeescript/" target="_blank">
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="https://www.codecademy.com/resources/blog/wp-content/uploads/2024/08/080524_learner_stories_Ben.webp?resize=1536,646"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              How I Went from Hospitality Jobs to Software Engineer in 1 Year.
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              Today's story is from Ben Cunningham, a 24-year-old Software Engineer
               at Commonwealth Bank of Australia, living in West Perth, Australia....
              </p>
              <a className="inline-block" href="https://www.codecademy.com/resources/blog/from-hospitality-to-software-engineer/" target="_blank">
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/6-Small-Wins-To-Celebrate-On-Your-Journey-To-Becoming-A-Professional-Developer-1.png"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              7 Small Wins To Celebrate On Your Journey To Becoming A Professional Developer.
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              Having an end goal is important, but so is celebrating your progress. 
              Here are some milestones to look forward to as you learn how to code.....
              </p>
              <a className="inline-block" href="https://www.codecademy.com/resources/blog/small-wins-to-celebrate/" target="_blank">
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="https://www.codecademy.com/resources/blog/wp-content/uploads/2020/07/TK-Motivational-Tips-from-Codecademy-Learners-to-Try-_.webp?resize=1536,645"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              How 7 Codecademy Learners Stay Motivated & Reach New Goals.
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              Take advice from fellow Codecademy learners who've been in your shoes....
              </p>
              <a className="inline-block" href="https://www.codecademy.com/resources/blog/how-to-stay-motivated-learning-to-code/" target="_blank">
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
