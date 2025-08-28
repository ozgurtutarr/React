import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    { id: 1, label: 'Item 1', content: 'Content for Item 1' },
    { id: 2, label: 'Item 2', content: 'Content for Item 2' },
    { id: 3, label: 'Item 3', content: 'Content for Item 3' },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}
export default AccordionPage;
