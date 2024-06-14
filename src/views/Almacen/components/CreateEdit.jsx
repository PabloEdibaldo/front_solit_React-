import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'
const CreateEdit = ({ fields, onDataReceived, dataToEdit = {}, okOrNot }) => {

  const initialValues = fields.reduce((acc, field) => {
    if(field.type === "checkbox"){
      acc[field.name] = dataToEdit[field.name] || field.initialValue || false;  
    }else{
      acc[field.name] = dataToEdit[field.name] || field.initialValue || "";
    }
    
    return acc;
  }, {});

  const [values, setValues] = useState(initialValues);
  const [isChecked, setIsChecked] = useState(false);
  const [valor, setValor] = useState(null);
  useEffect(() => {
    setValues(initialValues);
  }, [dataToEdit]);

  console.log(values);
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: type === 'file' ? files[0] : value,
    }));
  };
  const handleSelectChange = (selectedOption, fieldName) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: selectedOption ? selectedOption.value : '',
    }));
  };

  const handleCheckChange = (event) => {
    if(event.target.checked){
      setIsChecked(true);
    }else{
      setIsChecked(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onDataReceived(values);
    okOrNot(true);
  };

  const isFormEmpty = () => {
    return Object.values(values).some(value => value === '');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group row">
        {fields.map((field) => (
          <div key={field.name} className="">
            {field.type === 'select' ? (

              <div class="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor={field.name}>{field.label}</label>
                <div class="col-sm-10">
                <Select
                    className=""
                    id={field.name}
                    value={field.options.find((option) => option.value === values[field.name])}
                    onChange={(selectedOption) => handleSelectChange(selectedOption, field.name)}
                    options={field.options.map((opcion) => ({
                      value: opcion.value,
                      label: opcion.label,
                    }))}
                    name={field.name}
                  />
                </div>
              </div>

            ) : field.type === 'file' ? (
              <div className="">
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  type="file"
                  className="form-control-file"
                  id={field.name}
                  name={field.name}
                  onChange={handleChange}
                  required={field.isRequired || false}
                />
              </div>
            ) : field.type === 'checkbox' ? (
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id={field.name}
                  name={field.name }
                  value={!isChecked || false}
                  checked={isChecked} // Utiliza el estado para determinar si el checkbox está marcado o no
                  onChange={(event) => {
                    handleCheckChange(event);
                    handleChange(event);
                  }}
                  disabled={field.isDisabled || false}
                  required={field.isRequired || false}
                />

                <label class="form-check-label" for="flexSwitchCheckDefault">{field.label}</label>
              </div>
            ) : (
              <div >
                <div class="form-group row">
                  <label className="col-sm-2 col-form-label" htmlFor={field.name}>{field.label}</label>
                  <div class="col-sm-10">
                    <input
                      type={field.type}
                      className="form-control"
                      id={field.name}
                      name={field.name}
                      value={values[field.name]}
                      onChange={handleChange}
                      disabled={field.isDisabled || false}
                      required={field.isRequired || false}
                      placeholder={field.placeholder}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          {dataToEdit.id ? 'Actualizar' : 'Crear'}
        </button>
      </div>
    </form>
  );
};

CreateEdit.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      isRequired: PropTypes.bool,
      isDisabled: PropTypes.bool,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          nombre: PropTypes.string,
        })
      ),
      initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  onDataReceived: PropTypes.func.isRequired,
  dataToEdit: PropTypes.object,
  okOrNot: PropTypes.func.isRequired,
};

export default CreateEdit;