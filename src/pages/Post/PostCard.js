import React, { useEffect, useState } from 'react';
import './PostCard.css'

const PostCard = ({ post }) => {
    const { title, content, author, createdAt } = post;
    const [formattedDate, setFormattedDate] = useState('');
    useEffect(() => {
        if (post.createdAt) {
            const date = post.createdAt / 1000;
            const dateInstance = new Date(date);
            const year = dateInstance.getFullYear();
            const month = dateInstance.getMonth() + 1
            const day = dateInstance.getDate()
            setFormattedDate(`${day}-${month}-${year}`)
        }
    }, [post])
    return (
        <div className='border w-72 m-4 p-4 rounded-md border-black-400'>
            <h3 className='text-xl font-bold'>{title}</h3>
            <div className='text-state-500 text-sm text-gray-700 flex justify-between py-2'>
                <p>Author Name: {author?.name}</p>
                <p>Date: {formattedDate}</p>
            </div>
            <p className='text-md'>{content}</p>
        </div>
    );
};

export default PostCard;