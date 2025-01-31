import Link from 'next/link';

export default function HomePage() {
  const categories = [
    {
      title: 'Searching Algorithms',
      algorithms: [
        { name: 'Linear Search', path: '/algorithms/linear-search' },
        { name: 'Binary Search', path: '/algorithms/binary-search' },
        { name: 'Depth-First Search (DFS)', path: '/dfs' },
      ],
    },
    {
      title: 'Sorting Algorithms',
      algorithms: [
        { name: 'Bubble Sort', path: '/algorithms/bubble-sort' },
        { name: 'Merge Sort', path: '/merge-sort' },
        { name: 'Quick Sort', path: '/quick-sort' },
      ],
    },
    {
      title: 'Linked List Algorithms',
      algorithms: [
        { name: 'Insert in Linked List', path: '/algorithms/insert-linked-list' },
        { name: 'Delete in Linked List', path: '/algorithms/delete-linked-list' },
        { name: 'Reverse a Linked List', path: '/reverse-linked-list' },
      ],
    },
    {
      title: 'Array Algorithms',
      algorithms: [
        { name: 'Find Maximum in Array', path: '/find-max-array' },
        { name: 'Search in Array', path: '/search-array' },
        { name: 'Reverse Array', path: '/reverse-array' },
      ],
    },
    {
      title: 'Stack and Queue Algorithms',
      algorithms: [
        { name: 'Push in Stack', path: '/push-stack' },
        { name: 'Pop from Stack', path: '/pop-stack' },
        { name: 'Queue Enqueue/Dequeue', path: '/enqueue-queue' },
      ],
    },
    {
      title: 'Tree Algorithms',
      algorithms: [
        { name: 'Binary Tree Traversal', path: '/binary-tree-traversal' },
        { name: 'Binary Search Tree Insertion', path: '/bst-insertion' },
        { name: 'AVL Tree Rotation', path: '/avl-tree-rotation' },
      ],
    },
    {
      title: 'Graph Algorithms',
      algorithms: [
        { name: 'BFS Traversal', path: '/bfs' },
        { name: 'DFS Traversal', path: '/dfs' },
        { name: "Dijkstra's Algorithm", path: '/dijkstra' },
      ],
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Visualization of Algorithms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-category dark:bg-dark-category p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-secondary dark:text-dark-text">{category.title}</h2>
            <div className="space-y-2">
              {category.algorithms.map((algorithm, idx) => (
                <Link
                  key={idx}
                  href={algorithm.path}
                  className="block p-2 bg-button dark:bg-dark-button rounded hover:bg-opacity-80 dark:hover:bg-dark-buttonHover text-secondary dark:text-dark-text"
                >
                  {algorithm.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}