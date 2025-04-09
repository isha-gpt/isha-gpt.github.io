import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { writings } from './data/writings';
import { loadArticleContent } from './utils/articleLoader';

function WritingPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('Loading...');
  const writing = writings.find(w => w.slug === slug) || { title: 'Post Not Found' };

  useEffect(() => {
    const loadContent = async () => {
      const articleContent = await loadArticleContent(slug);
      setContent(articleContent);
    };

    loadContent();
  }, [slug]);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 px-4 md:px-20 gap-12 pb-20">
      <hr className="border-t-2 border-gray-300 dark:border-gray-600" />
      <div className="mt-10">
        <Link 
          to="/writing"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors mb-6 inline-block"
        >
          <FaArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl font-sans mt-4 mb-8">{writing.title}</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <style jsx>{`
            p {
              margin-bottom: 1.5em;
            }
          `}</style>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default WritingPost; 