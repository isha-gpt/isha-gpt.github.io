import { useState, useEffect } from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { writings } from './data/writings';
import { loadArticleContent, getFirstLine } from './utils/articleLoader';

function Writing() {
  const [articlePreviews, setArticlePreviews] = useState([]);

  useEffect(() => {
    const loadPreviews = async () => {
      const previews = await Promise.all(
        writings.map(async (writing) => {
          const content = await loadArticleContent(writing.slug);
          return {
            ...writing,
            firstLine: getFirstLine(content)
          };
        })
      );
      setArticlePreviews(previews);
    };

    loadPreviews();
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 px-4 md:px-20 gap-12">
      <hr className="border-t-2 border-gray-300 dark:border-gray-600" />
      <h2 className="text-3xl font-sans mt-10 mb-12">writing</h2>
      <div className="space-y-12">
        {articlePreviews.map((post, index) => (
          <WritingEntry
            key={index}
            {...post}
          />
        ))}
      </div>
    </div>
  );
}

function WritingEntry({ title, firstLine, slug }) {
  return (
    <a
      href={`/writing/${slug}`}
      className="block group"
    >
      <h3 className="text-2xl font-light mb-2 group-hover:text-blue-500 transition-colors flex items-center">
        <FaRegCircle className="mr-3 text-gray-400 group-hover:text-blue-500 transition-colors text-[0.4em]" />
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-base ml-4">{firstLine}</p>
    </a>
  );
}

export default Writing; 