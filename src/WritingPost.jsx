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
  const formattedDate = writing.date ? new Date(writing.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : null;

  useEffect(() => {
    const loadContent = async () => {
      const articleContent = await loadArticleContent(slug);
      console.log('Setting content in WritingPost:', articleContent);
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
        <h1 className="text-3xl font-sans mt-4 mb-2">{writing.title}</h1>
        {formattedDate && (
          <div className="mb-6">
            <span className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</span>
          </div>
        )}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown
            components={{
              p: ({node, children, ...props}) => <p className="mb-6 text-gray-800 dark:text-gray-200" {...props}>{children}</p>,
              h1: ({node, children, ...props}) => <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100" {...props}>{children}</h1>,
              h2: ({node, children, ...props}) => <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100" {...props}>{children}</h2>,
              h3: ({node, children, ...props}) => <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100" {...props}>{children}</h3>,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default WritingPost; 