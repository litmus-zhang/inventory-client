import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";

import React, { useCallback, useEffect, useMemo } from "react";
import ModalComponent from "./Modal";
import axios from "axios";

export const SingleRow = (item) => {
  const [editMode, setEditMode] = React.useState(false);
  const [deleteMode, setDeleteMode] = React.useState(false);
  const { id, name, category, quantity } = item;
  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{name} </Td>
      <Td>{category}</Td>
      <Td isNumeric>{quantity}</Td>
      <Td>
        <HStack>
          <Button
            onClick={() => setEditMode(!editMode)}
            colorScheme="blue"
            size="sm"
          >
            Edit
          </Button>
          <Button
            onClick={() => setDeleteMode(!deleteMode)}
            colorScheme="red"
            size="sm"
          >
            Delete
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};

const TableComponent = () => {
  const [allItems, setAllItems] = React.useState([]);

  const getAllItems = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/items");
    setAllItems(response.data);
  };

  // const allItem = useCallback(() => {
  //   getAllItems();
  // }, [allItems]);
  useEffect(() => {
    getAllItems();
  }, [allItems]);
  // console.log(values, "values");
  console.log(allItems, "allItems");

  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Catgory</Th>
              <Th isNumeric>Quantity</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allItems.length > 0 ? (
              allItems.map((item) => <SingleRow {...item} />)
            ) : (
              <Tr>
                <Td colSpan="5">No items found</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
      {/* <ModalComponent modalTitle={"Add a New Item"} /> */}
    </div>
  );
};

export default TableComponent;
