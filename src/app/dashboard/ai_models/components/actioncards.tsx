const cards = [
    { title: 'Briefly summarize this concept: urban planning' },
    { title: 'Settle a debate: how should you store bread?' },
    { title: 'Help me get organized with a list of 10 tips' },
    { title: 'Help explain a concept in a kid-friendly way' },
  ];
  
  const ActionCards: React.FC = () => {
    return (
      <div className="grid grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 cursor-pointer"
          >
            <p className="text-xl font-semibold">{card.title}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ActionCards;
  