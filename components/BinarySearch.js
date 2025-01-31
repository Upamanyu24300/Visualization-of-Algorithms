import { useState } from 'react';

export default function BinarySearch() {
  const [array, setArray] = useState([10, 20, 30, 40, 50]);
  const [target, setTarget] = useState('');
  const [result, setResult] = useState('');
  const [highlightIndices, setHighlightIndices] = useState({ left: -1, right: -1, mid: -1 });
  const [isSearching, setIsSearching] = useState(false);
  const [inputArray, setInputArray] = useState('');

  const handleArrayInput = (e) => {
    setInputArray(e.target.value);
  };

  const updateArray = () => {
    const newArray = inputArray
      .split(',')
      .map((item) => parseInt(item.trim(), 10))
      .filter((item) => !isNaN(item))
      .sort((a, b) => a - b); // Sort the array for binary search
    setArray(newArray);
    setInputArray('');
  };

  const handleSearch = async () => {
    if (!target || isNaN(target)) {
      setResult('Please enter a valid integer!');
      return;
    }

    setIsSearching(true);
    const targetNum = parseInt(target, 10);
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      setHighlightIndices({ left, right, mid });
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for animation

      if (array[mid] === targetNum) {
        setResult(`Element found at index: ${mid}`);
        setIsSearching(false);
        return;
      } else if (array[mid] < targetNum) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    setResult('Element not found.');
    setIsSearching(false);
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
            placeholder="e.g., 10, 20, 30, 40, 50"
            disabled={isSearching}
          />
          <button
            onClick={updateArray}
            className="bg-green-500 text-white p-2 rounded disabled:bg-gray-400"
            disabled={isSearching}
          >
            Update Array
          </button>
        </div>
      </div>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Enter target"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="p-2 border rounded"
          disabled={isSearching}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
          disabled={isSearching}
        >
          {isSearching ? 'Searching...' : 'Search'}
        </button>
      </div>
      <div className="flex gap-2">
        {array.map((num, index) => (
          <div
            key={index}
            className={`p-4 border rounded transition-colors duration-500 ${
              highlightIndices.mid === index
                ? array[index] === parseInt(target, 10)
                  ? 'bg-green-500' // Found
                  : 'bg-yellow-300' // Midpoint
                : index >= highlightIndices.left && index <= highlightIndices.right
                ? 'bg-blue-200' // Search range
                : 'bg-gray-200' // Default
            }`}
          >
            {num}
          </div>
        ))}
      </div>
      {result && <p className="mt-4 text-gray-900 dark:text-white">{result}</p>}
    </div>
  );
}