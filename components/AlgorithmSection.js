export default function AlgorithmSection({ title, code, children }) {
  return (
    <section className="p-6 bg-category dark:bg-dark-category rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-secondary dark:text-dark-text">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Code Window */}
        <div className="bg-button dark:bg-dark-button p-4 rounded-lg overflow-auto">
          <h3 className="text-lg font-semibold mb-2 text-secondary dark:text-dark-text">Code</h3>
          <pre className="bg-code-bg p-4 rounded">
            <code className="text-sm text-code-text">{code}</code>
          </pre>
        </div>
        {/* Demo Window */}
        <div className="bg-button dark:bg-dark-button p-4 rounded-lg overflow-auto">
          <h3 className="text-lg font-semibold mb-2 text-secondary dark:text-dark-text">Demonstration</h3>
          {children}
        </div>
      </div>
    </section>
  );
}