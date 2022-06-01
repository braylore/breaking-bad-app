import Pagination from '@mui/material/Pagination';
import { ChangeEvent, FC } from 'react';

interface IPaginationProps {
  totalPage: number;
  currentPage: number;
  changePage: (e: ChangeEvent<unknown>, page: number) => void;
}

const PaginationRounded: FC<IPaginationProps> = ({ changePage, currentPage, totalPage }) => {
  return (
    <Pagination
      sx={{
        mt: '10px'
      }}
      page={currentPage}
      count={totalPage}
      onChange={changePage}
      variant="outlined"
      shape="rounded"
    />
  );
};

export default PaginationRounded;
