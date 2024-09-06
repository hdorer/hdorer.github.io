const articles = import.meta.glob('../assets/articles/*.md', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>;

export default articles;