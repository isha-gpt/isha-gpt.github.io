export async function loadArticleContent(slug) {
  try {
    const response = await fetch(`/content/${slug}.md`);
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
  return content.split('\n')[0] || 'Coming soon!';
} 