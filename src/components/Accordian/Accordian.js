import React from 'react';
import 'tw-elements';

const Accordian = () => {
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingOne">
                        <button className="
                                    accordion-button
                                    relative
                                    flex
                                    items-center
                                    w-full
                                    py-4
                                    px-5
                                    text-base text-gray-800 text-left
                                    bg-white
                                    border-0
                                    rounded-none
                                    transition
                                    focus:outline-none
                                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            What is Context API ?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            <strong>Context API</strong> enables us to pass data to a multi level child component without props drilling. In such way we are no longer required to expose data to every component in the tree. Rather we can directly access data in the multi level child component which was provided by the multi level parent component. We need to use <code>createContext()</code> and <code>useContext()</code> to pass and receive the data we want. With this method we can pass any type of data or function to the targeted child component.
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingTwo">
                        <button className="
                                    accordion-button
                                    collapsed
                                    relative
                                    flex
                                    items-center
                                    w-full
                                    py-4
                                    px-5
                                    text-base text-gray-800 text-left
                                    bg-white
                                    border-0
                                    rounded-none
                                    transition
                                    focus:outline-none
                                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            What is Semantic Tag?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            <strong>Semantic Tag</strong> is a type of HTML tag that is meaningful and understandable to both the browser and the developer. It provides additional information with the tag which aids in communication. Moreover, these Semantic tags are well communicated with the search engines which result in appearing it in the search queries. Example of Semantic tags are: {
                                <ul className='text-green-500 font-bold border py-1 mt-2'>
                                    <li><code>&lt;abbr&gt;</code></li>
                                    <li><code>&lt;acronym&gt;</code></li>
                                    <li><code>&lt;blockquote&gt;</code></li>
                                    <li><code>&lt;address&gt;</code></li>
                                    <li><code>&lt;cite&gt;</code></li>
                                    <li><code>&lt;span&gt;</code></li>
                                    <li><code>&lt;strong&gt;</code></li>
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordian;