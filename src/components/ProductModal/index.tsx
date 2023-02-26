import { Modal } from "react-native";
import { Product } from "../../types/Product";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import { CloseButton, ProductImage } from "./styles";

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: Product | null;
}

export function ProductModal({ visible, onClose, product }: ProductModalProps) {
  if (!product) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <ProductImage
        source={{
          uri: `http://192.168.15.66:3333/uploads/${product.imagePath}`,
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </ProductImage>
      <Text>Product modal</Text>
    </Modal>
  );
}
