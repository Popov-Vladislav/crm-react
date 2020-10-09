import React from 'react'
import './Modal.css'
import AddItem from '../AddItem/AddItem';

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button
                    className={this.props.className}
                    onClick={() => this.setState({ isOpen: true })}>{this.props.title}</button>
                {this.state.isOpen && (
                    <div className='modal'>
                        <div className='modal-body'>
                            <h2>Управление задачей</h2>
                            <AddItem
                                client={this.props.client}
                                closeModal={() => this.setState({ isOpen: false })} />
                            <button className='modal-btn'
                                onClick={() => this.setState({ isOpen: false })}>&times;</button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}