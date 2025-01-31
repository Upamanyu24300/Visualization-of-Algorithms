import { useState } from 'react';

export default function DeleteLinkedList() {
  const [linkedList, setLinkedList] = useState([
    { value: 10, id: 1, address: 100 },
    { value: 20, id: 2, address: 200 },
    { value: 30, id: 3, address: 300 },
    { value: 40, id: 4, address: 400 },
    { value: 50, id: 5, address: 500 },
  ]);
  const [position, setPosition] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [highlightNode, setHighlightNode] = useState(null);

  const deleteAtBeginning = async () => {
    if (linkedList.length === 0) return;
    setIsDeleting(true);
    setHighlightNode(linkedList[0].id);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for animation
    setLinkedList(linkedList.slice(1));
    setHighlightNode(null);
    setIsDeleting(false);
  };

  const deleteAtEnd = async () => {
    if (linkedList.length === 0) return;
    setIsDeleting(true);
    setHighlightNode(linkedList[linkedList.length - 1].id);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for animation
    setLinkedList(linkedList.slice(0, -1));
    setHighlightNode(null);
    setIsDeleting(false);
  };

  const deleteAtPosition = async () => {
    if (!position || isNaN(position)) return;
    setIsDeleting(true);
    const pos = parseInt(position, 10);
    if (pos < 0 || pos >= linkedList.length) {
      alert('Invalid position!');
      setIsDeleting(false);
      return;
    }
    setHighlightNode(linkedList[pos].id);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for animation
    const newList = [...linkedList];
    newList.splice(pos, 1);
    setLinkedList(newList);
    setPosition('');
    setHighlightNode(null);
    setIsDeleting(false);
  };

  return (
    <div>
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
          disabled={isDeleting}
        />
      </div>
      <div className="flex gap-4 mb-4">
        <button
          onClick={deleteAtBeginning}
          className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
          disabled={isDeleting}
        >
          Delete at Beginning
        </button>
        <button
          onClick={deleteAtEnd}
          className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
          disabled={isDeleting}
        >
          Delete at End
        </button>
        <button
          onClick={deleteAtPosition}
          className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
          disabled={isDeleting}
        >
          Delete at Position
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
                highlightNode === node.id ? 'bg-red-300' : 'bg-gray-200 dark:bg-gray-700'
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