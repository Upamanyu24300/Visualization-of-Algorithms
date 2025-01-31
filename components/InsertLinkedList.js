import { useState } from 'react';

export default function InsertLinkedList() {
  const [linkedList, setLinkedList] = useState([]);
  const [value, setValue] = useState('');
  const [position, setPosition] = useState('');
  const [isInserting, setIsInserting] = useState(false);
  const [highlightNode, setHighlightNode] = useState(null);

  // Generate a random address for each node
  const generateAddress = () => Math.floor(Math.random() * 900 + 100); // Random address between 100 and 999

  const insertAtBeginning = async () => {
    if (!value) return;
    setIsInserting(true);
    const newNode = { value, id: Date.now(), address: generateAddress() };
    setHighlightNode(newNode.id);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for animation
    setLinkedList([newNode, ...linkedList]);
    setValue('');
    setHighlightNode(null);
    setIsInserting(false);
  };

  const insertAtEnd = async () => {
    if (!value) return;
    setIsInserting(true);
    const newNode = { value, id: Date.now(), address: generateAddress() };
    setHighlightNode(newNode.id);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for animation
    setLinkedList([...linkedList, newNode]);
    setValue('');
    setHighlightNode(null);
    setIsInserting(false);
  };

  const insertAtPosition = async () => {
    if (!value || !position || isNaN(position)) return;
    setIsInserting(true);
    const pos = parseInt(position, 10);
    if (pos < 0 || pos > linkedList.length) {
      alert('Invalid position!');
      setIsInserting(false);
      return;
    }
    const newNode = { value, id: Date.now(), address: generateAddress() };
    setHighlightNode(newNode.id);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for animation
    const newList = [...linkedList];
    newList.splice(pos, 0, newNode);
    setLinkedList(newList);
    setValue('');
    setPosition('');
    setHighlightNode(null);
    setIsInserting(false);
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="valueInput" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Enter value:
        </label>
        <input
          type="text"
          id="valueInput"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="p-2 border rounded"
          disabled={isInserting}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="positionInput" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Enter position (optional):
        </label>
        <input
          type="text"
          id="positionInput"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="p-2 border rounded"
          disabled={isInserting}
        />
      </div>
      <div className="flex gap-4 mb-4">
        <button
          onClick={insertAtBeginning}
          className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
          disabled={isInserting}
        >
          Insert at Beginning
        </button>
        <button
          onClick={insertAtEnd}
          className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
          disabled={isInserting}
        >
          Insert at End
        </button>
        <button
          onClick={insertAtPosition}
          className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
          disabled={isInserting}
        >
          Insert at Position
        </button>
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {/* Head Address */}
        <div className="flex flex-col items-center">
          <div className="p-2 border rounded bg-gray-200 dark:bg-gray-700">
            Head
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Address: {linkedList.length > 0 ? linkedList[0].address : 'NULL'}
          </div>
        </div>
        {/* Linked List Nodes */}
        {linkedList.map((node, index) => (
          <div key={node.id} className="flex items-center gap-2">
            <div
              className={`p-4 border rounded transition-colors duration-500 ${
                highlightNode === node.id ? 'bg-yellow-300' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <div className="font-bold">{node.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Address: {node.address}
              </div>
            </div>
            {index < linkedList.length - 1 && (
              <span className="text-gray-900 dark:text-white">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}