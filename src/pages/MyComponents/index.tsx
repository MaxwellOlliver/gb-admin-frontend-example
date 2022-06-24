import {Fragment, useState} from 'react';
import {
  FiAlertCircle,
  FiAlertTriangle,
  FiChevronDown,
  FiEdit,
  FiHome,
  FiPlus,
} from 'react-icons/fi';
import Button from '@/@core/components/Button';
import Input from '@/@core/components/Input';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@/@core/components/Table';
import animatePresence from '@/components/AnimatePresence';
import {classNames} from '@/utils/classNames';
import {Container} from './styles';

function MyComponents() {
  const [accordionIsOpen, setAccordionIsOpen] = useState<Record<any, boolean>>(
    {},
  );

  const toggleAccordion = (id: number) => {
    if (accordionIsOpen[id]) {
      setAccordionIsOpen((state) => ({...state, [id]: false}));
    } else {
      setAccordionIsOpen((state) => ({...state, [id]: true}));
    }
  };

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
      <h2>Table primary</h2>
      <div className="custom-component">
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Coluna 1</Th>
                <Th>Coluna 2</Th>
                <Th>Coluna 3</Th>
              </Tr>
            </Thead>
            <Tbody>
              {new Array(5).fill('').map((_, index) => (
                <Tr key={index}>
                  <Td>motorista</Td>
                  <Td>motorista</Td>
                  <Td>Lorem Ipsum</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <h2>Table secondary (with edit accordion)</h2>
      <div className="custom-component">
        <TableContainer>
          <Table secondary>
            <Thead>
              <Tr>
                <Th>Coluna 1</Th>
                <Th>Coluna 2</Th>
                <Th>Coluna 3</Th>
                <Th actions>ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {new Array(5).fill('').map((_, index) => (
                <Fragment key={index}>
                  <Tr isActive={accordionIsOpen[index]}>
                    <Td>motorista</Td>
                    <Td>motorista</Td>
                    <Td>Lorem Ipsum</Td>
                    <Td actions>
                      <FiChevronDown
                        size={20}
                        onClick={() => toggleAccordion(index)}
                        className={classNames('table__edit-toggle', {
                          '--active': accordionIsOpen[index],
                        })}
                      />
                    </Td>
                  </Tr>
                  <Tr
                    columnCount={4}
                    accordionRow
                    accordionIsOpen={accordionIsOpen[index]}
                  >
                    <Input
                      placeholder="Default input"
                      labelText="Left icon"
                      leftIcon={FiEdit}
                    />
                  </Tr>
                </Fragment>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}

export default animatePresence(MyComponents, {
  animationType: 'onlyFadeIn',
});
