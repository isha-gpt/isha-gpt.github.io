export async function loadArticleContent(slug) {
  try {
    const response = await fetch(`/isha-gpt.github.io/writing/${slug}.md`);
    if (!response.ok) {
      throw new Error('Article not found');
    }
    const content = await response.text();
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