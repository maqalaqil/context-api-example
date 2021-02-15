import React, { Component ,useContext  } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../theme/AppTheme";

class Main extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    ([theme]) => {
                        const currentTheme = AppTheme[this.context[0]];

                        return(
                            <main style = {{
                                padding: "1rem",
                                backgroundColor: `${currentTheme.backgroundColor}`,
                                color: `${currentTheme.textColor}`,
                            
                            }}>
                                <h1>Heading 1</h1>
                                <p>This is a paragraph</p>
                                <button> This is a button</button>
                            </main>
                        )
                       
                    }
                }
            </ThemeContext.Consumer>
        );
    }

}
export default Main;
