import React, { useEffect, useState } from 'react';

const UseBlogApi = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    
    console.log('/blogs',blogs)

    useEffect(() => {
        
        fetch('blogs.json')
            .then(response => response.json())
            .then(json => {
                setBlogs(json);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching projects:", err);
                setLoading(false);
            });
    }, []);

    return [blogs, loading];
};

export default UseBlogApi;