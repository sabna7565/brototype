import './DataTable.scss'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);
      
      function createData(name, starting_month, terminated, placed, total) {
        return { name, starting_month, terminated, placed, total};
      }
      
const rows = [
    createData('Batch 18', 'September 2021', 6, 24, 90),
    createData('Batch 19', 'October 2021', 9, 37, 90),
    createData('Batch 20', 'November 2021', 16, 24, 100),
    createData('Batch 21', 'December 2021', 3, 27, 85),
    createData('Batch 22', 'January 2022', 16, 1, 95),
    ];

    const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
      });

const DataTable = () => {
    const classes = useStyles();

return (
<TableContainer component={Paper} className="table">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='left' className='tableCell'>Batch</StyledTableCell>
            <StyledTableCell align='center' className='tableCell' >Starting Month</StyledTableCell>
            <StyledTableCell align='center' className='tableCell' >Terminated&nbsp;(.)</StyledTableCell>
            <StyledTableCell align='center' className='tableCell' >Placed</StyledTableCell>
            <StyledTableCell align='center' className='tableCell' >Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
        {/* unique key.so give id instead of name */}
              <StyledTableCell align='left' className='tableCell'>{row.name}</StyledTableCell>
              <StyledTableCell align='center' className='tableCell'>{row.starting_month}</StyledTableCell>
              <StyledTableCell align='center' className='tableCell'>{row.terminated}</StyledTableCell>
              <StyledTableCell align='center' className='tableCell'>{row.placed}</StyledTableCell>
              <StyledTableCell align='center' className='tableCell'>{row.total}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default DataTable