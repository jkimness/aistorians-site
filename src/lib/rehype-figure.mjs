// Wrap images that sit alone in a paragraph in <figure>, so the essay page can
// give them editorial treatment (full column width, caption from the title attr).
import { visit } from 'unist-util-visit';

export default function rehypeFigure() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (!parent || index == null || node.tagName !== 'p') return;
      const kids = node.children.filter((c) => !(c.type === 'text' && !c.value.trim()));
      if (kids.length !== 1 || kids[0].type !== 'element' || kids[0].tagName !== 'img') return;
      const img = kids[0];
      const caption = img.properties?.title;
      const fig = { type: 'element', tagName: 'figure', properties: { className: ['figure'] }, children: [img] };
      if (caption) {
        delete img.properties.title;
        fig.children.push({ type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: String(caption) }] });
      }
      parent.children[index] = fig;
    });
  };
}
