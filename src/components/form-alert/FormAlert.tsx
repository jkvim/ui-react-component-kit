import * as React from 'react';
import { Alert } from '../alert';
import { Heading } from '../heading';
import { Link } from '../link';
import { scrollToElement } from '../../utils/scroll';

export interface FieldErrorProps {
  id: string;
  label: string | Function;
  msg: string;
  hasError: boolean;
}

export interface FormFieldsProps {
  id: string;
  formFields: FieldErrorProps[];
  title: string;
  isVisible: boolean;
}

export const scrollOnClick = (event, elementId) => {
  event.preventDefault();
  scrollToElement(elementId, 800, 60);
};

class FormAlert extends React.Component<FormFieldsProps, {}> {

  render() {
    const { id, formFields, isVisible, title } = this.props;

    const errorFields = formFields.filter((field) => {
      return field.hasError;
    });

    if (!isVisible || !errorFields.length) {
      return null;
    }

    return (
      <Alert
        id={id}
        type="danger"
        aria-live="assertive"
        aria-labelledby="formErrorsTitle"
        aria-describedby="formErrorsList"
      >
        <Heading level={4} id="formErrorsTitle">{title}</Heading>

        {this.props.children}

        <ul id="formErrorsList" className="ul">
          {
            errorFields.map(
              (item, index) => (
                <li key={index}>
                  <Link
                    id={`formErrors-${index}-error`}
                    title={(typeof item.label === 'string') ? item.label : item.label()}
                    url="#"
                    onClick={(event) => scrollOnClick(event, item.id)}
                  />
                  <span aria-hidden="true"> — </span>{item.msg}
                </li>
              )
            )
          }
        </ul>
      </Alert>
    );
  }
}

export default FormAlert;
