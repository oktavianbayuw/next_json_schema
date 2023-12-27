import React, { useState } from 'react';
import Header from './Header';

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <><section className='inner-page'>
      <div className='row'>
        <div className='card'>
        <div className="container m-5">
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">FAQ</li>
            </ol>
            </nav>
            <h2>FAQ</h2>
          </div>
          <div className='card-body m-5'>
            <div className="accordion" id="accordionExample">
              {faqData.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`head${index}`}>
                    <button
                      className={`accordion-button ${openAccordion}`}
                      type="button"
                      onClick={() => handleAccordionToggle(index)}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${openAccordion === index ? 'show' : ''}`}
                    aria-labelledby={`head${index}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {item.contentList && (
                        <ul>
                          {item.contentList.map((content, contentIndex, json) => (
                            <li key={contentIndex}>
                              <p>
                                <b>{content}</b>
                                {item.paragraf && item.paragraf[contentIndex] && (
                                  <span> {item.paragraf[contentIndex]}</span>
                                )}
                              </p>
                            </li>
                          ))}
                        </ul>
                      )}
                      <p>Referensi : <a href={item.link}><u>{item.link}</u></a></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section></>
  )
}
const faqData = [
  {
    title: 'List Keyword Json Schema',
    contentList: ['Required Keyword', 'Type Keyword','Enum Keyword','Minimum And Maximum Keywords','ExclusiveMinimum And ExclusiveMaximum Keywords','Multipleof Keyword','Validation Keywords For Strings Pattern Keyword','Length Keywords','Format Keywords','Validation Keywords For Arrays','Items Keyword','Additional Items Keyword','Min And Max Items Keywords','Unique Items Keyword','Validation Keywords For Objects Properties Keyword','Additional Properties Keyword','Min And Max Properties Keywords','Dependencies Keyword','JSON'],
    paragraf: [
      'Which properties in an object must exist is specified using the required keyword. Each string in the array accepts the name of a necessary property. A required property must be present for an object to pass validation. For illustration, the following schema demands that an object have the name and age properties: ',
      'The type of a JSON value is specified using the type keyword. It can accept a single string or an array of strings, each of which is a legitimate JSON type. Validation fails if a value does not fit the designated type. The following schema, for instance, demands that a value be a string:',
      'The ‘enum’ keyword specifies a list of potential values for a property. Each value in the JSON array must match a valid value for the property. If a value does not match any predefined values, it is not considered valid. A value must fall under one of the three categories in the following schema, for instance:',
      'The minimum and maximum values assigned to a property are specified using the minimum and maximum keywords. They ask for a number that represents the lowest or highest value permitted. The value fails validation if it falls below the minimum or exceeds the maximum. For instance, the following schema demands that a value fall within the range of 18 and 100:',
      'To remove the minimum and maximum values from the permitted range, use the exclusiveMinimum and exclusiveMaximum keywords. The following schema, for instance, stipulates that a value must be greater than 0 and less than 100.',
      'Specify a multiple that a numeric value must be divisible using the multipleOf keyword. It requires a multiple of a number. A value fails validation if it cannot be divided by the required multiple.',
      'When a string value must match a regular expression pattern, the pattern keyword specifies that requirement. The pattern for the regular expression is a string that is required. A string fails validation if it does not match the pattern.',
      'The minimum and maximum lengths of string can be specified using the minLength and maxLength keywords, respectively. Request a non-negative integer that represents either the smallest or largest permitted length. A string fails validation if it is either shorter than the minLength or longer than the maxLength.',
      'A string’s required format can be specified using the format keyword. The format is a string that is required. ',
      'Arrays are a frequent data type in JSON, and validation is frequently needed to make sure they abide by established guidelines and restrictions. For arrays, JSON Schema offers a number of validation keywords that use to impose these restrictions. Look at a few of the most popular JSON Schema array validation keywords.',
      'If you want to specify a validation schema for every item in an array, you can use the “items” keyword. This keyword accepts either a single schema or a collection of schemas. If a single schema provides, all items in the array are subject to it. On the other hand, if an array of schemas is provided, each schema is applied to the corresponding item in the array.',
      'The validation schema for additional items in an array is specified using the additionalItems keyword. When there are additional items in the array for which there is no corresponding schema, and the “items” keyword is an array of schemas. All additional items in the array are subject to the schema specified by the additionalItems keyword.For instance, the following schema mandates that a value be an array with an integer as the first item and a string as the second item. ',
      'The minimum and maximum number of items in an array is specified, using the minItems and maxItems keywords. The minimum or maximum number of items they accept is a non-negative integer. An array fails validation if the number of items is less than the minItems or greater than the maxItems.',
      'To specify whether each item in an array must be unique, use the uniqueItems keyword. It accepts a boolean result. If true, each element of the array needs to be distinct. Items repeat if set to false or excluded.',
      'For each property of an object, a schema using the properties keyword. It requires the object whose keys are the names of the properties and whose values are schemas outlining those properties.',
      'The validation schema for additional properties in an object is specified using the additionalProperties keyword. It is used when the properties keyword does not specify a schema for every other object’s properties. All additional properties in the object will have the schema specified by the additionalProperties keyword applied to them.',
      'The minimum and maximum number of properties in an object is specified particularly by the minProperties and maxProperties keywords. The minimum or maximum number of properties they can accept is a non-negative integer. An object fails validation if it has fewer properties than the minProperties or more properties than the maxProperties.',
      'Dependencies between object properties are specified using the dependencies keyword. It requires an object with schemas or arrays of property names as values and property names as keys. The corresponding schema or array of property names must be present if the object’s key property is present.',
    ],
    link: ['https://www.qatouch.com/blog/validating-json-schema/']
  },
  {
    title: 'The data structures and data types ',
    contentList: ['Array','Object','Object properties','Validation keywords','Schema keywords','Documentation'],
    paragraf: ['A JSON Schema definition is close to the actual JSON document itself.','The property “type” describes in this case that we expect the JSON document to be an array.','we can define the object properties and their type:','Now comes the interesting part: we can use validation keywords to define that the properties “name” and “age” are required (properties are optional by default), that age must be a positive number, and that the email must contain an actual valid email address. Note that we already used the most common validation keyword before, that is “type”. '],
    link: ['https://jsoneditoronline.org/indepth/validate/json-schema-validator/']
  },
  {
    title: 'How To Generate Json Schema Online',
    link: 'https://www.liquid-technologies.com/online-json-to-schema-converter'
  }
];

export default Faq;