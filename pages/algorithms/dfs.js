import MainLayout from '../../components/MainLayout';
import AlgorithmSection from '../../components/AlgorithmSection';
import DFS from '../../components/DFS';

const dfsCode = `
// DFS Traversal in JavaScript
function dfs(graph, startNode) {
  const visited = new Set();
  const stack = [startNode];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (!visited.has(currentNode)) {
      visited.add(currentNode);
      console.log(\`Visited: \${currentNode}\`);

      for (const neighbor of graph[currentNode].reverse()) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
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

dfs(graph, 'A');
`;

export default function DFSPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <AlgorithmSection title="DFS Traversal" code={dfsCode}>
          <DFS />
        </AlgorithmSection>
      </div>
    </MainLayout>
  );
}