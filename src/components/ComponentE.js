import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'
// another way to use context in class component using this whith context type this is much cleaner way compere to componet f syntax.
 class ComponentE extends Component {

    static contextType = UserContext

    render() {
        return (
            <div>
                Component E context {this.context}
                <ComponentF/>
            </div>
        )
    }
}

// ComponentE.contextType = UserContext

export default ComponentE