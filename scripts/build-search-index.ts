import fs from 'fs';
import lunr from 'lunr';

const books = JSON.parse(
  fs.readFileSync('data/books.json', 'utf-8')
) as { id: string; title: string; author: string; }[];

const idx = lunr(function () {
  this.ref('id');
  this.field('title');
  this.field('author');

  books.forEach(b => this.add(b));
});

fs.writeFileSync('public/books-index.json', JSON.stringify(idx));
fs.writeFileSync('public/books-summary.json', JSON.stringify(books));
console.log('🔍  Lunr index built');