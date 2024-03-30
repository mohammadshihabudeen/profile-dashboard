import React from 'react';
import { useContext } from 'react';
import DataContext from '../data/dataContext';

const InputForm = () => {
    const { newUserDetails, formOnSubmit, setNewUserDetails } = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        formOnSubmit();
    };

    return (
        <div className="card text-white bg-white m-2">
            <form onSubmit={handleSubmit}>
                {newUserDetails.map(field => (
                    <div className="form-group row mx-2 mr-3 mt-3" key={field.id}>
                        <label htmlFor={field.label} className="col-md-3 col-form-label text-black h2">{field.label}</label>
                        <div className="col-md-9">
                            <input
                                type={field.label == "Email" ? "email" : "text"}
                                name={field.label}
                                id={field.label}
                                className="form-control"
                                placeholder={field.label}
                                value={field.value}
                                onChange={(e) => {
                                    setNewUserDetails((fields) => fields.map((inField) => {
                                        return inField.label === field.label ? { ...inField, value: e.target.value } : inField;
                                    }));
                                }}
                                required
                            />
                        </div>
                    </div>
                ))}
                <button
                    type="submit"
                    className="btn btn-primary m-3 mt-4 text-white"
                    style={{ width: 130 }}
                >Save Changes</button>
            </form>
        </div>
    );
};

export default InputForm;
