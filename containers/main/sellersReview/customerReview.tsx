'use client';

import FeedbackCard from '@/components/feedbackCard';
import { customerData } from '@/constants/main/homepage';
import PaginationWrapper from '@/components/wrappers/paginationWrapper';
import { useEffect, useState } from 'react';

const CustomerReview = () => {
  const contentWithCustomerReviews = customerData.filter(
    (customer) => 'printInkzFeedback' in customer,
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [contentsPerPage, setContentsPerPage] = useState<number>(1);

  const totalContents = contentWithCustomerReviews.length;

  const currentReviews = contentWithCustomerReviews.slice(
    (currentPage - 1) * contentsPerPage,
    currentPage * contentsPerPage,
  );
  //Function to update contentsPerPage based on screen size
  const updateContentsPerPage = () => {
    if (window.innerWidth >= 1200) {
      setContentsPerPage(3); // Large screens (Desktop)
    } else if (window.innerWidth >= 900) {
      setContentsPerPage(2); // Medium screens (Tablet)
    } else {
      setContentsPerPage(1); // Small screens (Mobile)
    }
  };

  useEffect(() => {
    // Set the contentsPerPage based on the initial screen size
    updateContentsPerPage();

    // Add event listener to listen for screen resizing
    window.addEventListener('resize', updateContentsPerPage);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateContentsPerPage);
    };
  }, []);

  return (
    <div className="p-10" id="sellers-review-content">
      <PaginationWrapper
        contentsPerPage={contentsPerPage}
        totalContents={totalContents}
        handleCurrentPage={setCurrentPage}
        activePage={currentPage}
      >
        {currentReviews.map((data, index) => (
          <FeedbackCard key={`customer_feedback_${index}`} feedback={data} />
        ))}
      </PaginationWrapper>
    </div>
  );
};

export default CustomerReview;
