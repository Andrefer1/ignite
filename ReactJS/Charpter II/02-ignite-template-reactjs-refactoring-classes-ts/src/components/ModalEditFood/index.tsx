import {
  FiCheckSquare,
  FiAlignJustify,
  FiTag,
  FiCamera,
  FiEdit2,
} from "react-icons/fi";

import Modal from "../Modal";
import Input from "../Input";

import { Form } from "./styles";

interface FoodProps {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: FoodProps;
  handleUpdateFood: (food: FoodProps) => void;
}

export function ModalEditFood({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood,
}: ModalEditFoodProps) {
  async function handleSubmit(food: FoodProps) {
    handleUpdateFood(food);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" icon={FiCamera} placeholder="Cole o link aqui" />

        <Input name="name" icon={FiEdit2} placeholder="Ex: Moda Italiana" />

        <Input name="price" icon={FiTag} placeholder="Ex: 19.90" />

        <Input
          name="description"
          icon={FiAlignJustify}
          placeholder="Descrição"
        />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
