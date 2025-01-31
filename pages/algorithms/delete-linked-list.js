import MainLayout from '../../components/MainLayout';
import AlgorithmSection from '../../components/AlgorithmSection';
import DeleteLinkedList from '../../components/DeleteLinkedList';

const deleteLinkedListCode = `
// Delete in Linked List (JavaScript)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  deleteAtBeginning() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  deleteAtEnd() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  deleteAtPosition(pos) {
    if (pos < 0 || !this.head) return;
    if (pos === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    for (let i = 0; i < pos - 1; i++) {
      if (!current.next) return;
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }
}
`;

export default function DeleteLinkedListPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <AlgorithmSection title="Delete in Linked List" code={deleteLinkedListCode}>
          <DeleteLinkedList />
        </AlgorithmSection>
      </div>
    </MainLayout>
  );
}