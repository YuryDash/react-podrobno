import React, {useState} from 'react';

import {Rating, RatingValueType} from './Rating';


export default {
  title: 'ExampleRating',
  component: Rating,
}


export const ExampleRating = () => <Rating value={3} changeStatus={x=>x} />;

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(5)
  return <Rating value={rating} changeStatus={setRating} />
      }