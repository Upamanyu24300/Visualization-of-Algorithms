import MainLayout from '../../components/MainLayout';
import AlgorithmSection from '../../components/AlgorithmSection';
import InsertLinkedList from '../../components/InsertLinkedList';

export default function InsertLinkedListPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <AlgorithmSection title="Insert in Linked List">
          <InsertLinkedList />
        </AlgorithmSection>
      </div>
    </MainLayout>
  );
}