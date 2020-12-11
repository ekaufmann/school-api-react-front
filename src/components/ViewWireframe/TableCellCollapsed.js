import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useState } from "react";
import { _fillHeadersFromObj } from '../../utils/utilFunctions';

const TableCellColapsed = ({ cell }) => {

  const [open, setOpen] = useState(false);

  const _fillData = (obj) => {
    let arr = [];
    let active;

    for (let prop in obj) {
      if (prop === "active") {
        active = (obj[prop] === true ? "Ativo" : "Inativo");
      } else {
        active = obj[prop];
      }
      arr = [...arr, active];
    }

    return arr;
  }

  const _handleOnClick = (event) => {
    setOpen(!open);
  }

  return (
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} >
      <IconButton size="small" onClick={_handleOnClick}>
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
      <Collapse id="collapse" in={open} timeout="auto" unmountOnExit>
        <Box margin={1} component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                {_fillHeadersFromObj(!Array.isArray(cell) ? cell : cell[0]).map((prop, index) => {
                  return (
                    <TableCell key={index}>{(prop === null || prop.nome === undefined ? prop : prop.nome)}</TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(cell) ?
                cell.map((row, index) => {
                  return (
                    <TableRow key={index}>
                      {_fillData(row).map((data, index) => {
                        return (
                          <TableCell key={index}>{data}</TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
                :
                <TableRow>
                  {_fillData(cell).map((data, index) => {
                    return (
                      <TableCell key={index}>{data}</TableCell>
                    );
                  })}
                </TableRow>
              }
            </TableBody>
          </Table>
        </Box>
      </Collapse>
    </TableCell>
  );
};

export default TableCellColapsed;