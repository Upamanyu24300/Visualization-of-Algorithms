import MainLayout from '../../components/MainLayout';
import AlgorithmSection from '../../components/AlgorithmSection';
import BubbleSort from '../../components/BubbleSort';

export default function BubbleSortPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <AlgorithmSection title="Bubble Sort">
          <BubbleSort />
        </AlgorithmSection>
      </div>
    </MainLayout>
  );
}