const articles = import.meta.glob('../assets/articles/*.md', { as: 'raw' });

export default articles;