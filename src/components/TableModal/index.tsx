import { Modal, TouchableOpacity } from "react-native";
import { isAndroid } from "../../utils/checkPlatform";
import { Button } from "../Button";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import { Input, ModalContent, ModalForm, ModalHeader, Overlay } from "./styles";

export function TableModal() {
  return (
    <Modal transparent>
      <Overlay behavior={isAndroid ? "height" : "padding"}>
        <ModalContent>
          <ModalHeader>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity>
              <Close color="#666" />
            </TouchableOpacity>
          </ModalHeader>

          <ModalForm>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor={"#666"}
              keyboardType="number-pad"
            />

            <Button onPress={() => alert("Salvou!")}>Salvar</Button>
          </ModalForm>
        </ModalContent>
      </Overlay>
    </Modal>
  );
}
