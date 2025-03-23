import { useState } from 'react';
import { Button } from './components/button';
import { Modal } from './components/modal';
import { LoanCalculator } from './components/loanCalculator';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button title="Расчет платежей" onClick={handleOpenModal} />
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <LoanCalculator />
        </Modal>
      )}
    </>
  );
}

export default App;
