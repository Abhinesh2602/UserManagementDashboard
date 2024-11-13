import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  // Generate array of page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  // Handle previous page
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Handle next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="mt-8 ml-6 mr-16 flex justify-center">
      <div className="flex flex-row gap-2">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="disabled:opacity-50"
        >
          <img
            src={leftArrow}
            alt="Previous"
            className="w-8 h-8 p-2 bg-white rounded-lg border-[#DCDDDF] border-2 flex justify-center items-center hover:border-custom-darkblue transition-colors"
          />
        </button>

        {getPageNumbers().map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`w-8 h-8 p-2 rounded-lg border-2 flex justify-center items-center transition-colors ${
              currentPage === number
                ? "bg-custom-darkblue text-white border-custom-darkblue"
                : "bg-white border-[#DCDDDF] hover:border-custom-darkblue"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="disabled:opacity-50"
        >
          <img
            src={rightArrow}
            alt="Next"
            className="w-8 h-8 p-2 bg-white rounded-lg border-[#DCDDDF] border-2 flex justify-center items-center hover:border-custom-darkblue transition-colors"
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
