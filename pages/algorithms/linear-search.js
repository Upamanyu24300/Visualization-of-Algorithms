import MainLayout from '../../components/MainLayout';
import AlgorithmSection from '../../components/AlgorithmSection';
import LinearSearch from '../../components/LinearSearch';

const linearSearchCode = `
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
`;

export default function LinearSearchPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <AlgorithmSection title="Linear Search" code={linearSearchCode}>
          <LinearSearch />
        </AlgorithmSection>
      </div>
    </MainLayout>
  );
}