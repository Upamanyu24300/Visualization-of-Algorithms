import { useState } from 'react';

export default function BubbleSort() {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [inputArray, setInputArray] = useState('');
  const [isSorting, setIsSorting] = useState(false);
  const [highlightIndices, setHighlightIndices] = useState({ i: -1, j: -1 });
  const [iterationInfo, setIterationInfo] = useState('');

  const handleArrayInput = (e) => {
    setInputArray(e.target.value);
  };

  const updateArray = () => {
    const newArray = inputArray
      .split(',')
      .map((item) => parseInt(item.trim(), 10))
      .filter((item) => !isNaN(item));
    setArray(newArray);
    setInputArray('');
  };

  const handleSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setHighlightIndices({ i, j });
        setIterationInfo(`i = ${i}, j = ${j}`);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for animation

        if (arr[j] > arr[j + 1]) {
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay after swap
        }
      }
    }

    setIsSorting(false);
    setIterationInfo('Sorting complete!');
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="arrayInput" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Enter array (comma-separated):
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            id="arrayInput"
            value={inputArray}
            onChange={handleArrayInput}
            className="p-2 border rounded flex-1"
            placeholder="e.g., 64, 34, 25, 12, 22, 11, 90"
            disabled={isSorting}
          />
          <button
            onClick={updateArray}
            className="bg-green-500 text-white p-2 rounded disabled:bg-gray-400"
            disabled={isSorting}
          >
            Update Array
          </button>
        </div>
      </div>
      <div className="flex gap-4 mb-4">
        <button
          onClick={handleSort}
          className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
          disabled={isSorting}
        >
          {isSorting ? 'Sorting...' : 'Start Sorting'}
        </button>
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {array.map((num, index) => (
          <div
            key={index}
            className={`p-4 border rounded transition-colors duration-500 ${
              highlightIndices.j === index || highlightIndices.j + 1 === index
                ? 'bg-yellow-300' // Highlight elements being compared
                : 'bg-gray-200' // Default
            }`}
          >
            {num}
          </div>
        ))}
      </div>
      {iterationInfo && <p className="mt-4 text-gray-900 dark:text-white">{iterationInfo}</p>}
    </div>
  );
}