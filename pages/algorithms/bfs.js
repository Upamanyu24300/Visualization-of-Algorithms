import MainLayout from '../../components/MainLayout';
import AlgorithmSection from '../../components/AlgorithmSection';
import BFS from '../../components/BFS';

const bfsCode = `
// BFS Traversal in JavaScript
function bfs(graph, startNode) {
  const visited = new Set();
  const queue = [startNode];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (!visited.has(currentNode)) {
      visited.add(currentNode);
      console.log(\`Visited: \${currentNode}\`);

      for (const neighbor of graph[currentNode]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
}

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};

bfs(graph, 'A');
`;

export default function BFSPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <AlgorithmSection title="BFS Traversal" code={bfsCode}>
          <BFS />
        </AlgorithmSection>
      </div>
    </MainLayout>
  );
}