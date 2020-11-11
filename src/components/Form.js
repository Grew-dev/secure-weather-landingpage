import React from 'react'

const Form = () => {
    return (
        <div>
            <div>
                <form action="https://formspree.io/f/xyybjoka" method="POST">
                    <div className="form-list">
                        
                        <input className="input input-style" type="email" name="email" placeholder="email"/>
                        
                        <button type="submit" className="button is-link">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
