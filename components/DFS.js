import { useState } from 'react';

export default function DFS() {
  const [graph, setGraph] = useState({
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E'],
  });
  const [startNode, setStartNode] = useState('A');
  const [visited, setVisited] = useState([]);
  const [stack, setStack] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [stepQueue, setStepQueue] = useState([]); // Queue for manual steps

  // Node positions for visualization
  const nodePositions = {
    A: { x: 100, y: 50 },
    B: { x: 50, y: 150 },
    C: { x: 150, y: 150 },
    D: { x: 25, y: 250 },
    E: { x: 75, y: 250 },
    F: { x: 125, y: 250 },
  };

  const initializeDFS = () => {
    const visitedNodes = [];
    const stack = [startNode];
    const visited = new Set();
    const steps = [];

    while (stack.length > 0) {
      const currentNode = stack.pop();
      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        visitedNodes.push(currentNode);

        steps.push({
          visited: [...visitedNodes],
          stack: [...stack],
          currentNode,
        });

        for (const neighbor of graph[currentNode].reverse()) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }

    setStepQueue(steps);
    setIsRunning(true);
  };

  const nextStep = () => {
    if (stepQueue.length > 0) {
      const step = stepQueue.shift();
      setVisited(step.visited);
      setStack(step.stack);
      setCurrentNode(step.currentNode);
      setStepQueue([...stepQueue]);
    } else {
      setIsRunning(false);
    }
  };

  const reset = () => {
    setVisited([]);
    setStack([]);
    setCurrentNode(null);
    setIsRunning(false);
    setStepQueue([]);
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="startNode" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Start Node:
        </label>
        <select
          id="startNode"
          value={startNode}
          onChange={(e) => setStartNode(e.target.value)}
          className="p-2 border rounded"
          disabled={isRunning}
        >
          {Object.keys(graph).map((node) => (
            <option key={node} value={node}>
              {node}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-4 mb-4">
        <button
          onClick={initializeDFS}
          className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
          disabled={isRunning}
        >
          Initialize DFS
        </button>
        <button
          onClick={nextStep}
          className="bg-green-500 text-white p-2 rounded disabled:bg-gray-400"
          disabled={!isRunning || stepQueue.length === 0}
        >
          Next Step
        </button>
        <button
          onClick={reset}
          className="bg-red-500 text-white p-2 rounded disabled:bg-gray-400"
        >
          Reset
        </button>
      </div>
      <div className="flex gap-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Visited Nodes</h3>
          <div className="flex gap-2">
            {visited.map((node, index) => (
              <div
                key={index}
                className="p-4 border rounded bg-green-300 dark:bg-green-700"
              >
                {node}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Stack</h3>
          <div className="flex gap-2">
            {stack.map((node, index) => (
              <div
                key={index}
                className="p-4 border rounded bg-yellow-300 dark:bg-yellow-700"
              >
                {node}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative" style={{ width: '300px', height: '300px' }}>
        {/* Draw lines between nodes */}
        {Object.entries(graph).map(([node, neighbors]) =>
          neighbors.map((neighbor) => (
            <svg
              key={`${node}-${neighbor}`}
              className="absolute"
              style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <line
                x1={nodePositions[node].x + 20} // Adjust for node center
                y1={nodePositions[node].y + 20} // Adjust for node center
                x2={nodePositions[neighbor].x + 20} // Adjust for node center
                y2={nodePositions[neighbor].y + 20} // Adjust for node center
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          ))
        )}
        {/* Draw nodes */}
        {Object.keys(graph).map((node) => (
          <div
            key={node}
            className="absolute"
            style={{
              top: `${nodePositions[node].y}px`,
              left: `${nodePositions[node].x}px`,
            }}
          >
            <div
              className={`p-4 border rounded ${
                visited.includes(node) ? 'bg-green-300 dark:bg-green-700' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              {node}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}