import { useState, useEffect } from "react";

export default function useApiRequest(url, method, body, id, reloadCounter, archivo) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;

        if (method === "GET" || method === "DELETE") {
          const urlWithId = method === "GET" ? url : `${url}${id}/`;
          response = await fetch(urlWithId, {
            method,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });

        } else if (method === "PUT" || method === "POST") {
          const finalUrl = method === "PUT" ? `${url}${id}/` : url;
          response = await fetch(finalUrl, {
            method,
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
             },
            body: JSON.stringify(body),
          });

        } else if (method === "GET1") {
          const urlWithId = `${url}${id}/`;
          response = await fetch(urlWithId, { method: "GET" });

        } else if (method === "POST1" && archivo === true) {
          response = await sendFormDataRequest(url, body, token);
        }

        if (!response.ok) {
          setError(response);
          //throw new Error(`Failed with status ${response.json.name}`); 
        }
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
      } catch (error) {
        handleError(error);
      }
    };
    fetchData();
  }, [method, id, body, reloadCounter, archivo]);

  const sendFormDataRequest = async (url, body, token) => {
    const formData = new FormData();
    formData.append('pdf_file', body);
    return await fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  };
  const handleError = (error) => {
    setError(error.message || '');
    setLoading(false);
  };
  return { data, loading, error };
}

