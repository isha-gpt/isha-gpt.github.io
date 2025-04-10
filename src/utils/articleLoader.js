export async function loadArticleContent(slug) {
  try {
    console.log('Fetching content for slug:', slug);
    const response = await fetch(`/writing/${slug}.md`, {
      headers: {
        'Accept': 'text/markdown, text/plain, */*'
      }
    });
    console.log('Response status:', response.status);
    console.log('Content-Type:', response.headers.get('content-type'));
    if (!response.ok) {
      throw new Error('Article not found');
    }
    const content = await response.text();
    console.log('Loaded content:', content);
    return content;
  } catch (error) {
    console.error(`Failed to load article content for ${slug}:`, error);
    return 'Content coming soon!';
  }
}

export function getFirstLine(content) {
  const words = content.split(/\s+/);
  if (words.length <= 20) {
    return content;
  }
  return words.slice(0, 20).join(' ') + '...';
} 