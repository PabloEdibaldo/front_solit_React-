import { useState } from "react";

export default function useForm(initialValues) {
  
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    
    const { name, value, type, files } = event.target; // Accede a 'type' y 'files' para manejar inputs de tipo 'file'
    const newValue = type === 'file' ? files[0] : value; // Si es un input de tipo 'file', asigna el archivo, de lo contrario, asigna el valor normal
    setValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  };
  const handleSubmit = (event, onSubmitCallback) => {
    event.preventDefault();
   
    if (onSubmitCallback) {
      onSubmitCallback(values);
    }
  };
  const updateFormValues = (newValues) => {
    setValues(newValues);
  };

  return {
    values,
    handleChange,
    handleSubmit,
    updateFormValues
  };
}