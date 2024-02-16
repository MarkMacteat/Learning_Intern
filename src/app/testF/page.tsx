'use client'

import {Component} from 'react'

interface Props {
    door: string
}



class HomePage extends Component {

    constructor(props: Props) {
        super(props)

        this.state = {
            text: 'Learning React'
        }
    }

    render() {
        return (
            <div>Hello world {this.state.text}</div>
        )
    }
}

export default HomePage