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

interface FoodsProps {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: FoodsProps) => void;
}

export function ModalAddFood({
  isOpen,
  setIsOpen,
  handleAddFood,
}: ModalAddFoodProps) {
  async function handleSubmit(food: FoodsProps) {
    handleAddFood(food);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>

        <Input name="image" icon={FiCamera} placeholder="Cole o link aqui" />

        <Input name="name" icon={FiEdit2} placeholder="Ex: Moda Italiana" />

        <Input name="price" icon={FiTag} placeholder="Ex: 19.90" />

        <Input
          name="description"
          icon={FiAlignJustify}
          placeholder="Descrição"
        />

        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
