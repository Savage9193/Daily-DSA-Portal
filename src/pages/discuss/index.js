import Image from "next/image";

export default function Blog() {
  return (
    <>
        <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Join the Discussion</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Engage with the community, share your insights, and learn from others. Explore different topics and threads to participate in discussions.
          </p>

          <div className="mt-8 space-y-6">
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Understanding Algorithms</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Dive deep into the world of algorithms. Share your knowledge, ask questions, and engage with others interested in algorithms.
              </p>
              <a href="https://www.quora.com/What-is-the-best-way-to-understand-algorithms" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">Join the discussion</a>
            </div>

            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Coding Challenges and Solutions</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Share and solve coding challenges. Collaborate with the community to find solutions and improve your coding skills.
              </p>
              <a href="https://www.quora.com/How-do-I-solve-a-coding-problem" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">Join the discussion</a>
            </div>

           
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Programming Languages</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Discuss various programming languages, their features, and best practices. Learn from others' experiences and share your own.
              </p>
              <a href="https://www.quora.com/What-is-the-best-programming-language-10" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">Join the discussion</a>
            </div>

            {/* Add more discussion topics as needed */}
          </div>
        </section>
      </main>
    </>
  );
}
