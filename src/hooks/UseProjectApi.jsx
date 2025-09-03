import { useEffect, useState } from 'react';

const UseProjectApi = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(projects);


    useEffect(() => {
        fetch('/projects.json') // ✅ must be inside `public` folder
            .then(response => response.json())
            .then(json => {
                setProjects(json);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching projects:", err);
                setLoading(false);
            });
    }, []);

    return [projects, loading];
};

export default UseProjectApi;
