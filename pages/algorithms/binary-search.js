import MainLayout from '../../components/MainLayout';
import AlgorithmSection from '../../components/AlgorithmSection';
import BinarySearch from '../../components/BinarySearch';

const binarySearchCode = `
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
`;

export default function BinarySearchPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <AlgorithmSection title="Binary Search" code={binarySearchCode}>
          <BinarySearch />
        </AlgorithmSection>
      </div>
    </MainLayout>
  );
}