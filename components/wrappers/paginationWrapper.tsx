import { paginationWrapperProps } from '@/types/components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const PaginationWrapper: React.FC<paginationWrapperProps> = ({
  children,
  totalContents,
  handleCurrentPage,
  activePage,
  contentsPerPage,
}) => {
  const totalPages = Math.ceil(totalContents / contentsPerPage);

  // Handlers for next and previous buttons
  function handleNavigation(handlingIndex: number) {
    handleCurrentPage(
      (prevIndex) =>
        (prevIndex + handlingIndex + totalContents) % totalContents,
    );
  }

  // Dot pagination handler
  const handlePageClick = (page: number) => {
    handleCurrentPage(page);
  };

  return (
    <>
      {/* contents Section */}
      {children}

      {/* Pagination Section */}
      <div className="flex items-center justify-center mt-4 space-x-5">
        <IconButton
          disabled={activePage === 1}
          onClick={() => handleNavigation(-1)}
          className={`hover:shadow-md hover:shadow-gray-800 w-10 hover:cursor-pointer font-extrabold text-white rounded-full ${
            activePage === 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-[#00774D] hover:bg-[#416f5f]'
          }`}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* Dot pagination */}
        <div className="flex space-x-3">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`w-3 h-3 rounded-full ${
                activePage === page ? 'bg-[#00774D]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <IconButton
          disabled={activePage === totalPages}
          onClick={() => handleNavigation(1)}
          className={`bg-[#00774D] hover:bg-[#416f5f] hover:shadow-md hover:shadow-gray-800 w-10 hover:cursor-pointer font-extrabold text-white rounded-full ${
            activePage === totalPages
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-[#00774D] hover:bg-[#416f5f]'
          }`}
        >
          <ChevronRightIcon />
        </IconButton>
      </div>
    </>
  );
};

export default PaginationWrapper;
