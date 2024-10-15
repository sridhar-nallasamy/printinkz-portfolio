'use client';

import FeedbackCard from '@/components/feedbackCard';
import { customerData } from '@/constants/main/homepage';
import ScrollableWrapper from '@/components/wrappers/scrollableWrapper';

const CustomerReview = () => {
  const contentWithCustomerReviews = customerData.filter(
    (customer) => 'printInkzFeedback' in customer,
  );

  return (
    <ScrollableWrapper id="sellers-review-content">
      {contentWithCustomerReviews.map((data, index) => (
        <FeedbackCard key={`customer_feedback_${index}`} feedback={data} />
      ))}
    </ScrollableWrapper>
  );
};

export default CustomerReview;
