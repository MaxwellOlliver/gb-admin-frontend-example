import Button from "@/@core/components/Button";
import Input from "@/@core/components/Input";
import animatePresence from "@/components/AnimatePresence";
import { FiAlertCircle, FiAlertTriangle, FiHome, FiPlus } from "react-icons/fi";
import { Container } from "./styles";

function MyComponents() {
  return (
    <Container>
      <h2>Buttons (solid)</h2>
      <div className="custom-component">
        <Button variant="solid">solid primary</Button>
        <Button variant="solid" color="secondary">
          secondary
        </Button>
        <Button variant="solid" color="warn">
          danger
        </Button>
        <Button variant="solid" color="error">
          error
        </Button>
        <Button variant="solid" icon={FiPlus}>
          primary icon
        </Button>
        <Button variant="solid" color="secondary" icon={FiHome}>
          secondary icon
        </Button>
        <Button variant="solid" color="warn" icon={FiAlertTriangle}>
          danger icon
        </Button>
        <Button variant="solid" color="error" icon={FiAlertCircle}>
          error icon
        </Button>
      </div>
      <h2>Buttons (outline)</h2>
      <div className="custom-component">
        <Button variant="outline">outline primary</Button>
        <Button variant="outline" color="warn">
          danger
        </Button>
        <Button variant="outline" color="error">
          error
        </Button>
        <Button variant="outline" icon={FiPlus}>
          primary icon
        </Button>
        <Button variant="outline" color="warn" icon={FiAlertTriangle}>
          danger icon
        </Button>
        <Button variant="outline" color="error" icon={FiAlertCircle}>
          error icon
        </Button>
      </div>
      <h2>Input</h2>
      <div className="custom-component --input">
        <Input placeholder="Default input" />
        <Input placeholder="Default input" labelText="With label" />
        <Input
          type="password"
          placeholder="Default input"
          labelText="Type password"
        />
        <Input
          placeholder="Default input"
          labelText="Left icon"
          leftIcon={FiHome}
        />
        <Input
          placeholder="Default input"
          labelText="Right icon"
          rightIcon={FiHome}
        />
        <Input
          placeholder="Default input"
          labelText="Two sides"
          rightIcon={FiHome}
          leftIcon={FiHome}
        />
      </div>
    </Container>
  );
}

export default animatePresence(MyComponents, {
  animationType: "onlyFadeIn",
});
